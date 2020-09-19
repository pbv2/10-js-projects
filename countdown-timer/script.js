const diasEl = document.getElementById('dias');
const horasEl = document.getElementById('horas');
const minutosEl = document.getElementById('minutos');
const segundosEl = document.getElementById('segundos');

const novoAno = '1 Jan 2021';

function countdown(){
    const anoNovoData = new Date(novoAno);
    const atualData = new Date();

    const totalSegundos = (anoNovoData - atualData) / 1000;

    const dias = Math.floor(totalSegundos / 3600 / 24);
    const horas = Math.floor(totalSegundos / 3600) % 24;
    const minutos = Math.floor(totalSegundos / 60) % 60;
    const segundos = Math.floor(totalSegundos) % 60;

    diasEl.innerHTML = formatTime(dias);
    horasEl.innerHTML = formatTime(horas);
    minutosEl.innerHTML = formatTime(minutos);
    segundosEl.innerHTML = formatTime(segundos);
}

function formatTime(time){
    return time < 10 ? `0${time}` : time;
}

//iniital call
countdown();

setInterval(countdown,1000);

