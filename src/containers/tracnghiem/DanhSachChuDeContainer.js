

import React from "react";

import DanhSachChuDe from "../../components/tracnghiem/DanhSachChuDe";

import {
    getDanhSachChuDeAction
} from "../../redux/actions/tracnghiem/DanhSachChuDeAction";
import { connect } from "react-redux";

class DanhSachChuDeContainer extends React.Component {
  

  render() {
    return <DanhSachChuDe {...this.props} />;
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getDanhSachChuDeAction: (input) => {
      dispatch(getDanhSachChuDeAction(input));
    },
  };
};

const mapStateToProps = (state) => {
    console.log("data danh sach chu de container",state.getDanhSachChuDeReducers.respons)
  return {
    error: state.getDanhSachChuDeReducers.error,
    isFetching: state.getDanhSachChuDeReducers.isFetching,
    response: state.getDanhSachChuDeReducers.response,
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DanhSachChuDeContainer);
