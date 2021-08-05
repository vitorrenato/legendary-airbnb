import React from 'react';
import { Image, ScrollView, StyleSheet, Text } from 'react-native';

export default function DetailedPost({ post }) {
    return(
        <ScrollView
            style={styles.container}
        >
            <Image
                source={{uri: post.image}} 
                style={styles.image}
            />
            <Text style={styles.title}>{post.title}</Text>
            <Text style={styles.bedrooms}>{post.bed} Camas - {post.bedroom} Quartos</Text>
            <Text style={styles.newPrice}>${post.newPrice}</Text>
            <Text style={styles.description}>{post.description}</Text>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 20,
        marginVertical: 20,
    },
    image: {
        width: '100%',
        aspectRatio: 3/2,
        borderRadius: 20,
    },
    title: {fontSize: 18, fontWeight: 'bold', marginTop: 10,},
    bedrooms: {fontSize: 14, marginTop: 10,},
    newPrice: {fontSize: 20, marginTop: 10,},
    description: {fontSize: 16, marginTop: 10,},
})