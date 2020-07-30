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
  TextInput,
} from 'react-native';
import {SafeAreaView} from 'react-navigation';
import {Sizes} from '@dungdang/react-native-basic';
import Headers from '../custom/Headers';
import {serverhinhanh} from '../../config/settings';
import NextArrowButton from '../custom/NextArrowButton';

import Icon from 'react-native-vector-icons/FontAwesome5';

export default class KiemtraCode extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      code: '',
    };
  }
  onCodeChange = (value) => {
    this.setState({
      code: value,
    });
  };

  onPressLogin = async () => {
    const {postKiemTraCodeAction} = this.props;
    const {code} = this.state;
    postKiemTraCodeAction({
        code: code
        });
  };
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Headers
            title="Thông tin kiểm tra"
            onPressBackButton={() => {
              this.props.navigation.goBack('');
            }}
          />
        </View>

        <ScrollView>
          <View style={styles.listtintuc}>
            <Image
              style={styles.img}
              source={require('../../res/images/test.png')}
            />
            <TextInput
              placeholder="Vui lòng nhập mã code"
              style={styles.input}
              value={this.state.code}
              onChangeText={(text) => this.onCodeChange(text)}
            />
          </View>
          <NextArrowButton
            label="XÁC NHẬN"
            handleNextButton={() => this.onPressLogin()}
          />
        </ScrollView>
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
    flex: 1 / 3,
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
    marginTop: Sizes.s260,
    marginHorizontal: Sizes.s30,
  },
  img: {
    width: Sizes.s340,
    height: Sizes.s340,
    alignSelf: 'center',
  },
  input: {
    backgroundColor: 'rgba(224, 231, 255, 0.20)', // '#E0E7FF' 20%
    borderWidth: 0.5,
    borderColor: '#4abf91',
    borderRadius: Sizes.s15,
    fontSize: Sizes.s25,
    color: '#2E384D',
    height: Sizes.s75,
    paddingVertical: Sizes.s20,
    paddingHorizontal: Sizes.s25,
  },
});
