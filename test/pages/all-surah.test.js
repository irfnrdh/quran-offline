/* eslint-env jest */
import { shallowMount, createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'
import Helpers from '~/test/helper'
import Component from '~/pages/all-surah.vue'

import MutationType from '~/store/mutation-type'
import Theme from '~/constant/theme'

import dummySurahInfo from './__mocks__/surah-info-item'

const localVue = createLocalVue()
localVue.use(Vuex)
const router = Helpers.initRouter(localVue)
const i18n = Helpers.initI18n(localVue)

const mockAction = jest.fn().mockResolvedValue([dummySurahInfo])
const store = new Vuex.Store({
  state: {
    settingActiveTheme: Theme.LIGHT,
    allSurahList: [dummySurahInfo]
  },
  mutations: {
    [MutationType.SET_HEADER_TITLE] (state, data) {
      state.headerTitle = data
    },
    [MutationType.SET_THEME] (state, data) {
      state.settingActiveTheme = data
    },
    [MutationType.SET_SURAH_LIST] (state, data) {
      state.allSurahList = data
    }
  },
  actions: {
    fetchAllSurah: mockAction
  }
})

const createWrapper = () => {
  return shallowMount(Component, {
    sync: false,
    store,
    router,
    i18n,
    localVue
  })
}

describe('pages all-surah.vue', () => {
  test('success mounting components', () => {
    const wrapper = createWrapper()
    expect(wrapper).toBeTruthy()
  })
  test('computed for meta should fired', (done) => {
    const wrapper = createWrapper()
    // trigger change state with commit via mutations
    wrapper.vm.$store.commit(MutationType.SET_THEME, Theme.DARK)
    const title = wrapper.vm.$t('pageTitle.allSurah')
    const expected = {
      title,
      meta: [
        { hid: 'og:title', property: 'og:title', content: title },
        { hid: 'twitter:title', name: 'twitter:title', content: title },
        { hid: 'theme-color', name: 'theme-color', content: '#333' }
      ]
    }
    expect(wrapper.vm.metaHead).toEqual(expected)
    done()
  })
  test('method fetchSurahInfo fired correctly', (done) => {
    const wrapper = createWrapper()
    wrapper.vm.fetchSurahInfo()
    expect(mockAction).toBeCalled()
    done()
  })
  test('computed filteredSurah should triggered', (done) => {
    const wrapper = createWrapper()
    wrapper.vm.searchText = 'Al Fatihah'
    expect(wrapper.vm.filteredSurah).toEqual([dummySurahInfo])
    done()
  })
  test('computed filteredSurah should triggered when search < 3 word', (done) => {
    const wrapper = createWrapper()
    wrapper.vm.searchText = 'Al'
    expect(wrapper.vm.filteredSurah).toEqual([dummySurahInfo])
    done()
  })
  test('computed filteredSurah should triggered when search empty word', (done) => {
    const wrapper = createWrapper()
    wrapper.vm.searchText = ''
    expect(wrapper.vm.filteredSurah).toEqual([dummySurahInfo])
    done()
  })
  test('method onSuccess', (done) => {
    const wrapper = createWrapper()
    wrapper.vm.onSuccess()
    expect(wrapper.vm.loading).toBe(false)
    done()
  })
})
