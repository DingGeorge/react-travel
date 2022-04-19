export const CHANGE_LANGUAGE = 'CHANGE_LANGUAGE';

export type ChangeLanguageAction = {
  type: typeof CHANGE_LANGUAGE;
  payload: 'zh' | 'en';
}

export const changeLanguageActionCreator = (language: 'zh' | 'en'): ChangeLanguageAction => ({
  type: CHANGE_LANGUAGE,
  payload: language,
});
