import { View,Text,StyleSheet,TouchableOpacity } from "react-native"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import HomeScreen from "../screens/HomeScreen";
import MangaScreen from "../screens/MangaScreen";
import BookSelfScreen from "../screens/BookSelfScreen";
import AnimeScreen from "../screens/AnimeScreen";
import { COLORS } from "../theme/theme";
import { THEME, ThemeDetails } from "../theme/ThemeDetail";
import useTheme from "../hooks/useThemeContext";
import { FontAwesome,EvilIcons,Ionicons,MaterialIcons,MaterialCommunityIcons } from "@expo/vector-icons"; 
import StyledText from "../components/ui/StyledText";
import StyledIcon from "../components/CustomIcon";
import { useState } from "react";
import BottomSheet from "../components/BottomSheet";


const Tab = createBottomTabNavigator();


const TabNavigator = () =>{
    const {theme} = useTheme()
    const styles = StyleSheet.create({
        tabBarStyle:{
            display:"flex",
            flexDirection:"row",
            justifyContent:"space-between",
            height:80,
            position:"absolute",
            backgroundColor:ThemeDetails.get(theme)!.backgroundColor,
            color:ThemeDetails.get(theme)!.color,
            borderTopWidth:0
        }
    })


    return (
            <Tab.Navigator
                screenOptions={{
                    tabBarHideOnKeyboard: true,
                    headerShown:false,
                    tabBarShowLabel:false,
                    tabBarStyle:styles.tabBarStyle,
                    
                }}
            >
                <Tab.Screen name='Home' component={HomeScreen}
                    options={{tabBarIcon:({focused,color,size})=>(
                    <>
                        <StyledIcon focused={focused} oval
                        render={
                            (focused)=>(
                                <MaterialCommunityIcons name="home" size={35} color={`${ThemeDetails.get(theme)!.color}`} />
                            )
                        }></StyledIcon>
                        <StyledText visible={Boolean(`${focused?'1':''}`)}>主页</StyledText>
                    </>
                    )}}
                ></Tab.Screen>

                <Tab.Screen name='Manga' component={MangaScreen}
                    options={{tabBarIcon:({focused,color,size})=>(
                    <>
                        <StyledIcon focused={focused} oval
                        render={
                            (focused)=>(
                                <MaterialCommunityIcons name="compass" size={35} color={`${ThemeDetails.get(theme)!.color}`} />
                            )
                        }></StyledIcon>
                        <StyledText  visible={Boolean(`${focused?'1':''}`)}>漫画</StyledText>
                    </>
                    )}}
                ></Tab.Screen>
                <Tab.Screen name='BookSelf' component={BookSelfScreen}
                    options={{tabBarIcon:({focused,color,size})=>(
                        <>
                        <StyledIcon focused={focused} oval
                        render={
                            (focused)=>(
                                <MaterialCommunityIcons name="bookshelf" size={35} color={`${ThemeDetails.get(theme)!.color}`} />
                            )
                        }></StyledIcon>
                        
                        <StyledText visible={Boolean(`${focused?'1':''}`)}>书架</StyledText>
                        </>
                    )}}
                >
                </Tab.Screen>
                <Tab.Screen name='Anime' component={AnimeScreen}
                    options={{tabBarIcon:({focused,color,size})=>(
                        <>
                        <StyledIcon focused={focused} oval
                        render={
                            (focused)=>(
                                <MaterialCommunityIcons name="video-vintage" size={35} color={`${ThemeDetails.get(theme)!.color}`} /> 
                            )
                        }></StyledIcon>
                        <StyledText  visible={Boolean(`${focused?'1':''}`)}>动画</StyledText>
                        </>
                    )}}
                >
                </Tab.Screen>
            </Tab.Navigator>
    )
}

export default TabNavigator;