<template>
    <my-header />
    <main>
        <hero-block />
        <goods-list />
    </main>
    <my-footer />

    <modal-window v-if="store.isModalOpen">
        <div v-if="store.content === 'Cart'">Cart</div>
        <div v-if="store.content === 'Custom'">Custom</div>
        <div v-if="store.content === 'Add'">Add</div>
    </modal-window>
</template>

<script setup>
import GoodsList from './components/GoodsList.vue';
import HeroBlock from './components/HeroBlock.vue';
import MyFooter from './components/MyFooter.vue';
import MyHeader from './components/MyHeader.vue';
import ModalWindow from './components/ModalWindow.vue';
import { useGoodsStore } from './store/GoodsStore';

const store = useGoodsStore();
</script>

<style>
@import './styles/normalize.css';
@import './styles/default.css';
</style>
