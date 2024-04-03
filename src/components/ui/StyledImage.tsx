import { View,Text,StyleSheet,Image, ImageSourcePropType } from "react-native"
import { SIZES, SizeType, THEME, ThemeDetails } from '../../theme/ThemeDetail'
import { Children, ReactNode } from "react"

type StyledImageType = {
    theme?:THEME,
    visible?:boolean,
    size?:SizeType,
    source:ImageSourcePropType | undefined
}

export default function StyledImage({
        theme,
        visible=true,
        size=SIZES.default,
        source
    }:StyledImageType) {

    const styles = StyleSheet.create({
        imageStyle:{
            display:visible?'flex':'none',
            alignSelf:"center",
            alignItems:"center",
            borderRadius:5,
            width:size?.width,
            height:size?.height
        }
    })

  return (
    <Image source={source} style={styles.imageStyle}></Image>
  )
}
