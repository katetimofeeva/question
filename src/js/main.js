import './slider';
import modals from './modules/modal';
import tabs from './modules/tabs';
import forms from './modules/forms';
import dataFromModal from './modules/data_from_modal';
import timer from './modules/timer';
import photo from './modules/photo';

window.addEventListener('DOMContentLoaded', () => {
    'use strict';
    // создаю объект для хранения информации из модальных окон
    let modalData ={};
    let deadline ='2021-12-18';

    modals();
    tabs('.glazing_slider' ,'.glazing_block', '.glazing_content', 'active');
    tabs('.decoration_slider', '.no_click', '.decoration_content >div > div', 'after_click' );
    tabs('.balcon_icons', '.balcon_icons_img', '.big_img > img', 'do_image_more', 'inline-block');
    forms(modalData);
    dataFromModal(modalData);
    timer('.container1', deadline);
    photo();
    

});



console.log(1);
