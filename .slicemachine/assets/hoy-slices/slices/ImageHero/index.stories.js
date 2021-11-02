import MyComponent from '../../../../../hoy-slices/slices/ImageHero';
import SliceZone from 'vue-slicezone'

export default {
  title: 'hoy-slices/slices/ImageHero'
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
      mock: {"variation":"default-slice","name":"Default slice","slice_type":"image_hero","items":[{"link":{"link_type":"Web","url":"http://twitter.com"},"title":"utilize value-added schemas"},{"link":{"link_type":"Web","url":"http://google.com"},"title":"syndicate customized initiatives"}],"primary":{"title":[{"type":"heading1","text":"Incentivize wireless solutions","spans":[]}],"text":[{"type":"paragraph","text":"Excepteur consequat adipisicing anim est et cupidatat Lorem culpa anim sint. Laboris non laboris tempor aliquip consequat minim qui. Mollit deserunt commodo dolore consectetur est consectetur esse fugiat.","spans":[]}],"image":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1607582278043-57198ac8da43?w=900&h=500&fit=crop"},"background":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1531771686035-25f47595c87a?w=900&h=500&fit=crop"}},"id":"_DefaultSlice"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_DefaultSlice.storyName = 'Default slice'
