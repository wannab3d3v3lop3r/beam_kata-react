# Beam Perks UI Exercise
Here at Beam, we provide our members with "Beam Perks". These perks include the Beam Brush, Beam Paste, refill heads, and floss. Shipping is also included!

You will be providing a member with their very own "Member Details" page. From this page, they will be able to view their name, manage their shipping address, and view their selected brush options.

## Getting Started
While `npm` has been initialized in this repo, you are not required to use this repo as a base. Feel free to create your own project! Just be sure to include the files from `assets/` and `data/` in some format in your new project.

### Expectations
#### Language/Framework
Our only expectation is that your language or framework compiles down to JavaScript. Outside of that, you're welcome to use whatever you prefer!

**Please include instructions detailing how to run your submission in the README.**

run in terminal
npm run start

#### UI/UX Design
You may have noticed: there is no mockup or prototype provided. You have free rein in the UI/UX Design of this exercise!

That's not to say we expect you to be a UI/UX Designer. At a minimum, we're just expecting to see tasteful layout and use of the theme styles we've provided in `/assets/css/styles.css`.

#### Design Decisions
Please explain the technical decision making involved in designing your solution. What options were you considering at various levels (eg. tech stack choice, libraries/frameworks, and design for your code, as applicable) and what were the tradeoffs in choosing one option over another?

**Please include your decision making for this kata in the README.**

Please explain the technical decision making involved in designing your solution. What options were you considering at various levels (eg. tech stack choice, libraries/frameworks, and design for your code, as applicable) and what were the tradeoffs in choosing one option over another?

n

In terms of design, the goal is to have less negative space and have it easier to understand what is on the page. Since shipping address and brush options are the most important, I created a containers that pop out to the user. The simplicity of the colors 

Mocha and Chai was considered to be used as a testing framework, but Cypress had the upper hand since it had all in one bundle: testing framwork, assertion library and the ability to mock what the page will do when tested.

#### Guidelines
Here follows a short guide to some of the things we look for in a good submission:

##### Testing
Beam firmly believes in testing as a practice. As such we ask that you please include tests with your submission. We are expecting extensive well organized test coverage. Any behavior that results in change should be reflected with supporting tests. Don't forget to consider API handling in the coverage.

**Instructions for running your tests should be included in the README.**

run in a new terminal line and make sure react app is running already. 
npm run cypress:open

##### Language/Framework Fundamentals
We will be looking for idiomatic framework/language patterns and practices. For example if a submission is making use of ES6 Javascript we will make not of how well you use ES6 paradigms.

##### Architecture/Software Engineering Principles
We are looking for a well designed, well written, and well structured project following good software engineering practices. If done correctly a second maintainer should be able to pick up your project and make alterations with ease. These principles should apply to the tests as well as the application code.

## Submitting your work to Beam

Please include a `.nvmrc` file with your submission so we know version of node you are using. There are differences between versions that can be significant to your application's runtime versus your reviewer's installed node version.

Once you're happy with your submission, you can send it back in one of two formats; either as a git bundle or a zip file.

To create the git bundle simply execute:

```bash
cd boxing-exercise
git bundle create boxing-exercise.bundle <YOUR BRANCH NAME HERE>
```

This will create a `.bundle` file which contains the entire git repository in binary form, so you can easily send it as an attachment.  Alternately you could zip the project instead.

## Exercise
The steps for this exercise are broken out into user stories below.
### User Stories
#### Member Details Page
_As a Beam Member_
_In order to view my member information_
_I would like to have a Member Details page_

Acceptance Criteria
- There is a page for member details.
- The page has a title of "Member Details".
- The Beam logo (see `assets/images/beam_logo.svg`) is displayed at the top of the page.

#### Member's Name
_As a Beam Member_
_In order to confirm I am on the correct Member page_
_I would like to view my name_

Acceptance Criteria
- The member's `name` is displayed on the page. (See [Fetching the Member Data](#fetching-the-member-data))
- It is displayed with a "Name" label.

#### Member's Shipping Address
_As a Beam Member_
_In order to confirm my perks will be shipped to the correct address_
_I would like to view my shipping address_

Acceptance Criteria
- The member's `shipping_address`, `shipping_city`, `shipping_state`, and `shipping_zip_code` are all displayed on the page. (See [Fetching the Member Data](#fetching-the-member-data))
- They are displayed below a "Shipping Address" section label.

#### Member's Shipping Address Update
_As a Beam Member_
_In order to be able to easily change my shipping address_
_I would like the ability to update my shipping address on the Member Details page_

Acceptance Criteria
- There is an "Edit" button in the "Shipping Address" section.
- When the "Edit" button is clicked:
  - The Shipping Address section switches to an editable view.
  - There is a form with fields for the `shipping_address`, `shipping_city`, `shipping_state`, and `shipping_zip_code` values. The fields are labeled Address, City, State, and Zip Code, respectively.
  - There is an "Update" button below the form.
- When the "Update" button is clicked:
  - The shipping address change is "saved". (_An actual HTTP request is not required. The data change does not need to be persisted on reload._).
  - The Shipping Address Section is switched back to the display-only view.
  - The updated shipping address is displayed on the page.

#### Member's Brush Preferences
_As a Beam Member_
_In order to confirm that my brush preferences are correct_
_I would like to view my selected brush color, motor speed, and auto-off options._

Acceptance Criteria
- The member's `brush_color` is displayed on the page. (See [Fetching the Member Data](#fetching-the-member-data))
  - It is displayed with a "Brush Color" label.
  - It has an icon beside it that displays the actual color. (See `.beam-brush-blue`, `.beam-brush-pink`, and `.beam-brush-chartreuse` in `assets/css/styles.css`.)
- The member's `motor_speed` and `auto_off` options are displayed on the page. (See [Fetching the Member Data](#fetching-the-member-data))
  - They are labeled Motor Speed and Auto Off, respectively.
  - The displayed `auto_off` value is `Yes` for `true` and `No` for `false`.

---

### Fetching the Member Data
For this exercise, you'll be displaying the data for a member named "Remy LeBeau". We've gone ahead and searched for his name in the system. You can can read the data through our API layer at [https://member-data.beam.dental/searchResults.json](https://member-data.beam.dental/searchResults.json).

Unfortunately, his data has gotten a little messed up. There are some invalid records that you'll need to sort through to get his current data. The valid member record for Remy:
- Does not have a `primary_insured_id`. (He's his own primary insured.)
- Does not have a `terminated_at` date. (He still has insurance active.)
- Has the most recent `effective_date`. (Older ones might not be attached to the correct data anymore.)

Once you have the record for Remy, you'll need to use that to get his member preferences. You can find the member preferences at [https://member-data.beam.dental/memberPreferences.json](https://member-data.beam.dental/memberPreferences.json). Member preference records are tied to the member by the `member_id`. Use the `id` of the member record you found earlier to get the correct preferences.

The member record and member preferences for Remy should be fetched **together** via HTTP Request to allow for a smooth user viewing experience.
