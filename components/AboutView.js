import { Pressable, StyleSheet, Text } from "react-native"

export default function ({ text, onPressed }) {
  return (
    <Pressable
      onPress={() => { onPressed() }} style={ aboutStyle.button }
    >
      <Text style={ aboutStyle.text }>{ text }</Text>
      
    </Pressable>
  )
}

const aboutStyle = StyleSheet.create({
  button: {
    color: '#000',
    backgroundColor: '#fff',
  },
  text: {
    color: '#000',
  },
})
