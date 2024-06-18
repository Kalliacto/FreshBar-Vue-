<template>
    <h3 class="make__title">{{ store.currentCoctail.title }}</h3>
    <form @submit.prevent="sendForm" @change="calcTotalPrice">
        <fieldset v-if="store.content === 'Custom'" class="make__fieldset make__fieldset_ingridients">
            <legend class="make__legend">Ингридиенты:</legend>
            <my-input
                v-for="ingridient in ingridients"
                :key="ingridient"
                :label="ingridient"
                :name="ingridient"
                :value="ingridient"
                :type="'checkbox'"
                :price="price[ingridient]"
                :class="'checkbox__input'"
            />
        </fieldset>
        <div class="make__wrap-add">
            <fieldset class="make__fieldset make__fieldset_topping">
                <legend class="make__legend">Дополнительно:</legend>
                <my-input
                    :class="'checkbox__input'"
                    :label="'Мята'"
                    :name="'Мята'"
                    :value="'Мята'"
                    :type="'checkbox'"
                    :price="price['Мята']"
                />
                <my-input
                    :class="'checkbox__input'"
                    :label="'Лёд'"
                    :name="'Лёд'"
                    :value="'Лёд'"
                    :type="'checkbox'"
                    :price="price['Лёд']"
                />
            </fieldset>
            <fieldset class="make__fieldset make__fieldset_cup">
                <legend class="make__legend">Стакан:</legend>
                <my-input
                    :label="'Пластиковый'"
                    :name="'cup'"
                    :value="'Пластиковый'"
                    :type="'radio'"
                    :checked="true"
                    :price="price['Пластиковый']"
                    :class="'radio__input'"
                />
                <my-input
                    :label="'Биоразлагаемый'"
                    :name="'cup'"
                    :value="'Биоразлагаемый'"
                    :type="'radio'"
                    :price="price['Биоразлагаемый']"
                    :class="'radio__input'"
                />
            </fieldset>
        </div>
        <div class="make__footer">
            <button class="btn make__add-btn" type="submit">Добавить</button>
            <div class="make__total">
                <input class="make__input-start-price" type="hidden" />
                <input class="make__input-price" type="hidden" name="price" :value="totalPrice" />
                <p class="make__total-price text-red">{{ totalPrice }} p</p>
                <input class="make__input-size" type="hidden" name="size" :value="store.currentCoctail.size" />
                <p class="make__total-size">{{ store.currentCoctail.size }}</p>
            </div>
        </div>
    </form>
</template>

<script setup>
import MyInput from './UI/MyInput.vue';
import { useGoodsStore } from '../store/GoodsStore';
import { ref } from 'vue';
import { price, ingridients } from '@/utils/utils.js';
const store = useGoodsStore();

let totalPrice = ref(+store.currentCoctail.price);

const calcTotalPrice = (e) => {
    let targetValue = Number(price[e.target.value]);
    if (e.target.type === 'radio') {
        if (targetValue === 20) {
            totalPrice.value += targetValue;
        } else if (targetValue === 0) {
            totalPrice.value -= 20;
        }
    } else {
        if (e.target.checked) {
            totalPrice.value += targetValue;
        } else {
            totalPrice.value -= targetValue;
        }
    }
};

const sendForm = (e) => {
    const data = Object.fromEntries(new FormData(e.target));
    // Пересобираю {} в тот вид, который нужен мне
    const obj = {
        id: store.currentCoctail.id,
        title: store.currentCoctail.title,
        topping: [],
        ingridients: [],
        cup: data.cup,
        price: +data.price,
        image: store.currentCoctail.image,
        size: data.size,
        count: 1,
    };

    for (const key in data) {
        if (key === 'Мята' || key === 'Лёд') {
            obj['topping'].push(key);
        } else if (ingridients.includes(key)) {
            obj['ingridients'].push(key);
        }
    }

    store.addToCart(obj);
    store.closeModal();
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

@media (max-width: 520px) {
    .make__title {
        font-size: 28px;
    }
    .make__wrap-add,
    .make__footer {
        flex-direction: column;
        gap: 20px;
    }
    .make__footer {
        flex-direction: column-reverse;
    }
}
</style>
