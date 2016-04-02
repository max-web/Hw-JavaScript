var btnStart = document.querySelector('#btn-start');
var btnClear = document.querySelector('#btn-clear');
var timerClock = document.querySelector('#clock'); 
var timerMsec = document.querySelector('#msec');



btnStart.addEventListener('click', startHandler);
btnClear.addEventListener('click', clearHandler);


var startBtnIsNotPause = true;
var myTimerId;

var timeStart; //момент нажатия кнопки Start (в мс)
var timeNew = 0; //времени прошло от нажатия Start до Pause
var timeAll = 0; //всего времени отсчитано программой


function startHandler() {		

	if(startBtnIsNotPause){
		timeStart = Date.now();
		myTimerId = setInterval(setTime, 1);
		
		btnStart.textContent = "PAUSE";
		btnStart.classList.add('js-btn-pause');

		startBtnIsNotPause = false;
	} else{
		timeAll = timeAll + timeNew;
		clearInterval(myTimerId);
		
		btnStart.textContent = "START";
		btnStart.classList.remove('js-btn-pause');
		
		startBtnIsNotPause = true;
	}
	
}


function setTime() {
	timeNew = Date.now() - timeStart; 

	timerClock.textContent = formatTimerClock(timeAll + timeNew);
	timerMsec.textContent = formatTimeMs(timeAll + timeNew);
}


function clearHandler() {
	timerClock.textContent = '00:00:00';
	timerMsec.textContent = '000';
	timeAll = 0; 
}

// приводит мс к 00:00:00
function formatTimerClock(timeMs){
	var hour, min, sec, msec;
	hour = Math.round(timeMs / 3600000); //целых часов в ms
	min =  Math.round((timeMs % 3600000) / 60000); //остаток от деления в целых минутах
	sec =  Math.round(((timeMs % 3600000) % 60000) / 1000); ///остаток от деления целых секундах

	// приводим к виду 01:01:01 (по 2 числа)
	if (hour<10) hour = '0' + hour;
	if (min<10)  min = '0' + min;
	if (sec<10) sec = '0' + sec;
	
	return hour + ":" + min + ":" + sec; 
}



//оставляет только доли секунды в мс
function formatTimeMs(timeMs) {
	var ok =  timeMs - (Math.floor(timeMs/1000))*1000;
	return ok;
}

