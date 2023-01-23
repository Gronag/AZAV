const container =document.querySelector('#cardContainer');
const dataBase = [
    {imgPath:"./imgs/1.png", priceH4Key:"our price", pricePKey:"9.99€ only"},
    {imgPath:"./imgs/2.png", priceH4Key:"our price", pricePKey:"15.99€ only"},
    {imgPath:"./imgs/3.png", priceH4Key:"our price", pricePKey:"4.99€ only"},
    {imgPath:"./imgs/4.png", priceH4Key:"our price", pricePKey:"99.99€ only"},
    {imgPath:"./imgs/5.png", priceH4Key:"our price", pricePKey:"74.99€ only"},
    {imgPath:"./imgs/6.png", priceH4Key:"our price", pricePKey:"29.99€ only"},
];

dataBase.forEach(function(cardObj) {
    // console.log(cardObj.imgPath);
    // console.log(cardObj.priceH4Key);
    // console.log(cardObj.pricePKey);
    creatCard(cardObj)
})

function creatCard(card) {
    const cardEl = document.createElement('article');
    cardEl.classList.add('card');
    container.appendChild(cardEl);

    const myImage = document.createElement('img');
    cardEl.appendChild(myImage);
    const mySrc = myImage.getAttribute("src");
    myImage.setAttribute("src", card.imgPath);

    const price = document.createElement('div');
    cardEl.appendChild(price);

    const priceH4 = document.createElement('h4');
    priceH4.innerText = card.priceH4Key;
    price.appendChild(priceH4);

    const priceP = document.createElement('p');
    priceP.innerText = card.pricePKey;
    price.appendChild(priceP);
    
    const cardButton = document.createElement('button')
    cardButton.innerText = 'buy now';
    cardEl.appendChild(cardButton);
}

const warenKorb = document.querySelector('.waren-korb');

// const buyNow = document.querySelectorAll('button');
// buyNow.addEventListener('click', (e) => {
    
//     const addKorb = document.createElement('div');
//     addKorb.classList.add('korb');
//     warenKorb.appendChild(addKorb);

//     const addOrder = document.createElement('h3');
//     addOrder.classList.add('color-red');
//     addOrder.innerText = `Order Total:    AED 9.99€`;
//     addKorb.appendChild(addOrder);

//     const addDetails = document.createElement('h5');
//     addDetails.innerText = 'Order total include Vat.';
//     addKorb.appendChild(addDetails);
//     console.log(buyNow);
// })

const buyNow = document.querySelectorAll('button');
buyNow.forEach(button => {
    button.addEventListener('click', (e) => {
    
        const addKorb = document.createElement('div');
        addKorb.classList.add('korb');
        warenKorb.appendChild(addKorb);
    
        const addOrder = document.createElement('h3');
        addOrder.classList.add('color-red');
        addOrder.innerText = `Order Total:    AED `;
        addKorb.appendChild(addOrder);
    
        const addDetails = document.createElement('h5');
        addDetails.innerText = 'Order total include Vat.';
        addKorb.appendChild(addDetails);
        console.log(buyNow);
    })
})
