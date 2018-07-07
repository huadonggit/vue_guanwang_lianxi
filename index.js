//出错
// 装载模板
// var indexTpl=require('./index.string');
// import commonUtil from 'commonUtil';
// commonUtil.render(indexTpl);

// // var Vue=require('src/vue.min.js');
// new Vue({
// 	el:'#app',
// 	data:{
// 		firstName:'foo',
// 		lastName:'bar',
// 		fullName:'foo.bar'
// 	},
// 	computed:{
// 		fullName:function(){
// 			return this.firstName+' '+this.lastName
// 		}
// 	}		
// })	

new Vue({
	el:'#el',
	data:{
		firstName:'foo',
		lastName:'bar',
		fullName:'foo.bar'
	},
	computed:{
		fullName:function(){
			return this.firstName+' '+this.lastName
		}
	}		
})		