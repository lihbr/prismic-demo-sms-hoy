import MyComponent from '../../../../../hoy-slices/slices/NewsletterForm';
import SliceZone from 'vue-slicezone'

export default {
  title: 'hoy-slices/slices/NewsletterForm'
}


export const _DefaultSlice = () => ({
  components: {
    MyComponent,
    SliceZone
  },
  methods: {
    resolve() {
      return MyComponent
    }
  },
  data() {
    return {
      mock: {"variation":"default-slice","name":"Default slice","slice_type":"newsletter_form","items":[],"primary":{"input_placeholder":"unleash cutting-edge niches","subscribe_label":"extend out-of-the-box blockchains","form_action":"scale front-end action-items","honey_pot":"deliver end-to-end systems"},"id":"_DefaultSlice"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_DefaultSlice.storyName = 'Default slice'
