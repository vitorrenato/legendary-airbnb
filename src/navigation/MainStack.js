import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import MainTab from './MainTab';

import DestinationSearchScreen from '../screens/DestinationSearch';
import GuestsScreen from '../screens/Guests';
import PostScreen from '../screens/PostScreen';

const Tab = createStackNavigator();

export default function MainStack() {
    return(
        <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen name='Home' component={MainTab} options={{
                    headerShown: false,
                }} />
                <Tab.Screen name='DestinationSearch' component={DestinationSearchScreen} options={{
                    title: 'Pesquisar Local'
                }} />
                <Tab.Screen name='Guests' component={GuestsScreen} options={{
                    title: 'Quantas Pessoas?'
                }} />
                <Tab.Screen name='PostScreen' component={PostScreen} options={{
                    title: 'Acomodação'
                }} />
            </Tab.Navigator>
        </NavigationContainer>
    );
}