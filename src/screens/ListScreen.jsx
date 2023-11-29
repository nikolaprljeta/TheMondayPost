import React, {useState, useEffect} from 'react';
import {View, FlatList, StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import {fetchPosts} from '../services/APICaller';
import SearchAndFilter from '../components/SearchAndFilter';
import ReusableView from '../components/ReusableView';

const ListScreen = () => {
    const [posts, setPosts] = useState([]);
    const [sortedPosts, setSortedPosts] = useState([]);
    const [searchText, setSearchText] = useState('');
    const [sortBy, setSortBy] = useState('title');
    const [sortByAsc, setSortByAsc] = useState(true);
    const navigation = useNavigation();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const postsData = await fetchPosts();
                setPosts(postsData);
                sortPosts(postsData, sortBy, sortByAsc);
            } catch (error) {
                console.error('Error fetching posts:', error);
            }
        };

        fetchData();
    }, [sortBy, sortByAsc]);

    const sortPosts = (data, sortBy, ascending) => {
        const sortedData = data.slice().sort((a, b) => {
            if (ascending) {
                return a[sortBy].localeCompare(b[sortBy]);
            } else {
                return b[sortBy].localeCompare(a[sortBy]);
            }
        });
        setSortedPosts(sortedData);
    };

    const navigateToDetailScreen = (userId) => {
        navigation.navigate('DetailScreen', {userId});
    };

    const handleSortByTitle = () => {
        setSortBy('title');
    };

    const handleSortByBody = () => {
        setSortBy('body');
    };

    const handleToggleOrder = () => {
        setSortByAsc(!sortByAsc);
    };

    const handleSearch = (text) => {
        setSearchText(text);
        const filteredPosts = posts.filter((post) => post.title.toLowerCase().includes(text.toLowerCase()));
        sortPosts(filteredPosts, sortBy, sortByAsc);
    };

    return (
        <View style={
            styles.container
        }>
            <SearchAndFilter onSearch={handleSearch}
                onSortByTitle={handleSortByTitle}
                onSortByBody={handleSortByBody}
                onToggleOrder={handleToggleOrder}
                searchText={searchText}/>
            <FlatList data={sortedPosts}
                keyExtractor={
                    (item) => item.id.toString()
                }
                renderItem={
                    ({item}) => (
                        <ReusableView onPress={
                                () => navigateToDetailScreen(item.userId)
                            }
                            title={
                                item.title
                            }
                            description={
                                item.body
                            }
                            additionalInfo={`Additional info: nah`}/>
                    )
                }/>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16
    }
});

export default ListScreen;
