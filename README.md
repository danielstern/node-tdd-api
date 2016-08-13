#Short-Format Messaging Platform for Node.js
## Introduction
This application is meant to be a demonstration of a Node.js implementation of a API using the following principles...
- TDD
- Event-Sourcing
- Stateless principles
- Centralized OAuth Usage

## How to use this repository?
This repository makes an excellent-starting point for a reliable messaging application. The existing TDD-based structure is functionally correct but not too hard to understand.
It is also a good source of highly functional code samples.
Very little extra or unnecessary functionality has been added.


## Quick Start
Clone this application and install all dependencies.
###Run tests
`npm test`

##Implementation
### TDD
This application uses Test Driven Development throughout. A `test/` directory holds tests for almost every service and model.
Tests were written throughout this application's development, not just at the beginning. As such, all the components are testable by design.
This application is backed by 20 tests and so its functionality can always be tested.

### Mocking
In order to test Facebook functionality, this application uses the `mock-fs` module to create a mock Facebook service.

### Mocha
Tests are implemented in Mocha which allows for easy asynchronous testing. Further tests are written with `Supertest` in order to test the API.

### Facebook-Based Authorization
This app foregoes the account-making process altogether. Instead, only sign-up through Facebook is allowed. There are numerous advantages to this...
- Works nicely on all platforms
- Users are already familiar with the Facebook interface
- Facebook handles security, reducing the developer's liability
- Can be implemented faster than writing own sign-up system
- In the future, different authorizations (GitHub, Google+) can be added

##Design

### Event Sourcing
All user interactions (sign-up, posts) are stored in an event-sourced DB implementing Mongo on the back end. This means that data is never erased - instead it is stored as a series of events. Services then analyze relevant events to produce expected results (See `services/user/UserFollowerRetrievalService.js` for more info).
#### Why Event Sourcing?
Event sourcing has numerous advantages...
- More detailed analysis possible
- Harder to accidentally delete data
- Easier to regress state of the application
- Only adding data never deleting means more streamlined databases can be used

### Application Flow
Client applications interact with the application through a standard REST API. Each route in the API is testable and stands on its own. The REST API then calls back-end services which streamline the use of the Event-Sourced DB.
