<template>
    <header class="header">
        <div class="container header__container">
            <img class="header__logo" src="../assets/img/logo.svg" alt="Логотип Freshy Bar" id="logo" />
            <div class="header__btns">
                <button class="header__btn-order" @click="handlerOpenCart">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M8.24999 7.013V6C8.24999 5.00544 8.64508 4.05161 9.34834 3.34835C10.0516 2.64509 11.0054 2.25 12 2.25C12.9946 2.25 13.9484 2.64509 14.6516 3.34835C15.3549 4.05161 15.75 5.00544 15.75 6V7.013C17.047 7.05 17.837 7.183 18.442 7.68C19.272 8.36 19.502 9.514 19.965 11.823L20.565 14.823C21.229 18.143 21.561 19.803 20.661 20.902C19.76 22 18.067 22 14.68 22H9.31999C5.93399 22 4.23999 22 3.33999 20.902C2.43999 19.804 2.77199 18.144 3.43599 14.823L4.03599 11.823C4.49799 9.514 4.72899 8.36 5.55799 7.68C6.16399 7.184 6.954 7.05 8.251 7.013H8.24999ZM9.74999 6C9.74999 5.40326 9.98705 4.83097 10.409 4.40901C10.831 3.98705 11.4033 3.75 12 3.75C12.5967 3.75 13.169 3.98705 13.591 4.40901C14.0129 4.83097 14.25 5.40326 14.25 6V7H9.74999V6ZM15 11C15.2652 11 15.5196 10.8946 15.7071 10.7071C15.8946 10.5196 16 10.2652 16 10C16 9.73478 15.8946 9.48043 15.7071 9.29289C15.5196 9.10536 15.2652 9 15 9C14.7348 9 14.4804 9.10536 14.2929 9.29289C14.1054 9.48043 14 9.73478 14 10C14 10.2652 14.1054 10.5196 14.2929 10.7071C14.4804 10.8946 14.7348 11 15 11ZM9.99999 10C9.99999 10.2652 9.89464 10.5196 9.7071 10.7071C9.51957 10.8946 9.26521 11 8.99999 11C8.73478 11 8.48042 10.8946 8.29289 10.7071C8.10535 10.5196 7.99999 10.2652 7.99999 10C7.99999 9.73478 8.10535 9.48043 8.29289 9.29289C8.48042 9.10536 8.73478 9 8.99999 9C9.26521 9 9.51957 9.10536 9.7071 9.29289C9.89464 9.48043 9.99999 9.73478 9.99999 10Z"
                            fill="currentColor"
                        />
                    </svg>
                    <sup class="text-red text-red_sup" v-if="allCountCoctail">({{ allCountCoctail }})</sup>
                </button>
                <a href="#goods" class="btn header__btn">Заказать</a>
            </div>
        </div>
    </header>
</template>

<script setup>
import { computed } from 'vue';
import { useGoodsStore } from '../store/GoodsStore';

const store = useGoodsStore();

const allCountCoctail = computed(() => store.cart.reduce((acc, current) => acc + current.count, 0));

// Должна быть форма с Фио и тел
const handlerOpenCart = () => {
    store.openModal('Cart');
};
</script>

<style>
.header {
    padding: 36px 0;
}
.header__container {
    display: flex;
    justify-content: space-between;
}

.header__btns {
    display: flex;
    align-items: center;
    gap: 32px;
}
.header__logo {
    max-width: 160px;
}
.header__btn-order {
    position: relative;
    line-height: 1;
    width: 24px;
    height: 24px;
}
.header__btn {
    display: block;
}

.text-red_sup {
    position: absolute;
    right: -10px;
    top: 3px;
}

@media (max-width: 940px) {
    .header {
        padding: 34px 0 20px;
    }
    .header__btns {
        gap: 24px;
    }
}
@media (max-width: 640px) {
    .header {
        padding: 31px 0;
    }
    .header__logo {
        max-width: 120px;
    }
    .header__btn {
        display: none;
    }
}
</style>
