const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a checkout step one page
 */
class CheckoutStepOnePage extends Page {
    /**
     * define selectors using getter methods
     */
     get inputFirstname () { return $('//input[@id="first-name"]') }
     get inputLastName () { return $('//input[@id="last-name"]') }
     get inputPostalCode () { return $('//input[@id="postal-code"]') }
    get btnContinue () { return $('//input[@id="continue"]') }

    /**
     * a method to enter information on the checkout step one page 
     * @param firstname first name of the user
     * @param lastname last name of the user
     * @param postalcode postal code of the user
     */
     async enterInformation (firstname, lastname, postalcode) {
        await this.inputFirstname.setValue(firstname);
        await this.inputLastName.setValue(lastname);
        await this.inputPostalCode.setValue(postalcode);
    }

    /**
     * a method to click on the Continue button
     */
    async clickContinue () {
        await this.btnContinue.click();
    }
}

module.exports = new CheckoutStepOnePage();
