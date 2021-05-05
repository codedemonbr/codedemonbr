const { readFile } = require("fs");
const { join } = require("path");
readFile(join(__dirname, "personalInfo.json"), "utf8", (err, content) => {
    if (err) throw err;
    console.log(content);
});
