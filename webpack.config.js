const path = require("path");
module.exports = {
    entry : "./app/main",
    output : {
        path : path.resolve(__dirname,"dist"),
        filename : "bundle.js"
    },
    watch : true,
    module :{
        rules :[
            {
                test : /\.jsx?$/,
                include : [
                    path.resolve(__dirname,"app")
                ],
                exclude : [
                    path.resolve(__dirname,"app/node_modules")
                ],
                loader :"babel-loader",
                options : {
                    presets :["env","react"]
                }
            }
        ]
    }
}