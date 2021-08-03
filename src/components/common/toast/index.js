import Toast from "./Toast";

const  obj = {}

obj.install = function (Vue) {
  console.log('执行了obj的install函数')
  // 1、创建组件构造器
  const constr = Vue.extend(Toast);

  // 2.根据组件构造器，创建一个组件对象
  const toast = new constr();

  // 3.手动挂载
  toast.$mount(document.createElement('div'))

  // 4.添加到结点
  document.body.appendChild(toast.$el)

  // 5.Vue原型
  Vue.prototype.$toast = toast;
}

export default obj
