import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    header: {
        paddingTop: 28,
        paddingBottom: 8,
        paddingHorizontal: 8,
        flexDirection: 'row',
        flexGrow: 0,
        flexShrink: 0,
        flexBasis: 'auto',
        alignItems: 'center',
        backgroundColor: '#222',
    },
    logo: {
        height: 36,
        width: 40,
    },
    title: {
        paddingHorizontal: 8,
        flex: 1,
        fontSize: 24,
        color: '#fff',
    }
});

export default styles;
