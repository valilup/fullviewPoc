import { t, Selector } from "testcafe";

class EditAccountPage{
    constructor(){
        this.logoutButton = Selector('.sc-fWHiwC.jXmhHO').withText('Logout');
    }
}

export default new EditAccountPage();