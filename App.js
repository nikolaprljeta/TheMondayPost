import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ListScreen from './src/screens/ListScreen';
import DetailScreen from './src/screens/DetailScreen';

const Stack = createNativeStackNavigator();

const App = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="ListScreen">
                <Stack.Screen name="ListScreen"
                    component={ListScreen}
                    options={
                        {title: 'Lorem ipsum, baby!'}
                    }/>
                <Stack.Screen name="DetailScreen"
                    component={DetailScreen}
                    options={
                        {title: 'This ipsum in particular'}
                    }/>
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default App;
