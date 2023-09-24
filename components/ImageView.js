import { View, StyleSheet, Image } from "react-native"

export default ImageViewer = function ({imgSource}) {
  return (
    <View style={imgStyles.imageContainer}>
      <Image
        style={imgStyles.image}
        source={imgSource}
      />
    </View>
  )
}

const imgStyles = StyleSheet.create({
  imageContainer: {
    flex: 1,
    paddingTop: 58,
  },
  image: {
    width: 320,
    height: 440,
    borderRadius: 18,
  },
})
