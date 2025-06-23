function mapDropdownValueToHour(val) {
	return val === 24 ? 0 : val;
}


function updateClock() {
	const clock = document.getElementById("clock");
	const now = new Date();
	let hours = now.getHours();
	const minutes = String(now.getMinutes()).padStart(2, '0');
	const seconds = String(now.getSeconds()).padStart(2, '0');
	const ampm = hours >= 12 ? 'PM' : 'AM';
	const displayHour = hours % 12 || 12;
	clock.textContent = `${displayHour}:${minutes}:${seconds} ${ampm}`;
}

setInterval(updateClock, 1000);
updateClock();  

document.getElementById("saveButton").addEventListener("click", function () {
	const wakeUpTimeRaw = parseInt(document.getElementById("wakeUpTimeSelector").value);
	const classTimeRaw = parseInt(document.getElementById("dsTimeSelector").value);
	const sleepTimeRaw = parseInt(document.getElementById("sleepTimeSelector").value);

	const wakeUpTime = mapDropdownValueToHour(wakeUpTimeRaw);
	const classTime = mapDropdownValueToHour(classTimeRaw);
	const sleepTime = mapDropdownValueToHour(sleepTimeRaw);

	const currentHour = new Date().getHours();

	console.log("Current hour:", currentHour);
	console.log("Wake Up Time:", wakeUpTime);
	console.log("Class Time:", classTime);
	console.log("Sleep Time:", sleepTime);

	const timeImage = document.getElementById("timeImage");

	if (currentHour === wakeUpTime) {
		console.log("Setting wakeup image");
		timeImage.src = "images/wakeup.png";
	} else if (currentHour === classTime) {
		console.log("Setting class image");
		timeImage.src = "images/class.png";
	} else if (currentHour === sleepTime) {
		console.log("Setting sleep image");
		timeImage.src = "images/sleep.png";
	} else {
		console.log("Setting default image");
		timeImage.src = "images/ds_clock.png";
	}
});
