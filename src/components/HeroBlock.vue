<template>
    <section class="hero">
        <div class="container hero__container">
            <h1 class="visually-hidden">Freshy Bar - Выбери свой освежающий фреш</h1>
            <h2 class="hero__title">Выбери свой <span class="text-red">освежающий</span> фреш</h2>
            <div class="hero__cups">
                <div class="hero__cup hero__cup_pink">
                    <img class="hero__img" src="../assets/img/pink.png" alt="Стакан с розовым фрешем" />
                </div>
                <div class="hero__cup hero__cup_green">
                    <img class="hero__img" src="../assets/img/green.png" alt="Стакан с зеленым фрешем" />
                </div>
                <div class="hero__cup hero__cup_orange">
                    <img class="hero__img" src="../assets/img/orange.png" alt="Стакан с оранжевым фрешем" />
                </div>
            </div>

            <div class="decor">
                <div class="decor__img decor__img_01"></div>
                <div class="decor__img decor__img_02"></div>
                <div class="decor__img decor__img_03"></div>
                <div class="decor__img decor__img_04"></div>
                <div class="decor__img decor__img_05"></div>
                <div class="decor__img decor__img_06"></div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: 'HeroBlock',
};
</script>

<style scoped>
.hero__container {
    position: relative;
}
.hero {
    padding: 30px 0 85px;
}
.hero__title {
    font-weight: 900;
    font-size: 84px;
    line-height: 1.1;
    max-width: 880px;
}
.hero__cups {
    display: flex;
    gap: 20px;
    padding-top: 270px;
    align-items: flex-end;
}
.hero__cup {
    position: relative;
    border-radius: 24px;
    width: 100%;
    aspect-ratio: 1/1;
}
.hero__img {
    position: absolute;
    bottom: 13%;
    left: 50%;
    transform: translateX(-50%);
    width: 55%;
    /* Все в % соотношении для того чтобы все пропорционально сжималось */
}
.hero__cup_pink {
    background-color: #ff196c;
}
.hero__cup_green {
    background-color: #ffb72a;
    margin-top: -70px;
    align-self: flex-start;
}
.hero__cup_orange {
    background-color: #34b905;
}

.decor {
    position: absolute;
    /* Растянись на всю ширину inset: 0; */
    inset: 0;
}
.decor__img {
    position: absolute;
    background-position: center;
    background-size: 100%;
    background-repeat: no-repeat;
}
.decor__img_01 {
    background-image: url('../assets/img/berries/strawberry.png');
    width: 223px;
    height: 214px;
    filter: drop-shadow(0 10px 30px rgba(164, 7, 2, 0.5));
    left: -6%;
    top: 17%;
    animation: flying01 2s ease-in-out;
}
.decor__img_02 {
    background-image: url('../assets/img/berries/blackberry.png');
    width: 180px;
    height: 147px;
    filter: drop-shadow(0 4px 20px rgba(17, 7, 108, 0.5));
    right: 6.5%;
    top: 9%;
    animation: flying02 2s ease-in-out;
}
.decor__img_03 {
    background-image: url('../assets/img/berries/sea-buckthorn.png');
    width: 46px;
    height: 41px;
    filter: drop-shadow(0 4px 20px rgba(223, 97, 15, 0.4));
    top: 47.5%;
    left: 36%;
    animation: flying03 2s ease-in-out;
}
.decor__img_04 {
    background-image: url('../assets/img/berries/sea-buckthorn.png');
    width: 46px;
    height: 41px;
    filter: drop-shadow(0 4px 20px rgba(223, 97, 15, 0.4));
    top: 32%;
    right: 0;
    animation: flying04 2s ease-in-out;
}
.decor__img_05 {
    background-image: url('../assets/img/berries/blueberries.png');
    width: 109px;
    height: 114px;
    filter: drop-shadow(0 4px 20px rgba(1, 30, 82, 0.5));
    bottom: -2%;
    left: 26.5%;
    animation: flying05 2s ease-in-out;
}
.decor__img_06 {
    background-image: url('../assets/img/berries/strawberry.png');
    width: 223px;
    height: 214px;
    filter: drop-shadow(0 10px 30px 0 rgba(164, 7, 2, 0.5));
    transform: scaleX(-1);
    bottom: -8%;
    right: -5%;
    animation: flying06 2s ease-in-out;
}
@media (max-width: 1240px) {
    .hero {
        padding-bottom: 30px;
    }
    .hero__title {
        font-style: 64px;
        max-width: 680px;
    }
    .hero__cups {
        padding-top: 216px;
    }
    .hero__cup_orange {
        padding-top: -50px;
    }
    .goods__list {
        grid-template-columns: repeat(3, 280px);
    }
    .decor__img_01 {
        width: 131px;
        height: 125px;
        left: 1%;
        top: 38%;
        animation: flyingLaptop01 2s ease-in-out;
    }
    .decor__img_02 {
        width: 122px;
        height: 99px;
        right: 6%;
        top: 28%;
        animation: flyingLaptop02 2s ease-in-out;
    }
    .decor__img_03 {
        width: 34px;
        height: 30px;
        right: 6%;
        top: 28%;
        animation: flyingLaptop03 2s ease-in-out;
    }
    .decor__img_04 {
        width: 38px;
        height: 33px;
        top: 47%;
        right: 0;
        animation: flyingLaptop04 2s ease-in-out;
    }
    .decor__img_05 {
        width: 61px;
        height: 64px;
        bottom: -2%;
        left: 29%;
        animation: flyingLaptop05 2s ease-in-out;
    }
    .decor__img_06 {
        width: 129px;
        height: 124px;
        bottom: -5%;
        right: -3%;
        animation: flyingLaptop06 2s ease-in-out;
    }
}
@media (max-width: 940px) {
    .hero {
        padding-bottom: 46px;
    }
    .hero__title {
        font-size: 44px;
        max-width: 462px;
    }
    .hero__cups {
        padding-top: 112px;
        gap: 13px;
    }
    .hero__cup {
        border-radius: 12px;
    }
    .hero__img {
        bottom: 10%;
    }
    .decor__img_01 {
        width: 76px;
        height: 73px;
        left: -2%;
        top: 22%;
        animation: flyingTablet01 2s ease-in-out;
    }
    .decor__img_02 {
        width: 72px;
        height: 58px;
        right: 6%;
        top: 10%;
        animation: flyingTablet02 2s ease-in-out;
    }
    .decor__img_03 {
        width: 25px;
        height: 23px;
        top: 46%;
        left: 36%;
        animation: flyingTablet03 2s ease-in-out;
    }
    .decor__img_04 {
        width: 22px;
        height: 19px;
        top: 32%;
        right: -3px;
        animation: flyingTablet04 2s ease-in-out;
    }
    .decor__img_05 {
        width: 41px;
        height: 44px;
        bottom: -3%;
        left: 28%;
        animation: flyingTablet05 2s ease-in-out;
    }
    .decor__img_06 {
        width: 96px;
        height: 93px;
        bottom: -12%;
        right: -5%;
        animation: flyingTablet06 2s ease-in-out;
    }
}
@media (max-width: 640px) {
    .hero {
        padding-top: 0;
        padding-bottom: 120px;
    }
    .hero__title {
        font-size: 36px;
    }
    .hero__cups {
        display: none;
    }
    .decor__img_01 {
        width: 76px;
        height: 73px;
        left: 4%;
        top: 95%;
        animation: flyingMobile01 2s ease-in-out;
    }
    .decor__img_02 {
        width: 62px;
        height: 50px;
        right: 1%;
        top: 73%;
        animation: flyingMobile02 2s ease-in-out;
    }
    .decor__img_03 {
        width: 25px;
        height: 23px;
        top: 108%;
        left: 57%;
        animation: flyingMobile03 2s ease-in-out;
    }
    .decor__img_04 {
        display: none;
    }
    .decor__img_05 {
        display: none;
    }
    .decor__img_06 {
        display: none;
    }
}
/* ----------------desc---------------------- */
@keyframes flying01 {
    0% {
        right: -100%;
        top: -50%;
    }
    100% {
        left: -6%;
        top: 17%;
    }
}
@keyframes flying02 {
    0% {
        right: -100%;
        top: -50%;
    }
    100% {
        right: 6.5%;
        top: 9%;
    }
}
@keyframes flying03 {
    0% {
        top: -100%;
        left: -100%;
    }
    100% {
        top: 47.5%;
        left: 36%;
    }
}
@keyframes flying04 {
    0% {
        top: -70%;
        right: -20%;
    }
    100% {
        top: 32%;
        right: 0;
    }
}
@keyframes flying05 {
    0% {
        bottom: -100%;
        left: -50%;
    }
    100% {
        bottom: -2%;
        left: 26.5%;
    }
}
@keyframes flying06 {
    0% {
        bottom: -20%;
        right: -115%;
    }
    100% {
        bottom: -8%;
        right: -5%;
    }
}
/* ----------------Laptop---------------------- */

@keyframes flyingLaptop01 {
    0% {
        right: -100%;
        top: -50%;
    }
    100% {
        left: 1%;
        top: 38%;
    }
}
@keyframes flyingLaptop02 {
    0% {
        right: -100%;
        top: -50%;
    }
    100% {
        right: 6%;
        top: 28%;
    }
}
@keyframes flyingLaptop03 {
    0% {
        top: -100%;
        left: -100%;
    }
    100% {
        right: 6%;
        top: 28%;
    }
}
@keyframes flyingLaptop04 {
    0% {
        top: -70%;
        right: -20%;
    }
    100% {
        top: 47%;
        right: 0;
    }
}
@keyframes flyingLaptop05 {
    0% {
        bottom: -100%;
        left: -50%;
    }
    100% {
        bottom: -2%;
        left: 29%;
    }
}
@keyframes flyingLaptop06 {
    0% {
        bottom: -20%;
        right: -115%;
    }
    100% {
        bottom: -5%;
        right: -3%;
    }
}
/* ---------------Tablet----------------- */
@keyframes flyingTablet01 {
    0% {
        right: -100%;
        top: -50%;
    }
    100% {
        left: -2%;
        top: 22%;
    }
}
@keyframes flyingTablet02 {
    0% {
        right: -100%;
        top: -50%;
    }
    100% {
        right: 6%;
        top: 10%;
    }
}
@keyframes flyingTablet03 {
    0% {
        top: -100%;
        left: -100%;
    }
    100% {
        top: 46%;
        left: 36%;
    }
}
@keyframes flyingTablet04 {
    0% {
        top: -70%;
        right: -20%;
    }
    100% {
        top: 32%;
        right: -3px;
    }
}
@keyframes flyingTablet05 {
    0% {
        bottom: -100%;
        left: -50%;
    }
    100% {
        bottom: -3%;
        left: 28%;
    }
}
@keyframes flyingTablet06 {
    0% {
        bottom: -20%;
        right: -115%;
    }
    100% {
        bottom: -12%;
        right: -5%;
    }
}
/* ----------------Mobile------------------ */
@keyframes flyingMobile01 {
    0% {
        right: -100%;
        top: -50%;
    }
    100% {
        left: 4%;
        top: 95%;
    }
}
@keyframes flyingMobile02 {
    0% {
        right: -100%;
        top: -50%;
    }
    100% {
        right: 1%;
        top: 73%;
    }
}
@keyframes flyingMobile03 {
    0% {
        top: -100%;
    }
    100% {
        top: 108%;
        left: 57%;
    }
}
</style>
