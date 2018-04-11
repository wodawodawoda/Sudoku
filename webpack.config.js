const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const OptimizeJsPLugin = require('optimize-js-plugin');
const path = require('path');
require("babel-polyfill");

const env = process.env.NODE_ENV || 'development';
const plugins = [
	new HtmlWebpackPlugin({
		template: 'src/html/index.html',
		filename: 'index.html',
		inject: 'body'
	}),
	new ExtractTextPlugin('style.css'),
];

console.log('NODE_ENV:', env);

if (env === 'production') {
plugins.push(
    new webpack.optimize.UglifyJsPlugin(),
    new OptimizeJsPLugin({
		sourceMap: false
	})
  );
}

//webpack.config.js
module.exports = {
    entry: [
		'react-hot-loader/patch',
		'babel-polyfill',
		'./src/js/index.js'
    ],
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'app.bundle.js'
    },
    module: {
    	rules: [
      {
        test: /\.svg$/,
        use: [
          {
            loader: "babel-loader"
          },
          {
            loader: "react-svg-loader",
            options: {
              jsx: true // true outputs JSX tags
            }
          }
        ]
      },
			{
				test: /\.sass$/,
				exclude: /node_modules/,
				use: ['style-loader', 'css-loader', 'sass-loader']
			},
	    	{
	    		test: /\.js$/,
	    		exclude: /node_modules/,
	    		use: ["babel-loader"]
	    	}
    	] 
    },
    plugins
};