import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';
import { Sizes } from "@dungdang/react-native-basic";
const slides = [
  {
    key: 'support',
    image: require('../../res/images/learning.png'),
    text: 'Học tập online bất cứ mọi lúc',
    backgroundColor: '#ef9d27',
  },

  {
    key: 'doingu',
    text: 'Luyện tập bài tập mọi lúc',
    image: require('../../res/images/quiz.png'),
    backgroundColor: '#89b159',
  },
  {
    key: 'chiphi',
    text: 'Kết nối hoàn toàn miễn phí',
    image: require('../../res/images/ketnoi.png'),
    backgroundColor: '#3d8ac9',
  },
];
export default class WelcomeScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showRealApp: false,
    };
  }
  _onDone = () => {
    this.setState({showRealApp: true});
  };
  _onSkip = () => {
    this.setState({showRealApp: true});
  };
  _renderItem = ({item}) => {
    return (
      <View
        style={[
          styles.mainContent,
          {
            backgroundColor: item.backgroundColor,
          },
        ]}>
        <Image style={styles.image} source={item.image} />
        <Text style={styles.text}>{item.text}</Text>
      </View>
    );
  };
  render() {
    return (
      <AppIntroSlider
        slides={slides}
        renderItem={this._renderItem}
        onDone={() => this.props.navigation.navigate('Login')}
        bottomButton
      />
    );
  }
}
const styles = StyleSheet.create({
  mainContent: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
    paddingBottom: 100,
  },
  image: {
    width: 250,
    height: 250,
  },
  text: {
    fontSize: 30,
    color: 'rgba(255, 255, 255, 0.8)',
    backgroundColor: 'transparent',
    textAlign: 'center',
    marginBottom: 40,
    paddingHorizontal: 30,
  },
  title: {
    fontSize: 25,
    color: 'white',
    backgroundColor: 'transparent',
    textAlign: 'center',
    marginBottom: 50,
  },
});
