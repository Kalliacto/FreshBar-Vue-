<template>
    <my-header />
    <main>
        <hero-block />
        <goods-list />
    </main>
    <my-footer />
</template>

<script setup>
import GoodsList from './components/GoodsList.vue';
import HeroBlock from './components/HeroBlock.vue';
import MyFooter from './components/MyFooter.vue';
import MyHeader from './components/MyHeader.vue';
</script>

<style>
@import './styles/normalize.css';
@import './styles/default.css';
</style>
