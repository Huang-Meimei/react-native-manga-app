import React, { ReactNode } from 'react'
import { View , Text,Image,StyleSheet} from 'react-native'
import StyledIcon from './CustomIcon'
import { SIZES, SizeType, THEME, ThemeDetails } from '../theme/ThemeDetail'
import useTheme from '../hooks/useThemeContext'

interface StyledHeadBarType {
    left:(style:object)=>(ReactNode),
    right:(style:object)=>(ReactNode),

}
export default function HeadBer({
    left,right
}:StyledHeadBarType) {
    const styles = StyleSheet.create({
        headerStyle:{
            display:"flex",
            flexDirection:"row",
            justifyContent:"space-between",
            alignItems:"center",
            position:"relative",
            paddingTop:5,
            
        },
        titleStyle:{
            display:'flex',
            flexDirection:'row',
            justifyContent:'flex-start',
            alignItems:'center',
            fontSize:30,
            
            
        },
        toggleBarStyle:{
            display:'flex',
            flexDirection:'row',
            justifyContent:'flex-start',
            alignItems:'center',
            fontSize:30,
            paddingRight:10
            
        },
        
    })
  return (    
    <View style={styles.headerStyle}>
         {left(styles.titleStyle)}
         {right(styles.toggleBarStyle)}
      
    </View>

  )
}
