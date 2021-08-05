import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';

function SugestionRow({ item }) {

    const navigation = useNavigation();

    return(
        <Pressable style={styles.row} onPress={() => navigation.navigate('Guests')}>
            <View style={styles.icon}>
                <Ionicons size={24} name='location-sharp' />
            </View>
            <Text style={styles.text}>{item.description}</Text>
        </Pressable>
    );
}

const styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        marginHorizontal: 20,
        paddingVertical: 10,
        borderBottomWidth: 1,
        borderBottomColor: 'lightgrey',
    },
    icon: {
        width: 40,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ddd',
        borderRadius: 5,
    },
    text: {
        flex: 1,
        fontSize: 18,
        fontWeight: 'bold',
        marginLeft: 10,
    },
})

export default SugestionRow;