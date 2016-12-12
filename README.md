# FEUP Talks Management
[![Codacy Badge](https://api.codacy.com/project/badge/Grade/8a108820e266473e9a07f12c550b43c5)](https://www.codacy.com/app/pedroob221/Frontend?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=FEUPTalks/Frontend&amp;utm_campaign=Badge_Grade)

This project was made under Software Engineering Course.
 
## Product Vision

### Motivation

Conferences, meetings and other talks are all about people and for people. People getting together, talking, sharing and learning from each other. The best meetings are those where we leave feeling motivated, uplifted, inspired, educated and connected.
Behind every meeting is an event organizer working hard to bring many tasks to completion simultaneously. Event organizers are excellent multi-taskers and our function is to make their job easier with a system that will support them, as well as all the attendees.

### Target customers and users

This system is designed for users responsible for organization and management of talks, meeting and others educational events.

### Needs

"FEUP Talks" is an integrated package for event planning. Now you don't have do things ''the hard way'': responding to emails, transferring data to spreadsheets, sending out receipts and chasing the ''techniques'' for help. There is no danger of information ‘slipping between the cracks’ which means less mistakes and a better experience for everyone. Our system solves the problems that always face organizers managing such events.

### Product

"FEUP Talks" is a system that helps organizing and managing events. It includes a website for event overview and submits. An admin dashboard is later used to control and approve such events. The system supports various functionalities, such as:
-	Register the talk through a form;
-	Create a own wiki/website or bio for the talk;
-	Allow attendees register for a talk and other events (e.g., coffee breaks);
-	Validate registrations, limit the number of sign ups for the events;
-	Send notifications through a mail list.

### Technology

The technologies chosen to develop this product are:

<strong>Angular 2</strong>
<p>Angular turns your templates into code that's highly optimized for today's JavaScript virtual machines giving you all the benefits of hand-written code with the productivity of a framework. Serve the first view of your application on node.js, .NET, PHP and other servers for near-instant rendering in just HTML and CSS. Also paves the way for sites that optimize for SEO. We like dynamic content, so we chose this!</p>

<strong>Go</strong>
<p>Angular turns your templates into code that's highly optimized for today's JavaScript virtual machines giving you all the benefits of hand-written code with the productivity of a framework. Serve the first view of your application on node.js, .NET, PHP and other servers for near-instant rendering in just HTML and CSS. Also paves the way for sites that optimize for SEO. We like dynamic content, so we chose this!</p>
<p>Go and C# both have asynchronous operation built into the language at a low level, making it easy for large groups of people to write asynchronous code. The MongoDB Go driver is probably the best MongoDB driver in existence, and complex interaction with MongoDB is core to Parse. Goroutines were much more lightweight than threads. And frankly we were most excited about writing Go code. We thought it would be a lot easier to recruit great engineers to write Go code than any of the other solid async languages. And also, we've heard cool stuff about this language!</p>

<strong>Jenkins</strong>
<p>Jenkins is an award-winning, cross-platform, continuous integration and continuous delivery application that increases our productivity. Using Jenkins to build and test our software projects continuously will make it easier for us as developers to integrate changes to our project. It also allows us to continuously deliver our software by providing powerful ways to define our build pipelines and integrating with a large number of testing and deployment technologies.</p>

<strong>MySQL</strong>
<p>MySQL is a freely available open source Relational Database Management System (RDBMS) that uses Structured Query Language (SQL).
SQL is the most popular language for adding, accessing and managing content in a database. It is most noted for its quick processing, proven reliability, ease and flexibility of use.</p>

<strong>Karma</strong>
<p>The main goal for Karma is to bring a productive testing environment. The environment being one where we don't have to set up loads of configurations, but rather a place where we can just write the code and get instant feedback from our tests. Because getting quick feedback is what makes us productive and creative.</p>

<strong>Protractor</strong>
<p>It is our end-to-end test framework that usually used for AngularJS applications. Protractor runs tests against our application running in a real browser, interacting with it as a user would.</p>

### Business Goals

"FEUP Talks" is a unique system that helps organizing and managing events. It provides an integrated solution that takes care of several aspects of event organization, such as registration, scheduling, communication. In this way, the system allows event organizers run their events smoothly, while saving time and energy, and making events more enjoyable for both organizers and attendees.

## Development flow

<strong>GitFlow<strong> is a branching model for Git, created by Vincent Driessen. It is very well suited to collaboration and scaling the development team. One of the great things about GitFlow is that it makes parallel development very easy, by isolating new development from finished work. <br/>
<img src="https://namethattech.files.wordpress.com/2014/11/git-flow-updated.png" alt="Drawing" width="350px"/>
<p> <strong>How It Works:</strong>
- New development (new features, non-emergency bug fixes) are built in feature branches;
- Feature branches are branched off of the <strong>develop branch</strong>, and finished features and fixes are merged back into the <strong>develop branch</strong> when they’re ready for release;
- When it is time to make a release, a <strong>release branch</strong> is created off of **develop**;
- The code in the **release branch** is deployed onto a suitable test environment, tested, and any problems are fixed directly in the release branch. This <strong>deploy -> test -> fix -> redeploy -> retest</strong> cycle continues until you’re happy that the release is good enough to release to customers;
- When the release is finished, the **release branch** is merged into **master** and into **develop** too, to make sure that any changes made in the **release branch** aren’t accidentally lost by new development;
- The **master branch** tracks released code only. The only commits to **master** are merges from **release branches** and **hotfix branches**.
- **Hotfix branches** are used to create emergency fixes;
- They are branched directly from a tagged release in the master branch, and when finished are merged back into both **master** and **develop** to make sure that the hotfix isn’t accidentally lost when the next regular release occurs.</p>

## Installation

#### 1. Clone the project
```
$ git clone https://github.com/RAyres23/LESTeamB.git
```

#### 2. Go to the project folder
```
$ cd LESTeamB
```

#### 3. Install npm packages

```
$ npm install
$ npm start
```

Code changes are automatically updated.  Process can be stoped using CTRL+C.

## Development server
Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive/pipe/service/class`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

## Deploying to Github Pages

Run `ng github-pages:deploy` to deploy to Github Pages.

### Backend code:

https://github.com/FEUPTalks/Backend
