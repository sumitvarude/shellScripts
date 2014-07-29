/**
 * Created by sumit on 7/11/14.
 */
var args = process.argv;
var username = args[5];
var password = args[6];
var verification_code = args[7];
module.exports = {
    'open tw account with credentials':function(test){
    //open our.thoughtworks.com
        test.open("https://our.thoughtworks.com")
            .screenshot("twLoginWithoutCredentials.png")

    //enter username & password
            .type("#user-signin",username)
            .type("#pass-signin",password)
            .click("#remember")
            .screenshot("twLoginWithCredentials.png")
            .assert.exists("#signin-button")
            .click("#signin-button")

    //take screen shot at extra-verification page
            .screenshot("extraVerification.png")

    //enter extra verification code
            .type(".passcode.x-created",verification_code)
            .screenshot("enteredCode.png")
            .assert.exists("#verify_factor")
            .click("#verify_factor")
            .wait(10000)

    //take screen shot after logged in
            .screenshot("home.png")

    //PERFORM click on "Timecards"
            .click('a[href="/a1W/o"]')
            .wait(2000)
            .assert.exists('input[title="New"]')
    //perform click on "New"
            .click('input[title="New"]')
            .wait(5000)
            .done();
    }
}