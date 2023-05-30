function initTimer() {
    let countDownDate = new Date("Jan 5, 2024 15:37:25").getTime();

    let x = setInterval(() => {
        let now = new Date().getTime();
        localStorage.setItem("timer", now);

        var distance = countDownDate - now;
        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);

        document.getElementById("sale-hours").innerHTML = hours.toString().padStart(2, '0');
        document.getElementById("sale-minutes").innerHTML = minutes.toString().padStart(2, '0');
        document.getElementById("sale-seconds").innerHTML = seconds.toString().padStart(2, '0');

        if (distance < 0) {
            clearInterval(x);
            localStorage.removeItem("timer");
        }
    }, 1000);
}

window.addEventListener("load", initTimer());