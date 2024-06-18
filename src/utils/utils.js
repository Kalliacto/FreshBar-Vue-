export const checkPhone = (phone) => {
    const regex = /(?:\+|\d)[\d\-() ]{9,}\d/g;
    return regex.test(phone);
};

export const checkEmail = (email) => {
    const regex = /^[A-Z0-9._%+-]+@[A-Z0-9-]+\.[A-Z]{2,4}$/i;
    return regex.test(email);
};
