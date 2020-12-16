import Vue from 'vue';
import Button from './button.vue'
import Icon from './icon.vue'
import ButtonGroup from './button-group.vue'
import Input from './input.vue'
import Row from './row.vue'
import Col from './col.vue'

Vue.component('g-button-group', ButtonGroup);
Vue.component('g-button', Button);
Vue.component('g-icon', Icon);
Vue.component('g-input',Input)
Vue.component('g-row',Row)
Vue.component('g-col',Col)
new Vue({
    el: '#app',
    data: {
        loading1: false,
        loading2: true,
        loading3: false,
        message: 'hi'
    },
    created(){
      setTimeout(()=>{
          let event = new Event('change')
          let inputElement = this.$el.querySelector('input')
          inputElement.dispatchEvent(event)
          console.log('hi')
      },3000)
    },
    methods:{
        inputChange(e){
            console.log(e)
        }
    }
});

