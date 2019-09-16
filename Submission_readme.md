**Please include instructions detailing how to run your submission in the README.**

run in terminal
npm run start

**Instructions for running your tests should be included in the README.**

run in a new terminal line and make sure react app is running already. 
npm run cypress:open

**Please include your decision making for this kata in the README.**

Please explain the technical decision making involved in designing your solution. What options were you considering at various levels (eg. tech stack choice, libraries/frameworks, and design for your code, as applicable) and what were the tradeoffs in choosing one option over another?

I created the kata app to be designed mobile friendly and have it easier to spot information of the user's shipping address and brush preference. The tech stack used was React.js and Cypress. Before, I submitted using only javascript and jquery to render HTML structure from fetching data from specific endpoints and to have it render on the page in a react like fashion. With using React, it has its advantages of seperations of concerns, scalibity, rendering single pages and being able to reuse components. With the shipping address changing from view mode to edit mode without the need to refresh the page, React was the best choice. 

In terms of design, the goal is to have less negative space and have it easier to understand what is on the page. Since shipping address and brush options are the most important, I created a containers that pop out to the user. The simplicity of the colors 

Mocha and Chai was considered to be used as a testing framework, but Cypress had the upper hand since it had all in one bundle: testing framwork, assertion library and the ability to mock what the page will do when tested.