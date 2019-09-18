const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
module.exports = {
    mode: "development",//production
    entry:{
        index:'./src/index.js'
    },
    output:{
        path:path.resolve(__dirname,'dist'),
        filename:'[name].js'
    },
    module: {
        rules: [
          {
            test: /\.css$/,
            use: ExtractTextPlugin.extract({
              fallback: "style-loader",
              use: "css-loader"
            })
          },{
              test:/\.(jpg|png|gif)/,
              use:{
                  loader:"url-loader",
                  options:{
                      limit:500,
                      outputPath:'images/'
                  }
              }
          },{
            test: /\.(htm|html)$/i,
                loader: ["html-withimg-loader"]
          },
          ,{
                test:/\.(scss|sass)$/,
                use:["style-loader","css-loader","sass-loader"]
            }
        //   {
        //     test: /\.(scss|sass)$/,
        //     use: ExtractTextPlugin.extract({
        //         fallback: "style-loader",
        //         use: ["css-loader", "sass-loader"]
        //     })
        //   }
        ]
      },
    plugins:[
        new HtmlWebpackPlugin({
            minify:{
                removeAttributeQuotes:true
            },
            hash:true,
            template:'./src/index.html'
        }),
        new ExtractTextPlugin("styles.css")
    ],
    devServer:{
        contentBase:path.resolve(__dirname,'dist'), //根目录
        host:'localhost' 
    }
}