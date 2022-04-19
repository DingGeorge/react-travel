import { createStore } from 'redux';
import languageReducer from './languageReducer'

export const languageStore = createStore(languageReducer);

