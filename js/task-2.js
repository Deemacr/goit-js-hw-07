const ingredients = [
	'Картошка',
	'Грибы',
	'Чеснок',
	'Помидоры',
	'Зелень',
	'Приправы',
];


const elementUl = document.querySelector("#ingredients");

const ingredientsItems = ingredients.map(ingredient => {
	const elementLi = document.createElement("li");
	elementLi.textContent = ingredient;
	return elementLi
});

elementUl.append(...ingredientsItems);