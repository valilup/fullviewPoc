import { t, ClientFunction } from "testcafe";
import landingPage from "../pages/landingPage";
import dashboardPage from "../pages/dashboardPage";
import { getCurrentUrl } from "../utils/utils";
import editAccountPage from "../pages/editAccountPage";
require('dotenv').config();


fixture `Fullview POC`
    .page `${process.env.BASE_URL}`
    .beforeEach(async t=> {
    
    // Log into fullview app with valid credentials
    await landingPage.login(`${process.env.QA_USER}`, `${process.env.QA_PASSWORD}`);
    // The URL should contain dashboard
    await t.expect(getCurrentUrl()).contains('customers');
    });

test('Successfull Login ', async t => {
    // Dashboard should contain username
    await t.expect(dashboardPage.userName.visible).ok();
    // UserName should be 'Bati Dev'
    await t.expect(dashboardPage.userName.innerText).eql('Bati Dev');
});

test('Successfull Logout', async t => {
    // Logout
    await t
        .click(dashboardPage.userName)
        .click(editAccountPage.logoutButton);
    // The URL should contain sign-in
    await t.expect(getCurrentUrl()).contains('sign-in');
});