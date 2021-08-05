import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import SearchResults from '../screens/SearchResults';
import SearchResultsMap from '../screens/SearchResultsMap';

const Tab = createMaterialTopTabNavigator();

export default function SearchResultsNav() {
    return(
        <Tab.Navigator>
            <Tab.Screen name='lista' component={SearchResults} />
            <Tab.Screen name='mapa' component={SearchResultsMap} />
        </Tab.Navigator>
    )
}