import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import ExploreNav from './ExploreNav';

import CustomTabBar from '../components/CustomTabBar';

const Tab = createBottomTabNavigator();

export default function MainTab() {
    return(
        <Tab.Navigator tabBar={props => <CustomTabBar {...props}/>}>
            <Tab.Screen name='Explore' component={ExploreNav} options={{headerShown: false,}} />
        </Tab.Navigator>
    )
}