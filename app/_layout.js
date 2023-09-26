import { Drawer } from 'expo-router/drawer';
import {
  ThemeProvider, DarkTheme, DefaultTheme, useTheme
} from '@react-navigation/native';

import { Slot } from 'expo-router';
import HomeView from './index';

export default function HomeLayout() {
  return (
    // <>
    //   <Drawer />
    // </>
    <ThemeProvider value={DefaultTheme}>
      <Drawer initialRouteName="index">
        <Drawer.Screen name='index' options={{ title: '主页' }} />
        <Drawer.Screen name='state' options={{ title: '行李状态' }} />
        <Drawer.Screen name='pickup' options={{ title: '行李签收' }} />
        <Drawer.Screen name='info' options={{ title: '个人信息' }} />

      </Drawer>
    </ThemeProvider>
  )
}