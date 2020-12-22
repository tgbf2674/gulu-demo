<template>
    <div>
        <button @click="showToast2">middle</button>
        <button @click="showToast3">bottom</button>
        <pre><code>{{content}}</code></pre>
    </div>
</template>
<script>
    import Vue from 'vue'
    import Toast from '../../../src/toast'
    import Button from '../../../src/button'
    import plugin from '../../../src/plugin'
    Vue.use(plugin)
    export default {
        components: {'g-toast': Toast, 'g-button': Button},
        data(){
          return{
              content:`
<template>
    <div>
        <button @click="showToast2">middle</button>
        <button @click="showToast3">bottom</button>
    </div>
</template>
              `

          }
        },
        methods: {
            showToast1() {
                this.showToast('top')
            },
            showToast2() {
                this.showToast('middle')
            },
            showToast3() {
                this.showToast('bottom')
            },

            showToast(position) {
                this.$toast(`${parseInt(Math.random() * 100)}你的智商需要充值 `, {
                    position,
                    enableHtml: true,
                    closeButton: {
                        text: '已充值',
                        callback() {
                            console.log('他说已经充值了')
                        }
                    },
                    autoClose: 2,
                })
            }
        }
    }
</script>

<style>
</style>
