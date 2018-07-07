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