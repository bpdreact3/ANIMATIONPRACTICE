import { View, Text, StyleSheet, useAnimatedValue, Easing,Animated } from 'react-native'
import React, { use } from 'react'

const Interploation = () => {

const animatedValue = useAnimatedValue(0)


const startInterpolation = () => {
    Animated.timing(animatedValue,{
        toValue:1,
        duration:2000,
        easing : Easing.inOut(Easing.ease),
        useNativeDriver:true
    }).start()
}

  return (
    <View style={styles.container} >
      <View style={styles.box} />
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',

    },
    box:{
        width:120, height:120,borderRadius:100, backgroundColor:'green'
    }
})

export default Interploation