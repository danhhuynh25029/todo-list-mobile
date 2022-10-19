import { Text, StatusBar, Button, View, StyleSheet } from "react-native"
const Home = () => {
    return (
        <>
            <View style={styles.container}>
                <Text>Open up App.js to start working on your app! Hello React Native</Text>
                <StatusBar style="auto" />
                <Button
                    title="Click me"
                    color="red"
                />
            </View>
        </>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default Home