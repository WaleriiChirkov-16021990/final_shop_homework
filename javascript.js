'use strict';
import {localData} from "./localData.js";

const localItem = JSON.parse(localData);


localItem.forEach(({pathImgItem, textTitle, textDescription, priceItem}) => {

    const lowGridContent = document.querySelector('.low_grid_content');
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

});
