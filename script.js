window.onload = function() {
    //Executa um JS imediatamente  após o carregamento de uma page

    var seconds = 00;
    var tens = 00;

    var appendTens = document.getElementById('tens');
    var appendSeconds = document.getElementById('seconds');

    var buttonStart = document.getElementById('button-start')
    var buttonStop = document.getElementById('button-stop')
    var buttonReset = document.getElementById('button-reset')

    var Interval;

    buttonStart.onclick = function () {
        clearInterval(Interval); //o método clearinterval() limpa o temporizador definido com o método setInterval().
        Interval = setInterval(startTimer, 10);//o método setinterval() chama função em intervalos especificados (milisegundos).
    };

    buttonStop.onclick = function() {
        clearInterval(Interval);

    };

buttonReset.onclick = function() {
    clearInterval(Interval)

    tens = "00";
    seconds = "00";
    appendTens.innerHTML = tens;
    appendSeconds.innerHTML = seconds;
};
function startTimer() {
    tens++ //incremento
    if ( tens <= 9) {
        appendTens.innerHTML = "0" + tens;
    }
    

if( tens > 9 ) {

appendTens.innerHTML = tens

}

if ( tens > 99) {


console.log('seconds')

seconds ++
appendSeconds.innerHTML = "0" + seconds
tens = 0;
appendTens.innerHTML = "0" + 0;

}

if (seconds > 9) {

appendSeconds.innerHTML = seconds

}

}

}