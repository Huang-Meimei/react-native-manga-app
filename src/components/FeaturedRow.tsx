import React from 'react'
import { ScrollView, View ,StyleSheet} from 'react-native'
import StyledImage from './ui/StyledImage'
import { SIZES } from '../theme/ThemeDetail'
import StyledBox from './ui/StyledBox'
import StyledText from './ui/StyledText'
type FeaturedRowType = {
    images:Array<object>
};


export default function FeaturedRow({images}:FeaturedRowType) {

    const styles = StyleSheet.create({
        scrollContainerStyle:{
            display:"flex",
            flexDirection:"row",            
        },
      })
  return (
    <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            scrollEnabled={true}
            
            contentContainerStyle={{
                paddingHorizontal:8,
                paddingTop:5
            }}

        >
            <View style={styles.scrollContainerStyle}>
            {images.map((el,idx)=>(
            
                <StyledBox
                    size={SIZES.featuredRow.image}  
                    key={idx}
                >
                    <StyledImage
                        source = {el}
                    ></StyledImage>
                </StyledBox>
                
            ))}
            </View>
        </ScrollView>
  )
}
