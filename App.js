// App.js
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ListScreen from './src/screens/ListScreen';
import DetailScreen from './src/screens/DetailScreen';

const Stack = createNativeStackNavigator();

const App = () => {
    return (<NavigationContainer>
        <Stack.Navigator initialRouteName="ListScreen">
            <Stack.Screen name="ListScreen"
                component={ListScreen}/>
            <Stack.Screen name="DetailScreen"
                component={DetailScreen}/>
        </Stack.Navigator>
    </NavigationContainer>);
};

export default App;
