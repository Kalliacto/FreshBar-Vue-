<template>
    <div class="order">
        <h2 class="order__title text__gradient_min">
            Корзина<sup class="text-red order__count">({{ store.cart.length }})</sup>
        </h2>
        <ul class="order__list" v-if="store.cart.length">
            <cart-item v-for="coctail in store.cart" :coctailItem="coctail" :key="coctail.id" />
        </ul>

        <div class="order__total">
            <p class="order__total-title">Итого:</p>
            <p class="order__total-price text-red">{{ totalPrice }}</p>
        </div>

        <form class="order__form">
            <label class="order__label">
                <input class="order__input" type="text" name="name" required placeholder="Имя" />
            </label>
            <label class="order__label">
                <input class="order__input" type="text" name="phone" required placeholder="Телефон" />
            </label>
            <button class="order__submit btn">Заказать</button>
            <!-- Валидация на ончейнже -->
        </form>
    </div>
</template>

<script setup>
import { useGoodsStore } from '../store/GoodsStore';
import CartItem from '../components/CartItem.vue';
const store = useGoodsStore();

let totalPrice = store.cart.reduce((acc, current) => acc + current.price, 0);
</script>

<style scoped>
.order__title {
    font-size: 44px;
    font-weight: 900;
    margin-bottom: 40px;
}
.order__list {
    margin-bottom: 40px;
}

.order__total {
    display: flex;
    justify-content: space-between;
    margin-bottom: 40px;
}
.order__total-title {
    font-weight: 600;
}
.order__form {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 32px 20px;
}
.order__label {
    width: 100%;
}
.order__input {
    width: 100%;
    height: 44px;
    padding: 12px 16px;
    border-radius: 8px;
    background-color: var(--white);
    border: none;
    outline: none;
}
.order__submit {
    justify-self: end;
    grid-column: 2/3;
}
</style>
