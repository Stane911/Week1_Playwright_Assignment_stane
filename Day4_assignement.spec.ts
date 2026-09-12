
import {test} from "@playwright/test"

test('leaftab_Assignment',async ({page}) => {

    await page.goto("https://leaftaps.com/opentaps/control/main") ;

    await page.locator("#username").fill('democsr2');

await  page.locator("[type='password']").fill("crmsfa");


await page.locator('.decorativeSubmit').click();


await page.locator("text=CRM/SFA").click();


await page.locator('a[href="/crmsfa/control/leadsMain"]').click();

// await page.locator('//a[@href="/crmsfa/control/createLeadForm"]').click();

await page.locator('//a[text()="Create Lead"]').click();

// await page.locator('a[href*="createLeadForm"]').click();

// await page.locator('input#createLeadForm_companyName')
//         .fill('TestLeaf');

// await page.locator('[name="companyName"]').fill("TestLeaf");

await page.locator('[id="createLeadForm_companyName"]').fill("TestLeaf");


await page.locator('[id="createLeadForm_firstName"]').fill("Stane");



await page.locator('[name="dataSourceId"]').selectOption({label:"Employee"});
// await page.locator('[name="dataSourceId"]').selectOption({index:3});

// await page.locator('[name="dataSourceId"]').selectOption({index:3});



let dropdownvalues=page.locator('[name="dataSourceId"]>option')

let dropdowncount=await dropdownvalues.count()

console.log(dropdowncount)

// for now dropdown count is what we have 

for (let index=0; index<dropdowncount; index++)
{


console.log(await  dropdownvalues.nth(index).innerText())

}

await page.locator('//input[@name="personalTitle"]').fill('Mrister')


await page.locator('//input[@id="createLeadForm_generalProfTitle"]').fill("Max Vestappan the champion");

// await page.locator('[id="createLeadForm_firstNameLocal"]').fill("Mister.");


await page.locator('//textarea[@id="createLeadForm_description"]').fill(" As the first major antagonist of Dragon Ball Z, Vegeta is the prince of an elite extraterrestrial warrior race known as the Saiyans")

await page.locator('//input[@id="createLeadForm_departmentName"]').fill("testing")

await page.locator('//select[@name="marketingCampaignId"]').selectOption({label:"Car and Driver"});

await page.locator('[name="marketingCampaignId"]>option')


let marketlocatorddvalues = page.locator('[name="marketingCampaignId"]>option')


let marketlocatorCount = await marketlocatorddvalues.count()


console.log(marketlocatorCount);

for(let index=0 ; index <marketlocatorCount; index++)
{
    console.log(await marketlocatorddvalues.nth(index).innerText())
}

await page.locator('//input[@id="createLeadForm_primaryEmail"]').fill("Rafastane@gmail.com")



await page.locator('//input[@class="smallSubmit"]').click()


});

// await page.locator('[name="generalProfTitle"]').fill("PlayWright Automation Testing");


// await page.locator("#createLeadForm_annualRevenue").fill(" 2 million USD");


// await page.locator("#createLeadForm_departmentName").fill("Testing Department 707");

// });

// // await page.locator('[name="dataSourceId"]').fill("Web Portal");