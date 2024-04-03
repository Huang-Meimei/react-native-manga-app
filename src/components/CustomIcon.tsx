import { FontAwesome,EvilIcons,Ionicons } from "@expo/vector-icons"; 
import React, { ReactNode } from 'react'
import { SIZES, SizeType, THEME, ThemeDetails } from "../theme/ThemeDetail";
import { View,Text,StyleSheet, TouchableOpacity, GestureResponderEvent } from "react-native";
import useTheme from "../hooks/useThemeContext";

interface StyledIconType {
    visible?:boolean,
    focused?:boolean,
    size?:SizeType,
    oval?:boolean,
    onClick?:(event:GestureResponderEvent)=>void
    render:(focused:boolean,style:object)=>(ReactNode)
}
export default function StyledIcon({
    visible=true,
    focused=false,
    size,
    oval=false,
    render,
    onClick
}:StyledIconType) {
  const {theme }= useTheme()

  const styles = StyleSheet.create({
    iconStyle:{
        display:visible?undefined:'none',
        backgroundColor:focused?ThemeDetails.get(theme)!.shadowColor:'transparent',
        borderRadius:30,
        paddingLeft:oval?20:5,
        paddingRight:oval?20:5,
        marginLeft:10,
        paddingTop:5,
        paddingBottom:5,
        width:size?size.width:undefined,
        height:size?size.width:undefined,
    },
    imageStyle:{
      borderRadius:30,
      width:'100%',
      height:'100%',
      backgroundColor:ThemeDetails.get(theme)!.inversed.color,
    }
})

  return(
    <TouchableOpacity onPress={onClick} disabled={!onClick}>
    <View style={styles.iconStyle} >
      {render(focused,styles.imageStyle)}
    </View>
    </TouchableOpacity>
  )
}
