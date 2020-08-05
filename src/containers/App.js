import React from 'react';
import {Button, Image, View, Text} from 'react-native';
import {createAppContainer} from 'react-navigation'; // 1.0.0-beta.27
import {createStackNavigator} from 'react-navigation-stack';

import Icon from 'react-native-vector-icons/FontAwesome';

import {createBottomTabNavigator} from 'react-navigation-tabs';

import LoginContainer from '../containers/login/LoginContainer';
import WelcomeScreen from '../components/welcomeScreen/WelcomeScreen';

//chuc nang admin
import HomeAdmin from '../components/admin/HomeAdmin';

//quan ly khoa hoc
import DanhSachMonHoc from '../components/admin/monhoc/DanhSachMonHoc';
import ThemMonHoc from '../components/admin/monhoc/ThemMonHoc';

//qua ly lop hoc
import DanhSachLopHoc from '../components/admin/lophoc/DanhSachLopHoc';
import ThemLopHoc from '../components/admin/lophoc/ThemLopHoc';

//quan ly lop hoc phan
import DanhSachLopHocPhan from '../components/admin/lophoc/DanhSachLopHocPhan';
import ThemLopHocPhan from '../components/admin/lophoc/ThemLopHocPhan';
// =========== chuc nang admin end ===============


//chuc nang sinh vien
import HomeSinhVien from '../components/sinhvien/HomeSinhVien';



const RootStack = createStackNavigator(
  {
    Init: {
      screen: WelcomeScreen,
    },
    Login:{
      screen:LoginContainer
    },
  //chuc nang sinh vien
  HomeSinhVien:{
    screen:HomeSinhVien
  },
  // chuc nang admin
  HomeAdmin:{
    screen:HomeAdmin
  },
  // quan ly khoa hoc
  DanhSachMonHoc:{
    screen:DanhSachMonHoc
  },
  ThemMonHoc:{
    screen:ThemMonHoc
  },

  //quan ly lop hoc
  DanhSachLopHoc:{
    screen:DanhSachLopHoc
  },
  ThemLopHoc:{
    screen:ThemLopHoc
  },
  //quan ly lop hoc phan 
  DanhSachLopHocPhan:{
    screen:DanhSachLopHocPhan
  },
  ThemLopHocPhan:{
    screen:ThemLopHocPhan
  }

  //=========== chuc nang admin end
    
  },

  {
    mode: 'card',
    headerMode: 'none',
  },
);

export default createAppContainer(RootStack);
