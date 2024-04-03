import { View,Text,StyleSheet } from "react-native"
import { SIZES, SizeType, THEME, ThemeDetails } from '../../theme/ThemeDetail'
import { Children, ReactNode } from "react"

type StyledBoxType = {
    theme?:THEME,
    visible?:boolean,
    size?:SizeType
    children:ReactNode
}

export default function StyledBox({
        theme,
        visible=true,
        size,
        children
    }:StyledBoxType) {

    const styles = StyleSheet.create({
        boxStyle:{
            display:visible?undefined:'none',
            paddingHorizontal:3,
            width:size? size.width:undefined,
            height:size? size.height:undefined,
        }
    })
  return (
    <View style={styles.boxStyle}>{children}</View>
  )
}
