import { defineStore } from 'pinia';

const API_URL = 'https://puzzled-rust-nickel.glitch.me/';

export const useGoodsStore = defineStore('GoodsStore', {
    // state
    state: () => ({
        goods: [],
        isModalOpen: false,
        content: '',
        currentCoctail: {},
        cart: [],
    }),
    // actions
    actions: {
        getGoods() {
            fetch(API_URL + 'api/goods')
                .then((res) => {
                    if (res.status == 200) {
                        return res.json();
                    } else {
                        throw { name: 'ErrorGetGoods', message: ` Ошибка ${res.status} ` };
                    }
                })
                .then((res) => (this.goods = res))
                .catch((error) => alert(`${error.name}: ${error.message}`));
        },
        openModal(str, obj = false) {
            this.isModalOpen = true;
            this.content = str;
            if (obj) {
                this.currentCoctail = obj;
            }
        },
        closeModal() {
            this.content = '';
            this.isModalOpen = false;
        },
        addToCart(data) {
            const checkCoctailInBasket = this.cart.filter((e) => e.id === data.id);

            if (!checkCoctailInBasket.length) {
                this.cart.push(data);
            } else {
                let isNewPosition = true;
                for (let coctail of checkCoctailInBasket) {
                    if (coctail.cup !== data.cup) {
                        continue;
                    }
                    if (coctail.topping.join('') !== data.topping.join('')) {
                        continue;
                    }
                    if (coctail.ingridients.join('') !== data.ingridients.join('')) {
                        continue;
                    }
                    isNewPosition = false;
                    coctail.count = coctail.count + data.count;
                    coctail.price = coctail.price + data.price;
                    break;
                }

                if (isNewPosition) {
                    this.cart.push(data);
                }
            }

            localStorage.setItem('basketFreshBar', JSON.stringify(this.cart));
        },
        incrementCoctailFromCart(data) {
            const coctailInCart = this.cart.find((el) => el === data);

            coctailInCart.price = coctailInCart.price + coctailInCart.price / coctailInCart.count;
            coctailInCart.count = coctailInCart.count + 1;

            localStorage.setItem('basketFreshBar', JSON.stringify(this.cart));
        },
        decrementCoctailFromCart(data) {
            const coctailInCart = this.cart.find((el) => el === data);

            if (coctailInCart.count === 1) {
                this.deleteCoctailFromCart(coctailInCart);
            } else {
                coctailInCart.price = coctailInCart.price - coctailInCart.price / coctailInCart.count;
                coctailInCart.count = coctailInCart.count - 1;
            }

            localStorage.setItem('basketFreshBar', JSON.stringify(this.cart));
        },
        deleteCoctailFromCart(data) {
            this.cart = this.cart.filter((el) => el !== data);
            localStorage.setItem('basketFreshBar', JSON.stringify(this.cart));
        },
        updateCart(data) {
            this.cart = JSON.parse(data);
        },
        sendCart() {
            // Сделать отправку корзины на сервер имитация
        },
    },
    getters: {},
});
