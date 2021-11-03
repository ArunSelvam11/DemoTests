const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a checkout step two page
 */
class CheckoutStepTwoPage extends Page {
    /**
     * define selectors using getter methods
     */
    get itemName () { return $('//div[@class="inventory_item_name"]') }
    get btnFinish () { return $('//button[@id="finish"]') }

    /**
     * a method to click on the finish button
     */
    async clickFinishButton () {
        await this.btnFinish.click();
    }
}

module.exports = new CheckoutStepTwoPage();
