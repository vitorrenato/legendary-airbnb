import React, { useEffect, useRef, useState } from 'react';
import { FlatList, StyleSheet, useWindowDimensions, View } from 'react-native';
import MapView from 'react-native-maps';

import feed from '../../../assets/data/feed';

import CustomMarker from '../../components/CustomMarker';
import PostCarouselItem from '../../components/PostCarouselItem';

export default function SearchResultsMap() {

    const listScroll = useRef();

    const [ selectedPlaceId, setSelectedPlaceId ] = useState(null);

    const listWidth = useWindowDimensions().width;

    const renderItem = ({ item }) => (
        <PostCarouselItem place={item} />
    );

    useEffect(() => {
        if(!selectedPlaceId) {
            return;
        }
        const index = feed.findIndex(feed => feed.id === selectedPlaceId);
        listScroll.current.scrollToIndex({index});
    }, [selectedPlaceId]);

    return(
        <View style={styles.container}>
            <MapView
                style={{height: '100%',}}
                initialRegion={{
                    latitude: 28.32279822,
                    longitude: -16.5124847,
                    latitudeDelta: 0.8,
                    longitudeDelta: 0.8,
                }}
            >
                {
                    feed.map(place => (
                        <CustomMarker 
                            key={place.id}
                            coordinate={place.coordinate}
                            price={place.newPrice}
                            isSelected={place.id === selectedPlaceId}
                            onPress={() => setSelectedPlaceId(place.id)}
                        />
                    ))
                }
            </MapView>

            <View style={{
                position: 'absolute',
                bottom: 10,
            }}>
                <FlatList
                    ref={listScroll}
                    data={feed}
                    renderItem={renderItem}
                    keyExtractor={feed => feed.id}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    snapToInterval={listWidth - 50}
                    snapToAlignment={'center'}
                    decelerationRate={'fast'}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    marker: {
        backgroundColor: 'white',
        padding: 5,
    }
})