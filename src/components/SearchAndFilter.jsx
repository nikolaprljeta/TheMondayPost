import React, {useState} from 'react';
import {
    View,
    TextInput,
    TouchableOpacity,
    Text,
    StyleSheet
} from 'react-native';
import {FontAwesome} from '@expo/vector-icons';

const SearchAndFilter = ({
    onSearch,
    onSortByTitle,
    onSortByBody,
    onToggleOrder,
    searchText
}) => {
    const [searchInput, setSearchInput] = useState(searchText);

    const handleSearch = (text) => {
        setSearchInput(text);
        onSearch(text);
    };

    return (
        <View style={
            styles.container
        }>
            <TextInput style={
                    styles.input
                }
                placeholder="Search"
                value={searchInput}
                onChangeText={handleSearch}/>
            <TouchableOpacity style={
                    styles.button
                }
                onPress={onToggleOrder}>
                <FontAwesome name="sort"
                    size={20}
                    color="#333"/>
            </TouchableOpacity>
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
        </View>
    );
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
