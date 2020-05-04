import React from 'react'
import { View, Image, Text, StyleSheet,} from 'react-native'

const ResultDetail = ({result}) => {

    // Component View
    return (
        <View style={styles.container}>
            <Image source={{uri: result.image_url}} style={styles.imageStyle} />
            <Text style={styles.name} >{result.name}</Text>
            <Text>{result.rating} Stars, {result.review_count} Reviews</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container:{
        marginLeft:15,
        borderColor: 'gray',
    },
    imageStyle:{
        height:120,
        width:250,
        borderRadius:5,
    },
    name:{
        fontWeight:'bold',
    }
})

export default ResultDetail;