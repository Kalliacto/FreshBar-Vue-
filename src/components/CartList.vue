<template>
    <div class="order" v-if="store.cart.length">
        <h2 class="order__title text__gradient_min">
            Корзина<sup class="text-red order__count">({{ allCountCoctail }})</sup>
        </h2>
        <ul class="order__list">
            <cart-item v-for="coctail in store.cart" :coctailItem="coctail" :key="coctail.id" />
        </ul>

        <div class="order__total">
            <p class="order__total-title">Итого:</p>
            <p class="order__total-price text-red">{{ totalPrice }}</p>
        </div>

        <form class="order__form" @submit.prevent="sendOrder">
            <label class="order__label">
                <input class="order__input" type="text" name="name" required placeholder="Имя" />
            </label>
            <label class="order__label">
                <input class="order__input" type="text" name="phone" required placeholder="Телефон" />
            </label>
            <button class="order__submit btn" type="submit">Заказать</button>
            <!-- Валидация на ончейнже -->
        </form>
    </div>
    <div class="order" v-else>
        <h2 class="order__title text__gradient_min">Корзина</h2>
        <p>Очень жаль, что Ваша корзина пуста {{ '=(' }}</p>
        <p>Пройти за <a class="text-red" href="#goods" @click="store.closeModal">покупками</a></p>
        <!-- TODO: Стилизовать до конца блок отсутствия товаров в корзине -->
    </div>
</template>

<script setup>
import { useGoodsStore } from '../store/GoodsStore';
import CartItem from '../components/CartItem.vue';
import { computed } from 'vue';
const store = useGoodsStore();

const allCountCoctail = computed(() => store.cart.reduce((acc, current) => acc + current.count, 0));
const totalPrice = computed(() => store.cart.reduce((acc, current) => acc + current.price, 0));

const sendOrder = (e) => {
    const data = Object.fromEntries(new FormData(e.target));
    store.sendCart(data);
};
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
