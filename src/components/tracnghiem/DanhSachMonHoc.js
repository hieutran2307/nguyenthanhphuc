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
  FlatList,
} from 'react-native';
import {SafeAreaView} from 'react-navigation';
import {Sizes} from '@dungdang/react-native-basic';
import Headers from '../custom/Headers';
import {serverhinhanh} from '../../config/settings';

import Icon from 'react-native-vector-icons/FontAwesome5';

export default class DanhSachMonHoc extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      danhsachkiemtra: [],
    };
  }
  componentDidMount() {
    this.props.getDanhSachMonHocAction();
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Headers
            title="Danh sách kiểm tra"
            onPressBackButton={() => {
              this.props.navigation.goBack('');
            }}
          />
        </View>

        <View style={styles.listtintuc}>
          <FlatList
            
            data={this.props.response}
            renderItem={({item}) => (
              <TouchableOpacity
                onPress={() =>
                  this.props.navigation.navigate('DanhSachChuDe')
                }>
                <View style={styles.wrapper}>
                  <Image
                    style={styles.imgtintuc}
                    source={{
                      uri: `${serverhinhanh}/monhoc/${item.hinhanh}`,
                    }}
                  />
                  <View
                    style={{
                      flexDirection: 'column',
                      marginLeft: Sizes.s15,
                      flex: 1,
                    }}>
                    <Text style={styles.tieude}>Môn học: {item.tenmonhoc}</Text>
                    <Text style={styles.tieude}>
                      Số tín chỉ: {item.sotinchi}
                    </Text>
                    <Text style={styles.tieude}>Số tiết: {item.sotiet}</Text>
                  </View>
                </View>
              </TouchableOpacity>
            )}
          />
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
    width: Sizes.s200 + Sizes.s10,
    height: Sizes.s200 + Sizes.s10,
    resizeMode: 'cover',
  },
  tieude: {
    marginLeft: Sizes.s15,
    fontSize: Sizes.s35,
    marginHorizontal: Sizes.s30,
    marginTop: Sizes.s15,
  },
  noidung: {
    color: '#f06c5b',
    marginLeft: Sizes.s15,
    fontSize: Sizes.s35,
  },
  listtintuc: {
    flex: 1,
  },
});
