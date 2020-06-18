const inputRef = document.querySelector('#validation-input')

inputRef.addEventListener('change', event => {
	if (Number(inputRef.getAttribute('data-length')) === event.target.value.length) {
		inputRef.classList.remove('invalid')
		inputRef.classList.add('valid');

	} else {
		inputRef.classList.remove('valid')
		inputRef.classList.add('invalid');
	}
});