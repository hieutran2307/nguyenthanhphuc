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
} from 'react-native';
import {SafeAreaView} from 'react-navigation';
import {Sizes} from '@dungdang/react-native-basic';
import Headers from '../custom/Headers';
import Icon from 'react-native-vector-icons/FontAwesome5';
import HTML from 'react-native-render-html';
const htmlContent = `
    <p>Trong qu&aacute; tr&igrave;nh học tập tại trường, Văn Đức gi&agrave;nh thời gian nghi&ecirc;n cứu v&agrave; chế tạo ra những sản phẩm tự động h&oacute;a để r&egrave;n luyện tay nghề. Đến nay, d&ugrave; chưa tốt nghiệp, ch&agrave;ng trai n&agrave;y đ&atilde; được doanh nghiệp nhận v&agrave;o l&agrave;m việc.</p> <p><img src="https://caothang.edu.vn/uploads/images/Tin_Tuc/Tin_Giao_Duc/Nguyen-Anh-Duc-Sinh-vi%C3%AAn-Cao-Thang_1.jpg" alt="" /></p> <p>Nguyễn Văn Đức y&ecirc;u ng&agrave;nh m&igrave;nh học v&agrave; kh&ocirc;ng ngừng t&igrave;m t&ograve;i s&aacute;ng tạo (Ảnh C&Ocirc;NG MINH)</p> <h2><strong>Học nghề để theo đuổi đam m&ecirc;</strong></h2> <p>&nbsp; &nbsp; &nbsp;Nguyễn Văn Đức (21 tuổi) quyết định học ng&agrave;nh&nbsp;c&ocirc;ng nghệ&nbsp;kỹ thuật điều khiển tự động h&oacute;a tại&nbsp;<strong>Trường CĐ Kỹ thuật Cao Thắng</strong>&nbsp;để theo đuổi sở th&iacute;ch từ nhỏ của m&igrave;nh. Đức kể lại, ngay từ năm lớp 4, mỗi lần đi học về nh&igrave;n thấy những chiếc xe m&aacute;y được lắp đ&egrave;n trang tr&iacute; đẹp mắt khiến cậu rất t&ograve; m&ograve;. Thấy chiếc đ&egrave;n pin trong nh&agrave; bị hư, Đức th&aacute;o ra xem b&ecirc;n trong c&oacute; g&igrave; m&agrave; lại c&oacute; thể l&agrave;m đ&egrave;n s&aacute;ng, rồi cậu m&agrave;y m&ograve; nối thử d&acirc;y trong đ&egrave;n pin. Niềm y&ecirc;u th&iacute;ch cứ lớn dần l&ecirc;n. Xem c&aacute;c chương tr&igrave;nh về robot, về&nbsp;cuộc thi Robocon&nbsp;tr&ecirc;n tivi, Đức bị cuốn h&uacute;t. "<em><strong>Em muốn sau n&agrave;y m&igrave;nh sẽ chế tạo ra những sản phẩm như thế, n&ecirc;n l&ecirc;n mạng t&igrave;m hiểu xem c&aacute;c ng&agrave;nh học n&agrave;o c&oacute; thể gi&uacute;p m&igrave;nh thực hiện ước mơ. V&agrave; em quyết định chọn ng&agrave;nh c&ocirc;ng nghệ kỹ thuật điều khiển tự động h&oacute;a</strong></em>", Đức cho biết.</p> <p><img src="https://caothang.edu.vn/uploads/images/Tin_Tuc/Tin_Giao_Duc/Nguyen-Anh-Duc-Sinh-vi%C3%AAn-Cao-Thang_2.jpg" alt="" /></p> <p>Nguyễn Văn Đức b&ecirc;n sản phẩm m&igrave;nh chế tạo (Ảnh C&Ocirc;NG MINH)</p> <p>&nbsp; &nbsp; &nbsp;Khi trở th&agrave;nh t&acirc;n sinh vi&ecirc;n, ngay trong buổi sinh hoạt đầu ti&ecirc;n tại trường, Đức được tiếp x&uacute;c với c&aacute;c anh chị sinh vi&ecirc;n năm 2, năm 3, nghe giới thiệu về nội dung ng&agrave;nh học, c&ocirc;ng việc trong tương lai..., Đức cảm thấy mọi thứ v&ocirc; c&ugrave;ng hấp dẫn. Đến khi v&agrave;o học rồi, Đức c&agrave;ng cảm thấy sự lựa chọn của m&igrave;nh l&agrave; đ&uacute;ng đắn. Đức tham gia c&acirc;u lạc bộ Thực h&agrave;nh điều khiển của trường, t&igrave;m t&ograve;i học hỏi th&ecirc;m về điện tử, thiết kế mạch, lập tr&igrave;nh...</p>
`;
export default class ChiTietTInTuc extends React.Component {
  render() {
    const {navigation} = this.props;
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Headers
            title="Chi tiết tin tức"
            onPressBackButton={() => {
              this.props.navigation.goBack('');
            }}
          />
        </View>
        <View style={styles.chitiettintuc}>
            <ScrollView>
            <HTML html={htmlContent} imagesMaxWidth={Dimensions.get('window').width} />

            </ScrollView>
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
  chitiettintuc:{
      flex:1,
  }
});
