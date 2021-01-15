const elements = require('../utility/elementUtility')
class Login 
{
    //Page Locators

    get login_home_button(){return $('~Login')}
    get input_email_field(){return $('~input-email')}
    get input_pwd_field(){return $('~input-password')}
    get login_button(){return $('~button-LOGIN')}
    
    //Page Methods
    doLogin(email, password)
    {
        elements.doClick(this.login_home_button)
        elements.doSetValue(this.input_email_field, email)
        elements.doSetValue(this.input_pwd_field, password)
        elements.doClick(this.login_button)
    }
}
module.exports = new Login()