// src/components/ReusableView.jsx
import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';

const ReusableView = ({
    onPress,
    ...params
}) => {
    return (<TouchableOpacity onPress={onPress}
        style={
            styles.container
    }>
        <View style={
            styles.postBackground
        }> {
            params.title && <Text style={
                styles.postTitle
            }> {
                params.title
            }</Text>
        }
            {
            params.description && <Text style={
                styles.postText
            }> {
                params.description
            }</Text>
        }
            {
            params.additionalInfo && <Text style={
                styles.additionalInfo
            }> {
                params.additionalInfo
            }</Text>
        } </View>
    </TouchableOpacity>);
};

const styles = StyleSheet.create({
    container: {
        marginVertical: 8
    },
    postBackground: {
        backgroundColor: 'white',
        padding: 16,
        borderRadius: 8,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5
    },
    postTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 8,
        color: 'black'
    },
    postText: {
        color: 'black'
    },
    additionalInfo: {
        color: 'black',
        fontStyle: 'italic'
    }
});

export default ReusableView;
