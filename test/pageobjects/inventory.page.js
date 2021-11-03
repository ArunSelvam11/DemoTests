const Page = require('./page');

/**
 * sub page containing specific selectors and methods for inventory page
 */
class InventoryPage extends Page {
    /**
     * define selectors using getter methods
     */
    get addToCartSauceLabsBackpack () { return $('//button[@id="add-to-cart-sauce-labs-backpack"]') }
    get btnCart () { return $('//div[@id="shopping_cart_container"]') }

    /**
     * a method to click on the button Add to Cart from the product Sauce Labs Backpack
     */
    async clickAddToCartSauceLabsBackpack () {
        await this.addToCartSauceLabsBackpack.click();
    }

    /**
     * a method to click on the cart button 
     */
    async clickCartButton () {
        await this.btnCart.click();
    }
}

module.exports = new InventoryPage();
