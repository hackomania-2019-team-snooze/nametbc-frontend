import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    Main:{
        backgroundColor: 'black',
        flex: 1
    },
    List:{
        flexDirection: "column",
    },
    ListItem: {
        flex: 3,
        backgroundColor: 'grey',
        borderStyle: 'solid',
        alignSelf: 'center',
        width: 300,
        padding: 20,
        margin: 10
    },
    Text:{
        fontSize: 20,
        fontWeight: "700"
    }
})

export default styles