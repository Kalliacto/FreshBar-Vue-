<template>
    <div class="controller__btns">
        <p class="btn_minus" @click="store.decrementCoctailFromCart(props.coctailItem)">-</p>
        <span class="controller__count">{{ props.coctailItem.count }}</span>
        <p class="btn_plus" @click="store.incrementCoctailFromCart(props.coctailItem)">+</p>
    </div>
</template>

<script setup>
import { defineProps } from 'vue';
import { useGoodsStore } from '@/store/GoodsStore';
const store = useGoodsStore();

const props = defineProps({
    coctailItem: Object,
});
</script>

<style scoped>
.controller__btns {
    width: 80px;
    height: 25px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border: 1px solid white;
    border-radius: 100px;
    padding: 10px;
}
.btn_minus,
.btn_plus {
    font-size: 14px;
    cursor: pointer;
}

.controller__count {
    width: 100%;
    text-align: center;
}
</style>
