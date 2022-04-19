import { createStore } from 'redux';
import languageReducer from './language/languageReducer'

export const languageStore = createStore(languageReducer);

