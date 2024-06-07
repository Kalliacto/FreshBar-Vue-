<template>
    <h3 class="make__title">{{ store.currentCoctail.title }}</h3>
    <form @submit.prevent @change="calcTotalPrice">
        <fieldset v-if="store.content === 'Custom'" class="make__fieldset make__fieldset_ingridients">
            <legend class="make__legend">Ингридиенты:</legend>
            <my-input
                v-for="ingridient in customData"
                :key="ingridient.name"
                :label="ingridient.name"
                :name="'ingridients'"
                :value="ingridient.price"
                :type="'checkbox'"
            />
        </fieldset>
        <div class="make__wrap-add">
            <fieldset class="make__fieldset make__fieldset_topping">
                <legend class="make__legend">Дополнительно:</legend>
                <my-input :label="'Мята'" :name="'topping'" :value="50" :type="'checkbox'" />
                <my-input :label="'Лёд'" :name="'topping'" :value="10" :type="'checkbox'" />
            </fieldset>
            <fieldset class="make__fieldset make__fieldset_cup">
                <legend class="make__legend">Стакан:</legend>
                <my-input :label="'Пластиковый'" :name="'cup'" :value="0" :type="'radio'" :checked="true" />
                <my-input :label="'Биоразлагаемый'" :name="'cup'" :value="20" :type="'radio'" />
            </fieldset>
        </div>
        <div class="make__footer">
            <button class="btn make__add-btn" type="submit">Добавить</button>
            <div class="make__total">
                <input class="make__input-start-price" type="hidden" />
                <input class="make__input-price" type="hidden" name="price" />
                <p class="make__total-price text-red">{{ totalPrice }} p</p>
                <input class="make__input-size" type="hidden" name="size" />
                <p class="make__total-size">{{ store.currentCoctail.size }}</p>
            </div>
        </div>
    </form>
</template>

<script setup>
import MyInput from './UI/MyInput.vue';
import { useGoodsStore } from '../store/GoodsStore';
const store = useGoodsStore();
import { ref } from 'vue';

const customData = [
    { name: 'Клубника', price: 50 },
    { name: 'Банан', price: 40 },
    { name: 'Манго', price: 80 },
    { name: 'Киви', price: 70 },
    { name: 'Маракуйя', price: 85 },
    { name: 'Яблоко', price: 45 },
];
let totalPrice = ref(+store.currentCoctail.price);

const calcTotalPrice = (e) => {
    if (e.target.type === 'radio') {
        if (e.target.value === '20') {
            totalPrice.value += Number(e.target.value);
        } else if (e.target.value === '0') {
            totalPrice.value = Number(totalPrice.value) - 20;
        }
    } else {
        if (e.target.checked) {
            totalPrice.value += +e.target.value;
        } else {
            totalPrice.value -= +e.target.value;
        }
    }
};
</script>

<style scoped>
.make__title {
    font-size: 44px;
    font-weight: 900;
    margin-bottom: 40px;
}
.make__fieldset {
    margin: 0;
    padding: 0;
    border: none;
}
.make__wrap-add {
    margin-bottom: 40px;
    display: flex;
    gap: 55px;
}
.make__fieldset_ingridients {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px 55px;
    margin-bottom: 32px;
}
.make__fieldset_topping {
    width: 150px;
    display: grid;
    grid-template-columns: 1fr;
    gap: 20px;
}
.make__fieldset_cup {
    display: grid;
    grid-template-columns: 1fr;
    gap: 20px;
}
.make__legend {
    color: var(--stroke);
    margin-bottom: 24px;
}
.make__footer {
    display: flex;
    align-items: center;
    gap: 40px;
}
.make__add-btn {
    min-width: 232px;
}
.make__total-size {
    color: var(--stroke);
    font-size: 12px;
}
.make__total-price {
    font-weight: 600;
}
</style>
