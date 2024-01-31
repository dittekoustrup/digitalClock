const clockElement = document.getElementById("clock");
function time() {
    const date = new Date();
    const s = date.getSeconds();
    const m = date.getMinutes();
    const h = date.getHours();
    clockElement.innerHTML = ("0" + h).substr(-2) + ":" + ("0" + m).substr(-2) + ":" + ("0" + s).substr(-2);

    const dateElement = document.getElementById("date");
    dateElement.innerHTML = date.getDate() + "." + date.getMonth() + 1 + "." + date.getFullYear();
}

setInterval(time, 1000);