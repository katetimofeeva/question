const timer = (id, deadline) => {

    const  addZero = (num) =>{
        if (num <= 9) {
            return `0${num}` ;
        } else  {
            return num;
        }
    }

    function setClock(selector, endtime) {
        const timer = document.querySelector(selector),
            day = timer.querySelector('#days'),
            hours = timer.querySelector('#hours'),
            minutes = timer.querySelector('#minutes'),
            seconds = timer.querySelector('#seconds'),
            timeInterval = setInterval(updateClock, 1000);

        //console.log(timer, day, hours, minutes, seconds);
        updateClock ();

        function updateClock () {
            const time = getTimeRemaining(endtime);

            day.innerHTML= addZero(time.days);
            hours.innerHTML= addZero(time.hours);
            minutes.innerHTML=addZero( time.minutes);
            seconds.innerHTML= addZero(time.seconds);

            if (time.total <=0 ) {
                day.innerHTML= '00';
                hours.innerHTML= '00';
                minutes.innerHTML= '00';
                seconds.innerHTML= '00';

                clearInterval (timeInterval);
            }
            
        }

    };
    
    function getTimeRemaining(endtime) {
        const time = Date.parse(endtime) - Date.parse(new Date()), //приводим к милисек
            days = Math.floor( (time/(1000*60*60*24)) ),
            hours = Math.floor( (time/(1000*60*60) % 24) ),
            minutes = Math.floor( (time/1000/60) % 60 ),
            seconds = Math.floor( (time/1000) % 60 );
                
        return {
            'total': time,
            'days': days,
            'hours': hours,
            'minutes': minutes,
            'seconds': seconds
        };
    };
    setClock (id, deadline);

};

export default timer;