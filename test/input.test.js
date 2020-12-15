const expect = chai.expect;
import Vue from 'vue'
import Input from '../src/input'

Vue.config.productionTip = false
Vue.config.devtools = false

describe('Input', () => {
    it('存在.', () => {
        expect(Input).to.exist
    })

    describe('props',()=> {
        const Constructor = Vue.extend(Input)
        let vm
        afterEach(()=>{
            vm.$destroy()
        })
        it('接受 value', () => {
             vm = new Constructor({
                propsData: {
                    value: '1234'
                }
            }).$mount()
            const InputElement = vm.$el.querySelector('input')
            expect(InputElement.value).to.equal('1234')
        })


        it('接受 disabled', () => {
             vm = new Constructor({
                propsData: {
                    disabled: true
                }
            }).$mount()
            const InputElement = vm.$el.querySelector('input')
            expect(InputElement.disabled).to.equal(true)
        })

        it('接受 readonly', () => {
             vm = new Constructor({
                propsData: {
                    readonly: true
                }
            }).$mount()
            const InputElement = vm.$el.querySelector('input')
            expect(InputElement.readOnly).to.equal(true)
        })

        it('接受 error', () => {
             vm = new Constructor({
                propsData: {
                    error: '你错了'
                }
            }).$mount()
            const useElement = vm.$el.querySelector('use')
            expect(useElement.getAttribute('xlink:href')).to.equal('#i-error')
            const errorMessage = vm.$el.querySelector('.errorMessage')
            expect(errorMessage.innerText).to.equal('你错了')
        })
    })
    describe('事件',()=>{
        const Constructor = Vue.extend(Input)
        let vm
        afterEach(()=>{
            vm.$destroy()
        })

        it('支持 change/input/focus/blur 事件', ()=> {
            ['change','input','focus','blur'].forEach((eventName)=>{
            vm= new Constructor({}).$mount()
            const callback = sinon.fake();
            vm.$on(eventName,callback)
            let event = new Event(eventName)
            let inputElement= vm.$el.querySelector('input')
            inputElement.dispatchEvent(event)
            expect(callback).to.have.been.calledWith(event)
        })
        })
        // it('支持 input 事件', ()=> {
        //     vm= new Constructor({}).$mount()
        //     const callback = sinon.fake();
        //     vm.$on('input',callback)
        //     let event = new Event('input')
        //     let inputElement= vm.$el.querySelector('input')
        //     inputElement.dispatchEvent(event)
        //     expect(callback).to.have.been.calledWith(event)
        // })
        // it('支持 focus 事件', ()=> {
        //     vm= new Constructor({}).$mount()
        //     const callback = sinon.fake();
        //     vm.$on('focus',callback)
        //     let event = new Event('focus')
        //     let inputElement= vm.$el.querySelector('input')
        //     inputElement.dispatchEvent(event)
        //     expect(callback).to.have.been.calledWith(event)
        // });
        // it('支持 blur 事件', ()=> {
        //     vm= new Constructor({}).$mount()
        //     const callback = sinon.fake();
        //     vm.$on('blur',callback)
        //     let event = new Event('blur')
        //     let inputElement= vm.$el.querySelector('input')
        //     inputElement.dispatchEvent(event)
        //     expect(callback).to.have.been.calledWith(event)
        // });
    })
})
