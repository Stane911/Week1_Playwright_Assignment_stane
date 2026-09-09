import { chromium, webkit, expect } from "@playwright/test";

async function launchsites() {

    const edgeBrowser = await chromium.launch({
        channel: "msedge",
        headless: false
    });

    const redBusPage = await edgeBrowser.newPage();


    await redBusPage.goto("https://www.redbus.in", {
        waitUntil: "domcontentloaded"
    });

    const redBusTitle = await redBusPage.title();
    const redBusURL = redBusPage.url();
    console.log("RedBus Page Title:", redBusTitle);
    console.log("RedBus Current URL:", redBusURL);

    await expect(redBusPage).toHaveTitle(/redBus/i);
    await expect(redBusPage).toHaveURL(/redbus\.in/);

    const webkitBrowser = await webkit.launch({
        headless: false
    });

    const flipkartPage = await webkitBrowser.newPage();

 
    await flipkartPage.goto("https://www.flipkart.com", {
        waitUntil: "domcontentloaded"
    });

  
    const flipkartTitle = await flipkartPage.title();
    const flipkartURL = flipkartPage.url();

    console.log("Flipkart Page Title:", flipkartTitle);
    console.log("Flipkart Current URL:", flipkartURL);

    await expect(flipkartPage).toHaveTitle(/Flipkart/i);
    await expect(flipkartPage).toHaveURL(/flipkart\.com/);

    await redBusPage.waitForTimeout(5000);

    await edgeBrowser.close();
    await webkitBrowser.close();
}
launchsites();