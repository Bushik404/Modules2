const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports= {
    entry:'./src/index.js',
    output:{
        path:path.resolve(__dirname,'dist'),
        filename:'./app.bundle.js',
    },
    module:{
        rules:[
            {
                test:/\.js$/,
                exclude:/node_modules/,
                loader: 'babel-loader'
            },
            {
                test: /\.css$/,
                use: [
                    MiniCssExtractPlugin.loader, 
                    'css-loader'
                ]
            }
        ]
    },
    devServer:{
        static:{
            directory: path.join(__dirname, 'dist/main.html')
        }
    },
    plugins:[
        new HtmlWebpackPlugin({
            template:'./src/index.html',
            filename:'main.html'
        }),
        new MiniCssExtractPlugin({

        })
    ]
};