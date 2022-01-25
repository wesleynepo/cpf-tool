export const onMessage = (message: any) => {
    if(message.data) insertTextAtCursor(message.data)
}

const insertTextAtCursor = (text: string) => {
    let element = document.activeElement as HTMLInputElement;
    let value = element.value;
    
    if (element.selectionStart && element.selectionEnd) {
        let endIndex = element.selectionEnd;
        element.value = value.slice(0, endIndex) + text + value.slice(endIndex);
        element.selectionStart = element.selectionEnd = endIndex + text.length;
    } else {
        element.value = text
    }
}