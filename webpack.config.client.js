const path = require('path')
const webpack = require('webpack')
const CURRENT_WORKING_DIR = process.cwd()

const config = {
    name: "browser",
    mode: "development",
    devtool: 'eval-source-map',
    entry: [
        'webpack-hot-middleware/client?reload=true',
        path.join(CURRENT_WORKING_DIR, 'client/main.js')
    ],
    output: {
        path: path.join(CURRENT_WORKING_DIR , '/dist'),
        filename: 'bundle.js',
        publicPath: '/dist/'
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: [
                    'babel-loader'
                ]
            },
            {
                test: /\.(ttf|eot|svg|gif|jpg|png)(\?[\s\S]+)?$/,
                use: 'file-loader'
            }
        ]
    },
    plugins: [
            new webpack.HotModuleReplacementPlugin(),
            new webpack.NoEmitOnErrorsPlugin()
    ],
    resolve: {
        // HAPUS BAGIAN ALIAS INI SEPENUHNYA
        // alias: {
        //   'react-dom': '@hot-loader/react-dom'
        // }
        // PASTIKAN BARIS INI ADA:
        extensions: ['.js', '.jsx', '.json'],
        // PASTIKAN BARIS INI ADA UNTUK MEMBANTU RESOLUSI MODUL DARI NODE_MODULES:
        modules: [path.resolve('./node_modules'), path.resolve('./client')]
    }
}

module.exports = config