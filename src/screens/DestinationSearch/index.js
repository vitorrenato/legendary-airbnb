import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import SugestionRow from '../../components/SugestionRow';

export default function Home() {

    const navigation = useNavigation();

    return(
        <View style={styles.container}>

            <View style={{height: '100%'}}>
                <GooglePlacesAutocomplete 
                    placeholder='Vai pra onde?'
                    onPress={(data, details = null) => {
                        navigation.navigate('Guests');
                    }}
                    fetchDetails
                    styles={{
                        textInput: styles.searchText,
                    }}
                    query={{
                        key: '',
                        language: 'pt-br',
                        type: '(cities)',
                    }}
                    suppressDefaultStyles
                    renderRow={(item) => <SugestionRow item={item} />}
                />
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    searchText: {
        height: 80,
        fontSize: 18,
        color: 'grey',
        justifyContent: 'center',
        paddingHorizontal: 20,
        borderBottomWidth: 1,
        borderBottomColor: '#ddd',
    }
})