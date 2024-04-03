import React from 'react'
import { View,StyleSheet,Text, Animated, Dimensions } from 'react-native';
import { COLORS } from '../theme/theme';

type PaginationType = {
    number:number,
    scrollX:Animated.Value,
    activeIndex:number
};


export default function Pagination({
    number,
    scrollX,
    activeIndex
}:PaginationType) {


    const styles = StyleSheet.create({
        paginationStyle:{
            display:"flex",
            flexDirection:"row",
            position:"absolute",
            bottom:0,
            alignSelf:"center",
            
        },
        dotStyle:{
            width:10,
            height:10,
            borderRadius:6,
            marginHorizontal:3,
            backgroundColor:COLORS.lightGrey
        }
      })
      

  return (
     <View style={styles.paginationStyle}>
        {
            Array.from({ length: number }, (item, idx) => idx).map((_,idx)=>{
                const {width} = Dimensions.get("window")
                const inputRange = [(idx-1)*width,(idx)*width,(idx+1)*width]

                const dotWidth = scrollX.interpolate({
                    inputRange,
                    outputRange:[10,30,10],
                    extrapolate:"clamp"
                })

                const backgroundColor = (activeIndex===idx)? COLORS.secondaryDark:COLORS.lightGrey                
                return <Animated.View key={idx} style={{...styles.dotStyle,width:dotWidth, backgroundColor:backgroundColor}}></Animated.View>
            })
        }
        
     </View>
  )
}
