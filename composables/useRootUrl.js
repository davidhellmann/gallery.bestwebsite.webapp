import { computed } from '@nuxtjs/composition-api'
export const useRootUrl = (url = '') => {
  const stripUrl = (urlToFind) => {
    return urlToFind
      .replace('http://', '')
      .replace('https://', '')
      .replace('www.', '')
      .split('/')[0]
  }

  const stripUrlComputed = computed(() => {
    return stripUrl(url)
  })
  return { stripUrlComputed, stripUrl }
}
