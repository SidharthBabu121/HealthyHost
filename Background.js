import React, {Component} from 'react';
import {Platform, StyleSheet, View, Text, AppRegistry, Image, ScrollView, Dimensions } from 'react-native';
import {Container, Header, Content, Button} from 'native-base';
import { createStackNavigator, createAppContainer } from 'react-navigation';

import I18n from './locales/i18n.js';

const { height } = Dimensions.get('window');

export default class BackgroundScreen extends React.PureComponent {

  state = {
    screenHeight: height,
  };

  onContentSizeChange = (contentWidth, contentHeight) => {
    this.setState({ screenHeight: contentHeight });
  };

  //This funciton only applies to the "Hmong" language for now
  makeAudioButtons = () => {
      var string = I18n.locale;

      var n = string.localeCompare("hmn");

      Output = []

      if(n == 0){
        Output.push(<Button key={0} onPress={() => {alert("Now playing audio.")}} style={{backgroundColor: '#DCDCDC', alignSelf:"center", width: '25%', justifyContent: "center", margin: 10, borderRadius: 15}}><Text style={{color: 'black', fontSize: 20}}>Ua si</Text></Button>);
        Output.push(<Button key={1} onPress={() => {alert("Audio is paused.")}} style={{backgroundColor: '#DCDCDC', alignSelf:"center", width: '25%', justifyContent: "center", margin: 10, borderRadius: 15}}><Text style={{color: 'black', fontSize: 20}}>Ncua</Text></Button>);
        Output.push(<Button key={2} onPress={() => {alert("Audio has stopped.")}} style={{backgroundColor: '#DCDCDC', alignSelf:"center", width: '25%', justifyContent: "center", margin: 10, borderRadius: 15}}><Text style={{color: 'black', fontSize: 20}}>Nres</Text></Button>);
      }
      return Output;
  };

  render() {
    return (
      <ScrollView style={{ flex: 1 }} contentContainerStyle={styles.scrollview} scrollEnabled={true} onContentSizeChange={this.onContentSizeChange}>
      <View style={{ flex: 1}}>

      <View style={{ flexDirection: 'row', justifyContent: "center"}}>
        {this.makeAudioButtons()}
      </View>

    {/* Displays entire background in current language */}
    <Text style={{ fontSize: 22, color: "black", padding: 10}}>{I18n.t('Settings.1')}</Text>
    </View>
    </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  scrollview: {
    flexGrow: 1,
  },
  content: {
    flexGrow: 1,
    justifyContent: "space-between",
    padding: 10,
  },
});