import MyComponent from '../../../../../hoy-slices/slices/SimpleText';
import SliceZone from 'vue-slicezone'

export default {
  title: 'hoy-slices/slices/SimpleText'
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
      mock: {"variation":"default-slice","name":"Default slice","slice_type":"simple_text","items":[],"primary":{"title":[{"type":"heading2","text":"Revolutionize scalable convergence","spans":[]}],"text":[{"type":"paragraph","text":"Proident sit incididunt dolor. Do irure officia id irure nulla adipisicing.","spans":[]}]},"id":"_DefaultSlice"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_DefaultSlice.storyName = 'Default slice'
