# useQuery 返回值

- isFetching： query 对象，首次 isFetching: true,渲染后 isFetching:false

# 应用场景

- 重复处理中间状态，比如：loading, error, 参考 `whyUseQuery/Demo01RequestState`
- 服务端状态应被归类为缓存，因为状态由数据源控制，不由前端控制；参考 `whyUseQuery/Demo02UpdateState`
- useEffect 中请求初始数据的问题，参考`在 React18 中请求数据的正确姿势`

# 其它

[用 react-query 解决你一半的状态管理问题](https://zhuanlan.zhihu.com/p/351280149)

- 状态分为两种：用户交互的中间状态；服务端状态

# 参考

- [在 React18 中请求数据的正确姿势](https://zhuanlan.zhihu.com/p/536624672)
