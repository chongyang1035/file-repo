// webpack.config.js

const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    mode: 'development',
    entry: './src/js/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js'
    },
    resolveloader:{
        modules: ['node_modules','./loader']
    },
    module: {
        rules: [
            {
                test: /.js$/,
                use:[
                    {loader:'babel-loader'},
                    {
                        loader:'sync',
                        options:{
                            showCopyright:true
                        }
                    }
                ]
            },
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: 'index.html',
            inject: 'body',           //script标签的放置
            title: 'webpack5自定义loader',
            // minify: {                       //html压缩
            //     removeComments: true,       //移除注释
            //     collapseWhitespace: true    //移除空格
            // }
        })
    ]
}
