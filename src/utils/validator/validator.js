const isRegExp = (value, regExp) => regExp.test(value);

export const isNotEmpty = value => !!value;

const emailRegExp = /^([a-zA-Z0-9_\-.]+)@([a-zA-Z0-9_\-.]+)\.([a-zA-Z]{2,5})$/;
export const isEmail = value => isRegExp(value, emailRegExp);

export const isIdentical = (value, targetValue) => value === targetValue;

export const isPostcode = value => isRegExp(value, /^\d{4}$/);

export const isMobile = value => isRegExp(value, /^04\d{8}$/);
