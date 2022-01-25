import { onClickContextMenu } from "./listeners/on-click-context"
import { onInstalled } from "./listeners/on-installed"

chrome.contextMenus.onClicked.addListener(onClickContextMenu)
chrome.runtime.onInstalled.addListener(onInstalled)