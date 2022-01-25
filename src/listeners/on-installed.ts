export const onInstalled = (_details: chrome.runtime.InstalledDetails) => {
    chrome.contextMenus.create(
        {
            'title': 'Gerar CPF válido',
            'id': 'generateCPF',
            'contexts': ['editable']
        });
}