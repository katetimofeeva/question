 const clearData = (data) => {
    for (let key in data) {
        switch(key) {
            case 'height':
                data.height = 0;
            case 'width':
                data.width = 0;
            case 'model':
                data.model = "tree";
            case 'profile':
                data.profile = 0 ;
            case 'checkbox':
                delete data.checkbox;
        }
    };
 }

 export default clearData;
