
    window.onload = function () {
        var audio = document.getElementById('myAudio');
        if (audio.muted) {
            setTimeout(function () {
                audio.muted = false;
            }, 1000);
        }
    };
    document.body.addEventListener('click', function () {
        var audio = document.getElementById('myAudio');
        if (audio.paused) {
            audio.play();
            audio.volume = 0.5;
        }
    });