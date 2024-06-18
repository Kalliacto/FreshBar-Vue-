export const checkPhone = (phone) => {
    const regex = /(?:\+|\d)[\d\-() ]{9,}\d/g;
    return regex.test(phone);
};

export const checkEmail = (email) => {
    const regex = /^[A-Z0-9._%+-]+@[A-Z0-9-]+\.[A-Z]{2,4}$/i;
    return regex.test(email);
};

export const price = {
    Клубника: 50,
    Банан: 40,
    Манго: 80,
    Киви: 70,
    Маракуйя: 85,
    Яблоко: 45,
    Мята: 50,
    Лёд: 10,
    Пластиковый: 0,
    Биоразлагаемый: 20,
};
export const ingridients = ['Клубника', 'Банан', 'Манго', 'Киви', 'Маракуйя', 'Яблоко'];
