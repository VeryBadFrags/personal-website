const fs = require("fs");

const wrapperPath = "build/wrapper.html";
const inputContentPath = "build/content.html";
const contentTag = "<!-- Content -->";

const outputPath = "build/bundled.html";

// Get Wrapper
let wrapperHtml = fs.readFileSync(wrapperPath).toString();

let contentHtml = fs.readFileSync(inputContentPath).toString();

wrapperHtml = wrapperHtml.replace(contentTag, contentHtml);

fs.writeFile(outputPath, wrapperHtml, function (err) {
    if (err) return console.log(err);
    console.log(`Bundled site into ${outputPath}`);
});
