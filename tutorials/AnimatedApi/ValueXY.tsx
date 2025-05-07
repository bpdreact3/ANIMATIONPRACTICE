import { View, Text,StyleSheet, Animated, Dimensions, useAnimatedValue } from 'react-native'
import React,{useRef,useEffect, use} from 'react'

const ValueXY = () => {
const position = useAnimatedValue(0)
const position2 = useAnimatedValue(20)

const basePosition = useAnimatedValue(50)
const oscilation = useAnimatedValue(0)

const combinePositions = Animated.add(basePosition,oscilation)


const position3 = Animated.add(position,position2)
// const position = useRef(new Animated.Value(0)).current

const xyValue = useRef(new Animated.ValueXY({x:0,y:0})).current


const startAnimation = () =>{
    Animated.timing(position,{
        toValue:Dimensions.get('window').width,
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

const startXyAnimation = () => {
    Animated.timing(xyValue,{
        toValue: {x: 150, y: -150},
        duration: 1000,
        useNativeDriver: true
    }).start()
}


const startOscillation = () => {
    Animated.loop(
        Animated.sequence([
    Animated.timing(oscilation,{
        toValue: 100,
        duration: 1000,
        useNativeDriver: true
    }),
    Animated.timing(oscilation,{
        toValue: -100,
        duration: 1000,
        useNativeDriver: true
    })
]),{iterations:5}
).start()
    
}


useEffect(() => {
    // startAnimation()
    // startXyAnimation()
    startOscillation()
},[])

  return (
    <View>
      <Animated.View style={[styles.box,{marginLeft:position3}]} />
      <Animated.View style={[styles.box2,{transform: xyValue.getTranslateTransform()}]} />

      <Animated.View style={[styles.circle,{transform: [{ translateX: combinePositions }]}]} />
    </View>
  )
}


const styles = StyleSheet.create({
    box:{
        width:150,
        height:150,
        backgroundColor:'yellow',
    },
    box2:{
        width:150,
        height:150,
        backgroundColor:'orange',
        marginTop:20,
    },
    circle:{
        width:150,
        height:150,
        backgroundColor:'green',
        marginTop:20,
        borderRadius:200
    }

})

export default ValueXY