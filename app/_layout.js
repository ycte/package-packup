import { Drawer } from 'expo-router/drawer';
import {
  ThemeProvider, DarkTheme, DefaultTheme, useTheme
} from '@react-navigation/native';

import { Slot } from 'expo-router';

export default function HomeLayout() {
  return (
    // <>
    //   <Drawer />
    // </>
    <ThemeProvider value={DefaultTheme}>
      <Drawer />
    </ThemeProvider>
  )
}