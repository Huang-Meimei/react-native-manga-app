import React, { useEffect, useState } from 'react'
import { View, StyleSheet, Dimensions, Animated} from 'react-native'
import StyledBox from './StyledBox'
import { SIZES } from '../../theme/ThemeDetail'
import StyledText from './StyledText'

export default function Footer() {
    const [color,setColor] = useState( new Animated.Value(0))
    const styles = StyleSheet.create({
        footerStyle:{
            position:"relative",
            width:Dimensions.get('window').width,
            height:300,
            fontSize:20,
            alignItems:"center",
        },
        footerContentStyle:{
            position:"absolute",
            top:50,
            fontSize:20
        }
      })
    const startAnimation = ()=>{
        const animationSlider = Animated.sequence([
            Animated.timing(color,{
                toValue: 1,
                duration: 1000,
                useNativeDriver: false
            }),
            Animated.timing(color,{
                toValue: 0,
                duration: 1000,
                useNativeDriver: false
            }),
            
        ])
        Animated.loop(animationSlider).start()
    }
    let fontColor =color.interpolate({
        inputRange:[0,1],
        outputRange:["coral",'cyan']
    })
    useEffect(()=>{
        startAnimation() 
    },[])
    
  return (
    <Animated.View style={styles.footerStyle} >

        <Animated.Text style={{...styles.footerContentStyle,color:fontColor}}>THE END~ Bye ^_^</Animated.Text>
    </Animated.View>
  )
}
