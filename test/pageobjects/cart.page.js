const Page = require('./page');

/**
 * sub page containing specific selectors and methods for cart page
 */
class CartPage extends Page {
    /**
     * define selectors using getter methods
     */
    get btnCheckout () { return $('//button[@id="checkout"]') }
    get btnRemove () { return $('//button[@id="remove-sauce-labs-backpack"]') }
    get btnContinueShopping () { return $('//button[@id="continue-shopping"]') }

    /**
     * a method to click on the button Add to Cart from Sauce Labs Backpack product
     */
    async clickAddToCartSauceLabsBackpack () {
        await this.addToCartSauceLabsBackpack.click();
    }

    /**
     * a method to click on the checkout button 
     */
    async clickCheckoutButton () {
        await this.btnCheckout.click();
    }

    /**
     * a method to click on the remove button 
     */
     async clickRemoveButton () {
        await this.btnRemove.click();
    }

    /**
     * a method to click on the continue shopping button 
     */
     async clickContinueShoppingButton () {
        await this.btnContinueShopping.click();
    }
}

module.exports = new CartPage();
