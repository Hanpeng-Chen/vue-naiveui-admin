import { createI18n } from 'vue-i18n'
import { LANG_VALUE } from '@/common/enum'
import zhHans from './zh-Hans'
import en from './en'
import { storeToRefs } from 'pinia'
import useAppStore from '@/stores/app'

const i18n = createI18n({
  legacy: false,
  locale: getLanguage(),
  messages: {
    [LANG_VALUE.Zh]: zhHans,
    [LANG_VALUE.En]: en
  }
})
const LANGUAGE: string = 'language_key'

// src\lang\index.ts
export function getLanguage() {
  const chooseLanguage = localStorage.getItem('language_key')
  if (chooseLanguage) return chooseLanguage

  // 如果没有选择语言
  const language = navigator.language.toLowerCase()
  const locales = [LANG_VALUE.En, LANG_VALUE.Zh]
  for (const locale of locales) {
    if (language.indexOf(locale) > -1) {
      return locale
    }
  }
  return LANG_VALUE.Zh
}
export function setLocale(lang: any) {
  // 获取当前语言
  const appStore = useAppStore()
  const { language } = storeToRefs(appStore)

  i18n.global.locale.value = lang // 修改 i18n
  language.value = lang // 修改 pinia
  localStorage.setItem('language_key', lang) // 修改缓存
}

export default i18n
