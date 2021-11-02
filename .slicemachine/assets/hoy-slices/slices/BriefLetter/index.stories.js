import MyComponent from '../../../../../hoy-slices/slices/BriefLetter';
import SliceZone from 'vue-slicezone'

export default {
  title: 'hoy-slices/slices/BriefLetter'
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
      mock: {"variation":"default-slice","name":"Default slice","slice_type":"brief_letter","items":[],"primary":{"text":[{"type":"paragraph","text":"Qui est aliqua consequat sunt veniam aliqua exercitation sunt nulla Lorem pariatur.","spans":[]}]},"id":"_DefaultSlice"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_DefaultSlice.storyName = 'Default slice'
