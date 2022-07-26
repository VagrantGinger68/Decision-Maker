let options = [];

function addOption(text){
const option = {
    text,
    checked:false,
    id: Date.now(),
};

options.push(option);
console.log(options);
}

const list = document.querySelector('.input');
list.addEventListener('submit', event => {
    event.preventDefault();
    const input = document.getElementById('text-box');
    const text = input.value.trim();
    if (text !== '') {
        addOption(text);
        input.value = '';
        input.focus();
    }
});

addOption();