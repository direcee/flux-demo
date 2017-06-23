const arr=[1,2,3,4,5]
const thisarr=[1,1,1,1,1]

let result=arr.map(function(item,index,arry){
  console.log(this)
  return item*2
},thisarr)

console.log(result)

var str='sat.fat.bat.cat'
var reg=/a/gi;
console.log(reg.exec(str))

function tt(){
  console.log(this.abc)
}
tt()
var abc=12;


function compareProperty(properName) {
  return (obj1,obj2) => {
    if(obj1[properName]<obj2[properName]){
      return -1
    }else if (obj1[properName]>obj2[properName]){
      return 1
    }else{
      return 0
    }
  }
}

let arry=[{age:12},{age:4}]
let sortarray=arry.sort(compareProperty('age'))
console.log(arry)
console.log(sortarray)


function rest (...args){
  Array.prototype.slice.apply(arguments)
}
console.log(rest('a','b','c'))

Function.prototype.testbind=function (obj){
  let oldFunction=this;
  return function(){
    oldFunction.apply(obj,Array.prototype.slice.apply(arguments))
  }
}

var obj={}

Object.defineProperties(obj,{
  _name:{
    value:'zhangsan'
  },
  age:{
    configurable:true,
    writable:true,
    enumerable:true,
    value:function(){
      console.log("sb")
    }
  },
  name:{
    configurable:true,
    enumerable:true,
    get:function() {
      return this._name
    },
    set:function(name) {
       this._name=name;
    }
  }
})


for (v in obj){
  console.log(v+":"+obj[v]);
}
console.dir(Object.getOwnPropertyDescriptor(obj,'age'))

//factory module
let createFactory = function (name,age){
  let o = new Object();
  o.name=name;
  o.age=age;
  o.todo=function (){
    return `${o.name}     ${o.age}`
  }
  return o;
}

console.log(createFactory('zhangsan','18').todo())
