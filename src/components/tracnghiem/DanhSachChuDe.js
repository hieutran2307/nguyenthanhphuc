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
  TouchableOpacity
} from 'react-native';
import {SafeAreaView} from 'react-navigation';
import {Sizes} from '@dungdang/react-native-basic';
import Headers from '../custom/Headers';
import Icon from 'react-native-vector-icons/FontAwesome5';

export default class DanhSachChuDe extends React.Component {
  render() {
    const {navigation} = this.props;
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Headers
            title="Danh sách chủ đề"
            onPressBackButton={() => {
              this.props.navigation.goBack('');
            }}
          />
        </View>
        <View style={styles.listtintuc}>
        <TouchableOpacity onPress={()=>this.props.navigation.navigate('LamBai')}>

          <View style={styles.wrapper}>
            <Image
              style={styles.imgtintuc}
              source={require('../../res/images/kythuatlaptrinh.png')}
            />
            <Text style={styles.tieude}>
            Kỹ thuật lập trình
            </Text>
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
  imgtintuc: {
    width: Sizes.s260,
    height: Sizes.s260,
    resizeMode:'cover'
  },
  tieude: {
    flex: 1,
    marginLeft: Sizes.s15,
    fontSize: Sizes.s35,
  },
  listtintuc:{
    flex:1
  }
});
