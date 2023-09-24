import { StatusBar } from 'expo-status-bar'
import { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import ImageView from './components/ImageView'
import AboutView from './components/AboutView'
import * as ImagePicker from 'expo-image-picker'

export default function App() {
  const [selectedImg, setSelectedImg] = useState()
  // TODO: ?require
  const imgSource = selectedImg ? { uri: selectedImg }
    : require('./assets/images/background-image.png')
  const chooseImg = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      quality: 1,
    });

    if (!result.canceled) {
      console.log(result)
      setSelectedImg(result.assets[0].uri)
    } else {
      alert('You did not select any image.')
    }
    return result
  }

  return (
    <View style={styles.container}>
      <ImageView
        imgSource={imgSource}
      />
      <AboutView
        text='choose img'
        onPressed={chooseImg}></AboutView>
      <Text style={plainStyle.textOpen}>
        Open up App.js to start working app!
      </Text>
      <StatusBar style="auto" />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#25292e',
    alignItems: 'center',
    justifyContent: 'center',
  },

})

const plainStyle = StyleSheet.create({
  textOpen: {
    color: '#fff',
  },
})


