const path = require('path');
const webpack = require('webpack');

module.exports = {
    resolve: {
        // Add `.ts` and `.tsx` as a resolvable extension.
        extensions: ['', '.webpack.js', '.web.js', '.ts', '.tsx', '.js', '.json']
    },
    module: {
        loaders: [
            {
                test: /.js$/,
                loaders: ['babel']
            },
            // all files with a `.ts` or `.tsx` extension will be handled by `ts-loader`
            { test: /\.tsx?$/, loader: 'ts-loader', exclude: '.d.ts' },
            {
                test: /\.scss$/,
                loaders: ["style", "css", "sass"]
            },
            {
                test: /\.json$/,
                loader: 'raw-loader'
            }
        ],
    },
    externals: {
        jquery: "jQuery",
        d3: "d3",
        underscore: "_",
        react: 'React',
        "lodash": "_",
        "react-dom": 'ReactDOM'
    },
    plugins: [
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.NoErrorsPlugin(),
        new webpack.ProvidePlugin({
            'Promise': 'exports?global.Promise!es6-promise'
        }),
        new webpack.optimize.UglifyJsPlugin({ minify: true })
    ],
};