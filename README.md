# v-rxios
该项目是Vue + Rxjs + axios + immutable.js + typescript于一体的demo

## 特点
- 此项目是一个将axios的Promise封装成rxjs的Observable增强axios的功能以应对更复杂的请求场景
- 引入immutable.js使操作对象变得更加安全高效
- 从angular的依赖注入获得灵感，提供了vue中用依赖注入的方式实现消息服务的单例模式，使组件间通信变得更加便捷
- 使用typescript进行代码静态检查

## demo
- 提供了将表格中某一行需要编辑的数据传递到弹窗中的例子
- 提供了输入搜索防抖的例子

## 运行
- 克隆仓库到本地
- 安装依赖
```sh
yarn
```
- 运行
```sh
yarn run serve
```
