import React from 'react';
import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Picker,
    Text,
    useColorScheme,
    View,
  } from 'react-native';
// import { exp } from 'react-native/Libraries/Animated/Easing';

const HomeScreen = () => {
    return(
        <View style={{display:'flex', flex:1, alignItems:'center', justifyContent:'center'}}>
            <Text>About</Text>
            <View>
                <Text style={{display:'flex', alignItems:'center', justifyContent:'center', textAlign:'left', margin:10}}>Hey, I'm Dhruv Chheda from FYComp KJSIEIT.
                    I built this app so that all the study material would be easily accessible to all students.
                    This app contains Notes, Lecture Links, Group Links, Time Tables, Syllabus and Submission dates of assignments and experiments.
                    I Thank all of you who helped me in the making process.
                    Feedbacks are always welcomed.
                    If anybody has any ideas for advancement for the app, you can dm me the same.
                </Text>
            </View>
        </View>
    )
}

export default HomeScreen;