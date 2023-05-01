function createPage() {
  const body = document.body
  const wrapper = document.createElement('div');
  wrapper.className = 'wrapper';

  const tittle = document.createElement('h2');
  tittle.className = 'tittle';
  tittle.innerHTML = `Виртуальная клавиатура`

  const textarea = document.createElement('textarea');
  textarea.className = 'textarea';

  const keyboard = document.createElement('div');
  keyboard.className = 'keyboard';

  const helptext = document.createElement('p');
  helptext.className = 'helptext';
  helptext.innerHTML = `Клавиатура создана в системе Windows <br> Для переключения языка: левый ctrl + alt`

  body.append(wrapper)
  wrapper.append(tittle)
  wrapper.append(textarea)
  wrapper.append(keyboard)
  wrapper.append(helptext)
}
createPage()
const rusArr = ['ё', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace', 'Tab', 'й', 'ц', 'у', 'к', 'е', 'н', 'г', 'ш', 'щ', 'з', 'х', 'ъ', '\\', 'Del', 'CapsLock', 'ф', 'ы', 'в', 'а', 'п', 'р', 'о', 'л', 'д', 'ж', 'э', 'Enter', 'Shift', 'я', 'ч', 'с', 'м', 'и', 'т', 'ь', 'б', 'ю', '.', '', 'Shift', 'Ctrl', 'Win', 'Alt', ' ', 'Alt', '', '', '', 'Ctrl',]
const engArr = ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace', 'Tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', '\\', 'Del', 'CapsLock', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', '\'', 'Enter', 'Shift', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/', '', 'Shift', 'Ctrl', 'Win', 'Alt', ' ', 'Alt', '', '', '', 'Ctrl',]
const codeArr = ['Backquote', 'Digit1', 'Digit2', 'Digit3', 'Digit4', 'Digit5', 'Digit6', 'Digit7', 'Digit8', 'Digit9', 'Digit0', 'Minus', 'Equal', 'Backspace', 'Tab', 'KeyQ', 'KeyW', 'KeyE', 'KeyR', 'KeyT', 'KeyY', 'KeyU', 'KeyI', 'KeyO', 'KeyP', 'BracketLeft', 'BracketRight', 'Backslash', 'Delete', 'CapsLock', 'KeyA', 'KeyS', 'KeyD', 'KeyF', 'KeyG', 'KeyH', 'KeyJ', 'KeyK', 'KeyL', 'Semicolon', 'Quote', 'Enter', 'ShiftLeft', 'KeyZ', 'KeyX', 'KeyC', 'KeyV', 'KeyB', 'KeyN', 'KeyM', 'Comma', 'Period', 'Slash', 'ArrowUp', 'ShiftRight', 'ControlLeft', 'MetaLeft', 'AltLeft', 'Space', 'AltRight', 'ArrowLeft', 'ArrowDown', 'ArrowRight', 'ControlRight',]
const darkArr = ['Backspace', 'Tab', 'Delete', 'CapsLock', 'Enter', 'ShiftLeft', 'ShiftRight', 'ControlLeft', 'MetaLeft', 'AltLeft', 'AltRight', 'ControlRight', 'ArrowLeft', 'ArrowRight', 'ArrowDown', 'ArrowUp',]

function createKeyboard() {
  const keyboard = document.querySelector('.keyboard')
  keyboard.innerHTML = ``;
  codeArr.forEach((code, index) => {

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

    if (!darkArr.includes(button.dataset.code)) {
      button.onclick = function () {
        let text = `${code}`;
        document.querySelector('textarea').innerHTML += text;
      };
    } else {
      button.classList.add('dark')
    }
  })
}
createKeyboard()

let pressed = new Set();

document.addEventListener('keydown', function (event) {
  const button = document.querySelector(`.button[data-code ='${event.code}']`)
  button.classList.add('button-active')

  if (!darkArr.includes(button.dataset.code)) {
    const text = event.key;
    document.querySelector('textarea').innerHTML += text;
  }

  pressed.add(event.code);
  if (pressed.has('ControlLeft') && pressed.has('AltLeft')) {
    if (localStorage.getItem('leng') === 'eng') {
      localStorage.setItem('leng', 'rus')
    } else { localStorage.setItem('leng', 'eng') }
    createKeyboard()
  }
});
document.addEventListener('keyup', function (event) {
  const button = document.querySelector(`.button[data-code ='${event.code}']`)
  button.classList.remove('button-active')
  pressed.delete(event.code);
});