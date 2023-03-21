# TheDailyDose

## Description
  This repository hosts a Tech blog. Developrs can read and write about technical concepts, recent advancements, and new technologies. 

  This project is a CMS-style blog that allows developers to publish blog posts and provide comments to other developers posts. Built completely from scratch using the MVC paradigm as the architectural strucutre, Handlebars.js as the templating language, Sequelize as the ORM, and the express-session npm package for authentication.

  

**User Story:**<br>
AS A developer who writes about tech  <br>
I WANT a CMS-style blog site <br>
SO THAT I can publish articles, blog posts, and my thoughts and opinions

**Acceptance Criteria:** <br>
GIVEN a CMS-style blog site <br>
WHEN I visit the site for the first time <br>
THEN I am presented with the homepage, which includes existing blog posts if any have been posted; navigation links for the homepage and the dashboard; and the option to log in <br>
WHEN I click on the homepage option <br>
THEN I am taken to the homepage <br>
WHEN I click on any other links in the navigation <br>
THEN I am prompted to either sign up or sign in <br>
WHEN I choose to sign up <br>
THEN I am prompted to create a username and password <br>
WHEN I click on the sign-up button <br>
THEN my user credentials are saved and I am logged into the site <br>
WHEN I revisit the site at a later time and choose to sign in <br>
THEN I am prompted to enter my username and password <br>
WHEN I am signed in to the site <br>
THEN I see navigation links for the homepage, the dashboard, and the option to log out <br>
WHEN I click on the homepage option in the navigation <br>
THEN I am taken to the homepage and presented with existing blog posts that include the post title and the date created <br>
WHEN I click on an existing blog post
THEN I am presented with the post title, contents, post creator’s username, and date created for that post and have the option to leave a comment <br>
WHEN I enter a comment and click on the submit button while signed in <br>
THEN the comment is saved and the post is updated to display the comment, the comment creator’s username, and the date created <br>
WHEN I click on the dashboard option in the navigation <br>
THEN I am taken to the dashboard and presented with any blog posts I have already created and the option to add a new blog post <br>
WHEN I click on the button to add a new blog post <br>
THEN I am prompted to enter both a title and contents for my blog post <br>
WHEN I click on the button to create a new blog post <br>
THEN the title and contents of my post are saved and I am taken back to an updated dashboard with my new blog post <br>
WHEN I click on one of my existing posts in the dashboard <br>
THEN I am able to delete or update my post and taken back to an updated dashboard <br>
WHEN I click on the logout option in the navigation <br>
THEN I am signed out of the site <br>
WHEN I am idle on the site for more than a set time <br>
THEN I am able to view comments but I am prompted to log in again before I can add, update, or delete comments


  <hr>

  ## Table of Contents
  - [Installation](#installation)
  - [Usage](#usage)
  - [Technologies](#technologies)
  - [Contributing](#contributing)
  - [Questions](#questions)
  - [License](#license)
  <hr>

  ## Installation
  You will need to start by having Node.js downloaded on your local machine. Preferably version 18.4.0

  THEN you run npm install for all of the packages listed below. <br>

 **Dependencies:**
  - Bcrypt,
  - Connect-session-sequelize,
  - Dotenv,
  - Express,
  - Express-handlebars,
  - Express-session,
  - Handlebars,
  - Mysql2,
  - Path,
  - Sequelize

  ***Dev-Dependencies:***
  - Nodemon


  <hr>

  ## Usage
  Heroku Deployment: https://dailydose.herokuapp.com/ 
  
  You can initialize the project locally after you install all the packages by running npm start.

  You will instantly have access to the homepage. From there any navigation through the navbar will instruct you to login for further access to the website.

  Login if you have visited the site before or signup if you are new. You will be taken to the home page where you can can view all of the blogs from all of the users. Under dashboard you can begin writing your own blogs. You can update or delete an existing blog under your dashboard by clicking on the title box.

  While on the home page you can comment on posts by clicking directly on the title. Here you can view the user that commented as well as the date the comment was posted.
  
  <hr>

  ## Technologies
 - Bcrypt (https://www.npmjs.com/package/bcrypt)
 - Connect-Session-Sequelize (https://www.npmjs.com/package/connect-session-sequelize)
 - Dotenv (https://www.npmjs.com/package/dotenv)
 - Express.js (https://www.npmjs.com/package/express)
 - Express-Handlebars (https://www.npmjs.com/package/express-handlebars)
 - Express-Session (https://www.npmjs.com/package/express-session)
 - Handlebars.js (https://handlebarsjs.com/)
 - Mysql2 (https://www.npmjs.com/package/mysql2)
 - Path (https://www.npmjs.com/package/path)
 - Sequelize (https://www.npmjs.com/package/sequelize)
 - Nodemon (https://www.npmjs.com/package/nodemon)
 - Node.js (https://nodejs.org/en/)
 - Heroku (https://www.heroku.com/)
 

 <hr>

 ## Contributing
MySQL2 @ https://www.npmjs.com/package/mysql2#first-query <br>
NPM @ https://www.npmjs.com/package/inquirer <br>
Dotenv @ https://www.npmjs.com/package/dotenv <br>



 <hr>

 ## Questions
 If you have questions, comments, or concerns please reach me at https://github.com/fabien1313
 or
 fabienmoreno1331@yahoo.com
<hr>

 ## License
 **License:** MIT

Copyright (c) 2023 fabien1313

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.