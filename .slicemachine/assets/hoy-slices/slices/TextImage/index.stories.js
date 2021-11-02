import MyComponent from '../../../../../hoy-slices/slices/TextImage';
import SliceZone from 'vue-slicezone'

export default {
  title: 'hoy-slices/slices/TextImage'
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
      mock: {"variation":"default-slice","name":"Default slice","slice_type":"text_image","items":[],"primary":{"title":[{"type":"heading2","text":"Revolutionize strategic partnerships","spans":[]}],"text":[{"type":"paragraph","text":"Culpa exercitation laborum voluptate cupidatat labore non amet ipsum.","spans":[]}],"image":{"dimensions":{"width":600,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1587614295999-6c1c13675117?w=600&h=500&fit=crop"},"caption":"generate wireless technologies","caption_color":"#4a8cc3"},"id":"_DefaultSlice"}
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
      mock: {"variation":"inverted","name":"Inverted","slice_type":"text_image","items":[],"primary":{"title":[{"type":"heading2","text":"Strategize efficient e-tailers","spans":[]}],"text":[{"type":"paragraph","text":"Enim id esse quis fugiat minim. Labore in ut duis pariatur nisi cupidatat consequat tempor culpa. Minim magna proident proident non culpa mollit ex officia elit.","spans":[]}],"image":{"dimensions":{"width":600,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1589321578146-4c1ba445cc88?w=600&h=500&fit=crop"},"caption":"incentivize virtual models","caption_color":"#528a49"},"id":"_Inverted"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_Inverted.storyName = 'Inverted'
