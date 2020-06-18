const inputRef = document.querySelector('#validation-input')

inputRef.addEventListener('change', event => {
	inputRef.setAttribute('data-length', event.target.value.length)
	if (inputRef.getAttribute('data-length') == 6) {
		inputRef.classList.remove('invalid')
		inputRef.classList.add('valid');

	} else {
		inputRef.classList.remove('valid')
		inputRef.classList.add('invalid');
	}
});