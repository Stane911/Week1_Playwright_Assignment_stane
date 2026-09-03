let browserName ="Chrome"

function launchBrowser()
{
if(browserName==="Chrome")
{
    console.log("Open Chrome browser");
}
else
{
    console.log("other browser");

}
}
launchBrowser()

let testtype ="Regression"

function runTest()
{
    switch(testtype)
    {
        case "Regression":
            console.log("Run Regression test");
            break;
        case "Smoke":
            console.log("Run Smoke test");
            break;
        default:
            console.log("Run all tests");
    }
}
runTest()