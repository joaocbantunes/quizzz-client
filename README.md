# Quizzz

<br>

## Description

This is an app to prepare you to a tech interview. Here you can train with different programming languages.

## User Stories

- **404:** As a user I get to see a 404 page with a feedback message if I try to reach a page that does not exist so that I know it's my fault.
- **500:** - As a user I want to see a nice error page when the super team screws it up so that I know that is not my fault
- **Homepage:** - As a user I want to be able to signup / login and access the profile page.
- **Signup:** As an anonymous user I can sign up on the platform so that I can make quizzz and prepare myself.
- **Login:** As a user I can login to the platform so that I can access my profile and start doing some quizzz.
- **Logout:** As a logged in user I can logout from the platform so no one else can use it.
- **Profile Page**: As a logged in user I can visit my profile page so that I can access the edit page. -**Edit User Profile:** - As a user, I want to be able to edit my profile informations and add a profile picture.
- **Add Questions:** As a logged in user I can access the add questions page so that I can create a new question in an existing collection.
- **View Ranks:** As a user I can see the rankings list for the previous quizzzes.

## Bonus Features

- **Choose difficulty:** As a user i can choose the difficulty of the quizzz i want to do.
- **Top Score:** As a user i can be able to see my top scores per

## Backlog

<br>

# Client / Frontend

## React Router Routes (React App)

| Path                  | Component          | Permissions                | Behavior                                          |
| --------------------- | ------------------ | -------------------------- | ------------------------------------------------- |
| `/`                   | HomePage           | public `<Route>`           | Homepage.                                         |
| `/login`              | LoginPage          | anon only `<AnonRoute>`    | Login form, navigates to home page after login.   |
| `/signup`             | SignupPage         | anon only `<AnonRoute>`    | Signup form, navigates to home page after signup. |
| `/user-profile`       | ProfilePage        | user only `<PrivateRoute>` | User and profile for the current user.            |
| `/user-profile/edit`  | EditProfilePage    | user only `<PrivateRoute>` | Edit user profile form.                           |
| `/user-profile/score` | ProfileScore       | user only `<PrivateRoute>` | See the score of the user.                        |
| `/question/add`       | CreateQuestionPage | user only `<PrivateRoute>` | Create new question form.                         |
| `/quizz`              | QuizzzPage         | user only `<PrivateRoute>` | Shows the quizzz for the user                     |
| `/quizz-score`        | QuizzzPage         | user only `<PrivateRoute>` | Shows the quizzz score                            |

## Components

Pages:

- HomePage

- LoginPage

- SignupPage

- ProfilePage

- EditProfilePage

- CreateQuestionPage

Components:

- QuestionCard
- Navbar
- ScoreBoard
- AddQuestionCard

## Services

<br>

# Server / Backend

## Models

**User model**

```javascript
{
  username: { type: String, required: true, unique: true},
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  profileImage: { type: String },
  createQuestion: [ { type: Schema.Types.ObjectId, ref:'Question' } ]
}
```

**Question model**

```javascript
 {
   name: { type: String },
   answer: [{
       option: String,
       isCorrect: true,
       isWrong: false,
       }]
   language: [{ type: Schema.Types.ObjectId, ref:'Collection'}],
   difficulty: { type: String}
 }
```

**Collection model**

```javascript
 {
   id: [{ type: Schema.Types.ObjectId, ref:'Question' }]
   name: { type: String },
   language: {type: String}
 }
```

<br>

## API Endpoints (backend routes)

| HTTP Method | URL                  | Request Body                   | Success status | Error Status | Description                                                                                                                     |
| ----------- | -------------------- | ------------------------------ | -------------- | ------------ | ------------------------------------------------------------------------------------------------------------------------------- |
| GET         | `/auth/profile `     | Saved session                  | 200            | 404          | Check if user is logged in and return profile page                                                                              |
| POST        | `/auth/signup`       | {name, email, password}        | 201            | 404          | Checks if fields not empty (422) and user not exists (409), then create user with encrypted password, and store user in session |
| POST        | `/auth/login`        | {username, password}           | 200            | 401          | Checks if fields not empty (422), if user exists (404), and if password matches (404), then stores user in session              |
| POST        | `/auth/logout`       |                                | 204            | 400          | Logs out the user                                                                                                               |
| GET         | `/api/questions`     |                                |                | 400          | Show all questions                                                                                                              |
| PUT         | `/api/questions/:id` | { name, language, difficulty } | 200            | 400          | add new question                                                                                                                |
| PUT         | `/api/user/:id`      | { name, img }                  | 201            | 400          | edit user                                                                                                                       |
| DELETE      | `/api/user/:id`      |                                | 200            | 400          | delete user                                                                                                                     |
| GET         | `/api/Quizzz`        |                                | 201            | 400          | show Quizzz                                                                                                                     |

<br>

## API's

Based on https://Quizapi.io/ with new questions

<br>

## Packages

<br>

## Links

### Trello/Kanban

[Link to your trello board](https://trello.com/b/PBqtkUFX/curasan) or a picture of your physical board

### Git

The url to your repository and to your deployed project

[Client repository Link](https://github.com/screeeen/project-client)

[Server repository Link](https://github.com/screeeen/project-server)

[Deployed App Link](http://heroku.com)

### Slides

[Slides Link](http://slides.com) - The url to your _public_ presentation slides

### Contributors

FirstName LastName - <github-username> - <linkedin-profile-link>

```

```
