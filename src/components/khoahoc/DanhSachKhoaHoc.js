import React from 'react';
import {
  Button,
  Image,
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import {SafeAreaView} from 'react-navigation';
import {Sizes} from '@dungdang/react-native-basic';
import Headers from '../custom/Headers';
import Icon from 'react-native-vector-icons/FontAwesome5';
import HTML from 'react-native-render-html';

export default class DanhSachKhoaHoc extends React.Component {
  render() {
    const {navigation} = this.props;
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Headers
            title="Danh sách khoá học"
            onPressBackButton={() => {
              this.props.navigation.goBack('');
            }}
          />
        </View>
        <View style={styles.listkhoahoc}>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('ChiTietKhoaHoc')}>
            <View style={styles.wrapper}>
              <Image
                style={styles.imgkhohoc}
                source={require('../../res/images/kythuatlaptrinh.png')}
              />
              <Text style={styles.tieude}>Kỹ thuật lập trình</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('ChiTietKhoaHoc')}>
            <View style={styles.wrapper}>
              <Image
                style={styles.imgkhohoc}
                source={require('../../res/images/laptrinhweb.jpg')}
              />
              <Text style={styles.tieude}>Lập trình web</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('ChiTietKhoaHoc')}>
            <View style={styles.wrapper}>
              <Image
                style={styles.imgkhohoc}
                source={require('../../res/images/laptrinh.jpg')}
              />
              <Text style={styles.tieude}>Lập trình di động</Text>
            </View>
          </TouchableOpacity>
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
    flex: 1 / 7,
    backgroundColor: '#f06c5b',
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
  imgkhohoc: {
    width: Sizes.s260,
    height: Sizes.s260,
  },
  tieude: {
    flex: 1,
    marginLeft: Sizes.s15,
    fontSize: Sizes.s35,
  },
  chitiettintuc: {
    flex: 1,
  },
  listkhoahoc: {
    flex: 1,
  },
});
