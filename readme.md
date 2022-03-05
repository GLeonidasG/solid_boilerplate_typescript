# Typescript Solid project boiler plate

## Things that we need to have

 1. typescript
 	> yarn add -D typescript ts-node-dev
 2. ORM: for this, I'll be using Prisma
 	> yarn add prisma
 3. folder structure: will be using SOLID principles with clean architecture so should be something like this

 src
 |--|
    |--->domain: responsible for the business logic (models, services)
    |---|
    	|---> [entity-name]
	   |---> models: responsible for the entities of the application (should contain validation logic as well)
	   |---> services: responsible for all the use cases related to the entity in a single file
    |--->application: responsible for the application logic (CRUD operations)
    |--->adapters: responsible for the interfaces that communicates with the out side services (interfaces and repositories for prisma)
    |--->presenters: responsible for the reception of the requests (controllers)

4. since it's an API, we will be using express for this one
 > yarn add express


# Description

This repository serves as a boilerplate for a typescript project using SOLID principles and clean architecture.
Technologies:
Typescript - Prisma - SOLID - Clean Architecture
