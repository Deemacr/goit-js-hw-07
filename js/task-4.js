
let counterValue = 0;

const decrement = () => {
	counterValue -= 1;
	document.getElementById('value').textContent = counterValue;
};

const increment = () => {
	counterValue += 1;
	document.getElementById('value').textContent = counterValue;
};


let decrementBtn = document.querySelector("[data-action='decrement']");
let incrementBtn = document.querySelector("[data-action='increment']");

incrementBtn.addEventListener(`click`, increment)
decrementBtn.addEventListener(`click`, decrement)