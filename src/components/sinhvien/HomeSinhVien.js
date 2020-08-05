import React from 'react';
import {
  Image,
  View,
  Text,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import {SafeAreaView} from 'react-navigation';
import {Sizes} from '@dungdang/react-native-basic';
import Header from '../custom/Header';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {userProfile} from '../../config/settings';
import {/* userProfile,*/ serverpic} from '../../config/settings';

export default class HomeSinhVien extends React.Component {
  render() {
    return (
      <ImageBackground
        source={require('../../res/images/bg.jpg')}
        style={styles.image}>
        <Header title="CAO ĐẲNG KỸ THUẬT CAO THẮNG" />
        <View style={styles.viewavatar}>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('ThongTinTaiKhoan')}>
            <Image
              source={{
                uri: `${serverpic}/${userProfile.data.hinhanh}`,
              }}
              style={styles.avatar}
            />
          </TouchableOpacity>
          <Text style={styles.textavatar}>{userProfile.data.hovaten}</Text>
        </View>
        <View style={styles.lichsuview}>
          <Image
            style={styles.imagelichsu}
            source={require('../../res/images/lichsu.png')}
          />
        </View>
        <View style={styles.chucnangview}>
          <Text style={styles.txtchucnang}>
            Xin chào, bạn chọn tính năng gì ?
          </Text>
          <View style={styles.fullField}>
            <View style={styles.colMainLeft}>
              <TouchableOpacity
                onPress={() => this.props.navigation.navigate('KiemTraCode')}>
                <View
                  colors={['rgb(150,150,150)', 'rgb(105,105,105)']}
                  style={styles.boxMain}>
                  <View
                    style={[
                      styles.highLightBoxMain,
                      {backgroundColor: '#f06955'},
                    ]}>
                    <View style={styles.viewIonChucNang}>
                      <Image
                        source={require('../../res/images/quizs.png')}
                        style={styles.imageBoxChucNang}
                      />
                    </View>
                    <Text style={styles.textchucnang}>Kiểm tra</Text>
                  </View>
                </View>
              </TouchableOpacity>
            </View>
            <View style={styles.colMainRight}>
              <TouchableOpacity>
                <View
                  colors={['rgb(150,150,150)', 'rgb(105,105,105)']}
                  style={styles.boxMain}>
                  <View
                    backgroundColor="#58cba7"
                    style={styles.highLightBoxMain}>
                    <View style={styles.viewIonChucNang}>
                      <Image
                        source={require('../../res/images/rank.png')}
                        style={styles.imageBoxChucNang}
                      />
                    </View>
                    <Text style={styles.textchucnang}> Điểm kiểm tra </Text>
                  </View>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  image: {
    flex: 1,
  },
  viewavatar: {
    position: 'absolute',
    height: Sizes.s40,
    marginTop: Sizes.s260,
    marginHorizontal: Sizes.s30,
    flexDirection: 'row',
  },
  avatar: {
    width: Sizes.s140,
    height: Sizes.s140,
    borderRadius: Sizes.s100,
  },
  textavatar: {
    position: 'absolute',
    fontSize: Sizes.s35,
    marginLeft: Sizes.s140,
    color: '#FFFF',
    fontWeight: 'bold',
  },
  lichsuview: {
    width: Sizes.s140,
    height: Sizes.s140,
    borderRadius: Sizes.s100,
    shadowColor: '#AFAEAF',
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.0,

    elevation: 24,
    backgroundColor: '#FFFF',
    marginTop: Sizes.s260 + Sizes.s50,
    marginLeft: Sizes.s340 + Sizes.s100,
  },
  imagelichsu: {
    width: Sizes.s100,
    height: Sizes.s100,
    alignSelf: 'center',
  },
  chucnangview: {
    flex: 1,
    marginTop: Sizes.s30,
    marginHorizontal: Sizes.s30,
  },
  txtchucnang: {
    fontSize: Sizes.s30,
    fontWeight: 'bold',
  },
  fullField: {
    flex: 1,
    flexDirection: 'row',
  },
  colMainLeft: {
    flex: 1,
    marginRight: Sizes.s15,
  },
  boxMain: {
    height: Sizes.s160,
    borderWidth: 0,
    borderRadius: 8,
    marginTop: Sizes.s30,
    marginBottom: Sizes.s30,
    elevation: Sizes.s25,
  },
  highLightBoxMain: {
    flexDirection: 'row',
    height: Sizes.s160,
    borderWidth: 0,
    borderRadius: Sizes.s15,
    paddingTop: Sizes.s30,
    paddingLeft: Sizes.s25,
    paddingRight: Sizes.s25,
  },
  colMainRight: {
    flex: 1,
    marginLeft: Sizes.s15,
  },
  viewIonChucNang: {
    width: Sizes.s100,
    height: Sizes.s100,
    backgroundColor: '#FFFF',
    borderRadius: 100,
  },
  textchucnang: {
    flex: 1,
    marginTop: Sizes.s20,
    marginLeft: Sizes.s10,
    color: '#FFFF',
    fontSize: Sizes.s30,
    fontWeight: 'bold',
  },
  imageBoxChucNang: {
    width: Sizes.s60,
    height: Sizes.s60,
    alignSelf: 'center',
    marginTop: Sizes.s20,
  },
  videoNoiBat: {
    flex: 1,
  },
  listKhoaHoc: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  viewKhoaHocNoiBat: {
    width: Sizes.s340,
    height: Sizes.s240,
    borderWidth: 0,
    borderRadius: Sizes.s15,
    justifyContent: 'flex-end',
  },
  viewText: {
    width: '100%',
    height: Sizes.s40,
    backgroundColor: '#e0e6cb',
  },
  textKhoaHoc: {
    fontSize: Sizes.s30,
  },
});
