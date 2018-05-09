var webpack=require("webpack");
var HtmlWebpackPlugin = require('html-webpack-plugin');
var UglifyJsPlugin = require('uglifyjs-webpack-plugin');
var OpenBrowserPlugin = require('open-browser-webpack-plugin');
var ExtractTextPlugin=require("extract-text-webpack-plugin");
module.exports={
//	entry:"./src/script/app.js",
	entry:{
		app:"./src/script/app.js"
	},
	output:{
		path:__dirname+"/build",
//		filename:"app.js"
		filename:"[name]_[hash].js"
	},
    
	plugins: [
	//1、css的抽离
	    new ExtractTextPlugin({
//	    	filename:"app.css",
			filename:"[name]_[hash].css",
	    	allChunks:true,
	    	disable:false
	    }),
	//2、根据模板自动生成html
		new HtmlWebpackPlugin({
			template:'./src/index.ejs',
			filename:'index.html',
			title:'美家尽有',
			name:"xiaoliu"
		}),
	//3、压缩代码
		new UglifyJsPlugin(),
	//4、自动打开浏览器
//		new OpenBrowserPlugin({ 
//			url: 'http://localhost:7000' 
//		}),
     //5、更改环境变量
     new webpack.DefinePlugin({
     	'process.env':{
     		NODE_ENV:JSON.stringify("production")
     	}
     })
	],
	
	devServer:{
		contentBase:"./build",
		host:"localhost",
		port:"7000"
	},
	module:{
		rules:[
		    //babel-loader,解析es5
		    {
			   test:/\.js$/,
			   exclude:/node_modules/,
			   loader:"babel-loader"
		    },
		    //css-loader,css打包
//		    {
//		     test:/\.css$/,
//		     loader:"style-loader!css-loader"
//		    },
			{
		     test:/\.css$/,
		     loader:ExtractTextPlugin.extract({
		     	fallback:"style-loader",
		     	use:"css-loader"
		     })
		    },
		    //scss打包
//		 	{
//		     test:/\.scss$/,
//		     loader:"style-loader!css-loader!sass-loader"
//		    }
			{
		     test:/\.scss$/,
		     loader:ExtractTextPlugin.extract({
		     	fallback:"style-loader",
		     	use:"css-loader!sass-loader"
		     })
		    }
		]
	}
}
