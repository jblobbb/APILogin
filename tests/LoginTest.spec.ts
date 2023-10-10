import {test, expect, request} from '@playwright/test';
const {APIutils} = require('./utils/APIutils');

const loginPayLoad = {userEmail: "johnzoooo@gmail.com", userPassword: "Password10"};

let response: any;

test.beforeAll(async ()=>{
    const apiContext = await request.newContext();
    const apiUtils = new APIutils();
    response = await apiUtils.login(apiContext, loginPayLoad);
});

test('login to website', async ({page})=> {
    page.addInitScript(value => {
        window.localStorage.setItem('token', value)
    }, response.token);
    await page.goto("https://rahulshettyacademy.com/client/");
});