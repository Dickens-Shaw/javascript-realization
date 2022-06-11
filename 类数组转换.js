/**
 * 类数组拥有 length 属性 可以使用下标来访问元素 但是不能使用数组的方法 如何把类数组转化为数组?
 */

const arrayLike = document.querySelectorAll('div')

 // 1.扩展运算符
const array = [...arrayLike]
 // 2.Array.from
 Array.from(arrayLike)
 // 3.Array.prototype.slice
 Array.prototype.slice.call(arrayLike)
 // 4.Array.apply
 Array.apply(null, arrayLike)
 // 5.Array.prototype.concat
 Array.prototype.concat.apply([], arrayLike)
 
 