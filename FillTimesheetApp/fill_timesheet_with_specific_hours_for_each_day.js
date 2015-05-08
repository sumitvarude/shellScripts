var args = process.argv;
var username = args[5];
var password = args[6];
var verification_code = args[7];
var h1 = args[8];
var h2 = args[9];
var h3 = args[10];
var h4 = args[11];
var h5 = args[12];
var h6 = args[13];
console.log(" "+h1+" "+h2+" "+h3+" "+h4+" "+h5+" "+h6);
module.exports = {
    'open tw account with credentials':function(test){
    //open our.thoughtworks.com
        test.open("https://our.thoughtworks.com")
            .screenshot("1.png")

    //enter username & password
            .type("#user-signin",username)
            .type("#pass-signin",password)
            .click("#remember")
            .screenshot("2.png")
            .assert.exists("#signin-button")
            .click("#signin-button")
    //take screen shot at extra-verification page
            .screenshot("3.png")

    //enter extra verification code
            .type(".passcode.x-created",verification_code)
            .screenshot("4.png")
            .assert.exists("#verify_factor")
            .click("#verify_factor")
            .wait(7000)
    //take screen shot after logged in
            .screenshot("5.png")

    //PERFORM click on "Timecards"
            .click('a[href="/a1W/o"]')
            .wait(2000)
    //take screen shot after clicking "Timecards"
            .screenshot("6.png")

    //perform click on "New"
            .assert.exists('input[title="New"]')
            .click('input[title="New"]')
            .wait(5000)
    //take screen shot after clicking "Timecards"
            .screenshot("7.png")

    //perform click on "select project/assignment"
            .click('div[id="tcPage:tcForm:tcBlock:tcPbs:j_id74:0:assignmentnamePanel"]')
            .wait(2000)

    //search for core
            .type('input[id="assigORProjSearchString"]',"core")
            .screenshot('8.png')

    //perform click on "Go" button
            .click('#assigOverlay_Go_Button')
            .screenshot('9.png')

    //perform click on "people support & development"
            .click('a[onclick="_AssignmentLookupHandler.doSelectAssignment(\'a1750000001EwEcAAK\');return false;"]')
            .wait(2000)
            .screenshot('10.png')

    //set project to STEP
            .click('option[value="a0y50000000qjFZAAY"]')
    //set country to INDIA
            .click('option[value="India"]')
    //set hours
            .type('input[id="tcPage:tcForm:tcBlock:tcPbs:j_id74:0:sunTime"]',"\b\b\b\b"+h1)
            .type('input[id="tcPage:tcForm:tcBlock:tcPbs:j_id74:0:monTime"]',"\b\b\b\b"+h2)
            .type('input[id="tcPage:tcForm:tcBlock:tcPbs:j_id74:0:tuesTime"]',"\b\b\b\b"+h3)
            .type('input[id="tcPage:tcForm:tcBlock:tcPbs:j_id74:0:wedTime"]',"\b\b\b\b"+h4)
            .type('input[id="tcPage:tcForm:tcBlock:tcPbs:j_id74:0:thursTime"]',"\b\b\b\b"+h5)
            .type('input[id="tcPage:tcForm:tcBlock:tcPbs:j_id74:0:friTime"]',"\b\b\b\b"+h6)
            .screenshot('11.png')
            .wait(1000)

            .assert.exists('#submitTCButton')
    //            .click('#submitTCButton')
            .done();
    }
}
