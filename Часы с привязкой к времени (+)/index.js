var seconds_div = document.querySelector('div.seconds');
var minutes_div = document.querySelector('div.minutes');
var hours_div = document.querySelector('div.hours');
var section = document.querySelector('section');
var date = new Date();
var seconds = date.getSeconds();
var minutes = date.getMinutes();
var hours = date.getHours();
document.body.innerHTML += `
<style>
@keyframes rotate {
    100%{
        transform: rotate(${(seconds * 6) + 360}deg);
    }

}
div.seconds {
    transform: rotate(${seconds * 6}deg);
}
@keyframes rotateminutes {
    100%{
        transform: rotate(${(minutes * 6) + 360}deg);
    }

}
div.minutes {
    transform: rotate(${minutes * 6}deg);
}
@keyframes rotatehours {
    100%{
        transform: rotate(${((hours * 30) + (minutes / 2)) + 360}deg);
    }

}
div.hours {
    transform: rotate(${(hours * 30) + (minutes / 2)}deg);
}


</style>

`;