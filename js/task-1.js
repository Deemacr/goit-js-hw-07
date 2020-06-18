const categories = Array.from(
	document.querySelectorAll("ul#categories>li.item")
);
console.log(`В списке ${categories.length} категории`);

const items = document.querySelectorAll('.item');

Array.prototype.forEach.call(items, (element) => {
	const title = element.querySelector('h2').textContent;
	const itemsLength = element.querySelectorAll('li').length;
	console.log(`Категория: ${title}`);
	console.log(`Количество элементов: ${itemsLength}`)
});