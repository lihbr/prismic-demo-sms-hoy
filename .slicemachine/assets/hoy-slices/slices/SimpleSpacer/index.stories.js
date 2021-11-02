import MyComponent from '../../../../../hoy-slices/slices/SimpleSpacer';
import SliceZone from 'vue-slicezone'

export default {
  title: 'hoy-slices/slices/SimpleSpacer'
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
      mock: {"variation":"default-slice","name":"Default slice","slice_type":"simple_spacer","items":[],"primary":{},"id":"_DefaultSlice"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_DefaultSlice.storyName = 'Default slice'

export const _Small = () => ({
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
      mock: {"variation":"small","name":"Small","slice_type":"simple_spacer","items":[],"primary":{},"id":"_Small"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_Small.storyName = 'Small'

export const _Large = () => ({
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
      mock: {"variation":"large","name":"Large","slice_type":"simple_spacer","items":[],"primary":{},"id":"_Large"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_Large.storyName = 'Large'
