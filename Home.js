import React, { Component } from 'react';
import { Platform, StyleSheet, View, Text, AppRegistry, Image, ScrollView, Dimensions } from 'react-native';
import { Container, Header, Content, Button } from 'native-base';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import AsyncStorage from '@react-native-community/async-storage';

/* Imports app information from language files */
import I18n from './locales/i18n.js';

const { height } = Dimensions.get('window');

export default class HomeScreen extends React.PureComponent {

  static navigationOptions = {
    /* turns off default header for the screen */
    header: null,
  };

  state = {
    screenHeight: height,
    currentLanguage: "en",
  };

  onContentSizeChange = (contentWidth, contentHeight) => {
    this.setState({ screenHeight: contentHeight });
  };

  saveLanguage = async (language) => {
    try {
      await AsyncStorage.setItem('language', language);
      this.setState({ currentLanguage: language });
    } catch (e) {
      alert(e);
    }
  }

  displayLanguage = async () => {
    try {
      let language = await AsyncStorage.getItem('language');
      if (language == null) {
        this.setState({ currentLanguage: "en" });
      }
      else {
        this.setState({ currentLanguage: language });
      }
    } catch (error) {
      alert(error);
    }
  }

  render() {
    this.displayLanguage();
    I18n.locale = this.state.currentLanguage;
    return (
      <ScrollView style={{ flex: 1 }} contentContainerStyle={styles.scrollview} scrollEnabled={true} onContentSizeChange={this.onContentSizeChange}>

        <View style={styles.container}>

          {/* Healthy House Logo */}
          <Image style={{ width: '50%' }} source={require('./assets/ic_launcher.png')} />

          {/* Intro title */}
          <Text style={styles.welcome}>{I18n.t('Text.Intro')}</Text>

          {/* Individual buttons that take you to a different screen for each button */}

          <View style={{ flexDirection: 'row' }}>
            <Button onPress={() => this.saveLanguage("en")} style={{ backgroundColor: '#DCDCDC', alignSelf: "center", width: '25%', justifyContent: "center", margin: 10, borderRadius: 15 }}><Text style={{ color: 'black', fontSize: 20 }}>English</Text></Button>
            <Button onPress={() => this.saveLanguage("spa")} style={{ backgroundColor: '#DCDCDC', alignSelf: "center", width: '25%', justifyContent: "center", margin: 10, borderRadius: 15 }}><Text style={{ color: 'black', fontSize: 20 }}>Español</Text></Button>
            <Button onPress={() => this.saveLanguage("hmn")} style={{ backgroundColor: '#DCDCDC', alignSelf: "center", width: '25%', justifyContent: "center", margin: 10, borderRadius: 15 }}><Text style={{ color: 'black', fontSize: 20 }}>Hmong</Text></Button>
          </View>

          <Button onPress={() => this.props.navigation.navigate("Antibiotics")} style={{ backgroundColor: '#DCDCDC', alignSelf: "center", width: '80%', justifyContent: "center", margin: 10, borderRadius: 15 }}><Text style={{ color: 'black', fontSize: 20 }}>{I18n.t('Text.Main_Menu_Choices.0')}</Text></Button>
          <Button onPress={() => this.props.navigation.navigate("Illnesses")} style={{ backgroundColor: '#DCDCDC', alignSelf: "center", width: '80%', justifyContent: "center", margin: 10, borderRadius: 15 }}><Text style={{ color: 'black', fontSize: 20 }}>{I18n.t('Text.Main_Menu_Choices.1')}</Text></Button>
          <Button onPress={() => this.props.navigation.navigate("Questions for your Doctor")} style={{ backgroundColor: '#DCDCDC', alignSelf: "center", width: '80%', justifyContent: "center", margin: 10, borderRadius: 15 }}><Text style={{ color: 'black', fontSize: 20 }}>{I18n.t('Text.Main_Menu_Choices.2')}</Text></Button>
          <Button onPress={() => this.props.navigation.navigate("Oral Health")} style={{ backgroundColor: '#DCDCDC', alignSelf: "center", width: '80%', justifyContent: "center", margin: 10, borderRadius: 15 }}><Text style={{ color: 'black', fontSize: 20 }}>{I18n.t('Text.Main_Menu_Choices.3')}</Text></Button>
          <Button onPress={() => this.props.navigation.navigate("Medical Clinics")} style={{ backgroundColor: '#DCDCDC', alignSelf: "center", width: '80%', justifyContent: "center", margin: 10, borderRadius: 15 }}><Text style={{ color: 'black', fontSize: 20 }}>{I18n.t('Text.Main_Menu_Choices.4')}</Text></Button>
          <Button onPress={() => this.props.navigation.navigate("Resources")} style={{ backgroundColor: '#DCDCDC', alignSelf: "center", width: '80%', justifyContent: "center", margin: 10, borderRadius: 15 }}><Text style={{ color: 'black', fontSize: 20 }}>{I18n.t('Text.Main_Menu_Choices.5')}</Text></Button>
          <Button onPress={() => this.props.navigation.navigate("Background")} style={{ backgroundColor: '#DCDCDC', alignSelf: "center", width: '80%', justifyContent: "center", margin: 10, borderRadius: 15 }}><Text style={{ color: 'black', fontSize: 20 }}>{I18n.t('Text.Main_Menu_Choices.6')}</Text></Button>
          <Button onPress={() => this.props.navigation.navigate("Title VI")} style={{ backgroundColor: '#DCDCDC', alignSelf: "center", width: '80%', justifyContent: "center", margin: 10, borderRadius: 15 }}><Text style={{ color: 'black', fontSize: 20 }}>{I18n.t('Text.Main_Menu_Choices.7')}</Text></Button>

        </View>
      </ScrollView>
    );
  }
}

//default styling for home screen
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    paddingTop: 20,
  },
  welcome: {
    fontSize: 25,
    textAlign: 'center',
    color: '#000000',
    margin: 10,
    fontWeight: "bold",
  },
  scrollview: {
    flexGrow: 1,
  },
  content: {
    flexGrow: 1,
    justifyContent: "space-between",
    padding: 10,
  },
});