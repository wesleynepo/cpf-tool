import { randomCPF } from "../utils/cpf"

const messageContentScript = (cpf: string) => {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => { if (tabs[0].id) chrome.tabs.sendMessage(tabs[0].id, { data: cpf }) })
}

export const onClickContextMenu = (info: chrome.contextMenus.OnClickData, tab?: chrome.tabs.Tab) => {
    if (info.menuItemId === 'generateCPF') {
        messageContentScript(randomCPF())
    }
}