import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Ahttp } from "../../utils";
import { Timeline } from "antd";

const StateView = () => {
  // 阅读文档的能力——蔡浩宇
  const params = useParams();
  // console.log('StateView-params:',params);

  const [state, setState] = useState([]);
  // 转换成 TimeLine api 需要的格式
  const processState = (res) => {
    var res1 = []
    for (let item in res) {
      item = res[item];
      // console.log('>state-processState-item:', item);
      res1.push({
        color: item.state === '未开始' ? 'grey' :
          (item.state === '已签收' ? 'green' : 'blue'),
        label: item.time,
        children: item.reason,
        position: '',
      })
    }
    return res1
  }
  useEffect(() => {
    const fetchState = async () => {
      // 获取state
      try {
        // console.log(token)
        let res =
          (await Ahttp.get(`/pkgstate/state/${params.pkgid}`))
            .data;
        res = processState(res)
        console.log(`>State-fetState-pkg:${params.pkgid}`, res)
        return res
      } catch (e) {
        console.error('get pkt-state err:', e)
      }
    };
    fetchState().then(res => {
      setState(res)
    })
  }, [params.pkgid])

  return (
    <div>
      <h1>
        <Link to="/">返回首页</Link>
        {params.pkgid}
      </h1>
      <Timeline
        items={state} mode='alternate'/>
    </div>
  )
}
export default StateView;