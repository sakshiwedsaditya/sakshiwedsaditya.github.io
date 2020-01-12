(function(){
  let marriageDate = (new Date('2020-02-10 00:00:00')).valueOf();
  let timerId = setInterval(updateCountDownTimer, 1000);


  function updateCountDownTimer(){
    let newTime = new Date(marriageDate);
    let today = new Date();
    let remainingTime = (newTime.valueOf() - today.valueOf());
    if(remainingTime <= 0){
      clearInterval(timerId);
      document.querySelector('.counter-container').innerHTML = "Happily Married";
      return;
    }
    let divide = {days: (1000*60*60*24), hours:(1000*60*60), minutes:(1000*60), seconds: (1000)}
    let hoursLeft =  Math.floor(remainingTime % divide.days);
    let minutesLeft = Math.floor(hoursLeft % divide.hours); 
    let secondsLeft = Math.floor(minutesLeft % divide.minutes);
    let remaining = {
      days: Math.floor(remainingTime/divide.days), // converting milli seconds to days
      hours: Math.floor(hoursLeft/divide.hours),
      minutes: Math.floor(minutesLeft/divide.minutes),
      seconds: Math.floor(secondsLeft/ divide.seconds) 
    }
    let timeContainer = '';
    for(key in remaining){
        timeContainer += '<div class="tile-list"><div class="time">' + remaining[key] + '</div><div class="label">'+ key +'</div></div>';
    }

    document.querySelector('.counter-container').innerHTML = timeContainer;
  }
})();