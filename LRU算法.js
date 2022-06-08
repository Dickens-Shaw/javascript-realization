// 运用你所掌握的数据结构，设计和实现—个 LRU(最近最少使用)缓存机制。它应该支持以下操作：获取数据get 和写入数据put
// 获取数据
// get (key) - 如果密钥 (key)存在于缓存中，则获取密钥的值（总是正数），否则返回-1。
// 写入数据 out (key, value) - 如果密钥己经存在，则变更其数据值;如果密钥不存在，则插入该组「密钥/数据值」。
// 当缓存容量达到上限时，它应该在写入新数据之前删除最久末使用的数据值，从而为新的数据值留出空间。
// 进阶：
// 你是否可以在 O(1) 时间复杂度内完成这两种操作？
// 示例：
// LRUCache cache = new LRuCache （ 2 /* 缓存容量*/)；
// cache.put (1, 1);
// cache.put (2, 2) ;
// cache.get (1); // 返回1
// cache.put (3, 3); // 该操作会使得密钥 2作废
// cache.get (2); // 返回 -1未找到
// cache.put (4, 4); // 该操作会使得密钥 1作废
// cache.get (1); // 返回 -1（末找到）
// cache.get (3); // 返回3
// cache.get (4); // 返回4

//  一个Map对象在迭代时会根据对象中元素的插入顺序来进行
// 新添加的元素会被插入到map的末尾，整个栈倒序查看
class LRUCache {
  constructor(capacity) {
    this.secretKey = new Map();
    this.capacity = capacity;
  }
  get(key) {
    if (this.secretKey.has(key)) {
      let tempValue = this.secretKey.get(key);
      this.secretKey.delete(key);
      this.secretKey.set(key, tempValue);
      return tempValue;
    } else return -1;
  }
  put(key, value) {
    // key存在，仅修改值
    if (this.secretKey.has(key)) {
      this.secretKey.delete(key);
      this.secretKey.set(key, value);
    }
    // key不存在，cache未满
    else if (this.secretKey.size < this.capacity) {
      this.secretKey.set(key, value);
    }
    // 添加新key，删除旧key
    else {
      this.secretKey.set(key, value);
      // 删除map的第一个元素，即为最长未使用的
      this.secretKey.delete(this.secretKey.keys().next().value);
    }
  }
}
// let cache = new LRUCache(2);
// cache.put(1, 1);
// cache.put(2, 2);
// console.log("cache.get(1)", cache.get(1))// 返回  1
// cache.put(3, 3);// 该操作会使得密钥 2 作废
// console.log("cache.get(2)", cache.get(2))// 返回 -1 (未找到)
// cache.put(4, 4);// 该操作会使得密钥 1 作废
// console.log("cache.get(1)", cache.get(1))// 返回 -1 (未找到)
// console.log("cache.get(3)", cache.get(3))// 返回  3
// console.log("cache.get(4)", cache.get(4))// 返回  4
