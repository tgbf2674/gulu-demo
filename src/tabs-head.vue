<template>
    <div class="tabs-head">
        <slot></slot>
        <slot name="actions"></slot>
    </div>
</template>

<script>
    export default {
        name: 'GuluTabsHeader'
    }
</script>

<style lang="scss" scoped></style>
