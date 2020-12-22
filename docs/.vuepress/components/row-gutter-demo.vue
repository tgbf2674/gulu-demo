<template>
    <div class="gutter-wrapper">
        <g-row gutter="30">
            <g-col class="item" span="8"> <span> col-8; gutter-30;</span> </g-col>
            <g-col class="item" span="8"> <span> col-8; gutter-30;</span> </g-col>
            <g-col class="item" span="8"> <span> col-8; gutter-30;</span> </g-col>
        </g-row>
        <g-row gutter="20">
            <g-col class="item" span="8"> <span> col-8; gutter-20;</span> </g-col>
            <g-col class="item" span="8"> <span> col-8; gutter-20;</span> </g-col>
            <g-col class="item" span="8"> <span> col-8; gutter-20;</span> </g-col>
        </g-row>
        <g-row gutter="10">
            <g-col class="item" span="8"> <span> col-8; gutter-10;</span> </g-col>
            <g-col class="item" span="8"> <span> col-8; gutter-10;</span> </g-col>
            <g-col class="item" span="8"> <span> col-8; gutter-10;</span> </g-col>
        </g-row>
        <pre><code>{{content}}</code></pre>
    </div>
</template>

<script>
    import Row from '../../../src/row'
    import Col from '../../../src/col'
    export default {
        components:{
            'g-row': Row,
            'g-col': Col
        },
        data(){
            return{
                content: `
    <div class="gutter-wrapper">
        <g-row gutter="30">
            <g-col class="item" span="8"> <span> col-8; gutter-30;</span> </g-col>
            <g-col class="item" span="8"> <span> col-8; gutter-30;</span> </g-col>
            <g-col class="item" span="8"> <span> col-8; gutter-30;</span> </g-col>
        </g-row>
        <g-row gutter="20">
            <g-col class="item" span="8"> <span> col-8; gutter-20;</span> </g-col>
            <g-col class="item" span="8"> <span> col-8; gutter-20;</span> </g-col>
            <g-col class="item" span="8"> <span> col-8; gutter-20;</span> </g-col>
        </g-row>
        <g-row gutter="10">
            <g-col class="item" span="8"> <span> col-8; gutter-10;</span> </g-col>
            <g-col class="item" span="8"> <span> col-8; gutter-10;</span> </g-col>
            <g-col class="item" span="8"> <span> col-8; gutter-10;</span> </g-col>
        </g-row>
    </div>
                `
            }
        }
    }
</script>

<style lang="scss" scoped>
    * { box-sizing: border-box; }
    .gutter-wrapper { padding-top: 10px;
        .item { text-align: center; color: white;
            > span { display: block; background: #3eaf7c; }
        }
    }
</style>
