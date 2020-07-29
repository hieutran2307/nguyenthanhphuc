import React from 'react';
import {
  Button,
  Image,
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableHighlight,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import {SafeAreaView} from 'react-navigation';
import {Sizes} from '@dungdang/react-native-basic';
import Headers from '../custom/Headers';
import Icon from 'react-native-vector-icons/FontAwesome5';
import YoutubePlayer from 'react-native-yt-player';

export default class ChiTietBaiHoc extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Headers
            title="Chương 1: Cài đặt môi trường..."
            onPressBackButton={() => {
              this.props.navigation.goBack('');
            }}
          />
        </View>
        <View style={styles.ChiTietBaiHoc}>
          <View style={{marginTop: Sizes.s30, marginHorizontal: Sizes.s30}}>
            <Text style={{fontSize: Sizes.s30, color: 'gray'}}>Bài 1</Text>
            <Text
              style={{
                fontSize: Sizes.s60,
                color: '#FFFF',
                marginTop: Sizes.s20,
              }}>
              Cài đặt Dev C++
            </Text>
          </View>
          <View style={{marginTop: Sizes.s80}}>
            <YoutubePlayer
              loop
              topBar={TopBar}
              videoId="Z1LmpiIGYNs"
              autoPlay
              onFullScreen={this.onFullScreen}
              onStart={() => console.log('onStart')}
              onEnd={() => alert('on End')}
            />
          </View>
        </View>
        <View style={styles.viewhoanthanh}>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.txtbutton}>HOÀN THÀNH</Text>
          </TouchableOpacity>
          <Image
            style={styles.icon}
            source={require('../../res/images/next.png')}
          />
        </View>
      </View>
    );
  }
}
const TopBar = ({play, fullScreen}) => (
  <View
    style={{
      alignSelf: 'center',
      position: 'absolute',
      height: Sizes.s100,
    }}></View>
);
const {width} = Dimensions.get('window');
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFF',
  },
  header: {
    flex: 1 / 7,
    backgroundColor: '#283045',
  },

  imgtintuc: {
    width: Sizes.s260,
    height: Sizes.s260,
  },
  tieude: {
    flex: 1,
    marginLeft: Sizes.s15,
    fontSize: Sizes.s35,
  },
  ChiTietBaiHoc: {
    flex: 1,
    backgroundColor: '#161a25',
  },
  viewhoanthanh: {
    flex: 1 / 8,
    backgroundColor: '#283045',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  button: {
    marginTop: Sizes.s40,
    width: Sizes.s340,
    height: Sizes.s70,
    backgroundColor: '#f06c5b',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: Sizes.s100,
  },
  txtbutton: {
    fontSize: Sizes.s30,
    color: '#FFFF',
  },
  icon: {
    marginTop: Sizes.s20,
    width: Sizes.s100,
    height: Sizes.s100,
  },
});
