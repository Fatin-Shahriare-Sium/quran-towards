let quranAudio = document.getElementById('quran-audio')
let readBtn = document.querySelector('.read-btn')
console.log('Allah is Almighty');

readBtn.addEventListener('click', () => {
    quranAudio.pause()
})
navigator.mediaDevices.getUserMedia({ audio: true }).then(function (stream) {

    //var x = document.getElementById("myAudio"); 
    quranAudio.play();

    // stop microphone stream acquired by getUserMedia
    //stream.getTracks().forEach(function (track) { track.stop(); });
});
console.dir(quranAudio);

