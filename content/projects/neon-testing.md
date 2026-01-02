---
displayName: Neon Testing
category: Libraries
order: 2
owner: Mikael Lirbank
github: https://github.com/starmode-base/neon-testing
npm: https://www.npmjs.com/package/neon-testing
---

A [Vitest](https://vitest.dev/) utility for integration tests with [Neon Postgres](https://neon.com/).

Each test file runs against its own isolated PostgreSQL database (Neon branch), ensuring clean, parallel, and reproducible testing of code that interacts with a database. Because it uses a real, isolated clone of your production database, you can test code logic that depends on database features, such as transaction rollbacks, unique constraints, and more.

Testing against a clone of your production database lets you verify functionality that mocks cannot.
