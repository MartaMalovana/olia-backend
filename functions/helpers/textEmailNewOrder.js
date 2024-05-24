const textEmailNewOrder = (data) => {
    const connect = data.connect === [] ? "не вказано" : data.connect.map(el => el === "call" ? "Зателефонуйте мені" : el).join(", ");
    let warehouse = "";
    switch (data.warehouse) {
        case "novaposhta": warehouse = "Нова Пошта"; break;
        case "ukrposhta": warehouse = "Укрошта"; break;
        case "meest": warehouse = "Міст"; break;
        default: break;
    };
    const comment = data.comment === "no comment" ? "немає" : data.comment;

    const newData = `<div>
    <p>Ім'я замовника: <strong>${data.name} ${data.lastName}</strong></p>
    <p>Контактний номер: <strong>${data.phone}</strong></p>
    <p>Служба доставки: <strong>${data.post}</strong></p>
    <p>Місто: <strong>${data.city}</strong></p>
    <p>Відділення: <strong>${data.warehouse}</strong></p>
    <p>Коментар: <strong>${comment}</strong></p>
    <p>Як зв'язатись: <strong>${connect}</strong></p>
    <div>
        <p>Продукція:</p>
        <ul>
            ${data.basket.map(product => `<li><strong>${product.productName}</strong>, ${product.size} - ${product.price} грн, <strong>${product.amount} шт</strong></li>`)}
        </ul>
    </div>
    <p>Загальна вартість замовлення: <strong>${data.totalPrice} грн</strong></p>
</div>`;

    return newData;
};

module.exports = textEmailNewOrder;