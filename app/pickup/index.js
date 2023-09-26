import { Link, Stack } from 'expo-router';
import { useState } from 'react';
import { Modal, Text } from 'react-native';

import { Card, Input, Button} from '@rneui/themed';


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
      <Text>
        在这里收发行李,有一个表单，里面一个输入框和一个扫码系统
      </Text>
      <Card>
      <Input placeholder="输入编号或者扫码" />
      <Button onClick={showModal}>扫码</Button>
      {/* <Modal
        title="扫码制作中……" onShow={isModalOpen}
        animationType='slide' onDismiss={handleCancel}
      >
        <Text>这是一个扫码...</Text>
      </Modal> */}
      </Card>
    </>
  )
}