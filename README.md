# Technical Challenge

A technical challenge that requires me to create a food recipe website with various features. The objective is to demonstrate the technical ability. Due to time constraint I tried to stick with exact specification.

**Live running example: http://bbcrecipe.redi.io/**

##Technologies Used

    * NodeJS            - To run backend systems
    * MySQL             - RDBMS
    * ExpressJS         - Node basic framework which gives basic routing and some middleware for web development

    * EJS                - template engine

    * HTML5              -
    * SASS               - for custom stylesheet
    * Jquery             - for basic capabilities
    * TwitterBootstrap   - for easy templating, accessibility & responsiveness
    * AngularJS          - used for binding objects. Used specifically in filter and stars

    * Grunt              - Task runner which uglify, concat all custom and lib js and css in to one file. also used to run test and JSHint

##Assumptions Made

 * The star.feature story says 'Given the user "Joe" exists'. I assumed that Joe already exist in the system and signed in. So I forced the session to Joe user. Which saved me from creating login and registration form.

 * The recipe.feature story says 'When the following recipes exist in the system'. I assumed that they already exist so I entered them manually in DB.

 * Assumed that its a public website and it need to be crawled by search engines and robots which are not javascript friendly. So loaded recipes with crawlable weblinks and used minimal javascript and provided SEO friendly URLs.

 * Assumed that this site should be accessible with the standard browsers accessibility capabilities. The website can be accessed by keyboard tabbing, zooming and other colour variants provided by the OS and the browser.

 * It should work on text based browser

 * It should be responsive and should work in various devices and that its accessible on those devices. Bootstrap helped me to achieve this easily.

 * Filters and stars are not important for search engines and robots. So I made them intuitive to user with javascript.

##Questions

Few question popped in my mind when I was doing the project.

 * Does this tasks requires user login and registration forms?

 * Does this tasks requires recipe add and edit forms?

 * Does this tasks requires recipe method?

##Further Improvements

 * Staring and Unstaring a recipe should also be in the list page for easy access.

 * Paginate the result after filter is applied and carry the filter through pages.

 * Add recipe method of preparation in recipe details page

 * Better design. Currently its a basic bootstrap design which can be customised.

 * Reset filter button should also work for toggle starred/all

 * Test cases should be written

##How to install on your local machine

1. Install NodeJS & NPM

 ```
 Check out & follow the instructions - https://github.com/joyent/node/wiki/installing-node.js-via-package-manager
 ```

2. Install Grunt

 ```
 $npm install -g grunt-cli
 ```

3. Install SASS

 ```
 $gem install sass
 ```

4. Pull project from GIT to your desirable location.

 ```
 $git clone https://github.com/mithralaya/bbcrecipe.git
 ```

5. Run SQL script(sql_without_data.sql and sql_with_date.sql) which is attached with this project in to your local mysql db.

6. Change DB connection variables in DB/config/config.js

7. Now run grunt from project root folder > bbcrecipe/. This will run uglify, concat files, convert SASS to css and run tests

 ```
 $grunt
 ```

8. Run your app from project root folder > bbcrecipe/ and visit http://localhost:3000

 ```
 $npm start
 ```


