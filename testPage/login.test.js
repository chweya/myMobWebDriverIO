const configData = require('../config')
const login_page = require('../pageObjects/login')
describe('Login Functionality', () => 
{
    it('should login successfully using valid credentials', () => 
    {
        //login_page.doLogin('a@a.com','2345678')
        login_page.doLogin(configData.email, configData.password)
    });
});