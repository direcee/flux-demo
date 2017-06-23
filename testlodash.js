var _ = require('lodash')

var obj = {
  name:'zhangsan',
  age:12,
  length:2,
  [Symbol.iterator]: function (){
      const self=this;
      let index=0;
      return {
        next: function() {
          if(index==self.length){
            return {
              value:self[index],
              done:true,
            }
          }else{
            index ++;
            return {
              value:self['name'],
              done:false,
            }
          }

        }
      }
  },
}

let iterable = {
	0: 'a',
	1: 'b',
	2: 'c',
	length: 3,
	[Symbol.iterator]: Array.prototype[Symbol.iterator]
};
for (let item of obj) {
	console.log(item); // 'a', 'b', 'c'
}
