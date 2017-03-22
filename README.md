**Description**

**Survey** is a simple, single page app allowing users to participate in a configurable survey (at the moment only one survey might be displayed on a page)
and quickly see aggregation of answers. Configuration of surveys is done via different services "microservices" holding data about survey, questions and possible answers.
Project is written in Angular 1.6.3 using ES6 + Babel, has different loosely coupled components (Main, Survey, question components, AnswerAggregator).
Components are communicating between each other using $rootScope as event bus.


**Component structure**

**Main component**

It serves as main component and entry point for the whole app. Main component is responsible for
importing other dependent components and holding basic logic for maintaining this dialog.

**Survey component**

It is responsible for fetching survey configuration via guid, looping through it and
rendering respective question components. Survey component is responsible for collecting data from
question components (via respective events e.g. **"SingleAnswerQuestion:answerQuestion"**),
processing them to make ready to be sent. When form is submitted component fires collected data via 
**"Survey:submitSurvey"** event which is handled by AnswerAggregator component.
It also holds logic for resetting survey form after it has been sumitted.

**AnswerAggregator component**

It is responsible for aggregating answers from survey and presenting to users. Survey form data is being received by handling
"Survey:submitSurvey" event. Component uses various related "microservices" to convert guids (question, answer) into lables, names.

**Question components**

There are three types of questions being supported at the moment: with single answer, multiple answer and
scaled answer question (with numeric values). So we have 3 components accordingly for each of mentioned types:
"SingleAnswerQuestion", "MultyAnswerQuestion" and "ScaledAnswerQuestion". Each of these components fires its own specific
event when question is being answered, e.g. "SingleAnswerQuestion:answerQuestion", which are handled by Survey component as
described earlier. Additionally each question component handles "Survey:submitSurvey" event from Survey component to reset itself
when form is submited.


**Backend**

Project mimics "backend" functionality with usage of simple "microservice" like angular services.

* **Survey service** - holds pool of survey configurations and handy method for retireving certain survey by guid.
* **Question service** - holds simple guid to question text map. And a method to retrieve them.
* **Answer service** - holds simple guid to answer label map. And a method to retrieve them.
* **Aggregation service** - is a storage for aggregation configs/data by survey id.


**Design**

* using Twitter Bootstrap as a CSS framework for general styling and resposivness
* using https://angular-ui.github.io/bootstrap as Bootstrap's javascript adaptation for Angular
to have basic Bootstrap js components as Angular directives/components: Popover, Dialog, Progressbar, ...
* using SASS to write styles for components


**Bundling**

Using Webpack to bundle project, available commands are:

* **npm install** - run this at first to fetch all dependencies
* **npm start** - run this to start serving project locally (e.g. http://localhost:8080/).
Additionally applies eslint to project sources.
* **npm run bundle** - bundles (contact, minify/uglify) entire project into dist/ folder