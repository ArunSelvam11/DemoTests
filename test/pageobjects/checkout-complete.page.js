const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a checkout complete page
 */
class CheckoutCompletePage extends Page {
    /**
     * define selectors using getter methods
     */
    get orderCompleteHeader () { return $('//h2[@class="complete-header"]') }
    get orderCompleteText () { return $('//div[@class="complete-text"]') }
    get btnBackHome () { return $('//button[@id="back-to-products"]') }

    /**
     * a method to click on the back home button
     */
    async clickBackHome () {
        await this.btnBackHome.click();
    }
}

module.exports = new CheckoutCompletePage();
