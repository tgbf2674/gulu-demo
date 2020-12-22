<template>
        <div class="grid-wrapper">
            <g-row class="row">
                <g-col class="item" span="24">col-24</g-col>
            </g-row>
            <g-row>
                <g-col class="item" span="12">col-12</g-col>
                <g-col class="item" span="12">col-12</g-col>
            </g-row>
            <g-row class="row">
                <g-col class="item" span="8">col-8</g-col>
                <g-col class="item" span="8">col-8</g-col>
                <g-col class="item" span="8">col-8</g-col>
            </g-row>
            <g-row class="row">
                <g-col class="item" span="6">col-6</g-col>
                <g-col class="item" span="6">col-6</g-col>
                <g-col class="item" span="6">col-6</g-col>
                <g-col class="item" span="6">col-6</g-col>
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
            return {
                content: `
        <div class="grid-wrapper">
            <g-row class="row">
                <g-col class="item" span="24">col-24</g-col>
            </g-row>
            <g-row>
                <g-col class="item" span="12">col-12</g-col>
                <g-col class="item" span="12">col-12</g-col>
            </g-row>
            <g-row class="row">
                <g-col class="item" span="8">col-8</g-col>
                <g-col class="item" span="8">col-8</g-col>
                <g-col class="item" span="8">col-8</g-col>
            </g-row>
            <g-row class="row">
                <g-col class="item" span="6">col-6</g-col>
                <g-col class="item" span="6">col-6</g-col>
                <g-col class="item" span="6">col-6</g-col>
                <g-col class="item" span="6">col-6</g-col>
            </g-row>
        </div>
`
            }
        }
    }
</script>

<style lang="scss" scoped>
    *{
        box-sizing: border-box;
    }
    .grid-wrapper{
        $background: #3eaf7c;
        > .row{ padding: .2em;
            > .item { text-align: center; color: white;
                &:nth-child(odd){ background: $background; }
                &:nth-child(even){ background: lighten($background,20%); color: white; }
            }
        }
    }
</style>
