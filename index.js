var data = [
	{
		name: 'mike',
		age: 18,
		sex: '男'
	},
	{
		name: 'nina',
		age: 20,
		sex: '女'
	},
	{
		name: 'elle',
		age: 26,
		sex: '女'
	}
];    

// raw-loader
var _ = require('underscore');
// 这里只是字符串
var indexTplFile = require('./index.tpl'); 
// 这是是模板函数
var indexTpl = _.template(indexTplFile) 
// 这里渲染模板
document.body.innerHTML = indexTpl({data:data});

// ejs-loader
// 这里直接是模板函数
// var indexTpl = require('./index.tpl');
// 这里渲染模板
// document.body.innerHTML = indexTpl(data);
