type changeInfoType = {
  status?: string
}

chrome.tabs.onUpdated.addListener(async (tabId: number, changeInfo: changeInfoType) => {
  const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
  if (tab && tab.id && changeInfo && changeInfo.status === 'complete') {
    await chrome.tabs.sendMessage(tab.id, { hasChanged: true });
  }
});
