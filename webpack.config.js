const path = require ("path");

module.exports = {
    // The main file for our JS
    entry: "./src/index.js",
    // The output files
    output: {
        // Where we want to put our  output files
        path:  path.resolve(__dirname, "dist"),

        //The name for our files
        filename: "bundle.js"
    }
};