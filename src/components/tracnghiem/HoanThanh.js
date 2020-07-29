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

export default class HoanThanh extends React.Component {
  render() {
    return (
      <View style={styles.container}>
     
        <View style={styles.viewketqua}>
        <Image
            style={styles.image}
            source={require('../../res/images/success.png')}
          />
        <View style={{
            marginTop:Sizes.s20
        }}>
            <Text style={{
                color:'#FFFF',
                alignSelf:'center',
                fontSize:Sizes.s40
            }}>
                Số câu trả lời đúng
                </Text>

                <Text style={{
                color:'#FFFF',
                alignSelf:'center',
                fontSize:Sizes.s100,
                fontWeight:'bold',
                marginTop:Sizes.s20
            }}>
               1/10
                </Text>
            </View>
        </View>
        <View style={styles.viewhoanthanh}>
          <TouchableOpacity style={styles.button} onPress={()=> this.props.navigation.navigate('Home')}>
            <Text style={styles.txtbutton}>KẾT THÚC</Text>
          </TouchableOpacity>
      
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
  viewketqua: {
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
  image:{
      marginTop:Sizes.s200,
      width:Sizes.s340+ Sizes.s100,
      height:Sizes.s340+ Sizes.s100,
      alignSelf:'center'

  }
});
