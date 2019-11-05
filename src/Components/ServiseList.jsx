import React from 'react';
import { connect } from 'react-redux';
import Store from '../Store';
import { EDIT_SERVISE_DATA, REMOVE_SERVICE } from '../Actions/actionsTypes';


class ServiseList extends React.Component {
  onEditClick = (el) => {
    const { name, price, id, created } = el;
    this.props.onEditButton(name, price, id, created)
  }

  onDeleteButton = (id) => {
    this.props.onDeleteButton(id)
  }

  render() {
    const { list } = this.props
    console.log(list)

    return (
      <ul className="servise-list">
        {list.sort((a, b) => a.created - b.created).map(el =>
          <li className='servise-list__item' key={el.id}>
            <p className='servise-list__text'>{el.name} {el.price}</p>
            <div className="servise-list__inner">
              <button className='service-list__btn' onClick={() => this.onEditClick(el)}>Редактировать</button>
              <button className='service-list__btn' onClick={() => this.onDeleteButton(el.id)}>Удалить</button>
            </div>
          </li>)}
      </ul>
    )
  }
}

const mapStateToProps = (state) => {
  const { serviceListState } = state;
  return { list: serviceListState };
}

const mapDispatchToProps = (dispatch) => {
  return {
    onEditButton: (name, price, id, created) => {
      dispatch({
        type: EDIT_SERVISE_DATA,
        payload: { name: name, value: price, id: id, created: created }
      })
    },
    onDeleteButton: (id) => {
      dispatch({
        type: REMOVE_SERVICE,
        payload: { id: id }
      })
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ServiseList);