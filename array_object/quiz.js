const starbucks = [
    {name: "americano", price: 3000, shots: 2, ingredients: ["water", "bean"]},
    {name: "latte", price: 4000, shots: 2, ingredients: ["water", "bean", "milk"]},
    {name: "frappuccino", price: 4500, shots: 2, ingredients: ["water", "bean", "milk", "shake"]},
    {name: "mocha", price: 4500, shots: 2, ingredients: ["water", "bean", "milk", "chocolate"]},
];

const menu = document.createElement("div");
menu.style.display = 'grid';
menu.style.gridTemplateColumns = 'repeat(2, 1fr)';

starbucks.forEach((x)=> {
    const box = document.createElement("div");
    box.innerHTML = `
        <h4>이름: ${x.name + "🧊"}</h4>
        <h5>가격: ${x.price + 1000} 샷: ${x.shots}</h5>
    `;
    box.style.boxShadow = `rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px`;
    box.style.display = "flex";
    box.style.flexDirection = "column";
    box.style.justifyContent = "center";
    box.style.alignItems = "center";
    box.style.padding = "20px";
    menu.appendChild(box);
});
document.body.appendChild(menu);