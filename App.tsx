import { View, Text, StyleSheet, SafeAreaView } from 'react-native'
import React from 'react'
import NoLibrary from './tutorials/AnimatedApi/NoLibrary'
import Basic from './tutorials/AnimatedApi/Basic'
import ValueXY from './tutorials/AnimatedApi/ValueXY'
import Interploation from './tutorials/AnimatedApi/Interploation'

const App = () => {
  return (
    <View style={styles.container}> 
    <SafeAreaView />
      <Text style={styles.text} >Animations</Text>


{/* Animated Api */}

{/* <NoLibrary/> */}
{/* <Basic/> */}
<Interploation />

{/* <ValueXY /> */}

    </View>
  )
}

export default App

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'#222'
  },
  text:{
    color:'#fff',
    fontSize:22,
    textAlign:'center',
   marginVertical:25,
   textDecorationLine:'underline',
   fontWeight:'bold'
  }
})