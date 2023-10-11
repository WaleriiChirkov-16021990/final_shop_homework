'use strict';
import {localData} from "./localData.js";

const localItem = JSON.parse(localData);


const lowGridContent = document.querySelector('.low_grid_content');

const cartSelectProduct = [];

const counterProductInCart = document.createElement('i');
counterProductInCart.style.backgroundColor = 'orange';  // color of the product counter in the cart
const optionsHeightBackground = document.querySelector('.options_height_background')


const cartItem = document.createElement('div');
cartItem.classList.add('cart_items');
cartItem.style.marginBottom = '96px'; // margin
const por = document.createElement('p');
const cartProducts = document.createElement('div');
cartProducts.classList.add('cart_products');
por.textContent = "Cart Items";
por.style.fontFamily = 'Lato';
por.style.color = '#222';
por.style.fontSize = '30px';
por.style.fontWeight = '400';
por.style.marginBottom = '64px'; // margin
cartItem.appendChild(por);
// cartProducts.style.display = 'inline-block';
optionsHeightBackground.insertAdjacentElement("afterend", cartItem);
cartItem.appendChild(cartProducts);
cartItem.style.display = 'none';


const cartProductShow = document.createElement('div');
cartProductShow.classList.add('center');
cartProductShow.classList.add('cart_product_show');
cartProducts.appendChild(cartProductShow);

const windowProduct = document.createElement('figure');
windowProduct.classList.add('cart_product');
windowProduct.classList.add('window_product');
cartProductShow.appendChild(windowProduct);
console.log(cartSelectProduct);


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
        let flag = true;
        if (cartSelectProduct.length > 0) {
            // optionsHeightBackground.style.marginBottom = '96px';
            cartSelectProduct.forEach((element,index) => {
                let countElem;
                if (element.pathImgItem === pathImgItem) {
                     countElem = element.countProduct += 1;
                    flag = false;
                    // cartSelectProduct.splice(index, 1);
                    windowProduct.removeChild(item);
                    cartSelectProduct.push({
                        "pathImgItem": pathImgItem,
                        "textTitle": textTitle,
                        "textDescription": textDescription,
                        "priceItem": priceItem,
                        "countProduct": countElem,
                    });
                }
            });
        }
        if (flag) {
            cartSelectProduct.push({
                "pathImgItem": pathImgItem,
                "textTitle": textTitle,
                "textDescription": textDescription,
                "priceItem": priceItem,
                "countProduct": 1,
            });

        }

        counterProductInCart.textContent = " _" + cartSelectProduct.length + "_ ";
        cartItem.style.display = 'inline-block';
        // });
        // cartSelectProduct.at(-1).(({pathImgItem, textTitle, textDescription, priceItem, countProduct}) => {
//================================================================
        counterProduct(cartSelectProduct);



    });

});

const cartIcon = document.querySelector('.refheader_3');
cartIcon.style.position = 'relative';
cartIcon.appendChild(counterProductInCart);
counterProductInCart.style.position = 'absolute';
counterProductInCart.style.top = '10%';
counterProductInCart.style.left = '90%';
counterProductInCart.style.transform = 'translate(-50%, -50%)';


// const counterMy = document.querySelectorAll('.cart_product_1');

// console.log()

const counterProduct = function (cartSelectProduct) {
    if (cartSelectProduct.length !== 0) {
        const lastElements = cartSelectProduct.at(cartSelectProduct.length - 1);

        const cartProduct1 = document.createElement('div');
        cartProduct1.classList.add('cart_product_1');
        windowProduct.appendChild(cartProduct1);

        const cartProductPicture = document.createElement('div');
        cartProduct1.appendChild(cartProductPicture);

        const pictureImg = document.createElement('img');
        pictureImg.classList.add('cart_product_picture');
        pictureImg.setAttribute('src', lastElements.pathImgItem);
        pictureImg.setAttribute('alt', lastElements.pathImgItem + '_icon');
        cartProductPicture.appendChild(pictureImg);

        const cartProductDescription = document.createElement('div');
        cartProductDescription.classList.add('cart_product_description');
        cartProduct1.appendChild(cartProductDescription);


        const cartProductTitleDescription = document.createElement('div');
        cartProductTitleDescription.classList.add('cart_product_title_description');
        cartProductDescription.appendChild(cartProductTitleDescription);

        const cartProductTitle = document.createElement('div');
        cartProductTitle.classList.add('title');
        cartProductTitleDescription.appendChild(cartProductTitle);

        const cartTitleDiscriptionProduct = document.createElement('h4');
        cartTitleDiscriptionProduct.classList.add('title_discription_product');
        cartTitleDiscriptionProduct.textContent = lastElements.textTitle;
        cartProductTitle.appendChild(cartTitleDiscriptionProduct);

        const cartProductTitleXClosed = document.createElement('div');
        cartProductTitleXClosed.classList.add('x_glosed');
        cartProductTitleDescription.appendChild(cartProductTitleXClosed);


        const cartxGlosedX = document.createElement('img');
        cartxGlosedX.classList.add('x_glosed_X');
        cartxGlosedX.setAttribute('src', 'img/mask/closed.svg');
        cartxGlosedX.setAttribute('alt', 'img/mask/closed.svg__icon_X');
        cartProductTitleXClosed.appendChild(cartxGlosedX);


        const cartTextDescription = document.createElement('div');
        cartTextDescription.classList.add('text_description');
        cartProductDescription.appendChild(cartTextDescription);


        const cartTextDescriptionP1 = document.createElement('p');
        cartTextDescriptionP1.textContent = 'Price: ';

        const cartTextDescriptionSpan1 = document.createElement('span');
        cartTextDescriptionSpan1.textContent = lastElements.priceItem;
        cartTextDescriptionSpan1.classList.add('price_cart');
        cartTextDescriptionP1.appendChild(cartTextDescriptionSpan1);


        const cartTextDescriptionP2 = document.createElement('p');
        cartTextDescriptionP2.textContent = 'Color: ';
        const cartTextDescriptionSpan2 = document.createElement('span');
        cartTextDescriptionSpan2.classList.add('text_description_result');
        cartTextDescriptionSpan2.textContent = 'Black';
        cartTextDescriptionP2.appendChild(cartTextDescriptionSpan2);


        const cartTextDescriptionP3 = document.createElement('p');
        cartTextDescriptionP3.textContent = 'Size: ';
        const cartTextDescriptionSpan3 = document.createElement('span');
        cartTextDescriptionSpan3.classList.add('text_description_result');
        cartTextDescriptionSpan3.textContent = 'XL';
        cartTextDescriptionP3.appendChild(cartTextDescriptionSpan3);

        const cartQuantityProduct = document.createElement('div');
        cartQuantityProduct.classList.add('quantity_product');

        const cartQuantityP = document.createElement('p');
        cartQuantityP.textContent = 'Quantity: ';
        cartQuantityProduct.appendChild(cartQuantityP);
        const cartQuantityCount = document.createElement('div');

        cartQuantityCount.classList.add('quantity_count');
        const cartQuantityCountP = document.createElement('p');
        cartQuantityCountP.classList.add('count_product');
        cartQuantityCount.textContent = lastElements.countProduct;
        cartQuantityCount.appendChild(cartQuantityCountP);
        cartQuantityProduct.appendChild(cartQuantityCount);

        cartTextDescription.appendChild(cartTextDescriptionP1);
        cartTextDescription.appendChild(cartTextDescriptionP2);
        cartTextDescription.appendChild(cartTextDescriptionP3);
        cartTextDescription.appendChild(cartQuantityProduct);
        cartxGlosedX.addEventListener('click', (target, elements) => {
            cartSelectProduct.forEach((element, index, array) => {
                if (element.pathImgItem === lastElements.pathImgItem) {
                    cartSelectProduct.splice(index, 1);
                    counterProductInCart.textContent = " _" + cartSelectProduct.length + "_ ";
                    windowProduct.removeChild(cartProduct1);

                }
            });
        });
    } else {
        cartItem.style.display = 'none';
    }
}

