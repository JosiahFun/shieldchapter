var countDownDate = new Date("Dec 2, 2020 13:00:00").getTime();

var timer = setInterval(timerGo, 1000);

timerGo();

function timerGo() {
    var now = new Date().getTime();

    var distance = countDownDate - now;

    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.querySelector('#countdown').innerHTML = days + ' : ' + hours + ' : ' +
        minutes + ' : ' + seconds;

    if (distance < 0 || false) {
        clearInterval(timer);
        document.querySelector('#countdown').style.display = 'none';
        document.querySelector('#countdown-sub').style.display = 'none';
    }
}
