const tabs  = (headerSelector, tabsSelector, contentSelector, activeClass)=> {
    
    const  header = document.querySelector(headerSelector),
        tab = document.querySelectorAll(tabsSelector),
        content = document.querySelectorAll(contentSelector);
        
        /*console.log(header);
        console.log( activeClass);
        tab.forEach(item => console.log(item));
        content.forEach(item => console.log(item));*/
    function showTabContent(i = 0) {
        content[i].style.display = 'block';
        tab[i].classList.add(activeClass);
    }
    
    function hideTabContent() {
        content.forEach(item => {
            item.style.display = 'none';
        });

        tab.forEach(item => {
            item.classList.remove(activeClass);
        });
    }

    hideTabContent();
    showTabContent();

    header.addEventListener('click', (e) => {
        const target = e.target;
        if (target &&
            (target.classList.contains(tabsSelector.slice(1)) || 
        target.parentNode.classList.contains(tabsSelector.replace(/\./, "")))) {
            tab.forEach((item, i) => {
                if (target == item || target.parentNode == item) {
                    hideTabContent();
                    showTabContent(i);
                }
            });
        }
    });

    /*header.addEventListener('click', (e) => {
      const target = e.target;
              
        if (target && (target.classList.contains(tabsSelector.replace(/\./, "")) ||
        target.parentNode.classList.contains(tabsSelector.replace(/\./, ""))) ){ //можно вірезать запятую с помощью регулярного віражения tabsSelector.replace(/\./, ""
            console.log('ok');
            tab.forEach((item, i ) => {
                if (target === item || target.parentNote === item) {
                    hideTabContent();
                    showTabContent(i);
                }
            });
        }
    });*/
};

export default tabs;