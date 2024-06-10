<template>
    <my-header />
    <main>
        <hero-block />
        <goods-list />
    </main>
    <my-footer />

    <modal-window v-if="store.isModalOpen">
        <div v-if="store.content === 'Cart'">Cart</div>
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

import { useGoodsStore } from './store/GoodsStore';
import { onMounted } from 'vue';

const store = useGoodsStore();

onMounted(() => {
    if (localStorage.getItem('basketFreshBar')) {
        store.updateCart(localStorage.getItem('basketFreshBar'));
    }
});
</script>

<style>
@import './styles/normalize.css';
@import './styles/default.css';
</style>
