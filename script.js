//your JS code here. If required.
document.getElementById('btn').addEventListener('click',async function (){
	const textInput = document.getElementById('text').value;
		const delayInput = document.getElementById('delay').value;
	const outputDiv = document.getElementById('output');
	const delay = parseInt(delayinput, 10);
	outputDiv.textContent = "";
	const waitForDelay = (ms) => {
		setTimeout(resolve, ms);
	});

};
if(textInput && delay){
	await waitForDelay(delay);
	outputDiv.textContent = textInput;
} else {
		outputDiv.textContent = "Please enter valid text and delay.";
}
;