# 😑快把它忘了
# Pages
* assets: img and so on
* components: 组件工具
* pages: pages
* store: 数据处理
* utils: 高复用度工具

# exec
```bash
# or npm or yarn or ?bun 
pnpm install 
pnpm start
```

1. useState 无限循环

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
