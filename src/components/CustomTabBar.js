import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function CustomTabBar({ state, navigation }) {

    const goTo = (screenName) => {
        navigation.navigate(screenName)
    };

    return(
        <View style={styles.container}>
            <TouchableOpacity style={styles.tabItem} onPress={() => goTo('Welcome')}>
                <Ionicons size={20} name='search-outline' color={state.index === 0 ? '#f15454': '#000'} />
                <Text>Explorar</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.tabItem} onPress={() => goTo('Welcome')}>
                <Ionicons size={20} name='heart-outline' />
                <Text>Favoritos</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.tabItem} onPress={() => goTo('Welcome')}>
                <Ionicons size={20} name='chatbox-outline' />
                <Text>Mensagens</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.tabItem} onPress={() => goTo('Welcome')}>
                <Ionicons size={20} name='person-outline' />
                <Text>Perfil</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        height: 60,
        flexDirection: 'row',
        backgroundColor: 'white',
        borderTopWidth: 0.5,
        borderTopColor: 'lightgrey',
    },
    tabItem: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
})