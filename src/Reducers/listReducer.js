import nanoid from 'nanoid';
import { ADD_SERVICE, REMOVE_SERVICE } from '../Actions/actionsTypes';

const initialState = [
  {
    id: nanoid(),
    name: 'хитрая собака',
    price: '1100',
    created: Date.now()
  }
]

const listReducer = function (state = initialState, action) {
  if (action.type === ADD_SERVICE) {
    const { name, value, id, created } = action.payload;

    if (id) {
      return [...state.filter(el => el.id !== id), { id: id, name: name, price: value, created: created }]
    } else {
      return [...state, { id: nanoid(), name: name, price: value, created: Date.now() }];
    }
  }

  if (action.type === REMOVE_SERVICE) {
    const { id } = action.payload;
    return state.filter(el => el.id !== id);
  }

  return state
}



export default listReducer