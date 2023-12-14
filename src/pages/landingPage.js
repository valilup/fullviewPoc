import { Selector, t } from "testcafe";

class LandingPage{
    constructor(){
        this.emailInput = Selector('[type="email"]');
        this.passwordInput = Selector('[type="password"]');
        this.signInButton = Selector('[type="submit"]');
    }

    async login(email, password){
        await t
            .typeText(this.emailInput,email)
            .typeText(this.passwordInput, password)
            .click(this.signInButton);
    }
}

export default new LandingPage();