import { CHANGE_SERVICE_FIELD } from '../Actions/actionsTypes';
import { EDIT_SERVISE_DATA, EDIT_SERVISE_CANCEL } from '../Actions/actionsTypes';

const initialState = {
  serviceName: '',
  servicePrice: ''
}

const addReducer = function (state = initialState, action) {
  if (action.type === CHANGE_SERVICE_FIELD) {
    const { name, value } = action.payload;
    return { ...state, [name]: value };
  }
  if (action.type === EDIT_SERVISE_DATA) {
    const { name, value, id, created } = action.payload
    return { ...state, serviceName: name, servicePrice: value, id: id, created: created }
  }
  if (action.type === EDIT_SERVISE_CANCEL) {
    return initialState
  }

  return state
}

export default addReducer