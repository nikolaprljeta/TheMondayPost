// src/components/SearchAndFilter.jsx
import React, {useState} from 'react';
import {
    View,
    TextInput,
    TouchableOpacity,
    Text,
    StyleSheet
} from 'react-native';

const SearchAndFilter = ({
    onSearch,
    onSortByTitle,
    onSortByBody,
    onToggleOrder,
    searchText
}) => {
    const [searchInput, setSearchInput] = useState(searchText);

    const handleSearch = () => {
        onSearch(searchInput);
    };

    return (<View style={
        styles.container
    }>
        <TextInput style={
                styles.input
            }
            placeholder="Search"
            value={searchInput}
            onChangeText={
                (text) => setSearchInput(text)
            }
            onSubmitEditing={handleSearch}/>
        <TouchableOpacity style={
                styles.button
            }
            onPress={onSortByTitle}>
            <Text>Sort by Title</Text>
        </TouchableOpacity>
        <TouchableOpacity style={
                styles.button
            }
            onPress={onSortByBody}>
            <Text>Sort by Body</Text>
        </TouchableOpacity>
        <TouchableOpacity style={
                styles.button
            }
            onPress={onToggleOrder}>
            <Text>Toggle Order</Text>
        </TouchableOpacity>
    </View>);
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 16
    },
    input: {
        flex: 1,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 4,
        padding: 8,
        marginRight: 8
    },
    button: {
        padding: 8,
        backgroundColor: '#eee',
        borderRadius: 4
    }
});

export default SearchAndFilter;
