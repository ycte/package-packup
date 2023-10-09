# 😑快把它忘了，学习笔记

## Pages

* assets: img and so on
* components: 组件工具
* pages: pages
* store: 数据处理
* utils: 高复用度工具

## TODO:

- [ ] 😑 token 过期检查
- [x] 登陆后的 data 问题
- [ ] 扫码后的验证（一个异步动画）
- [x] onClick and so on process

## TODO: navigate 的兼容性问题原因(login.js:22)
？？？

## exec

```bash
# or npm or yarn or ?bun 
git clone https://github.com/ycte/package-packup.git
git clone https://github.com/ycte/package-packup.git -b nest
cd package-packup # clone 下来的 main 分支
pnpm install 
pnpm start
```

```bash
# 另一个终端
cd (clone 下来的 nest 分支)
pnpm install
pnpm start
```

* react 事件绑定写法上的一些小 tips
  1. react 的 jsx 文件使得可以在 template 中用 {} 包裹 js 代码
  2. 而在渲染时，js 代码会被执行，例如下面的 onClick 事件

   ```js
   const onClick = () => {}
   ...
   <div onClick={() => onClick()}>click me</div>
   # 上面的代码会转换成
   <div onClick={(onClick 函数的定义)}>click me</div>
   # 即 {} 中的箭头函数在渲染时直接被替换成返回值 onClick 函数的定义
   ```

  3. 上面的例子没有影响，而在下面的例子中，onClick 发生异常

   ```js
   const onClick = () => {}
   <div onClick={onClick()}>click me</div>
   # 会发现渲染时 onClick 事件被立即触发
   # 即 onClick 函数被立即执行
   ```

  4. 只需将事件处理函数的变量名绑定即可，无需立即执行
* useState 无限循环

  ```js
  export const stateeg = () => {
    const [state, setState] = useState(0)
    const onCreate = () => {
      setState(state + 1)
      console.log(state)
    }
    return (
      <div>{state}</div>
    )
  }
  ```

* 论函数的复用

  ```js
  const refreshInfo = async () => {
    let res = await getInfo()
    setInfoMap(res)
  }
  ```
