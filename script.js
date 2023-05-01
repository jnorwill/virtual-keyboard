function createPage() {
	const body = document.body
	const wrapper = document.createElement('div');
	wrapper.className = 'wrapper';

	const textarea = document.createElement('textarea');
	textarea.className = 'textarea';

	const keyboard = document.createElement('div');
	keyboard.className = 'keyboard';

	body.append(wrapper)
	wrapper.append(textarea)
	wrapper.append(keyboard)
}
createPage()

const rusArr = ['ё', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace', 'Tab', 'й', 'ц', 'у', 'к', 'е', 'н', 'г', 'ш', 'щ', 'з', 'з', 'х', 'ъ', '\\', 'Del', 'CapsLock', 'ф', 'ы', 'в', 'а', 'п', 'р', 'о', 'л', 'д', 'ж', 'э', 'Enter', 'Shift', 'я', 'ч', 'с', 'м', 'и', 'т', 'ь', 'б', 'ю', '.', '', 'Shift', 'Ctrl', 'Win', 'Alt', '', 'Alt', '', '', '', 'Ctrl',]
const engArr = ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace', 'Tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', '\\', 'Del', 'CapsLock', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', '\'', 'Enter', 'Shift', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/', '', 'Shift', 'Ctrl', 'Win', 'Alt', '', 'Alt', '', '', '', 'Ctrl',]
const codeArr = ['Backquote', 'Digit1', 'Digit2', 'Digit3', 'Digit4', 'Digit5', 'Digit6', 'Digit7', 'Digit8', 'Digit9', 'Digit0', 'Minus', 'Equal', 'Backspace', 'Tab', 'KeyQ', 'KeyW', 'KeyE', 'KeyR', 'KeyT', 'KeyY', 'KeyU', 'KeyI', 'KeyO', 'KeyP', 'BracketLeft', 'BracketRight', 'Backslash', 'Delete', 'CapsLock', 'KeyA', 'KeyS', 'KeyD', 'KeyF', 'KeyG', 'KeyH', 'KeyJ', 'KeyK', 'KeyL', 'Semicolon', 'Quote', 'Enter', 'ShiftLeft', 'KeyZ', 'KeyX', 'KeyC', 'KeyV', 'KeyB', 'KeyN', 'KeyM', 'Comma', 'Period', 'Slash', 'ArrowUp', 'ShiftRight', 'ControlLeft', 'MetaLeft', 'AltLeft', 'Space', 'AltRight', 'ArrowLeft', 'ArrowDown', 'ArrowRight', 'ControlRight',]
function createKeyboard() {
	codeArr.forEach((code, index) => {

		const keyboard = document.querySelector('.keyboard')

		const button = document.createElement('div');
		button.className = 'button';
		button.dataset.code = code

		const leng = localStorage.getItem('leng');
		if (leng === 'rus') {
			code = rusArr[index]
		} else {
			code = engArr[index]
		}

		button.innerHTML = `${code}`;
		keyboard.append(button)
	})
}
createKeyboard()

document.addEventListener('keydown', function (event) {
	const button = document.querySelector(`.button[data-code ='${event.code}']`)
	button.classList.add('button-active')
});
document.addEventListener('keyup', function (event) {
	const button = document.querySelector(`.button[data-code ='${event.code}']`)
	button.classList.remove('button-active')
});