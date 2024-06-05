<template>
    <section class="goods" id="goods">
        <div class="container goods__container">
            <h2 class="goods__title">Меню</h2>
            <ul class="goods__list">
                <li class="goods__item">
                    <article class="goods__card coctail">
                        <!-- <img class="coctail__img" src="" alt="Коктейль собери сам"> -->
                        <div class="coctail__content">
                            <div class="coctail__text">
                                <h3 class="coctail__title">Собери сам</h3>
                                <p class="coctail__price text-red">236 p</p>
                                <p class="coctail__size">300мл</p>
                            </div>
                        </div>
                        <button class="btn coctail__btn coctail__btn_make">Добавить</button>
                    </article>
                </li>
            </ul>
        </div>
    </section>
</template>

<script>
export default {
    name: 'GoodsList',
};
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
