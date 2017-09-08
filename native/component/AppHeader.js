import React from 'react';
import { View, Text, Image } from 'react-native';

import logo from '../media/image/logo.png';

import styles from './AppHeader.style.js';

export default function AppHeader(props) {
    return (
        <View style={styles.header}>
            <Image source={logo} style={styles.logo} />
            <Text style={styles.title}>Todo</Text>
        </View>
    );
};
