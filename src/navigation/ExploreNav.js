import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';

import HomeScreen from '../screens/Home';
import SearchResultsNav from './SearchResultsNav';

const Tab = createStackNavigator();

export default function ExploreNav() {
    return(
        <Tab.Navigator>
            <Tab.Screen name='Welcome' component={HomeScreen} options={{
                headerShown: false,
            }} />
            <Tab.Screen name='SearchResults' component={SearchResultsNav} options={{
                title: 'Pesquisar Hotel'
            }} />
        </Tab.Navigator>
    )
}