import { shallowMount, createLocalVue, RouterLinkStub } from '@vue/test-utils'
import Vuetify from 'vuetify'
import VeeValidate from 'vee-validate'

import Logo from '~/components/Logo'

const localVue = createLocalVue()
localVue.use(Vuetify)
localVue.use(VeeValidate)

describe('Logo', () => {
  let vuetify
  beforeEach(() => {
    vuetify = new Vuetify()
  })
  it('renders to match snapshot', () => {
    const wrapper = shallowMount(Logo, {
      localVue,
      vuetify,
      stubs: {
        'nuxt-link': RouterLinkStub,
        'nuxt-child': 'nuxt-child'
      }
    })
    expect(wrapper).toMatchSnapshot()
  })
})
