// Snowpack Configuration File
// See all supported options: https://www.snowpack.dev/reference/configuration

function getHTMLWrapper(frontmatter, html) {
  return `<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml" lang="en" xml:lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=yes" />
  <title>${frontmatter.title || ""}</title>
  <meta property="og:site_name" content="Loic Vourch" />
  <link rel="icon" type="image/svg+xml" href="favicon.svg">
  <link rel="alternate icon" href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>👨‍💻</text></svg>" />
  <link rel="stylesheet" href="${frontmatter.output.html_document.css}">
</head>
<body>
  <div class="container">
  ${html}
  </div>
  <script src="main.js"></script>
  <script src="https://unpkg.com/ionicons@5.4.0/dist/ionicons.js"></script>
</body>
</html>`;
}

/** @type {import("snowpack").SnowpackUserConfig } */
module.exports = {
  mount: {
    src: { url: "/" },
    assets: { url: "/", static: true },
  },
  plugins: [
    [
      "snowpack-plugin-markdown-html",
      {
        render({ frontmatter, html }) {
          return getHTMLWrapper(frontmatter, html);
        },
      },
    ],
    [
      "@snowpack/plugin-sass",
      {
        style: "compressed",
        sourceMap: false,
      },
    ],
    ["@snowpack/plugin-optimize"],
  ],
};
