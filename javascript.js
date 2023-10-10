'use strict';
import {localData} from "./localData.js";

const localItem = JSON.parse(localData);


const lowGridContent = document.querySelector('.low_grid_content');

let cartSelectProduct = []; //TODO: select product from user cart

// function Product(pathImgItem, textTitle, textDescription, priceItem) {

//     this.pathImgItem = pathImgItem;
//     this.textTitle = textTitle;
//     this.textDescription = textDescription;
//     this.priceItem = priceItem;
// }
const counterProductInCart = document.createElement('i');
counterProductInCart.style.backgroundColor = 'orange';  // color of the product counter in the cart
const superLowText = document.querySelector('.super_low_text')

const cartItem = document.createElement('div');
cartItem.classList.add('cart_items');
cartItem.style.marginBottom = '40px'; // margin
const por = document.createElement('p');
por.textContent = "This your Cart";
cartItem.appendChild(por);
const cartProducts = document.createElement('div');
cartItem.appendChild(cartProducts);
cartProducts.style.display = 'inline-block';
superLowText.insertAdjacentElement("afterend", cartItem);
cartItem.style.display = 'none';


localItem.forEach(({pathImgItem, textTitle, textDescription, priceItem}) => {
    lowGridContent.style.display = 'grid';
    lowGridContent.style.gridTemplateRows = 'repeat(auto-fit, minmax(300px, 581px))';
    lowGridContent.style.gridTemplateColumns = 'repeat(auto-fit, minmax(265px,1fr))';
    lowGridContent.style.gap = '30px';
    lowGridContent.style.maxWidth = '1140px';

    const item = document.createElement('div');
    const imageItem = document.createElement('div');
    const lowItemTextBox = document.createElement('div');

    item.style.backgroundColor = '#f7e4e2';
    item.style.maxHeight = '581px';
    item.style.maxWidth = '360px';
    item.style.width = '100%';


    lowItemTextBox.style.backgroundColor = '#f8f8f8';
    lowItemTextBox.style.display = 'flex';
    lowItemTextBox.style.alignItems = 'flex-start';
    lowItemTextBox.style.justifyContent = 'center';
    lowItemTextBox.style.flexDirection = 'column';
    lowItemTextBox.style.padding = '24px 16px';
    lowItemTextBox.style.gap = '16px';
    lowItemTextBox.style.width = '100%';


    item.classList.add('item');
    imageItem.classList.add('img');
    lowItemTextBox.classList.add('low_grid_text_box');
    item.appendChild(imageItem);
    item.appendChild(lowItemTextBox);

    const imgGrid = document.createElement('img');
    imgGrid.classList.add('img_grid_center');
    imgGrid.setAttribute('src', pathImgItem);
    if (pathImgItem === 'img/low/Layer_51.svg') {
        imgGrid.classList.remove('img_grid_center');
        imgGrid.classList.add('img_grid_center_2');
        imgGrid.style.width = '40%';
        imgGrid.style.height = '100%';
        imgGrid.style.margin = '8px 0px 7px';
        imgGrid.style.height = '100%';
    } else {
        imgGrid.style.width = '100%';

    }
    imgGrid.setAttribute('alt', pathImgItem + '_icon');

    imageItem.appendChild(imgGrid);
    const maskFromHowerMouse = document.createElement('div');
    maskFromHowerMouse.classList.add('mask');
    const borderMask = document.createElement('div');
    const maskCart = document.createElement('img');
    maskCart.setAttribute('src', 'img/mask/cartIco.svg');
    maskCart.setAttribute('alt', 'img/mask/cartIco.svg_icon_cart');
    maskCart.setAttribute('wight', '27');
    maskCart.setAttribute('height', '25');
    borderMask.classList.add('border_mask');
    maskFromHowerMouse.appendChild(borderMask);
    imageItem.appendChild(maskFromHowerMouse);
    borderMask.appendChild(maskCart);
    const paragraphAddtoCart = document.createElement('p');
    paragraphAddtoCart.textContent = 'Add to Cart';
    paragraphAddtoCart.classList.add('to_take');

    borderMask.appendChild(paragraphAddtoCart);
    const h5TitleItem = document.createElement('h5');
    h5TitleItem.classList.add('h5_grid_title');
    h5TitleItem.textContent = textTitle;

    lowItemTextBox.appendChild(h5TitleItem);
    const pDescItem = document.createElement('p');
    pDescItem.classList.add('p_grid_text');
    pDescItem.textContent = textDescription;

    lowItemTextBox.appendChild(pDescItem);
    const h5PriceItem = document.createElement('h5');
    h5PriceItem.classList.add('price');
    h5PriceItem.style.color = '#f26376';
    h5PriceItem.textContent = priceItem;

    lowItemTextBox.appendChild(h5PriceItem);

    lowGridContent.appendChild(item);
    maskFromHowerMouse.addEventListener('click', function () {
        cartSelectProduct.push({
            "pathImgItem": pathImgItem,
            "textTitle": textTitle,
            "textDescription": textDescription,
            "priceItem": priceItem
        });
        counterProductInCart.textContent = " _" + cartSelectProduct.length + "_ ";
        cartItem.style.display = 'inline-block';
    })
    cartSelectProduct.forEach(({pathImgItem, textTitle, textDescription, priceItem}) =>{
        const cartProductShow = document.createElement('div');
        cartProductShow.classList.add('center');
        cartProductShow.classList.add('cart_product_show');

        const windowProduct = document.createElement('div');
        windowProduct.classList.add('cart_product');
        windowProduct.classList.add('window_product');
        const cartProductShow = document.createElement('div');

    })

});

const cartIcon = document.querySelector('.refheader_3');
cartIcon.style.position = 'relative';
cartIcon.appendChild(counterProductInCart);
counterProductInCart.style.position = 'absolute';
counterProductInCart.style.top = '10%';
counterProductInCart.style.left = '90%';
counterProductInCart.style.transform = 'translate(-50%, -50%)';



