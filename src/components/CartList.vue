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
            <p class="order__total-price text-red">{{ totalPrice }}&nbsp;&#x20bd;</p>
        </div>

        <form class="order__form" @submit.prevent="sendOrder">
            <div class="order__form_item">
                <label class="order__label" for="name">Имя </label>
                <input class="order__input" type="text" name="name" required placeholder="Имя" />
            </div>
            <div class="order__form_item">
                <label class="order__label" for="phone">Телефон </label>
                <input
                    class="order__input"
                    type="tel"
                    name="phone"
                    required
                    placeholder="Телефон"
                    @change="updatePhone"
                    :value="phone"
                />
                <span v-if="hasErrorTel" class="order__info">Номер введен некорректно!</span>
            </div>
            <div class="order__form_item">
                <label class="order__label" for="email">Ваш E-mail </label>
                <input
                    class="order__input"
                    type="e-mail"
                    name="email"
                    :value="email"
                    @change="updateEmail"
                    required
                    placeholder="E-mail"
                />
                <span v-if="hasErrorEmail" class="order__info">E-mail введен некорректно!</span>
            </div>
            <button class="order__submit btn" type="submit">Заказать</button>
        </form>
    </div>
    <div class="order" v-else>
        <h2 class="order__title text__gradient_min">Корзина</h2>
        <p>Очень жаль, что Ваша корзина пуста {{ '=(' }}</p>
        <p>Пройти за <a class="text-red" href="#goods" @click="store.closeModal">покупками</a></p>
    </div>
</template>

<script setup>
import { useGoodsStore } from '../store/GoodsStore';
import CartItem from '../components/CartItem.vue';
import { computed } from 'vue';
import { ref } from 'vue';
import { checkPhone, checkEmail } from '@/utils/utils.js';
const store = useGoodsStore();

const allCountCoctail = computed(() => store.cart.reduce((acc, current) => acc + current.count, 0));
const totalPrice = computed(() => store.cart.reduce((acc, current) => acc + current.price, 0));
const phone = ref('');
const email = ref('');
const hasErrorTel = ref(false);
const hasErrorEmail = ref(false);

const updatePhone = (e) => {
    phone.value = e.target.value;
    hasErrorTel.value = !checkPhone(e.target.value);
};

const updateEmail = (e) => {
    email.value = e.target.value;
    hasErrorEmail.value = !checkEmail(e.target.value);
};

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
    justify-content: flex-end;
    margin-bottom: 20px;
    gap: 20px;
}
.order__total-title {
    font-weight: 600;
}
.order__form {
    display: flex;
    gap: 20px;
    flex-direction: column;
}
.order__form_item {
    display: flex;
    flex-direction: column;
    gap: 10px;
}
.order__label {
    width: 100%;
    position: relative;
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
    width: fit-content;
    align-self: flex-end;
}
.order__info {
    color: var(--main-red);
}

@media (max-width: 520px) {
    .order__title {
        font-size: 28px;
    }
}
</style>
