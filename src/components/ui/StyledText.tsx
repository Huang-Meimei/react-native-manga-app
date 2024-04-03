import { View,Text,StyleSheet } from "react-native"
import { SIZES, SizeType, THEME, ThemeDetails } from '../../theme/ThemeDetail'
import { Children, ReactNode } from "react"
import useTheme from "../../hooks/useThemeContext"

type StyledTextType = {
    visible?:boolean,
    children:ReactNode,
    size?:SizeType
}

export default function StyledText({
        visible=true,
        children,
        size=SIZES.s
    }:StyledTextType) {
      const {theme }= useTheme()
      

    const styles = StyleSheet.create({
        textStyle:{
            display:visible?'flex':'none',
            flexDirection:"row",
            justifyContent:"center",
            alignItems:"center",
            padding:5,
            color:ThemeDetails.get(theme)!.color,
            fontSize:size.font,
            
            overflow:"hidden"
        }
    })


  return (
    
    <Text style={styles.textStyle}>{children}</Text>
  )
}
