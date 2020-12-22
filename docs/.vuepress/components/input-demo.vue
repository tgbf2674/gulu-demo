<template>
    <div>
    <g-input></g-input>
    <g-input disabled></g-input>
    <g-input readonly></g-input>
        <br>
    <g-input error="错误信息"></g-input>
        <br>
        <g-input v-model="value"></g-input>
        {{value}}
       <pre><code>{{content}}</code></pre>
    </div>
</template>

<script>
    import Input from '../../../src/input'
    export default{
        components:{
            'g-input': Input
        },
        props:{
          xxx: ''
        },
        data() {
            return {
                content: `
    <g-input></g-input>
    <g-input disabled></g-input>
    <g-input readonly></g-input>
    <g-input error="错误信息"></g-input>
    <g-input v-model="value"></g-input>
            `.replace(/\t+| +/g, '').trim(),
                value:'双向绑定'
            }
        }
    }
</script>
