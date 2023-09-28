import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Ahttp } from "../../utils";

const StateView = () => {
  // 阅读文档的能力——蔡浩宇
  const params = useParams();
  // console.log('StateView-params:',params);

  const [state, setState] = useState([]);
  

  useEffect(() => {
    const fetchState = async () => {
      // 获取state
      try {
        // console.log(token)
        let res =
          (await Ahttp.get(`/pkgstate/state/${params.pkgid}`))
            .data;
        console.log(`pktState:${params.pkgid}`, res)
        return res
      } catch (e) {
        console.log('get pkt-state err:', e)
      }
    };
    fetchState().then(res => {
      setState(res)
    })
  }, [params.pkgid])

  return (
    <div>
      state
    </div>
  )
}
export default StateView;