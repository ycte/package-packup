// level1: router && higher level
import { Drawer } from 'expo-router/drawer';
// level2: RN && expo
import { Camera, CameraType } from 'expo-camera';
import { useState } from 'react';
import { Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
// level3: UI && icon .etc
import { Card, Input, Button as Ebutton } from '@rneui/themed';

export default State = () => {
  const [type, setType] = useState(CameraType.back);
  const [permission, requestPermission] = Camera.useCameraPermissions();
  function toggleCameraType() {
    setType(current => (current === CameraType.back ? CameraType.front : CameraType.back));
  }
  // TODO: 仅管理员进入此页面
  return (
    <>
      <Card>
        {/* TODO: 成功后触发功能，跳转 /pickup/detail/[:pktid] */}
        <Input placeholder="输入编号或者扫码" />
        <Ebutton>
          <Text>扫码</Text>
        </Ebutton>
      </Card>
      {/* TODO: modal */}
      <View style={styles.container}>
        <Camera style={styles.camera} type={type}>
          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.button} onPress={toggleCameraType}>
              <Text style={styles.text}>Flip Camera</Text>
            </TouchableOpacity>
          </View>
        </Camera>
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  camera: {
    flex: 1,
    width: '100%',
  },
  buttonContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    flex: 1,
    padding: 10,
  },
  text: {
  }
})