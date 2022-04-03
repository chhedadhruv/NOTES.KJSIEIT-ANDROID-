import * as React from 'react';
// import type {Node} from 'react';
// import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { NavigationContainer } from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import HomeScreen from './screens/HomeScreen';
// import SearchScreen from './screens/SearchScreen';
import NotesScreen from './screens/NotesScreen';
import LectureScreen from './screens/LectureScreen';
import TimeTableScreen from './screens/TimeTableScreen';
import ImpLinksScreen from './screens/ImpLinksScreen';
// import { NavigationContainer } from '@react-navigation/native';

const App = () => {
  const Tab = createBottomTabNavigator();
  return(
    <NavigationContainer>
      <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          if (route.name === 'Home') {
            iconName = focused ? 'ios-home' : 'ios-home-outline';
            size = focused ? size + 8 : size + 5;
          }else if (route.name === 'Notes') {
            iconName = focused ? 'book-sharp' : 'book-outline';
            size = focused ? size + 8 : size + 5;
          }else if (route.name === 'Lectures') {
          iconName = focused ? 'logo-youtube' : 'md-logo-youtube';
          size = focused ? size + 8 : size + 5;
          }
          else if (route.name === 'TimeTable') {
          iconName = focused ? 'calendar' : 'calendar-outline';
          size = focused ? size + 8 : size + 5;
          }
          else if (route.name === 'Links') {
          iconName = focused ? 'link' : 'link-outline';
          size = focused ? size + 8 : size + 5;
          }
          return <Ionicons name={iconName} size={size} color={color} />
        },
      })}
      tabBarOptions={{
        activeTintColor:'black',
        inactiveTintColor:'black',
        showLabel:false,
        style:{
          height:60
        }
      }}>
        <Tab.Screen name='Home' component={HomeScreen} />
        <Tab.Screen name='Notes' component={NotesScreen} />
        <Tab.Screen name='Lectures' component={LectureScreen} />
        <Tab.Screen name='TimeTable' component={TimeTableScreen} />
        <Tab.Screen name='Links' component={ImpLinksScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
