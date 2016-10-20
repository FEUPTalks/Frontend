# FEUP Talks Management
![Build](https://camo.githubusercontent.com/c80b945464b8a2f461df63caf4125154896b93b0/68747470733a2f2f7472617669732d63692e6f72672f616e67756c61722f717569636b73746172742e7376673f6272616e63683d6d6173746572)

This project was made under Software Engineering Course. We aim to help organizing and managing events.
Our system includes a website for event overview and submit. An admin dashboard is later used to control and approve such events.

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
> If the typings folder doesn't show up after npm install please install them manually with:
>
> `npm run typings -- install`

Code changes are automatically updated.  Process can be stoped using CTRL+C.

## Start Coding

If you want to start developing, first create a new branch:
```
May branch off from:
develop
Must merge back into:
develop
```

#### 1. Always use develop branch to start branching off. Branching names convention must follow: `develop/name`

```
$ git checkout -b myfeature develop
Switched to a new branch "myfeature"
```

#### 2. When finished developing the feature, ***merge back*** to develop. Then to master.

> The --no-ff flag causes the merge to always create a new commit object, even if the merge could be performed with a fast-forward. This avoids losing information about the historical existence of a feature branch and groups together all commits that together added the feature.

```
$ git checkout develop
Switched to branch 'develop'

$ git merge --no-ff myfeature
Updating ea1b82a..05e9557
(Summary of changes)

$ git branch -d myfeature
Deleted branch myfeature (was 05e9557).

$ git push origin develop
```

As for release branch, we will later use that for Jenkins purpose.

## Folder Structure

```
app/
----- components/
---------- home/
--------------- home.component.ts
--------------- home.component.html
---------- other/
--------------- other.component.ts
--------------- other.component.html (optional)
----- assets/
---------- js/
--------------- bootstrap.js
--------------- jquery.js
---------- styles/
--------------- bootstrap.css
--------------- jquery.css
----- shared/
---------- sidebar
--------------- sidebar.component.ts
--------------- sidebar.component.html
----- main.ts
----- app.component.ts
test/
----- something
```

## Actors

* **Proponent**: Proposes the talk
* **Administrator**: Approves the talk
* **Employee**: Sorts the rooms (but doesn't take part in the system)
* **Palestrante**: Hosts the talk (but doesn't take part in the system)
* **Attendee**: Registers in the avaiable talks (and Coffee Break/Lanche)
* **Moderator**: Moderates the talks

## Requirements

* Register the talk through a form
* Create a own wiki/website or bio for the talk
* Send notifications through a mail list
* Limit the sign ups for the coffee break (budget overflow?)
* User Roles
* Validate registrations by having fe.up.pt email (and maybe captcha)
* Registration: Name, Mail, Filiation, checkbox: goes to lunch - disables when reaching max-amount (can even show how much slots are left)
* Confirm with email each time they want to make an account change (Change queue or key - confirmed by email: LINK)
 * Users access a link that activates an API request and confirms a request in cache. The link will have to expire eventually.

## States
```
Request - (Accept: **AD**) -> Awaiting Resources - (Room: **EMP**) -> Sharing: **AD** - (Sharing - Create Page, Notify) -> Talk -> Archives
       - (Reject) -> Notification with reason

In the resources stage, the Proponent, Administrator and Employee should change the request.
```

## Techs

#### Angular 2

Angular turns your templates into code that's highly optimized for today's JavaScript virtual machines giving you all the benefits of hand-written code with the productivity of a framework.
Serve the first view of your application on node.js, .NET, PHP and other servers for near-instant rendering in just HTML and CSS. Also paves the way for sites that optimize for SEO.
We like dynamic content, so we choosed this!

#### Go

Go and C# both have asynchronous operation built into the language at a low level, making it easy for large groups of people to write asynchronous code. The MongoDB Go driver is probably the best MongoDB driver in existence, and complex interaction with MongoDB is core to Parse. Goroutines were much more lightweight than threads. And frankly we were most excited about writing Go code. We thought it would be a lot easier to recruit great engineers to write Go code than any of the other solid async languages.
And also, we've heard cool stuff about this language!

## User Stories

#### [1. I, as a proponent, want to be able to submit a talk proposition.](https://github.com/RAyres23/LESTeamB/blob/master/acceptanceTests/AT1.md)
#### [2. I, as a system administrator, want to be able to reject a talk proposition.](https://github.com/RAyres23/LESTeamB/blob/master/acceptanceTests/AT2.md)
#### [3. I, as a system administrator, want to able to accept a talk proposition.](https://github.com/RAyres23/LESTeamB/blob/master/acceptanceTests/AT3.md)
#### [4. I, as a system administrator, want to be able to reject a talk, so that the proponent edits it.](https://github.com/RAyres23/LESTeamB/blob/master/acceptanceTests/AT4.md)
#### [5. I, as a proponent, want to be able to edit a talk, in order to complete the talk.](https://github.com/RAyres23/LESTeamB/blob/master/acceptanceTests/AT5.md)
#### [6. I, as system administrator, want to be able to edit a talk, in order to complete it.](https://github.com/RAyres23/LESTeamB/blob/master/acceptanceTests/AT6.md)
#### 7. I, as an employee, want to be able to choose the room for the talk, in order to complete the talk.
#### 8. I, as system administrator, want to be able to accept a talk, in order to publish it.
#### 9. I, as a user, want to be able to register in a talk, in order to attend it.
#### 10. I, as attendee, want to be able to re-register in a talk, in order to replace information.
#### 11. I, as a user, want to be able to search for available talks.
#### 12. I, as a user, want to be able to search for previous talks.
#### 13. I, as an attendee, want to be able to delete my registration in the talk.
#### 14. I, as an attendee, want to be able to choose to receive (or not) notifications.
#### 15. I, as an attendee, want to be able to leave feedback (reviews).
#### 16. I, as a user, want to be able to see the other feedback (reviews).
