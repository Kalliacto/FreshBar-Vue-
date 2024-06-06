<template>
    <div class="modal" @click="store.closeModal()">
        <div class="modal__content">
            <slot></slot>
        </div>
    </div>
</template>

<script setup>
import { useGoodsStore } from '../store/GoodsStore';

const store = useGoodsStore();
</script>

<style scoped>
.modal {
    position: fixed;
    inset: 0;
    background-color: rgba(0, 0, 0, 0.5);
    padding: 20px;
    cursor: pointer;
    overflow-y: auto;
}
.modal__content {
    margin: auto;
    cursor: default;
    width: 100%;
}
</style>
