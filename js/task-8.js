const render = document.querySelector('[data-action="render"]');
const destroy = document.querySelector('[data-action="destroy"]');
const boxes = document.querySelector("#boxes");


const getAmount = () => {
	const amount = + document.querySelector("#controls input").value;
	createBoxes(amount);
}

const createBoxes = (amount) => {
	const basicSize = 30;
	const fragment = document.createDocumentFragment();
	for (let i = 0; i < amount; i++) {
		const size = basicSize + i * 10;
		const div = document.createElement("div");
		div.style.cssText = `width: ${size}px; height: ${size}px; background-color: rgba( ${random()} , ${random()} , ${random()} )`;
		fragment.appendChild(div);
	}
	boxes.appendChild(fragment);
};

const destroyBoxes = () => {
	boxes.innerHTML = "";
}

const random = () => {
	return Math.floor(Math.random() * 256);
};

render.addEventListener("click", getAmount);
destroy.addEventListener("click", destroyBoxes);