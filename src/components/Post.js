import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Image, Pressable, StyleSheet, Text, View } from 'react-native';

export default function Post({ place }) {

    const navigation = useNavigation();

    return(
        <Pressable
            onPress={() => navigation.navigate('PostScreen', {
                postId: place.id,
            })}
            style={styles.container}
        >
            <Image style={styles.image} source={{uri: place.image}} />
            <Text style={styles.title}>{place.title}</Text>
            <Text numberOfLines={2} style={styles.description}>{place.description}</Text>
            <View style={styles.prices}>
                <Text style={styles.oldPrice}>${place.oldPrice}</Text>
                <Text style={styles.newPrice}>${place.newPrice}</Text>
                <Text>/ noite</Text>
            </View>
            <Text style={styles.totalPrice}>Valor Total: ${place.totalPrice}</Text>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingVertical: 20,
        paddingHorizontal: 20,
    },
    image: {
        width: '100%',
        aspectRatio: 3/2,
        borderRadius: 20,
    },
    title: {
        marginTop: 10,
        fontSize: 18,
    },
    description: {
        marginTop: 10,
        fontSize: 14,
        lineHeight: 24,
    },
    prices: {
        flexDirection: 'row',
        marginTop: 10,
        alignItems: 'center',
    },
    oldPrice: {
        fontSize: 25,
        color: 'grey',
        textDecorationLine: 'line-through',
        marginRight: 10,
    },
    newPrice: {
        fontSize: 25,
        marginRight: 10,
    },
    totalPrice: {
        fontSize: 14,
        color: 'grey',
        textDecorationLine: 'underline',
    },
})