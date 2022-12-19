import { t } from "testcafe";
import landingPage from "../pages/landingPage";
import dashboardPage from "../pages/dashboardPage";
require('dotenv').config();

fixture `Login into fullview app`
    .page `${process.env.BASE_URL}`;

test('Login with valid credentials', async t => {
    // Log into fullview app with valid credentials
    await landingPage.login(`${process.env.QA_USER}`, `${process.env.QA_PASSWORD}`);
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