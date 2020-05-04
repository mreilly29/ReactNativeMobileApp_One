import React from 'react'
import { View, Text, StyleSheet, FlatList, Image } from 'react-native'
import useResultDetail from '../hooks/useResultDetail'
const ResultsShowScreen = ({ navigation, }) => {
    // const [result, setResult] = useState(null)
    const id = navigation.getParam('id')
    const [getResultApi, result, errorMessage] = useResultDetail()
    
    getResultApi(id);
    if (!result) {
        console.log(errorMessage)
        return null;
    }

    // Component View
    return (
        <View>
            <Text>Results Show</Text>
            <FlatList
                data={result.photos}
                keyExtractor={(photo) => photo}
                renderItem={({ item }) => {
                    return <Image source={{ uri: item }} style={styles.image} />
                }}
            />
        </View>
    )
};

const styles = StyleSheet.create({
    image: {
        height: 200,
        width: 300
    }
})

export default ResultsShowScreen;