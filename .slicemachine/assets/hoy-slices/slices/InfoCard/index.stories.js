import MyComponent from '../../../../../hoy-slices/slices/InfoCard';
import SliceZone from 'vue-slicezone'

export default {
  title: 'hoy-slices/slices/InfoCard'
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
      mock: {"variation":"default-slice","name":"Default slice","slice_type":"info_card","items":[],"primary":{"title":[{"type":"heading3","text":"Envisioneer frictionless blockchains","spans":[]}],"text":[{"type":"paragraph","text":"Amet ut eu dolor ut irure magna aliqua aliqua mollit enim eiusmod aliquip duis eiusmod nulla. Aliqua eiusmod esse irure.","spans":[]}],"image":{"dimensions":{"width":600,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1607582278038-6bebbd4d7b72?w=600&h=500&fit=crop"},"text_color":"#62854a","background_color":"#33f2f5","background_shape":"Shape 1"},"id":"_DefaultSlice"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_DefaultSlice.storyName = 'Default slice'

export const _Inverted = () => ({
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
      mock: {"variation":"inverted","name":"Inverted","slice_type":"info_card","items":[],"primary":{"title":[{"type":"heading3","text":"Whiteboard front-end initiatives","spans":[]}],"text":[{"type":"paragraph","text":"Id laborum id magna irure voluptate irure labore quis duis irure aute excepteur deserunt. Nisi dolor incididunt minim non qui proident mollit elit aute officia excepteur sit. Exercitation mollit ea deserunt veniam culpa proident esse labore ea.","spans":[]}],"image":{"dimensions":{"width":600,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1607582278038-6bebbd4d7b72?w=600&h=500&fit=crop"},"text_color":"#e7194f","background_color":"#33c410","background_shape":"Shape 2"},"id":"_Inverted"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_Inverted.storyName = 'Inverted'
