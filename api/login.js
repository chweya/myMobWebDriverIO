describe('Login Functionality', () => 
{
    it('test successful login ', () => 
    {
        //Page Locators
        const login_btn = '~Login'
        const input_email_field = '~input-email'
        const input_pwd_field = '~input-password'
        const login = '~button-LOGIN'

        //Page Actions
        $(login_btn).click()
        $(input_email_field).setValue('a@a.com')
        $(input_pwd_field).setValue('12345678')
        $(login).click()
    });
});