<template>
    <my-header />
    <main>
        <hero-block />
        <goods-list />
    </main>
    <my-footer />

    <modal-window v-if="store.isModalOpen">
        <cart-list v-if="store.content === 'Cart'" />
        <my-form v-if="store.content === 'Custom' || store.content === 'Add'" />
    </modal-window>
</template>

<script setup>
import GoodsList from './components/GoodsList.vue';
import HeroBlock from './components/HeroBlock.vue';
import MyFooter from './components/MyFooter.vue';
import MyHeader from './components/MyHeader.vue';
import ModalWindow from './components/ModalWindow.vue';
import MyForm from './components/MyForm.vue';
import CartList from './components/CartList.vue';
import { useGoodsStore } from './store/GoodsStore';

const store = useGoodsStore();
</script>

<style>
@import './styles/normalize.css';
@import './styles/default.css';
</style>
