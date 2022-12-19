import { t } from "testcafe";
import landingPage from "../pages/landingPage";
import dashboardPage from "../pages/dashboardPage";

fixture `Login into fullview app`
    .page `https://dev.fullview.io/dashboard`;

test('Login with valid credentials', async t => {
    // Log into fullview app with valid credentials
    await landingPage.login('bati+dev@fullview.io', 'Test1234!');
    // Dashboard should contain username
    await t.expect(dashboardPage.userName.visible).ok();
    // UserName should be 'Bati Dev'
    await t.expect(dashboardPage.userName.innerText).eql('Bati Dev');
});

test('Login with invalid credentials', async t => {
    // Log into fullview app with invalid credentials
    await landingPage.login('invalid@fullview', 'qwertyuio');
    await t.expect(dashboardPage.userName.visible).ok();
});