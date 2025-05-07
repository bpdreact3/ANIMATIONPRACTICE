import { View, Text,StyleSheet, Animated } from 'react-native'
import React,{useRef,useEffect, use} from 'react'

const Basic = () => {

const position = useRef(new Animated.Value(0)).current


const startAnimation = () =>{
    Animated.timing(position,{
        toValue:200,
        duration:1000,
        useNativeDriver:false
    }).start(()=>{
        Animated.timing(position,{
            toValue:0,
        duration:2000,
        useNativeDriver:false
        }).start()
    })
}


useEffect(() => {
    startAnimation()
},[])

  return (
    <View>
      <Animated.View style={[styles.box,{marginLeft:position}]} />
    </View>
  )
}


const styles = StyleSheet.create({
    box:{
        width:150,
        height:150,
        backgroundColor:'yellow',
    }
})

export default Basic