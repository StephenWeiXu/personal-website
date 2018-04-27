const path = require('path');
const WebpackShellPlugin = require("webpack-shell-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const htmlWebpackPlugin = new HtmlWebpackPlugin({
    template: path.join(__dirname, "src/index.html"),
    filename: "./index.html"
});
module.exports = {
    entry: path.join(__dirname, "src/index.js"),
    output: {
	   path: path.join(__dirname, "build/"),
	   filename: "bundle.js"
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                use: "babel-loader",
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"]
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: [
                    "file-loader?name=/images/[name].[ext]"
                ]
            }
        ]
    },
    plugins: [
        htmlWebpackPlugin,
        new WebpackShellPlugin({
            onBuildStart:[
                "echo \033[1;33mMoving images into build/\033[0m",
                "cp -R images build/",
            ]
        })
    ],
    resolve: {
        extensions: [".js", ".jsx"]
    },
    devServer: {
        port: 3000
    }
};
