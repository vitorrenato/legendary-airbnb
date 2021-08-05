import React from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';

import feed from '../../../assets/data/feed';

import Post from '../../components/Post';

export default function SearchResults() {

    const renderItem = ({ item }) => (
        <Post place={item} />
    )

    return(
        <View style={styles.container}>
            <FlatList 
                data={feed}
                renderItem={renderItem}
                keyExtractor={feed => feed.id}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    }
})