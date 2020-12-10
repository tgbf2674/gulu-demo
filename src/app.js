import Vue from 'vue';
import Button from './button.vue'
import Icon from './icon.vue'
import ButtonGroup from './button-group'

Vue.component('g-button-group', ButtonGroup);
Vue.component('g-button', Button);
Vue.component('g-icon', Icon);
new Vue({
    el: '#app',
    data: {
        loading1: false,
        loading2: true,
        loading3: false
    }
});

//单元测试
import chai from 'chai'

const expect = chai.expect;
{
    const Constructor = Vue.extend(Button);
    const vm = new Constructor({
        propsData: {
            icon: 'settings'
        }
    });
    vm.$mount();
    let useElement = vm.$el.querySelector('use');
    console.log(useElement);
    expect(useElement.getAttribute('xlink:href')).to.eq('#i-settings')
    vm.$el.remove();
    vm.$destroy();
}

{
    const Constructor = Vue.extend(Button);
    const vm = new Constructor({
        propsData: {
            icon: 'settings',
            loading: true
        }
    });
    vm.$mount();
    let useElement = vm.$el.querySelector('use');
    console.log(useElement);
    expect(useElement.getAttribute('xlink:href')).to.eq('#i-loading')
    vm.$el.remove();
    vm.$destroy();
}
{
    const div = document.createElement('div');
    document.body.appendChild(div);
    const Constructor = Vue.extend(Button);
    const vm = new Constructor({
        propsData: {
            icon: 'settings'
        }
    });
    vm.$mount(div);
    let svg = vm.$el.querySelector('svg');
    let {order} = window.getComputedStyle(svg);
    expect(order).to.eq('1');
    vm.$el.remove();
    vm.$destroy();
}

{
    const div = document.createElement('div');
    document.body.appendChild(div);
    const Constructor = Vue.extend(Button);
    const vm = new Constructor({
        propsData: {
            icon: 'settings',
            iconPosition: 'right'
        }
    });
    vm.$mount(div);
    let svg = vm.$el.querySelector('svg');
    let {order} = window.getComputedStyle(svg);
    expect(order).to.eq('2');
    vm.$el.remove();
    vm.$destroy();
}
{
    //mock
    const Constructor = Vue.extend(Button);
    const vm = new Constructor({
        propsData: {
            icon: 'settings',
            iconPosition: 'right'
        }
    });
    vm.$mount();
    vm.$on('click',function () {

    });
    let button = vm.$el;
    button.click();
}
