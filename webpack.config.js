const path = require("path");
const webpack = require('webpack');

module.exports = {
    // The main file for our JS
    entry: "./src/index.js",
    
    // The output files
    output: {
        // Where we want to put our  output files
        path: path.resolve(__dirname, "/dist/assets"),

        //The name for our files
        filename: "bundle.js"
    },
    devServer: {
        contentBase: './dist',
        hot: true
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ],
    module: {
        rules: [{
            test: /\.css$/,
            use: [
                'style-loader',
                'css-loader'
            ]
        }]
    }

};

// yarn run build   or    yarn run start