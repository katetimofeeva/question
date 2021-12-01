import checkInputs from './check_input';

const dataFromModal = (data) =>{
    const windowModel = document.querySelectorAll('.balcon_icons_img '),
        windowWidth = document.querySelectorAll('#width'),
        windowHeight = document.querySelectorAll('#height'),
        windowProfile = document.querySelectorAll('#view_type'),
        windowCheckbox = document.querySelectorAll('.checkbox');

    checkInputs('#width');
    checkInputs('#height');

    function bindDoCustomer (event, element, key ) {
       element.forEach((item, i ) => {
            item.addEventListener(event, () => {
                switch (item.nodeName) {                                              
                    case 'SPAN' :
                        data[key] = i;;
                        break;
                        case 'INPUT':
                        if (item.getAttribute('type') === 'checkbox') {
                           i === 0 ? data[key] = 'Холодное': data[key] = 'Теплое';
                           element.forEach((check, j) => {
                            check.checked = false;
                            if (i == j) {
                                check.checked = true;
                            }
                           });
                        } else {
                            data[key] = item.value;
                        }
                        break;
                    case 'SELECT' :
                        data[key] = item.value;
                        break;
            }     
              console.log(data);
            if (data.width && data.height ) {
                document.querySelector('.popup_calc_button').disabled = false;
                
            } else {
                document.querySelector('.popup_calc_button').disabled = true; 
                
            }

            if (data.profile){
                document.querySelector('.popup_calc_profile_button ').disabled = false;
            } else {
                document.querySelector('.popup_calc_profile_button ').disabled = true;
            }
            });

        });
        
    }

    bindDoCustomer('click', windowModel, 'model');
    bindDoCustomer('input', windowWidth, 'width');
    bindDoCustomer('input', windowHeight, 'height');  
    bindDoCustomer('change', windowProfile, 'profile');  
    bindDoCustomer('change', windowCheckbox, 'checkbox');  

};

export default dataFromModal;