import { combineReducers } from 'redux';
import { openModal } from './openModal';

export const rootReducer = combineReducers({ openModal: openModal })