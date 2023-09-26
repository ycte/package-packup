// import { Input, Card, Button, Modal } from 'antd';
import { Modal, Text, StyleSheet } from 'react-native';
import { useState } from 'react';

export default PickUp = () => {
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
    <>
      <Text style={detailStyle.textDetail}>
        在这里收发行李详情，包括收货人信息、收货地址、收货时间等。
      </Text>
      {/* <Card> */}
      {/* <Input placeholder="输入编号或者扫码" className='noInput'/> */}
      {/* <Button onClick={showModal}>扫码</Button> */}
      {/* <Modal
        title="扫码制作中……" onShow={isModalOpen}
        animationType='slide' onDismiss={handleCancel}
      >
        <Text>这是一个扫码...</Text>
      </Modal> */}
      {/* </Card> */}
    </>
  )
}

const detailStyle = StyleSheet.create({
  textDetail: {
    fontSize: 14,
    color: 'white',
    marginTop: 10,
    marginBottom: 10,
  },
});
