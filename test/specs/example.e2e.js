const LoginPage = require('../pageobjects/login.page');
const InventoryPage = require('../pageobjects/inventory.page');
const CartPage = require('../pageobjects/cart.page');
const CheckoutStepOnePage = require('../pageobjects/checkout-step-one.page');
const CheckoutStepTwoPage = require('../pageobjects/checkout-step-two.page');
const CheckoutCompletePage = require('../pageobjects/checkout-complete.page');
const Constants = require('../constants');
const ConfigData = require('../config');

describe('Adding and checking out a product successfully Test', () => {
    it('should login with valid credentials, add a product to cart and checkout the added product successfully', async () => {
        await LoginPage.open();
        await LoginPage.login(ConfigData.username, ConfigData.password);
        await InventoryPage.clickAddToCartSauceLabsBackpack();
        await InventoryPage.clickCartButton();
        await CartPage.clickCheckoutButton();
        await CheckoutStepOnePage.enterInformation(Constants.FIRST_NAME, Constants.LAST_NAME, Constants.POSTAL_CODE);
        await CheckoutStepOnePage.clickContinue();
        await expect(CheckoutStepTwoPage.itemName).toBeExisting();
        await expect(CheckoutStepTwoPage.itemName).toHaveTextContaining(Constants.SAUCE_LABS_BACKPACK);
        await CheckoutStepTwoPage.clickFinishButton();
        await expect(CheckoutCompletePage.orderCompleteHeader).toBeExisting();
        await expect(CheckoutCompletePage.orderCompleteHeader).toHaveTextContaining(Constants.ORDER_COMPLETE_HEADER);
        await expect(CheckoutCompletePage.orderCompleteText).toBeExisting();
        await expect(CheckoutCompletePage.orderCompleteText).toHaveTextContaining(Constants.ORDER_COMPLETE_TEXT);
        await CheckoutCompletePage.clickBackHome();
    });
});

describe('Adding and Removing a product from cart Test', () => {
    it('should add a product to cart, then remove the same product from cart and should be able to continue shopping for the same product again', async () => {
        await InventoryPage.clickAddToCartSauceLabsBackpack();
        await InventoryPage.clickCartButton();
        await CartPage.clickRemoveButton();
        await CartPage.clickContinueShoppingButton();
        await expect(InventoryPage.addToCartSauceLabsBackpack).toBeExisting();
        await expect(InventoryPage.addToCartSauceLabsBackpack).toHaveTextContaining(Constants.ADD_TO_CART);
    });
});


