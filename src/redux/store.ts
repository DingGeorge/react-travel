import { createStore } from 'redux';
import languageReducer from './language/languageReducer'

export const languageStore = createStore(languageReducer);

// 获取一个函数的返回值类型
export type RootState = ReturnType<typeof languageStore.getState>;
