/**
 * 公共部分
 */
const { resolve, join } = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const APP_DIR = resolve(__dirname, '../src');
const OUTPUT_DIR = resolve(__dirname, '../dist');
module.exports = {
    target: ['web', 'es5'],
    entry: {
        main: [APP_DIR + '/index.js',]
    },
    output: {
        path: OUTPUT_DIR,
        publicPath: '/',
        filename: 'static/js/[name].[contenthash:8].js',
        chunkFilename: 'static/js/[name].[contenthash:8].js',
        clean: true,
    },
    module: {
        rules: [
            {
                test: /\.(ts|js)x?$/,
                use: [
                    //ts-loader想要兼容ie需要加入Array.includes Promise等所有不兼容的polyfill
                    // {
                    //     loader: 'ts-loader',
                    //     options: {
                    //         transpileOnly: true
                    //     }
                    // }
                    //使用babel-loader编译
                    {
                        loader: 'babel-loader'
                    }
                ]
            },
            {
                test: /\.m?js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env'],
                        plugins: ['@babel/plugin-transform-runtime']
                    }
                }
            }
        ]
    },
    //迁移到生产环境
    optimization: {
        runtimeChunk: {
            name: entrypoint => `runtime-${entrypoint.name}`,
        }
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'webpack5+react生态工程',
            publicPath: '/',
            template: resolve(__dirname, '../', 'src/document.ejs'),
            filename: 'index.html'
        })
    ]
}