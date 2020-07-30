import React, {Component} from 'react';
import KiemtraCode from '../../components/kiemtra/KiemtraCode';
import {
  postKiemTraCodeAction,
  changeStateKiemTraCodeAction,
} from '../../redux/actions/kiemtra/KiemtraCodeActions';
import {connect} from 'react-redux';

class KiemtraCodeContainers extends React.Component {
  // componentDidMount() {
  // }

  componentDidUpdate() {}
  render() {
    return <KiemtraCode {...this.props} />;
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    postKiemTraCodeAction: (input) => {
      dispatch(postKiemTraCodeAction(input));
    },
  
  };
};

const mapStateToProps = (state) => {
  return {
    error: state.KiemtraCodeReducers.error,
    loginState: state.KiemtraCodeReducers.state, //erro: -1, Success: 1, default:0
    loading: state.KiemtraCodeReducers.loading,
    statusCode: state.KiemtraCodeReducers.statusCode,
    data: state.KiemtraCodeReducers.data,
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(KiemtraCodeContainers);
