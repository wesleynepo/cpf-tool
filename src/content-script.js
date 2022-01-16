'use strict';

function insertTextAtCursor(text) {
    let element = document.activeElement;
    let value = element.value;
    let ownerDocument = element.ownerDocument;

    if (typeof element.selectionStart === 'number' &&
        typeof element.selectionEnd === 'number') {
        let endIndex = element.selectionEnd;
        element.value = value.slice(0, endIndex) + text + value.slice(endIndex);
        element.selectionStart = element.selectionEnd = endIndex + text.length;
    } else if (ownerDocument.selection !== 'undefined' && ownerDocument.selection.createRange) {
        element.focus();
        let range = ownerDocument.selection.createRange();
        range.collapse(false);
        range.text = text;
        range.select();
    }
}

chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    if (request.data) {
        insertTextAtCursor(request.data);
    }
});