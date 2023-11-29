import React, {useEffect, useState} from 'react';
import {ScrollView, StyleSheet} from 'react-native';

import {fetchUser} from '../services/APICaller';
import ReusableView from '../components/ReusableView';

const DetailScreen = ({route}) => {
    const [userData, setUserData] = useState(null);

    useEffect(() => {
        const {userId} = route.params;

        const fetchUserData = async () => {
            try {
                const user = await fetchUser(userId);
                setUserData(user);
            } catch (error) {
                console.error('Error fetching user data:', error);
            }
        };

        fetchUserData();
    }, [route.params]);

    return (
        <ScrollView style={
            styles.container
        }>
            {
            userData && (
                <ReusableView onPress={
                        () => console.log('DetailView Pressed')
                    }
                    title={
                        `${
                            userData.name
                        } ${
                            userData.username
                        }`
                    }
                    description={
                        `Email: ${
                            userData.email
                        }\nUsername: ${
                            userData.username
                        }\nPhone: ${
                            userData.phone
                        }\nWebsite: ${
                            userData.website
                        }\nCompany: ${
                            userData.company.name
                        }`
                    }
                    additionalInfo={`Additional info: nope`}/>
            )
        } </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16
    }
});

export default DetailScreen;
