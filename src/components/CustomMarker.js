import React from 'react';
import { Text, View } from 'react-native';
import { Marker } from 'react-native-maps';

export default function CustomMarker(props) {

    const { index, coordinate, price, onPress, isSelected } = props;

    return(
        <Marker 
            key={index} 
            coordinate={coordinate} 
            onPress={onPress}
        >
            <View style={{
                width: 40,
                height: 20,
                backgroundColor: isSelected ? 'black' : 'white',
                borderWidth: 1,
                borderColor: 'grey',
                borderRadius: 10,
                justifyContent: 'center',
                alignItems: 'center',
            }}>
                <Text style={{
                    fontSize: 12,
                    color: isSelected ? 'white' : 'black',
                    fontWeight: 'bold',
                }}>${price}</Text>
            </View>
        </Marker>
    )
}