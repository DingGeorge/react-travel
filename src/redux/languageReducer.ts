import {AnyAction, Reducer} from 'redux';

type Language = {
  name: string;
  code: string;
}
type LanguageState = {
  language: 'en' | 'zh';
  languageList: Language[]
}

const defaultLanguageState: LanguageState = {
  language: 'zh',
  languageList: [
    {
      name: 'English',
      code: 'en'
    },
    {
      name: '中文',
      code: 'zh'
    }
  ]
}
const languageReducer: Reducer<LanguageState, AnyAction> = (state = defaultLanguageState, action) => {
  switch (action.type) {
    case 'CHANGE_LANGUAGE':
      return {...state, language: action.payload};
    default:
      return state;
  }
};
export default languageReducer;
