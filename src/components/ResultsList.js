import React from 'react'
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native'
import { withNavigation } from 'react-navigation'
import ResultDetail from '../components/ResultDetail'

const ResultsList = ({ title, results, navigation }) => {
    if(!results.length){
        return null
    }
    // Component View
    return (
        <View style={styles.container} >
            <Text style={styles.title}>{title} {results.length}</Text>
            <FlatList
                data={results}
                keyExtractor={(result) => result.id}
                horizontal
                showsHorizontalScrollIndicator={false}
                renderItem={({ item }) => {
                    return (
                        <TouchableOpacity onPress={() => navigation.navigate('ResultsShow', {id: item.id})}>
                            <ResultDetail result={item} />
                        </TouchableOpacity>
                    )
                }}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginVertical: 10
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        marginLeft: 15,
        marginBottom: 5
    }

})

export default withNavigation(ResultsList) ;