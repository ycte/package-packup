import { Input, Card, Button, Select, Modal } from 'antd';
import { useState } from 'react';
const StateManage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };  
  return (
      <div>
        在这里工作人员改变行李状态,一个表单,设置状态,手动输入和扫码
        <Card>
          <Select 
            defaultValue="运输中"
            style={{
              width: 90,
            }}
            options={[
              {
                value:"未开始",
                label:"未开始",
              },
              {
                value:"运输中",
                label:"运输中",
              },
              {
                value:"已到达",
                label:"已到达",
              },

            ]}
          />
          <Input placeholder="输入编号或者扫码" className='noInput'/>
          <Button onClick={showModal}>扫码</Button>
          <Modal title="扫码制作中……" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
            <p>这是一个扫码...</p>
          </Modal>
        </Card>
      </div>
    )
}
export default StateManage