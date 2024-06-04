<template>
    <my-header />
    <my-footer />
</template>

<script>
import MyFooter from './components/MyFooter.vue';
import MyHeader from './components/MyHeader.vue';
export default {
    name: 'App',
    components: { MyHeader, MyFooter },
};
</script>

<style>
@import './styles/normalize.css';
@import './styles/default.css';
</style>
