import { Text } from 'react-native';
import { Drawer } from 'expo-router/drawer';

export default State = () => {
  return (
    <>
      <Drawer.Screen
        options={{
          title: '行李状态'
        }}
      />
      <Text>State</Text>
    </>
  )
}