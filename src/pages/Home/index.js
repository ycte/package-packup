import { Card, Table, Tag, Timeline} from "antd"
import { Link } from "react-router-dom";
import { Collapse } from 'antd';
import './index.scss'
const { Panel } = Collapse;
// import { SmileOutlined } from '@ant-design/icons';

const theItems = [
  {
    color: 'gray',
    children: '3-27 17:56 从厦门北站装车'
  },
  {
    color: 'green',
    // dot: <SmileOutlined />,
    children: '已到达一期凉亭'
  }
]
const getItem = (e) => {
  return theItems
}
const columns = [
  // {
  //   title: '行李编号',
  //   dataIndex: 'id',
  //   width: 50
  // },
  {
    title: '序号',
    dataIndex: 'key',
    width:50
  },
  {
    title: '行李状态',
    dataIndex: 'state',
    width: 50,
    render: state => {
      let color = state === '已签收' ? 'green':'geekblue';
      if (state === '未开始') {
            color = 'volcano';
      }
      return (
        <Tag color={color} key={state}>
          <Link to={'home'}>{state}</Link>
        </Tag>
      );
    }
  },
  // {
  //   // Timeline
  //   title: '状态详情',
  //   dataIndex: 'states',
  //   width: 200,
  //   render: states => {
  //     return <Link to={states}>点击查看</Link>
  //   }
  // },
  {
    title: '取件码',
    dataIndex: 'pick_id',
    width: 50
  },
]

const data = [
  {
    key: 1,
    id: '229202276301',
    states: '已签收',
    state: '已签收',
    pick_id: '10-2777-1',
  },
  {
    key:2,
    id: '229202276302',
    states: '已签收',
    state: '运输中',
    pick_id: '10-2777-2',
  },
  {
    key:3,
    id: '229202276302',
    states: '已签收',
    state: '未开始',
    pick_id: '10-2777-3',
  }
]

const GetState = (props) => {
  let color = props.state === '已签收' ? 'green':'geekblue';
      if (props.state === '未开始') {
            color = 'volcano';
      }
      return (
        <Tag color={color} key={props.key}>
          <Link to={'home'}>{props.state}</Link>
        </Tag>
      );
}

const Home = () => {
  return (
    <div>
      <Card className="pkgCard">
        我的行李
        {/* <Table columns={columns} 
          // rowSelection={{}}
          expandable={{
            expandedRowRender: (record) => (
              <div>
                <span>行李编号:{record.id}</span>
                <Timeline items={getItem(record.id)}/>
              </div>
            ),
            rowExpandable: (record) => record.state !== '未开始',
          }}
          dataSource={data} 
        />  */}
      </Card>
      <div>
        { 
          data.map(function (value,key) {
            console.log(value);
            return (
              <Card className="pktInfo">
                <GetState state={value.state} key={value.key}/>
                <li key={key} style={{fontSize: "x-large", fontWeight: 777}}>
                  {value.pick_id}
                </li> 
                <Collapse defaultActiveKey={['1']} ghost>
                  <Panel header="点击查看包裹状态" key={value.id} >
                    <Timeline items={getItem(value.id)}/>
                  </Panel>
                </Collapse>
                
              </Card>
            );
          })
        }
      </div>

    </div>
  )
}
export default Home