import { t, Selector } from "testcafe";

class EditAccountPage{
    constructor(){
        this.logoutButton = Selector('button').withText('Logout');
    }
}

export default new EditAccountPage();