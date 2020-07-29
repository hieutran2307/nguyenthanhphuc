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
  ImageBackground,
} from 'react-native';
import {SafeAreaView} from 'react-navigation';
import {Sizes} from '@dungdang/react-native-basic';
import Headers from '../custom/Headers';
import Icon from 'react-native-vector-icons/FontAwesome5';

export default class DanhSachBaiHoc extends React.Component {
  render() {
    const {navigation} = this.props;
    return (
      <View style={styles.container}>
        <ImageBackground
          source={require('../../res/images/laptrinhweb.jpg')}
          style={styles.header}>
          <Headers
            onPressBackButton={() => {
              this.props.navigation.goBack('');
            }}
          />
          <View style={{position: 'absolute'}}>
            <Text style={styles.textheader}>Lập trình c </Text>
          </View>
        </ImageBackground>

        <View style={styles.listbaihoc}>
          <View syle={styles.baihoc}>
            <View style={{marginHorizontal: Sizes.s30}}>
              <Text style={{fontSize: Sizes.s25, color: 'gray'}}>Chương 1</Text>
              <Text style={{fontSize: Sizes.s40, fontWeight: 'bold'}}>
                Chương 1: Cài đặt môi trường lập trình C
              </Text>
            </View>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('ChiTietBaiHoc')}>
              <View style={styles.noidungbaihoc}>
                <Image
                  style={styles.icon}
                  source={require('../../res/images/video.png')}
                />
                <Text style={styles.textnoidung}>Cài đặt Dev C++</Text>
              </View>
            </TouchableOpacity>
            <View style={styles.noidungbaihoc}>
              <Image
                style={styles.icon}
                source={require('../../res/images/video.png')}
              />
              <Text style={styles.textnoidung}>Cài đặt Visual studio 2019</Text>
            </View>
          </View>

          <View syle={styles.baihoc}>
            <View style={{marginHorizontal: Sizes.s30}}>
              <Text style={{fontSize: Sizes.s25, color: 'gray'}}>Chương 2</Text>
              <Text style={{fontSize: Sizes.s40, fontWeight: 'bold'}}>
                Chương 2: Giới thiệu ngôn ngữ lập trình C
              </Text>
            </View>
            <View style={styles.noidungbaihoc}>
              <Image
                style={styles.icon}
                source={require('../../res/images/video.png')}
              />
              <Text style={styles.textnoidung}>
                Giới thiệu ngô ngữ lập trình C
              </Text>
            </View>
            <View style={styles.noidungbaihoc}>
              <Image
                style={styles.icon}
                source={require('../../res/images/video.png')}
              />
              <Text style={styles.textnoidung}>
                Cách học ngôn ngữ C hiệu quả
              </Text>
            </View>
          </View>
        </View>
      </View>
    );
  }
}
const {width} = Dimensions.get('window');
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFF',
  },
  header: {
    flex: 1 / 4,
    resizeMode: 'cover',
  },
  wrapper: {
    width: width - 20,
    backgroundColor: '#FFFF',
    margin: 10,
    shadowOffset: {width: 0, height: 3},
    shadowOpacity: 0.2,
    padding: 10,
    paddingTop: 0,
    flexDirection: 'row',
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
  textheader: {
    marginTop: Sizes.s240,
    fontSize: Sizes.s60,
    color: '#FFFF',
  },
  listbaihoc: {
    flex: 1,
    marginTop: Sizes.s50,
  },
  noidungbaihoc: {
    width: '100%',
    height: Sizes.s140,
    backgroundColor: '#f4f5f9',
    marginTop: Sizes.s10,
    flexDirection: 'row',
  },
  icon: {
    width: Sizes.s60,
    height: Sizes.s60,
    marginHorizontal: Sizes.s30,
    marginTop: Sizes.s30,
    resizeMode: 'cover',
  },
  textnoidung: {
    marginTop: Sizes.s35,
    fontSize: Sizes.s35,
  },
});
