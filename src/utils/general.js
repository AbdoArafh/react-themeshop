export function capitalizeFirstLetter(str) {
    return str[0].toUpperCase().concat(str.slice(1));
}

export function round(num,pre=0) {
    const pow = Math.pow(10,pre);
    return Math.round(num*pow)/pow;
}