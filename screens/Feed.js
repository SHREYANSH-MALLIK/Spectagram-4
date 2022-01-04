import React, { Component } from 'react';
import { FlatList, Platform, SafeAreaView, StatusBar, Text, View } from 'react-native';

export default class Feed extends Component {
    render() {

        renderItem = ({item: post} => {
            return <PostCard post={post} navigation={this.props.navigations} />
        });

        return (
            <View style={StyleSheet.container}>
                <SafeAreaView style={StyleSheet.droidSafeArea} />
                <View style={styles.appTitle}>
                    <View style={styles.appIcon}>
                        <Image 
                            source={require("../assets/logo.png")}
                            style={styles.iconImage}
                        ></Image>
                    </View>
                    <View style={styles.appTitleTextConatiner}>
                        <Text style={styles.appTitleText}>Spectagram</Text>;
                    </View>;
                </View>
                </View>;
                <View style={styles.cardContainer}>
                    <FlatList
                        keyExtractor={this.keyExtractor}
                        data={posts}
                        renderItem={this.renderItem}
                    />;
            </View>;
            </View>;
        )
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundCOlor: "black"
    },
    droidSafeArea: {
        marginTop: Platform.OS === "andriod" ? StatusBar.currentHeight : RFValue(35)
    },
    appTitle: {
        flex:0.07,
        flexDirection: "row"
    },
    appIcon: {
        flex: 0.2,
        justifyContent: "center",
        alignItems: "center"
    },
    iconImage: {
        width: "100%",
        height: "100%",
        resizeMode: "contain"
    },
    appTitleTextConatiner: {
        color: "white",
        fontSize: RFValue(28),
    },
    cardContainer: {
        flex: 0.85
    }
});