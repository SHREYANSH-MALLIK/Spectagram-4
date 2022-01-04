import React, { Component } from 'react';
import { Text, TextInput, View } from 'react-native';

export default class CreatePost extends Component {
    render() {
        if (!this.state.fontsLoaded) {
            return <AppLoading />;
          } else {
        return (
            <View style={StyleSheet.container}>
                <SafeAreaView style={StyleSheet.droidSafeArea} />
                <View  style={styles.appTitle}>
                    <View style={styles.appIcon}>
                        <Image
                            source={require("../assets/logo.png")}
                            style={styles.iconImage}
                            ></Image>
                    </View>
                    <View style={styles.appTitleTextConatiner}>
                        <Text style={styles.appTItletext}>New Post</Text>
                    </View>
                </View>
                <View style={styles.fieldsContainer}>
                    <ScrollVIew>
                        <Image
                            source={preview_image[this.setState.previewImage]}
                            style={styles.previewImage}
                            ></Image >
                    </ScrollVIew>
                </View >
                <View style={{height:
                        RFValue(this.setstate)

                <DropDownPicker
                     item={{
                         {label1 : "Image 1",value:"image_1"},
                         {label1 : "Image 2",value:"image_2"},
                         {label1 : "Image 3",value:"image_3"},
                         {label1 : "Image 4",value:"image_4"},
                         {label1 : "Image 5",value:"image_5"},
                         {label1 : "Image 6",value:"image_6"},
                         {label1 : "Image 7",value:"image_7"}

                     }};

                     defaultValue={this.state.previewImage}
                     containerStyle={{
                         height: 40,
                         borderRadius: 20,
                         marginBottom: 10
                     }};

                     onOpen={() => {
                         this.setState({dropdownHeight: 170});
                         
                     }} ;
                    
                    
                    onClose={() => {
                        this.setState({dropdownHeight: 40});
                    }}

                    style={{backgroundCOlor: "transparent"}}

                    itemStyle={{
                        justifyCOntent: "flex-start"
                    }}

                    dropdownStyle={{backgroundColor: "#2a2a2aa"}}
                    
                    labelStyle={{
                        color: "white"
                    }}

                    arrowStyle={{
                        color:white
                    }}

                    onChangeItem={item =>
                        this.setState({
                            previewImage: item.value
                        })
                    }
                /> 
                
                <TextInput

                    style={styles.inputFont}
                    onChangeText={caption => this.setState({ caption})}

                    placeholder={"Caption"}
                    placeholderTextColor="white"

                    />; 
                    
                    </View>

                </View>

                <View style={{flex: 0.8}} />

                </View>




            

            