import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    List:{
        flexDirection: "column",
        flex: 2
    },
    ListItem: {
        flex: 1,
        backgroundColor: 'blue',
        borderStyle: 'solid',
        alignSelf: 'center',
        width: 300,
        padding: 50
    }
})

export default styles