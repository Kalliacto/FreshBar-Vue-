<template>
    <li class="order__item">
        <!-- <img class="order__img" src="./img/cups/berries.jpg" alt="название коктейля"> -->
        <div class="order__info">
            <h3 class="order__name">{{ props.coctailItem.title }}</h3>
            <ul class="order__topping-list">
                <li class="order__topping-item">{{ props.coctailItem.size }}</li>
                <li class="order__topping-item">sdsd</li>
                <li class="order__topping-item">dsfdsf</li>
                <li class="order__topping-item">sdsd</li>
            </ul>
        </div>
        <button class="order__item-close" aria-label="Удалить коктейль из корзины"></button>
        <p class="order__item-price">{{ props.coctailItem.price }}&nbsp;P</p>
    </li>
</template>

<script setup>
import { defineProps } from 'vue';

const props = defineProps({
    coctailItem: Object,
});
console.log(props.coctailItem);
</script>

<style scoped>
.order__item {
    border-top: 1px solid white;
    padding: 16px 0;
    display: grid;
    grid-template-columns: 70px 1fr min-content;
    gap: 12px;
    grid-template-areas:
        'image info delete'
        'image info price';
}
.order__item:last-child {
    border-bottom: 1px solid white;
}
.order__img {
    grid-area: image;
    width: 100%;
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
</style>
