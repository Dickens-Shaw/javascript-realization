/**
 * 实现一个方法使多维数组变成一维数组
 */

// 递归
function flatArray(arr) {
  if (!arr.length) return;
  return arr.reduce(
    (pre, cur) =>
      Array.isArray(cur) ? [...pre, ...flatArray(cur)] : [...pre, cur],
    []
  );
}
// console.log(flatArray([1, 2, [1, [2, 3, [4, 5, [6]]]]]));

// 迭代
function flatArray(arr) {
  if (!arr.length) return;
  while (arr.some((item) => Array.isArray(item))) {
    arr = [].concat(...arr);
  }
  return arr;
}
// console.log(flatArray([1, 2, [1, [2, 3, [4, 5, [6]]]]]));
