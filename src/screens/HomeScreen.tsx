import React, { useRef } from 'react'
import { View,Text, Image, ScrollView,StyleSheet,TouchableOpacity, TouchableWithoutFeedback } from 'react-native'
import HeadBer from '../components/HeadBar'
import StyledText from '../components/ui/StyledText'
import StyledIcon from '../components/CustomIcon'
import { SIZES, ThemeDetails } from '../theme/ThemeDetail'
import FeaturedRow from '../components/FeaturedRow'
import { FontAwesome6, MaterialCommunityIcons, MaterialIcons, SimpleLineIcons } from '@expo/vector-icons'
import useTheme from '../hooks/useThemeContext'
import SliderShow from '../components/SliderShow'
import Footer from '../components/ui/Footer'
import useButtonSheet from '../hooks/useBottomSheet'
import AnimeApi from '../tool/api/animeApi'


export default function HomeScreen() {
  const {theme }= useTheme()
  const scrRef = useRef<ScrollView>(null)
  const {buttomSheetStatus,setButtomSheetStatus} = useButtonSheet()
  const styles = StyleSheet.create({
    screenStyle:{
        paddingTop:25,
        backgroundColor:ThemeDetails.get(theme)!.backgroundColor,
        color:ThemeDetails.get(theme)!.color,
        opacity:buttomSheetStatus?0.7:1
    },
  })
  const handleButtonSheetStatus = ()=>{
    if(!buttomSheetStatus){
      setButtomSheetStatus(!buttomSheetStatus)
    }
  }

  return (
    <View style={styles.screenStyle}>
        <HeadBer
                left={
                  (style)=>(
                    <View style={style} >
                      <StyledIcon
                        size={SIZES.m}
                        render={
                          (focused,style)=>(
                              <Image source={require('../../assets/avatar.jpg')} style={style} />
                          )
                        }
                        onClick={handleButtonSheetStatus}
                      ></StyledIcon>
                      <StyledText size={SIZES.b}>left</StyledText>
                    </View>
                  )
                }
                right={
                  (style)=>(
                    <View style={style}>
                    <StyledIcon
                        
                        render={
                          (focused,style)=>(
                            <MaterialCommunityIcons name="new-box" size={30} color={`${ThemeDetails.get(theme)!.color}`} />
                          )
                      }
                    ></StyledIcon>
                    <StyledIcon
                        render={
                          (focused,style)=>(
                            <MaterialIcons name="search" size={30} color={`${ThemeDetails.get(theme)!.color}`} />
                          )
                      }
                    ></StyledIcon>
                    <StyledIcon
                        render={
                          (focused,style)=>(
                            <SimpleLineIcons name="settings" size={25} color={`${ThemeDetails.get(theme)!.color}`}  />
                          )
                      }
                    ></StyledIcon>
                    </View>
                  )
                }
        ></HeadBer>
        <ScrollView>
              <SliderShow
                images={[
                  require("../../assets/slideshow/1.jpg"),
                  require("../../assets/slideshow/2.jpg"),
                  require("../../assets/slideshow/3.jpg"),
                  require("../../assets/slideshow/4.jpg"),
                  require("../../assets/slideshow/5.jpg")
                ]}
          
              ></SliderShow>
              <HeadBer
                  left={
                    (style)=>(
                      <View style={style}>
                        <StyledIcon
                          size={SIZES.m}
                          render={
                            (focused,style)=>(
                                <Image source={require('../../assets/avatar.jpg')} style={style} />
                            )
                          }
                        ></StyledIcon>
                        <StyledText size={SIZES.b}>left</StyledText>
                      </View>
                    )
                  }
                  right={
                    (style)=>(
                      <View style={style}>
                        <StyledIcon
                          size={SIZES.s}
                          render={
                            (focused,style)=>(
                              <MaterialIcons name="more-horiz" size={30} color={`${ThemeDetails.get(theme)!.color}`}  />
                            )
                        }
                      ></StyledIcon>
                    </View>
                    )
                  }
              ></HeadBer>
              <FeaturedRow
                  images={[
                    require("../../assets/posters/1.jpg"),
                    require("../../assets/posters/2.jpg"),
                    require("../../assets/posters/3.jpg"),
                    require("../../assets/posters/4.jpg"),
                    require("../../assets/posters/5.jpg")
                  ]}
              />
              <HeadBer
                  left={
                    (style)=>(
                      <View style={style}>
                        <StyledIcon
                          size={SIZES.m}
                          render={
                            (focused,style)=>(
                                <Image source={require('../../assets/avatar.jpg')} style={style} />
                            )
                          }
                        ></StyledIcon>
                        <StyledText size={SIZES.b}>left</StyledText>
                      </View>
                    )
                  }
                  right={
                    (style)=>(
                      <View style={style}>
                        <StyledIcon
                          size={SIZES.s}
                          render={
                            (focused,style)=>(
                              <MaterialIcons name="more-horiz" size={30} color={`${ThemeDetails.get(theme)!.color}`}  />
                            )
                        }
                      ></StyledIcon>
                    </View>
                    )
                  }
              ></HeadBer>
              <FeaturedRow
                images={[
                  require("../../assets/posters/1.jpg"),
                  require("../../assets/posters/2.jpg"),
                  require("../../assets/posters/3.jpg"),
                  require("../../assets/posters/4.jpg"),
                  require("../../assets/posters/5.jpg")
                ]}
              />
              <Footer />
          
        </ScrollView>
    </View>
  )
}
