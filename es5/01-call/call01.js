/**
 * 模拟实现 call
 *
 * call2的需求
 * 1. 改变函数的指向
 * 2. 执行该函数
 */

function call2(context) {
  var context = context || window;
  context.fn = this

  // 获取参数
  var args = []
  for (var i = 1; i < arguments.length; i++) {
    args.push('arguments[' + i +']');
  }
  var result = eval('context.fn(' + args + ')')

  delete context.fn;

  return result;
}
