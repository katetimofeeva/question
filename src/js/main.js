import './slider';
import modals from './modules/modal';
import tabs from './modules/tabs';

window.addEventListener('DOMContentLoaded', () => {
    modals();
    tabs('.glazing_slider' ,'.glazing_block', '.glazing_content', 'active');

});



console.log(1);
