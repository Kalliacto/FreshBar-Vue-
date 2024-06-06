import { defineStore } from 'pinia';

const API_URL = 'https://puzzled-rust-nickel.glitch.me/';

export const useGoodsStore = defineStore('GoodsStore', {
    // state
    state: () => ({
        goods: [],
        isModalOpen: false,
        content: '',
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
        openModal(str) {
            this.isModalOpen = true;
            this.content = str;
        },
        closeModal() {
            this.content = '';
            this.isModalOpen = false;
        },
    },
    getters: {},
});