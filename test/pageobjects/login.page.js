const Page = require('./page');

/**
 * sub page containing specific selectors and methods for login page
 */
class LoginPage extends Page {
    /**
     * define selectors using getter methods
     */
    get inputUsername () { return $('//input[@id="user-name"]') }
    get inputPassword () { return $('//input[@id="password"]') }
    get btnLogin () { return $('//input[@id="login-button"]') }

    /**
     * a method to login using username and password
     * @param username username name of the user account
     * @param password password of the user account
     */
    async login (username, password) {
        await this.inputUsername.setValue(username);
        await this.inputPassword.setValue(password);
        await this.btnLogin.click();
    }

    /**
     * overwrite specifc options to adapt it to page object
     */
    open () {
        return super.open('');
    }
}

module.exports = new LoginPage();
