var env = require('../support/env.js');

function selenMethods() {

    //To enter text into a text box
    this.enterText = async function (textBox, text) {
        this.highlightElement(textBox);
        await textBox.clear();
        await textBox.sendKeys(text);

        //await browser.sleep(1000);
    };

    //To get the text of an element by its classname
    this.getElementTextByClass = async function(className){
        await this.highlightElement(element(by.css(className)));
        return await element(by.css(className)).getText();
       /* await element(by.css(className)).getText().then(function (elementText) {
            console.log(elementText);
            return elementText;
        });*/
    }

    //To highlight an object on the web page call this function and pass the element object as parameter
    this.highlightElement = async function(el){
        var EC = protractor.ExpectedConditions;
        browser.wait(EC.elementToBeClickable(el), 2000);
        return await browser.driver.executeScript("arguments[0].setAttribute('style', arguments[1]);",el.getWebElement(), "color: black; border: 2px dotted black;").
        then(function(resp){
            browser.sleep(1000);
            return el;
        },function(err){
            console.log("error is :"+err);
        });
    }

   /* this.angularPageStarts = async function(){
        await browser.ignoreSynchronization = false;
    };

    this.angularPageEnds = async function(){
        await browser.ignoreSynchronization = true;
    };*/

    this.clickElement = async function(elemen){
        //try {

            var EC = protractor.ExpectedConditions;
            browser.wait(EC.elementToBeClickable(elemen), 4000);
            //browser.wait(EC.stalenessOf(elemen), 4000);
            //await this.highlightElement(elemen);

            await elemen.click();
        /*}catch(error) {
            console.log("Error2 : " + error)
        }*/
    }

    this.selectByText = async function(elemen, text){
        elemen.all(by.xpath('option[.="' + text + '"]')).click();
    };

};

module.exports = new selenMethods();
