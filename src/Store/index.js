import React from 'react';
import { createStore, combineReducers } from "redux";
import addReducer from '../Reducers/addReducer';
import listReducer from '../Reducers/listReducer';

const redusers = combineReducers({
  serviceAddState: addReducer,
  serviceListState: listReducer
});

const store = createStore(redusers);

export default store;



