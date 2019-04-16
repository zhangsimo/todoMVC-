(function (window) {
	'use strict';
let list = JSON.parse(localStorage.getItem('todolist') || '[]')
const vm = new Vue({
	el:'#app',
	data:{
		msg:'',
		oneId: -1,
		oneli:'',
		// toggall:'',
		list,
	},
	methods:{
		dele(id){
	this.list = 	this.list.filter(item => item.id != id)
		},
		addlist(){
			if(this.msg.trim() == '') {
				return
			}
			let id =  this.list.length == 0 ? 1 :this.list[this.list.length-1].id +1
			this.list.push({
				id,
				name:this.msg,
				done:false
			})
			this.msg=''
		},
		dblclick1(id){
			this.oneId = id
			this.oneli = this.list.filter(item => item.id== id)[0].name
			console.log(this.oneli);

		},
		changelist(){
			this.oneId = -1
		},
		click2(){
			this.list =this.list.filter(item=> !item.done)
		},
		closeadd(id){
			let i = this.list.findIndex(item => item.id == id)
			this.list[i].name = this.oneli
			this.oneId = -1

		},
	

	},
	computed:{
		isShow(){
			return this.list.length == 0 ? false : true
		},
		islistitem(){
			return this.list.filter(item=> !item.done).length
		},
		isShow2(){
			return this.list.some(item => item.done)
		},
		toggall(){
			console.log(123);
				if(this.list.every(item => item.done == true)){

						return true
					}else{
						return false
					}
		}



	},
	watch:{
			list:{
				keep:true,
				handler(newVal){
					localStorage.setItem('todolist' , JSON.stringify(this.list))
					// console.log(123);

					// console.log(newVal.every(item => item.done))

					// if(newVal.every(item => item.done)){
					// 	this.toggall = true
					// }else{
					// 	this.toggall = false
					// }
				}
			}
	}
})


})(window);
