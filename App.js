import { StatusBar } from 'expo-status-bar';
import 'react-native-gesture-handler';

import React from 'react';
import { View } from 'react-native'
import ViewImageScreen from './app/screens/ViewImageScreen';
import WelcomeScreen from './app/screens/WelcomeScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


export default function App() {

    const Stack = createStackNavigator()

    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name="Welcome"
                    component={WelcomeScreen}
                    options={{ title: 'Welcome' }}
                />
                <Stack.Screen name="Image" component={ViewImageScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    )

}


