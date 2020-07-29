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

export default class LamBai extends React.Component {
  render() {
    const {navigation} = this.props;
    return (
      <View style={styles.container}>
        <View style={styles.header}>
        <Headers
           
            onPressBackButton={() => {
              this.props.navigation.goBack('');
            }}
          />
          <Text style={{
              fontSize:Sizes.s40,
              marginTop:Sizes.s20,
              marginLeft:Sizes.s100,
              color:'gray'


          }}> 
              Bài tập
              </Text>
            <Text style={styles.txtbaitap} >
                Kỹ thuật lập trình
                </Text>
        </View>
        <View style={styles.listcauhoi}>
          <View style={styles.cauhoi}>
              <Text style={styles.textcauhoi}>Những tên biến nào dưới đây được viết đúng theo quy tắc đặt tên của ngôn ngữ lập trình C?
                  </Text>
                  <View style={styles.wrapper}>
                 <Text style={styles.textcauhoitraloi}>
                 A. diem toan
                 </Text>

                  </View>
                  <View style={styles.wrapper}>
                 <Text style={styles.textcauhoitraloi}>
                 B. 3diemtoan
                 </Text>

                  </View>
                  <View style={styles.wrapper}>
                 <Text style={styles.textcauhoitraloi}>
                 C. _diemtoan
                 </Text>

                  </View>
                  <View style={styles.wrapper}>
                 <Text style={styles.textcauhoitraloi}>
                 D. -diemtoan
                 </Text>

                  </View>
              </View>
             
        </View>
        <View style={styles.viewbtn}>
        <TouchableOpacity style={styles.button} onPress={()=>this.props.navigation.navigate('HoanThanh')}>
            <Text style={styles.txtbutton}>HOÀN THÀNH</Text>
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
  txtbaitap:{
      marginTop:Sizes.s10,
    fontSize:Sizes.s40,
    marginLeft:Sizes.s100,
    color:"#FFFF",
  },
  wrapper: {
    marginTop:Sizes.s30,
    width: width - 20,
    backgroundColor: '#FFFF',
    margin: 10,
    shadowOffset: {width: 0, height: 3},
    shadowOpacity: 0.2,
    padding: 10,
    paddingTop: 0,
    flexDirection: 'row',
  },
  listcauhoi:{
      flex:1
  },
  cauhoi:{
      marginTop:Sizes.s10,
      marginHorizontal:Sizes.s30
  },
  textcauhoi:{
      fontSize:Sizes.s40
  },
  textcauhoitraloi:{
    fontSize:Sizes.s30
  },
viewbtn:{
    flex:1/9,
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
 
});
