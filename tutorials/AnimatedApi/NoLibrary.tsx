import { View, Text, StyleSheet } from 'react-native'
import React, {useState, useEffect} from 'react'

const NoLibrary = () => {

const [position,setPosition] = useState(0)

useEffect(() => {
    let interval:NodeJS.Timeout;

    interval = setInterval(()=>{
        setPosition(prev=>(prev < 200 ? prev + 5 : 0))
    },50)
    return ()=>clearInterval(interval)
},[])

  return (
    <>
    <View style={[styles.box,{marginLeft:position}]}/>
    <View style={[styles.box,{marginLeft:position}]}/>
    <View style={[styles.box,{marginLeft:position}]}/>
    </>
      
    
  )
}

const styles = StyleSheet.create({
    box:{
        width:150,
        height:150,
        backgroundColor:'yellow',
    }
})

export default NoLibrary