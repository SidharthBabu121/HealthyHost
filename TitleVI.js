import React from 'react';
import { StyleSheet, View, Text, ScrollView, Image, Dimensions, StatusBar } from 'react-native';
import { Button } from 'native-base';

import I18n from './locales/i18n.js';

const { height } = Dimensions.get('window');

export default class TitleVIScreen extends React.PureComponent {

  static navigationOptions = () => ({
    title: 'Healthy Host',
    headerTintColor: 'white',
    headerBackTitle: "Back",
    headerStyle: {
      backgroundColor: 'royalblue'
    }
  });

  state = {
    screenHeight: height,
  };

  onContentSizeChange = (contentWidth, contentHeight) => {
    this.setState({ screenHeight: contentHeight });
  };

  //This funciton only applies to the "Hmong" language for now
  makeAudioButtons = () => {
    //var string = I18n.locale;

    //var n = string.localeCompare("hmn");

    Output = []

    //if (n == 0) {
    Output.push(<Button key={0} onPress={() => { alert("Coming Soon!", "Will play audio.") }} style={{ backgroundColor: '#DCDCDC', alignSelf: "center", width: '25%', justifyContent: "center", margin: 10, borderRadius: 15 }}><Text style={{ color: 'black', fontSize: 20 }}>Play</Text></Button>);
    Output.push(<Button key={1} onPress={() => { alert("Coming Soon!", "Audio will pause.") }} style={{ backgroundColor: '#DCDCDC', alignSelf: "center", width: '25%', justifyContent: "center", margin: 10, borderRadius: 15 }}><Text style={{ color: 'black', fontSize: 20 }}>Pause</Text></Button>);
    Output.push(<Button key={2} onPress={() => { alert("Coming Soon!", "Audio will stop.") }} style={{ backgroundColor: '#DCDCDC', alignSelf: "center", width: '25%', justifyContent: "center", margin: 10, borderRadius: 15 }}><Text style={{ color: 'black', fontSize: 20 }}>Stop</Text></Button>);
    //}
    return Output;
  };

  render() {
    return (
      <ScrollView style={{ flex: 1 }} contentContainerStyle={styles.scrollview} scrollEnabled={true} onContentSizeChange={this.onContentSizeChange}>
        <StatusBar barStyle="light-content" />
        <View style={{ flex: 1, alignItems: 'center' }}>

          <View style={{ flexDirection: 'row', justifyContent: "center" }}>
            {this.makeAudioButtons()}
          </View>

          {/* Imports the entire title VI paragraph in current language */}
          <Text style={{ color: '#000000', fontSize: 20, padding: 10 }}>{I18n.t('Title_VI')}</Text>

          {/* Healthy House Logo */}
          <Image style={{ width: '50%', height: '30%', resizeMode: 'stretch' }} source={require('./assets/HHL.png')} />

        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  scrollview: {
    flexGrow: 1,
  },
});