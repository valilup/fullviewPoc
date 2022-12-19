import { Selector, t } from "testcafe";

class LandingPage{
    constructor(){
        this.emailInput = Selector('#mui-1');
        this.passwordInput = Selector('#mui-2');
        this.signInButton = Selector('.sc-fWHiwC.crxPRH');
    }

    async login(email, password){
        await t
            .typeText(this.emailInput,email)
            .typeText(this.passwordInput, password)
            .click(this.signInButton);
    }
}

export default new LandingPage();