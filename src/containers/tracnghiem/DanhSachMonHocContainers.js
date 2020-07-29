//TungTX5

import React from 'react';

import DanhSachMonHoc from '../../components/tracnghiem/DanhSachMonHoc';

import {getDanhSachMonHocAction} from '../../redux/actions/tracnghiem/DanhSachMonHocActions';
import {connect} from 'react-redux';

class DanhSachMonHocContainers extends React.Component {
  render() {
    return <DanhSachMonHoc {...this.props} />;
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getDanhSachMonHocAction: (input) => {
      dispatch(getDanhSachMonHocAction(input));
    },
  };
};

const mapStateToProps = (state) => {
  console.log('data tra ve', state.getDanhSachMonHocReducers.response);
  return {
    error: state.getDanhSachMonHocReducers.error,
    isFetching: state.getDanhSachMonHocReducers.isFetching,
    response: state.getDanhSachMonHocReducers.response,
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(DanhSachMonHocContainers);
