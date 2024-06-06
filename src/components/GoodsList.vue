<template>
    <section class="goods" id="goods">
        <div class="container goods__container">
            <h2 class="goods__title">Меню</h2>
            <ul class="goods__list">
                <goods-card :coctail="customCoctail" :image="customCoctail.image" />
                <goods-card v-for="coctail in store.goods" :coctail="coctail" :key="coctail.id" />
            </ul>
        </div>
    </section>
</template>

<script setup>
import GoodsCard from '@/components/GoodsCard.vue';
import { ref, watchEffect } from 'vue';
import { useGoodsStore } from '../store/GoodsStore';
import img from '@/assets/img/make your own.jpg';

const store = useGoodsStore();
store.getGoods();

const customCoctail = {
    id: 0,
    title: 'Собери сам',
    image: img,
    price: 236,
    size: '300мл',
};
// https://translated.turbopages.org/proxy_u/en-ru.ru.2b2222bf-666054a0-29dc0a19-74722d776562/https/stackoverflow.com/questions/75182167/vue3-pinia-how-to-make-reactive-a-value-from-the-store
watchEffect(() => {
    if (store.goods.length) {
        ref(store.goods);
    }
});
</script>

<style scoped>
.goods {
    padding: 60px 0 70px;
}
.goods:target {
    color: var(--black);
    background-image: linear-gradient(to right, #e02862, #fadd3a, #18efba, #1a9eea);
    -webkit-text-stroke: transparent 4px;
    background-clip: text;
}
.goods__title {
    font-weight: 900;
    font-size: 44px;
    line-height: 1.1;
    margin-bottom: 40px;
}

.goods__list {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
    /* grid-template-columns: repeat(4, 280px); */
    gap: 20px;
}

@media (max-width: 1240px) {
    .goods__list {
        grid-template-columns: repeat(3, 280px);
    }
}
@media (max-width: 940px) {
    .goods {
        padding-top: 40px;
        padding-bottom: 50px;
    }
    .goods__title {
        margin-bottom: 16px;
        font-size: 24px;
    }
    .goods__list {
        grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
        gap: 16px;
    }
}
@media (max-width: 640px) {
    .goods {
        padding-top: 40px;
        padding-bottom: 30px;
    }
    .goods__list {
        gap: 10px;
    }
}
@media (max-width: 340px) {
    .goods__list {
        grid-template-columns: 1fr;
        gap: 10px;
    }
}
</style>
