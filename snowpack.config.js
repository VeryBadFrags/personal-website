// Snowpack Configuration File
// See all supported options: https://www.snowpack.dev/reference/configuration

/** @type {import("snowpack").SnowpackUserConfig } */
module.exports = {
  mount: {
    "src": { url: "/" },
    "assets": { url: "/", static: true },
  },
  plugins: [
    ['snowpack-plugin-markdown-html', {
      render({ frontmatter, html }) {
        return `<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml" lang="en" xml:lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=yes" />
  <title>${frontmatter.title || ''}</title>
  <meta property="og:site_name" content="Loic Vourch" />
  <link rel="stylesheet" href="${frontmatter.output?.html_document?.css}">
</head>
<body>
  <div class="container">
  ${html}
  </div>
  <script src="main.js"></script>
</body>
</html>`;
      },
    }
    ],
    ["@snowpack/plugin-sass", {
      style: "compressed",
      sourceMap: false,
    }],
    ["@snowpack/plugin-optimize"],
  ],
};
