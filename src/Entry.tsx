import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'
import TabNavigator from './navigation/TabNavigator'
import useButtonSheet from './hooks/useBottomSheet'
import BottomSheet from './components/BottomSheet'
import HeadBer from './components/HeadBar'
import { View,Image, Switch } from 'react-native'
import StyledIcon from './components/CustomIcon'
import { SIZES, THEME } from './theme/ThemeDetail'
import StyledText from './components/ui/StyledText'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import StyledBox from './components/ui/StyledBox'
import useTheme from './hooks/useThemeContext'

const Stack = createNativeStackNavigator()
export default function AppEntry() {
  
  const {buttomSheetStatus} = useButtonSheet()
  const {theme,setTheme} = useTheme()
  const handleThemeChange = ()=>{
    if(theme===THEME.dark){
      setTheme(THEME.light)
    }else{
      setTheme(THEME.dark)
    }
  }

  return (
    <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown:false}}>
          <Stack.Screen
            name='TabNavigator'
            component={TabNavigator}
            options={{animation:'slide_from_bottom'}}
          ></Stack.Screen>
          
        </Stack.Navigator>

        {buttomSheetStatus &&  
            <BottomSheet>
              <View>
                <HeadBer
                left={()=>(
                    <StyledIcon
                    size={SIZES.m}
                    render={
                    (focused,style)=>(
                        <Image source={require('../assets/avatar.jpg')} style={style} />
                    )
                    }
                ></StyledIcon>
                )}
                right={()=>(
                    <View>
                    <StyledIcon
                        size={SIZES.s}
                    
                        render={
                            (focused,style)=>(
                                <MaterialCommunityIcons name="power" size={40} color="black" style={style}/>
                                    
                            )
                        }
                    >
                </StyledIcon>
                <StyledText size={SIZES.m}>退出账号</StyledText>
                </View>
                )}
            
            >
            </HeadBer>
            <StyledBox ><StyledText size={SIZES.bottomSheet.nickName}>Hello~ 苏卉卉</StyledText></StyledBox>

            </View>
            <Switch trackColor={{ false: "#FCAE1E", true: "grey" }}
                    thumbColor="#E6DBAC"
                    value={(theme===THEME.dark)}
                    onChange={handleThemeChange}
            ></Switch>
            </BottomSheet>     
        
        }
        
      </NavigationContainer>
  )
}
