import React from 'react';
import { Image, Text, View } from 'react-native';

export default function PostCarouselItem({ place }) {
    return(
        <View style={{
            height: 100,
            flexDirection: 'row',
            marginHorizontal: 5,
            backgroundColor: 'white',
        }}>
            <Image style={{
                width: 100,
                height: '100%',
            }} source={{uri: place.image}} />
            <View style={{
                width: 250,
                paddingHorizontal: 10,
            }}>
                <Text style={{marginTop: 10,}}>{place.bed} Camas - {place.bedroom} Quartos</Text>
                <Text
                    numberOfLines={1}
                    style={{
                        marginTop: 5,
                        fontSize: 16,
                    }}
                >{place.title}</Text>
                <Text style={{marginRight: 10, marginTop: 5, fontSize: 18,}}>${place.newPrice}</Text>
            </View>
        </View>
    )
}