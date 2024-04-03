import React, { useEffect,useRef,useState } from 'react'
import { View,StyleSheet, Dimensions, Animated, FlatList, NativeScrollEvent, NativeSyntheticEvent } from 'react-native';
import { SIZES, ThemeDetails } from '../theme/ThemeDetail';
import StyledImage from './ui/StyledImage';
import StyledBox from './ui/StyledBox';
import Pagination from './Pagination';

type SwiperType = {
    images:Array<object>
};


export default function SliderShow({
    images
}:SwiperType) {
    const scrollX = useRef<Animated.Value>(new Animated.Value(0)).current
    const faltListRef = useRef<FlatList>(null)
    const [activeIndex,setActiveIndex]  = useState(0)
    const {width} = Dimensions.get('window')
    const styles = StyleSheet.create({
        swiperStyle:{
            width:width,
            height:200,
            overflow:"hidden",
        }
      })

      useEffect(()=>{
        let activeIdxMutable = activeIndex

        const timer = setInterval(()=>{
            if(activeIdxMutable===images.length-1){
                faltListRef.current!.scrollToIndex({
                    index:0,
                    animated:true
                })
                activeIdxMutable=0
            }else{
                faltListRef.current!.scrollToIndex({
                    index:activeIdxMutable+1,
                    animated:true
                })
                activeIdxMutable++
            }
            setActiveIndex(activeIdxMutable)
        },1000)
        return ()=>clearInterval(timer)
      },[])

      const handleOnScroll= (e:NativeSyntheticEvent<NativeScrollEvent>) =>{
        const scrollPostition = e.nativeEvent.contentOffset.x
        Animated.event(
        [
            {
                nativeEvent:{
                    contentOffset:{
                        x:scrollX
                    }
                }
            }
        ],
        {
            useNativeDriver:false
        })(e)
       // const index = Math.trunc((scrollPostition+width/2)/width)
        
      }
      const handlegGtItemLayout = (data:any,index:number)=>({
        length:width,
        offset: width*index,
        index:index
      })

    
  return (
    <View  >
        
        <FlatList data={images}
            horizontal
            onScroll={handleOnScroll}
            showsHorizontalScrollIndicator={false}
            getItemLayout={handlegGtItemLayout}
            keyExtractor={(item,index)=>(index.toString())}
            renderItem={({item})=>
                <StyledBox size={SIZES.f}>
                    <StyledImage     
                        source={item} 
                    ></StyledImage>
                </StyledBox>
            }
            ref={faltListRef}

        >
        </FlatList>
        <Pagination number={images.length} scrollX={scrollX} activeIndex={activeIndex}/>
        
    </View>
    
  )
}

