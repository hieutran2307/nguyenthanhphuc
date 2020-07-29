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

export default class ChiTietKhoaHoc extends React.Component {
  render() {
    const {navigation} = this.props;
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Headers
            title="Chi tiết khoá học"
            onPressBackButton={() => {
              this.props.navigation.goBack('');
            }}
          />
        </View>
        <View style={styles.viewchitietkhoahoc}>
          <ScrollView style={{flex: 1}}>
            <View style={styles.wrapper}>
              <View style={styles.viewHeader}>
                <Image
                  style={styles.imgtitleHeader}
                  source={require('../../res/images/info.png')}
                />
                <Text style={styles.textHeader}>Giới thiệu</Text>
              </View>
              <View style={styles.noidung}>
                <Text>
                  Ngôn ngữ C++ được phát triển từ ngôn ngữ C. C++ không phải là
                  ngôn ngữ hướng đối tượng hoàn toàn mà là ngôn ngữ “đa hướng”.
                  Vì C++ hỗ trợ cả lập trình hướng hành động và lập trình hướng
                  đối tượng. Mục tiêu của C++ là tiếp cận những ý tưởng của
                  phương pháp luận hướng đối tượng và trừu tượng dữ liệu. C++ là
                  một ngôn ngữ lập trình tiến tiến, mạnh trong các ngôn ngữ lập
                  trình hiện nay, nó được sử dụng bởi hàng triệu lập trình viên
                  trên thế giới. Các đặc tính của C ++ cho phép người lập trình
                  xây dựng những thư viện phần mềm có chất lượng cao phục vụ
                  những đề án lớn. C++ là ngôn ngữ thích hợp cho việc xây dựng
                  những chương trình lớn như các hệ soạn thảo, chương trình
                  dịch, các hệ quản trị cơ sở dữ liệu, các hệ truyền thông…Nó là
                  một trong những ngôn ngữ phổ biến để viết các ứng dụng máy
                  tính – và ngôn ngữ thông dụng nhất để lập trình games. Sau khi
                  hoàn thành khóa học lập trình C, C++ căn bản này bạn có thể
                  làm quen được với môi trường làm việc của C/C++ và có thể làm
                  những bài toán đơn giản với C/C++ ở mức khó hơn.
                </Text>
              </View>
            </View>

            <View style={styles.wrapper}>
              <View style={styles.viewHeader}>
                <Image
                  style={styles.imgtitleHeader}
                  source={require('../../res/images/courses.png')}
                />
                <Text style={styles.textHeader}>Nội dung khoá học</Text>
              </View>
              <View style={[styles.noidung, {flexDirection: 'row'}]}>
                <View style={{flexDirection: 'row'}}>
                  <Image
                    style={styles.imgnoidung}
                    source={require('../../res/images/userinfo.png')}
                  />
                  <Text
                    style={{
                      marginLeft: Sizes.s2,
                      fontSize: Sizes.s30,
                      marginTop: Sizes.s10,
                    }}>
                    Sinh vien đăng ký
                  </Text>
                </View>

                <View style={{marginLeft: Sizes.s340}}>
                  <Text style={{fontSize: Sizes.s50, marginLeft: Sizes.s20}}>
                    15
                  </Text>
                </View>
              </View>
              <View style={[styles.noidung, {flexDirection: 'row'}]}>
                <View style={{flexDirection: 'row'}}>
                  <Image
                    style={styles.imgnoidung}
                    source={require('../../res/images/timekhoahoc.png')}
                  />
                  <Text
                    style={{
                      marginLeft: Sizes.s2,
                      fontSize: Sizes.s30,
                      marginTop: Sizes.s10,
                    }}>
                    Thời gian
                  </Text>
                </View>

                <View style={{marginLeft: Sizes.s340}}>
                  <Text style={{fontSize: Sizes.s50, marginLeft: Sizes.s20}}>
                    120 Giờ
                  </Text>
                </View>
              </View>
              <View style={[styles.noidung, {flexDirection: 'row'}]}>
                <View style={{flexDirection: 'row'}}>
                  <Image
                    style={styles.imgnoidung}
                    source={require('../../res/images/video.png')}
                  />
                  <Text
                    style={{
                      marginLeft: Sizes.s2,
                      fontSize: Sizes.s30,
                      marginTop: Sizes.s10,
                    }}>
                    Video
                  </Text>
                </View>

                <View style={{marginLeft: Sizes.s340 + Sizes.s160}}>
                  <Text style={{fontSize: Sizes.s50, marginLeft: Sizes.s20}}>
                    10
                  </Text>
                </View>
              </View>
            </View>
          </ScrollView>
        </View>
        <View style={styles.btnxacnhan}>
          <TouchableOpacity style={styles.btn} onPress={()=>this.props.navigation.navigate('DanhSachBaiHoc')}>
            <Text style={styles.textbtn}>BẮT ĐẦU</Text>
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
  },
  tieude: {
    flex: 1,
    marginLeft: Sizes.s15,
    fontSize: Sizes.s35,
  },
  viewchitietkhoahoc: {
    flex: 1,
  },
  btnxacnhan: {
    flex: 1 / 8,
    backgroundColor: '#f6f6f6',
  },
  btn: {
    marginTop: Sizes.s20,
    marginHorizontal: Sizes.s30,
    backgroundColor: '#f06c5b',
    height: Sizes.s100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textbtn: {
    fontSize: Sizes.s40,
    color: '#FFFF',
  },
  wrapper: {
    width: width - 20,
    backgroundColor: '#FFFF',
    margin: 10,
    shadowOffset: {width: 0, height: 3},
    shadowOpacity: 0.2,
    padding: 10,
    paddingTop: 0,
  },
  imgtitleHeader: {
    width: Sizes.s60,
    height: Sizes.s60,
  },
  viewHeader: {
    flex: 1,
    flexDirection: 'row',
    borderBottomWidth: Sizes.s2,
    borderBottomColor: 'gray',
  },
  textHeader: {
    fontSize: Sizes.s30,
  },
  noidung: {
    flex: 1,
    marginTop: Sizes.s10,
  },
  viewHeader: {
    flex: 1,
    flexDirection: 'row',
    borderBottomWidth: Sizes.s2,
    borderBottomColor: 'gray',
  },
  imgnoidung: {
    width: Sizes.s50,
    height: Sizes.s50,
  },
});
