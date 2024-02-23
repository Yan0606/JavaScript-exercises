var date = new Date();

console.log(date.toLocaleDateString("pt-BR",{
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
}));