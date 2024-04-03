import React, { ReactNode, useEffect, useRef } from 'react'
import { View,Image ,StyleSheet, Dimensions, Animated, TouchableWithoutFeedback} from 'react-native'
import HeadBer from './HeadBar'
import StyledIcon from './CustomIcon'
import { SIZES, THEME, ThemeDetails } from '../theme/ThemeDetail'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import StyledText from './ui/StyledText'
import useTheme from '../hooks/useThemeContext'
import StyledBox from './ui/StyledBox'
import useButtonSheet from '../hooks/useBottomSheet'
type BottomSheetType = {
    theme?:THEME,
    children:ReactNode
}
export default function BottomSheet({
    children
}:BottomSheetType) {
    const {width,height} = Dimensions.get('window')
    const {theme }= useTheme()
    const {buttomSheetStatus,setButtomSheetStatus} = useButtonSheet()

    const slideRef = useRef<Animated.Value>(new Animated.Value(400))
    const styles = StyleSheet.create({
      bottomSheetStyle:{
        position:"absolute",
        top:height/4,
        width:width,
        height:height*.75,
        backgroundColor:ThemeDetails.get(theme)!.backgroundColor,
        color:ThemeDetails.get(theme)!.color,
        borderRadius:15,
        borderColor:ThemeDetails.get(theme)!.shadowColor,
        transform:[{
            translateY:slideRef.current
        }]
      },
      line:{
        width:75,
        height:4,
        backgroundColor:'grey',
        alignSelf:'center',
        marginVertical:15,
        borderRadius:2
      },
      bottomSheetContainerStyle:{
        position:"absolute",
        top:0,
        width:width,
        height:height,
        backgroundColor:'rgba(0,0,0,0.3)',
      }
    })
    const slideUp = ()=>{
        Animated.timing(slideRef.current,{
            toValue:0,
            duration:200,
            useNativeDriver:true
        }).start()
    }
    const slideDown = ()=>{
        Animated.timing(slideRef.current,{
            toValue:500,
            duration:200,
            useNativeDriver:true
        }).start()
    }

    const handleOnPress = ()=>{
        if(buttomSheetStatus){ 
            slideDown()
            setTimeout(
               ()=> setButtomSheetStatus(!buttomSheetStatus)
            ,200)    
        }
     }

    useEffect(()=>{
        slideUp()
    },[])
  return (
    <TouchableWithoutFeedback onPress={handleOnPress}>
        <View style={styles.bottomSheetContainerStyle}>
        <Animated.View style={styles.bottomSheetStyle} onStartShouldSetResponderCapture={(e)=>true}>
            <View style={styles.line}></View>
            
            {children}
        </Animated.View> 
        </View>
    </TouchableWithoutFeedback>
  )
}
