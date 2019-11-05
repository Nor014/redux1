import React from 'react';
import Store from '../Store';
import { connect } from 'react-redux';
import { CHANGE_SERVICE_FIELD, ADD_SERVICE, EDIT_SERVISE_CANCEL } from '../Actions/actionsTypes';

class InputForm extends React.Component {
  onInputChange = (event) => {
    const { name, value } = event.target;
    this.props.onChange(name, value)
  }

  onInputSubmite = (event) => {
    event.preventDefault();
    this.props.onSubmit(this.props.item.serviceName, this.props.item.servicePrice, this.props.item.id, this.props.item.created);
  }

  onInputCancel = () => {
    this.props.onCancel()
  }

  render() {
    const item = this.props.item;

    return (
      <form className="input" onSubmit={this.onInputSubmite}>
        <input type="text" name='serviceName' className="input__form" onChange={(event) => this.onInputChange(event)} value={item.serviceName} />
        <input type="text" name='servicePrice' className="input__form" onChange={(event) => this.onInputChange(event)} value={item.servicePrice} />
        <button type='submit' className="input__submit">Save</button>

        {this.props.item.id && <button type='button' onClick={this.onInputCancel}>Cancel</button>}
      </form>
    )
  }
}

const mapStateToProps = (state) => {
  const { serviceAddState } = state;
  return { item: serviceAddState };
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onChange: (name, value) => {
      dispatch({
        type: CHANGE_SERVICE_FIELD,
        payload: { name, value }
      })
    },
    onSubmit: (name, value, id, created) => {
      dispatch({
        type: ADD_SERVICE,
        payload: { name: name, value: value, id: id, created: created }
      })
    },
    onCancel: () => {
      dispatch({
        type: EDIT_SERVISE_CANCEL
      })
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(InputForm);