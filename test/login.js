import { t } from "testcafe";
import landingPage from "../pages/landingPage";
import dashboardPage from "../pages/dashboardPage";

fixture `Login into fullview app`
    .page `https://dev.fullview.io/dashboard`;

test('Login with valid credentials', async t => {
    await landingPage.login('bati+dev@fullview.io', 'Test1234!');
    await t.expect(dashboardPage.userName.visible).ok;
    await t.expect(dashboardPage.userName.innerText).eql('Basti Dev');
});