/**
 * Created by karthikvasudevan on 07/09/15.
 */


var DateHelper = require("../Helper/dateFormatter");

//test begins
describe("Helper", function() {
    describe("Date Formatter: ", function(){

        it("Should Return MySQL formatted Date", function() {

            var javascriptDate  = new Date(2015, 5, 5, 16, 30, 20, 0);
            var mySQLDate = "2015-06-05 16:30:20";

            expect(DateHelper.getFormattedDate(javascriptDate)).toBe(mySQLDate);
        });
        describe("Edge cases: ", function() {
            it("Should Return null if supplied date is not instanceof Date", function () {

                var javascriptDate = "sdfsdfsdfs";
                var mySQLDate = null;

                expect(DateHelper.getFormattedDate(javascriptDate)).toBe(mySQLDate);
            });

            it("Should Return null if supplied date is NaN", function () {

                var javascriptDate = NaN;
                var mySQLDate = null;

                expect(DateHelper.getFormattedDate(javascriptDate)).toBe(mySQLDate);
            });
            it("Should Return null if supplied int or long", function () {

                var javascriptDate = 2342352452342;
                var mySQLDate = null;

                expect(DateHelper.getFormattedDate(javascriptDate)).toBe(mySQLDate);
            });
            it("Should Return null if supplied null", function () {

                var javascriptDate = null;
                var mySQLDate = null;

                expect(DateHelper.getFormattedDate(javascriptDate)).toBe(mySQLDate);
            });
            it("Should Return null if supplied special characters", function () {

                var javascriptDate = "$%**(£*£*£&£&^&£:|";
                var mySQLDate = null;

                expect(DateHelper.getFormattedDate(javascriptDate)).toBe(mySQLDate);
            });
        });
    });
});