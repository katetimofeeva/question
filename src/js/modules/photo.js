const photo = () => {
    const photoContainer = document.querySelector('.works'),
        photoPopup = document.createElement('div'),
        bigPhoto = document.createElement('img');

    photoPopup.classList.add('popup');
    photoContainer.appendChild(photoPopup);
    photoPopup.style.justifyContent = 'center';
    photoPopup.style.alignItems = 'center';
    photoPopup.style.display = 'none';

    photoPopup.appendChild(bigPhoto);

    photoContainer.addEventListener('click', (e) => {
        e.preventDefault();
       
        let target = e.target;

        if (target && target.classList.contains('preview')) {
            photoPopup.style.display = 'flex';
            const link = target.parentNode.getAttribute('href');
            bigPhoto.setAttribute('src', link); //element.setAttribute(name, value);
           
        }
        
        if (target && target.matches('div.popup')) {
            photoPopup.style.display= 'none';
        }

    });
};

export default photo;