import checkInputs from './check_input';
import clearData from './clearData';

const forms = (dataModal) => {
    const forms = document.querySelectorAll('form'),
        inputs = document.querySelectorAll('input');
        
   
    checkInputs('input[name="user_phone"]');
    
    const message = {
        loading: 'Идет загрузка...',
        succes: 'Спасибо! Ваши данные отправлены',
        error: 'Произошла ошибка'
    }

    function clearInput () {
        inputs.forEach(item => {
            item.value = '';
        });
    }

    const postData = async (url, data ) => {
        document.querySelector('.status').textContent = message.loading;

        const res = await fetch(url, {
            method: "POST",
            body: data,
        })
        return await res.text();
    };

    forms.forEach( form => {
        form.addEventListener('submit', (e) => {
            e.preventDefault();

            let messageStatus = document.createElement('div');
            messageStatus.classList.add('status');
            form.appendChild(messageStatus);

            const data = new FormData (form);
            if (form.getAttribute('data-calc') === "end") {
                for (let key in dataModal) {
                    data.append(key, dataModal[key]);
                }
            }

            postData('assets/server.php', data)
            .then(res => {
                console.log(res);
                messageStatus.textContent = message.succes;
            })
            .catch(() =>   messageStatus.textContent = message.error )
            .finally(() => {
                clearInput(); 
                setTimeout(() => {
                    messageStatus.remove();
                }, 6000);
                
            });
            clearData(dataModal);
            closeModalWindow ();
            console.log(dataModal); 
        })
    })

    function closeModalWindow (){
        const windows = document.querySelectorAll('[data-modal]');
        windows.forEach(item => {
            item.style.display ='none';
        });

    } 
   
};

export default forms;