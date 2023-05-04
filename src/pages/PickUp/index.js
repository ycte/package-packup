import { Input, Card, Button, Modal } from 'antd';
import { useState } from 'react';
import './index.scss'
const PickUp = () => {
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
        在这里收发行李,有一个表单，里面一个输入框和一个扫码系统
        <Card>
          <Input placeholder="输入编号或者扫码" className='noInput'/>
          <Button onClick={showModal}>扫码</Button>
          <Modal title="扫码制作中……" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
            <p>这是一个扫码...</p>
          </Modal>
        </Card>
      </div>
    )
  }
  export default PickUp