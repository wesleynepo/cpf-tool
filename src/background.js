'use strict';

const randomDigit = () => Math.floor(Math.random() * 10)

const generateVerifyDigit = (array) => {
    const sum = array.reduce((previous, current, index) => previous += current * (array.length + 1 - index), 0)
    const remainder = 11 - (sum % 11)
    
    return remainder < 10 ? remainder : 0
}

const randomCPF = () => {
    const digits = Array(9).fill().map( _ => randomDigit())

    digits.push(generateVerifyDigit(digits))
    digits.push(generateVerifyDigit(digits))

    return digits.join('')
}


function sendCPFToContentScript(cpf) {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        chrome.tabs.sendMessage(tabs[0].id, { data: cpf });
    });
}

function onClickHandler(info, tab) {
    let generatedCPF = randomCPF();

    if (info.menuItemId === 'generateCPF') {
        sendCPFToContentScript(generatedCPF);
    }
}

chrome.contextMenus.onClicked.addListener(onClickHandler);


chrome.runtime.onInstalled.addListener(function (details) {
    chrome.contextMenus.create(
        {
            'title': 'Gerar CPF válido',
            'id': 'generateCPF',
            'contexts': ['editable']
        });
});