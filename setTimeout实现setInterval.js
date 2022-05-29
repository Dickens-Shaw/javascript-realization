/**
 * 
 * 使用 setTimeout 实现 setInterval 的根本原因是：
 * setTimeout 不管上次异步任务是否完成，它都会将当前异步任务推入队列（很容易理解，setTimeout本身就是一次调用一次执行）
 * 而 setInterval 则会在任务推入异步队列时判断上次异步任务是否被执行。
 * 这就导致 setInterval 在做定时轮训时，出现耗时操作，或者调用的异步操作耗时会导致异步任务不按照期待的时间间隔执行。
 * setTimeout 保证调用的时间间隔是一致的，setInterval的设定的间隔时间包括了执行回调的时间。
 */

function myInterval(fn, t) {
  let timer = null;
  function interval() {
    fn();
    timer = setTimeout(interval, t);
  }
  interval();
  return {
    cancel:()=>{
      clearTimeout(timer)
    }
  }
}

// myInterval(() => {
//   console.log(111)
// },1000)