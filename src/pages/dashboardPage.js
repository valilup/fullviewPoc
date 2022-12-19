import { Selector } from "testcafe";

class DashboarPage{
    constructor(){
        this.userName = Selector('h3[class="ellipsis"]');
    }
}

export default new DashboarPage();