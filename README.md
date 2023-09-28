# 😑快把它忘了，学习笔记

## Pages

* assets: img and so on
* components: 组件工具
* pages: pages
* store: 数据处理
* utils: 高复用度工具

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
