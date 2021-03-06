import Vue from 'vue';
import Button from './button.vue'
import Icon from './icon.vue'
import ButtonGroup from './button-group.vue'
import Input from './input.vue'
import Row from './row.vue'
import Col from './col.vue'
import Layout from './layout.vue'
import Footer from './footer.vue'
import Header from './header.vue'
import Sider from './sider.vue'
import Content from './content.vue'
import Toast from './toast.vue'
import plugin from "./plugin"
import Tabs from './tabs'
import TabsHead from './tabs-head'
import TabsBody from './tabs-body'
import TabsItem from './tabs-item'
import TabsPane from './tabs-pane'
import Collapse from './collapse'
import CollapseItem from './collapse-item'
Vue.component('g-button-group', ButtonGroup);
Vue.component('g-button', Button);
Vue.component('g-icon', Icon);
Vue.component('g-input',Input)
Vue.component('g-row',Row)
Vue.component('g-col',Col)
Vue.component('g-layout',Layout)
Vue.component('g-header',Header)
Vue.component('g-footer',Footer)
Vue.component('g-sider',Sider)
Vue.component('g-content',Content)
Vue.component('g-toast',Toast)
Vue.component('g-tabs',Tabs)
Vue.component('g-tabs-body',TabsBody)
Vue.component('g-tabs-head',TabsHead)
Vue.component('g-tabs-item',TabsItem)
Vue.component('g-tabs-pane',TabsPane)
Vue.use(plugin)
Vue.component('g-collapse',Collapse)
Vue.component('g-collapse-item',CollapseItem)
new Vue({
    el: '#app',
    data: {
        selectedTab: ['2','1']
    },

    created(){
    },
    methods:{
        showToast1(){
            this.showToast('top')
        },
        showToast2(){
            this.showToast('middle')
        },
        showToast3(){
            this.showToast('bottom')
        },

        showToast(position){
            this.$toast(`${parseInt(Math.random()*100)}你的智商需要充值 `,{
                position,
                enableHtml: true,
                closeButton: {
                    text: '已充值',
                    callback(){
                        console.log('他说已经充值了')
                    }
                },
                autoClose: 3,
            })
        }
    }
});

