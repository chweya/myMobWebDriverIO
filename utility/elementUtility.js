class ElementUtility 
{
    //Method to click
    doClick(element)
    {
        element.waitForDisplayed()
        element.click()
    }

    //Method to setValue
    doSetValue(element, value)
    {
        element.waitForDisplayed()
        element.setValue(value)
    }
}
module.exports = new ElementUtility()