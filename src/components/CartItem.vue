<template>
    <li class="order__item">
        <img class="order__img" :src="coctailImage" alt="название коктейля" />
        <div class="order__info">
            <h3 class="order__name">
                {{ props.coctailItem.title
                }}<sup class="text-red" v-if="props.coctailItem.count">({{ props.coctailItem.count }})</sup>
            </h3>
            <ul class="order__topping-list">
                <li class="order__topping-item">{{ props.coctailItem.size }}</li>
                <li class="order__topping-item">{{ props.coctailItem.cup }}</li>
                <li class="order__topping-item" v-for="topping in props.coctailItem.topping" :key="topping">
                    {{ topping }}
                </li>
            </ul>
        </div>
        <controller-component class="order__control" :coctailItem="props.coctailItem" />
        <button
            class="order__item-close"
            aria-label="Удалить коктейль из корзины"
            @click="store.deleteCoctailFromCart(props.coctailItem)"
        ></button>
        <p class="order__item-price">{{ props.coctailItem.price }}&nbsp;P</p>
    </li>
</template>

<script setup>
import { computed, defineProps } from 'vue';
import { useGoodsStore } from '../store/GoodsStore';
import ControllerComponent from './UI/ControllerComponent.vue';
import img from '@/assets/img/make your own.jpg';
const store = useGoodsStore();

const props = defineProps({
    coctailItem: Object,
});

const coctailImage = computed(() =>
    props.coctailItem.id !== 0 ? 'https://puzzled-rust-nickel.glitch.me/' + props.coctailItem.image : img
);
</script>

<style scoped>
.order__item {
    border-top: 1px solid white;
    padding: 16px 0;
    display: grid;
    grid-template-columns: 70px 1fr min-content min-content;
    gap: 12px;
    grid-template-areas:
        'image info contr delete'
        'image info contr price';
}
.order__item:last-child {
    border-bottom: 1px solid white;
}
.order__img {
    grid-area: image;
    width: 100%;
}
.order__control {
    grid-area: contr;
}
.order__info {
    grid-area: info;
}
.order__name {
    font-weight: 400;
    font-size: inherit;
    margin-bottom: 8px;
}
.order__topping-item {
    font-size: 12px;
    color: var(--stroke);
    margin-bottom: 8px;
    font-weight: 600;
}
.order__item-close {
    grid-area: delete;
    width: 24px;
    height: 24px;
    background-image: url('../assets/img/delete.svg');
    background-repeat: no-repeat;
    justify-self: end;
}
.order__item-price {
    grid-area: price;
    justify-self: end;
    align-self: end;
}

@media (max-width: 520px) {
    .order__item {
        grid-template-columns: 1.5fr 0.5fr 0.5fr;
        grid-template-areas:
            'image contr delete'
            'info  contr price';
    }
}
</style>
