import {Given,When,Then} from 'cucumber';

Given(/^I'm on the login page$/,function() {
    browser.url("https://www.facebook.com/");
});


When(/^I  login in with a registered user$/,function() {
   browser.element("//input[@name='email']").setValue("7032889345");
   browser.element("//input[@name='pass']").setvalue("10101994");
   browser.element("//input[@id='u_0_4']").click();
});


Then(/^ I shall be on the facebook  home page.$/,function() {
    var strurl=browser.getUrl();
    console.log(" the url is :"+strurl)
    
});
Given(/^ i am on the home page$/,function()
{
   browser.element("//a[text()='Home']").click();
});
When(/^$Able to create a gruoup on Home page/,function()
{
    browser.element("//div[text()='Groups']").click();
    browser.element("//button[@class='mfclru0v oshhggmv hf30pyar lq84ybu9 bdao358l _4jy0 _4jy4 _4jy1 _51sy selected _42ft']").click();
    browser.element("//input[@class='inputtext pls _29br']").setValue("webdriverio-cucumber");
    browser.element("//input[@class='inputtext textInput']").setValue("navya malreddygari");
    browser.element("//button[@class='_42ft _4jy0 layerConfirm _29bh uiOverlayButton _4jy3 _4jy1 selected _51sy']").click();

});

Then(/^ I shall be able to see the created group and delete the created group .$/,function() {
       var created_group= browser.element(//a[@href='https://www.facebook.com/groups/244707669921492/?ref=group_header']).getText();
      // console.log("the created group is :"+created_group)
       browser.element("//a[@href='https://www.facebook.com/groups/244707669921492/?ref=group_header']").click()
       

}
);

    

