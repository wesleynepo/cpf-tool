import { onMessage } from "./listeners/on-message";


chrome.runtime.onMessage.addListener(onMessage);