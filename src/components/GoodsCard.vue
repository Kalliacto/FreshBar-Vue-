<template>
    <li class="goods__item">
        <article class="goods__card coctail">
            <img
                class="coctail__img"
                :src="props.image || 'https://puzzled-rust-nickel.glitch.me/' + props.coctail.image"
                :alt="props.coctail.title"
            />
            <div class="coctail__content">
                <div class="coctail__text">
                    <h3 class="coctail__title">{{ props.coctail.title }}</h3>
                    <p class="coctail__price text-red">{{ props.coctail.price }} &#8381;</p>
                    <p class="coctail__size">{{ props.coctail.size }}</p>
                </div>
            </div>
            <button class="btn coctail__btn coctail__btn_make" @click="handleClick">Добавить</button>
            <!-- TODO: Если просто коктейль то модалка с названием и выбором лед и стакан -->
            <!-- TODO: Если кастомный коктейль то модалка с формой выбором ингридиентов -->
            <!-- Нужен компонент с формой, в которой будет в зависимости от приходящего пропса отрисовываться или только допы если просто коктейль или допы и ингридиенты если кастомный коктейль -->
        </article>
    </li>
</template>

<script setup>
import { defineProps } from 'vue';
import { useGoodsStore } from '../store/GoodsStore';

const store = useGoodsStore();

const props = defineProps({
    coctail: Object,
    image: String,
});

const handleClick = () => {
    console.log(props.coctail.id);
    if (props.coctail.id) {
        store.openModal('Add');
    } else {
        store.openModal('Custom');
    }
};

// TODO: функцию добавления в корзину
</script>

<style scoped>
.coctail {
    display: flex;
    flex-direction: column;
    height: 100%;
    border-radius: 32px;
    background-color: var(--white);
    padding: 12px 12px 24px 12px;
    height: 100%;
}
.coctail__img {
    width: 100%;
    border-radius: 24px;
    margin-bottom: 12px;
}
.coctail__content {
    flex-grow: 1;
    /* margin-bottom: 10px; */
}
.coctail__text {
    display: flex;
    justify-content: space-between;
    align-items: center;
    line-height: 1.1;
    margin-bottom: 10px;
    gap: 2px 5px;
    flex-wrap: wrap;
}
.coctail__title {
    font-weight: 400;
    font-size: inherit;
}
.coctail__price {
    font-size: inherit;
    font-weight: 600;
}
.coctail__size {
    font-weight: 600;
    font-size: 12px;
    color: var(--main-gray);
    text-align: end;
    flex: 0 0 100%;
}
.coctail__btn {
    margin-top: auto;
}
@media (max-width: 940px) {
    .coctail {
        border-radius: 12px;
        padding: 8px;
    }
    .coctail__img {
        border-radius: 12px;
        margin-bottom: 8px;
    }
    .coctail__content {
        padding: 0;
    }
    .coctail__text {
        row-gap: 8px;
        margin-bottom: 16px;
    }
    .coctail__title {
        flex: 0 0 100%;
    }
    .coctail__size {
        flex: auto;
    }
}
</style>
