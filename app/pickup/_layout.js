import { Stack } from 'expo-router/stack';
import { Tabs } from 'expo-router/tabs';

export default function Layout() {
  return (
    <>
      {/* <Stack
        screenOptions={{
          headerStyle: {
            backgroundColor: '#f4511e',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      /> */}
      <Tabs>
        {/* <Tabs.Screen
          name="pickup"
          options={{
            href: {
              pathname: '/',
              params: '收发行李',
            },
            href: {
              pathname: '/detail',
              params: '行李详情',
            }
          }}
        /> */}

      </Tabs>
    </>
  )

}
