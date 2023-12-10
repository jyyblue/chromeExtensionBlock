const amazon_url = "https://www.amazon.co.uk/";
const ebay_url = "https://www.ebay.co.uk/";

chrome.tabs.onUpdated.addListener(async (tabId,changeInfo,tab) => {
  var url = tab.url;
  if(tab.url == amazon_url) {
    await chrome.scripting.insertCSS({
      files: ["amazon.css"],
      target: { tabId: tabId },
    });
  }

  if(url == ebay_url) {
    await chrome.scripting.insertCSS({
      files: ["ebay.css"],
      target: { tabId: tabId },
    });
  }

});
