import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TabNavigator from './src/navigation/TabNavigator';
import SettingScreen from './src/screens/SettingScreen';
import { ThemeProvider } from './src/hooks/useThemeContext';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import BottomSheet from './src/components/BottomSheet';
import { useState } from 'react';
import useButtonSheet, { ButtomSheetProvider } from './src/hooks/useBottomSheet';
import AppEntry from './src/Entry';


export default function App() {
  
 
  return (
    
    <ThemeProvider >
      <ButtomSheetProvider>
        <AppEntry></AppEntry>
      </ButtomSheetProvider>
    </ThemeProvider>
   
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
