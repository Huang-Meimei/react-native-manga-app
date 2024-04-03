import React, { useEffect, useState } from 'react'
import { View,Text, Image, ScrollView,StyleSheet,TouchableOpacity } from 'react-native'
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
import StyledBox from '../components/ui/StyledBox'
import StyledImage from '../components/ui/StyledImage'
import { MangaInfoType } from '../../data/types'
import RequestManager from '../tool/request'


export default function MangaScreen() {
  const {theme }= useTheme()
  const [mangaData,setMangaData] = useState([])

  const styles = StyleSheet.create({
    screenStyle:{
        paddingTop:25,
        backgroundColor:ThemeDetails.get(theme)!.backgroundColor,
        color:ThemeDetails.get(theme)!.color,
    },
    screenContainerStyle:{
      display:"flex",
      flexDirection:"row",
      justifyContent:"space-between",
      alignSelf:"center",
      alignItems:"center",
      alignContent:"center",
      flexWrap:'wrap',
    },
    mangaCardStyle:{
      alignSelf:"center",
      alignItems:"center",
      alignContent:"center",
    }
  })
  const handleButtonSheetStatus = ()=>{
    AnimeApi.get_anime_info(
      {
        free_type:1
      }
    ).then((res:any)=>{
      setMangaData(res.data.results.list)
    }
      
    ).catch((err:any)=>{
      console.log(err)
    }

    )
  }

  useEffect(()=>{
    handleButtonSheetStatus()
  },[])


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
      <View style={styles.screenContainerStyle}>

      {
        mangaData.map((el:MangaInfoType,idx)=>{
          return <View key={idx} style={styles.mangaCardStyle}>
                    <StyledImage size={SIZES.mangaDisplay.image} source = {{uri:el.cover}}></StyledImage>
                    <StyledBox size={SIZES.mangaDisplay.title}>
                          <StyledText size={SIZES.mangaDisplay.title}>{el.name}</StyledText>
                    </StyledBox>
                    <StyledText>{el.popular}</StyledText>
                    <StyledText>{el.datetime_updated}</StyledText>
                  </View>
          })
      }
      </View>
    </ScrollView>

    <Footer />

  </View>
 
  )
}
