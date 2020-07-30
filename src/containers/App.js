import React from 'react';
import {Button, Image, View, Text} from 'react-native';
import {createAppContainer} from 'react-navigation'; // 1.0.0-beta.27
import {createStackNavigator} from 'react-navigation-stack';

import Icon from 'react-native-vector-icons/FontAwesome';

import {createBottomTabNavigator} from 'react-navigation-tabs';

import LoginContainer from '../containers/login/LoginContainer';

import Chart from '../components/custom/CustomChart';

import WelcomeScreen from '../components/welcomeScreen/WelcomeScreen';

import Home from '../components/home/Home';

import ThongTinTaiKhoan from '../components/thongtintaikhoan/ThongTinTaiKhoan';
import ListTinTuc from '../components/tintuc/ListTinTuc';
import ChiTietTInTuc from '../components/tintuc/ChiTietTInTuc';
import DanhSachKhoaHoc from '../components/khoahoc/DanhSachKhoaHoc';
import ChiTietKhoaHoc from '../components/khoahoc/ChiTietKhoaHoc';
import DanhSachBaiHoc from '../components/khoahoc/DanhSachBaiHoc';
import ChiTietBaiHoc from '../components/khoahoc/ChiTietBaiHoc';

import DanhSachMonHocContainers from '../containers/tracnghiem/DanhSachMonHocContainers';
import DanhSachChuDeContainer from '../containers/tracnghiem/DanhSachChuDeContainer';


import LamBai from '../components/tracnghiem/LamBai';
import HoanThanh from '../components/tracnghiem/HoanThanh';
import HomeGiaoVien from '../components/giaovien/HomeGiaoVien';

// tao mới
import KiemtraCodeContainers from './kiemtra/KiemtraCodeContainers';

const TabNavigator = createBottomTabNavigator({
  Home: {
    screen: Home,
    path: '/',
    navigationOptions: {
      title: 'Trang chủ',
      tabBarIcon: ({focused, tintColor}) => {
        const iconName = `ios-information-circle${focused ? '' : '-outline'}`;
        return <Icon name="home" size={20} color="#900" />;
      },
    },
  },
});

const TAB = createAppContainer(TabNavigator);

const RootStack = createStackNavigator(
  {
    Init: {
      screen: WelcomeScreen,
    },
    Login: {
      screen: LoginContainer,
    },
    Home: {
      screen: Home,
    },
    ThongTinTaiKhoan: {
      screen: ThongTinTaiKhoan,
    },
    ListTinTuc: {
      screen: ListTinTuc,
    },
    ChiTietTInTuc: {
      screen: ChiTietTInTuc,
    },
    DanhSachKhoaHoc: {
      screen: DanhSachKhoaHoc,
    },
    ChiTietKhoaHoc: {
      screen: ChiTietKhoaHoc,
    },
    DanhSachBaiHoc: {
      screen: DanhSachBaiHoc,
    },
    ChiTietBaiHoc: {
      screen: ChiTietBaiHoc,
    },
    DanhSachMonHoc: {
      screen: DanhSachMonHocContainers,
    },
    DanhSachChuDe: {
      screen: DanhSachChuDeContainer,
    },
    LamBai: {
      screen: LamBai,
    },
    HoanThanh: {
      screen: HoanThanh,
    },
    HomeGiaoVien: {
      screen: HomeGiaoVien,
    },

// moi
KiemTraCode:{
  screen:KiemtraCodeContainers
},


    // se xoa sau
    MyModal: {
      screen: TAB,
      navigationOptions: {
        header: null,
        title: 'Home',
      },
    },
    Chart: {
      screen: Chart,
      navigationOptions: ({navigation}) => ({
        headerRight: null,
        title: 'Ahihi',
      }),
    },
  },

  {
    mode: 'card',
    headerMode: 'none',
  },
);

export default createAppContainer(RootStack);
