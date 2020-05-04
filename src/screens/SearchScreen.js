import React, { useState } from 'react'
import { View, Text, StyleSheet, ScrollView } from 'react-native'
import useResults from '../hooks/useResults'

//components
import SearchBar from '../components/SearchBar'
import ResultsList from '../components/ResultsList'

const SearchScreen = () => {
    // Set Initial State
    const [term, setTerm] = useState('');
    const [searchApi, results, errorMessage] = useResults();

    //helper functions
    const filterResultsByPrice = (price) => {
        //price is $, $$, $$$
        return results.filter(x => x.price === price)
    }

    // Component View
    return (
        <View style={{flex:1}}>
            <SearchBar
                term={term}
                onTermChange={setTerm}
                onTermSubmit={() => searchApi(term)}
            />
            {errorMessage ? <Text>{errorMessage}</Text> : null}
            <ScrollView>
                <ResultsList results={filterResultsByPrice('$')} title="Cost Effective" />
                <ResultsList results={filterResultsByPrice('$$')} title="Bit Pricier" />
                <ResultsList results={filterResultsByPrice('$$$')} title="Big Spender" />
            </ScrollView>

        </View>
    );
};

const styles = StyleSheet.create({})

export default SearchScreen;