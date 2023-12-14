import { Selector } from "testcafe";

class DashboarPage{
    constructor(){
        this.userName = Selector('h4[class*="medium ellipsis"]');
    }
}

export default new DashboarPage();