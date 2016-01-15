setInterval(function(){
	var date = new Date();
		var hours = date.getHours();
		if(hours > 12) {
			hours = hours - 12;
		}

		if(hours < 10) {
			hours = '0' + hours;
		}

		var mins = date.getMinutes();

		if(mins < 10) {
			mins = '0' + mins;
		}

		var seconds = date.getSeconds();
		if(seconds < 10) {
			seconds = '0' + seconds;
		}

		var milli = date.getMilliseconds();

		if(milli < 10) {
			milli = '0' + milli;
		}

		document.getElementById("time").innerHTML = (`${hours} : ${mins} : ${seconds} : ${milli}`);
}, 10);