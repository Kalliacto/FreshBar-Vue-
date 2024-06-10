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
            console.log(data);
            // TODO: Переработать логику, чтобы добавлять одинаковые коктейли по названию но с разными наполнителями,если все внутри совпадает от топингов и стакана, то просто увеличивать каунт
            // const checkCoctailInBasket = this.cart.find((e) => e.id === data.id);
            // if (checkCoctailInBasket) {
            //     // Если ингридиенты одинаковые то меняем коунт и прайс
            //     checkCoctailInBasket.count = checkCoctailInBasket.count + data.count;
            //     checkCoctailInBasket.price = checkCoctailInBasket.price + data.price;
            //     // Если разные то новый итем
            // } else {
            //     this.cart.push(data);
            // }
            // localStorage.setItem('basketFreshBar', JSON.stringify(this.cart));
        },
        // removeCoctailFromCart(data) {
        //     const checkCoctailInBasket = this.cart.find((e) => e.id === data.id);
        //     if (checkCoctailInBasket) {
        //         checkCoctailInBasket.count = checkCoctailInBasket.count - data.count;
        //         if (checkCoctailInBasket.count === 0) {
        //             this.cart = this.cart.filter((e) => e.id !== data.id);
        //         }
        //     }
        //     localStorage.setItem('basketFreshBar', JSON.stringify(this.cart));
        // },
        // deleteCoctailFromCart(data) {
        //     this.cart = this.cart.filter((el) => el.id !== data.id);
        //     localStorage.setItem('basketFreshBar', JSON.stringify(this.cart));
        // },
        updateCart(data) {
            this.cart = JSON.parse(data);
        },
        sendCart() {
            // Сделать отправку корзины на сервер имитация
        },
    },
    getters: {},
});
