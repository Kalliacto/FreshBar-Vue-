<template>
    <div class="modal" @click="store.closeModal()">
        <div
            @click.stop
            class="modal__content"
            :class="store.content === 'Cart' ? 'modal__main_order' : 'modal__main_make'"
        >
            <div class="content">
                <slot></slot>
            </div>
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
    /* Разобраться что не так, почему  auto в данном случает центрирует только по оси Х*/
    margin: 25% auto;
    cursor: default;
    width: 100%;
}
.modal__main_order {
    max-width: 780px;
}
.modal__main_make {
    max-width: 640px;
}
.content {
    padding: 60px 40px;
    background-color: var(--bg);
    border-radius: 24px;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
    z-index: 2;
}
</style>
