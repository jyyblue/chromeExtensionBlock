const amazon_url = "https://www.amazon.co.uk/";
const amazon_url2 = "https://www.amazon.co.uk/ref=nav_logo";
const amazon_url3 = "https://www.amazon.com";
const amazon_url4 = "https://www.amazon.com/ref=nav_logo";

const amazon_urls = [
  "https://www.amazon.co.uk/",
  "https://www.amazon.co.uk/ref=nav_logo",
  "https://www.amazon.com",
  "https://www.amazon.com/ref=nav_logo"
];

const ebay_url = "https://www.ebay.co.uk/";
const ebay_url2 = "https://www.ebay.com/";

const ebay_urls = [
  "https://www.ebay.co.uk/",
  "https://www.ebay.com/"
];

const upwork = "www.upwork.com";
chrome.tabs.onUpdated.addListener(async (tabId,changeInfo,tab) => {
  var url = tab.url;
  if(amazon_urls.includes(url)) {
    await chrome.scripting.insertCSS({
      files: ["amazon.css"],
      target: { tabId: tabId },
    });
  }

  if(ebay_urls.includes(url)) {
    await chrome.scripting.insertCSS({
      files: ["ebay.css"],
      target: { tabId: tabId },
    });
  }

  if(url.includes(upwork)) {
    await chrome.scripting.insertCSS({
      files: ["upwork.css"],
      target: { tabId: tabId },
    });
  }
});
