/**
 * Created by karthikvasudevan on 07/09/15.
 */


var DateHelper = require("../Helper/dateFormatter");

//test begins
describe("Helper", function() {
    describe("Date Formatter: ", function(){

        it("Should Return current MySQL formatted Date", function() {

            var javascriptDate  = new Date(2015, 5, 5, 16, 30, 20, 0);
            var mySQLDate = "2015-06-05 16:30:20";

            expect(DateHelper.getFormattedDate(javascriptDate)).toBe(mySQLDate);
        });

    });
});