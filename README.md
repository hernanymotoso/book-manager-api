# Book Manager Api

An application for book management.

## Getting Started

### Prerequisites

- Node v20.18.1
- Yarn 1.22.22
  
### Installation

1. Clone the repository (SSH):
```bash
git clone git@github.com:hernanymotoso/book-manager-api.git
cd book-manager-api
git fetch origin
git checkout developer
```
### Running

1. Install the depentencies:
```bash
  yarn install
```

2. Run tests:
```bash
  yarn test:ci
```

3. Run the app:
```bash
  yarn start
```

The application will be available at `http://localhost:5050`.

## Features/Progress
[Project Book Manager Api](https://github.com/users/hernanymotoso/projects/6)


- ✅ Add Book
  - Issue: https://github.com/hernanymotoso/book-manager-api/issues/2
  - PR: https://github.com/hernanymotoso/book-manager-api/pull/6
  
- ✅ Load Books
  - Issue: https://github.com/hernanymotoso/book-manager-api/issues/3
  - PR: https://github.com/hernanymotoso/book-manager-api/pull/7
    
- ✅ Auth Middleware
  - Issue: https://github.com/hernanymotoso/book-manager-api/issues/4
  - PR: https://github.com/hernanymotoso/book-manager-api/pull/8

 
## Decisions

- ✅ Architecture: Clean Architecture
  - I decided to use clean architecture because with it we can divide the project into layers,
  isolate our domain and business rules from external libraries and ensure decoupling, quality, sustainability and scalability of the project.
  - I decided to use Test-Driven Development and Development tooling to ensure the quality and security of the API.
  
- ⚙️ Design Patterns / Principles / Conventions
  - You Ain't Gonna Need It (YAGNI)
  - Single Responsability (SRP)
  - Dependency Inversion (DIP)
  - Factory Pattern
  - Repository Pattern
  - Arrange, Act, Assert (AAA)
  - Test Doubles (Mock, Stub, Spy)
  - System Under Test (SUT)
  - Test-Driven Development (TDD)
  - Git Flow
  - Small Commits
 
## Diagrams

- 📐 Add Book
  <img width="1862" height="1401" alt="add-book drawio" src="https://github.com/user-attachments/assets/72b5b3a8-8f1f-40c4-bc29-041d3f53dbcf" />

- 📐 Load Books
  <img width="1791" height="1361" alt="load-books drawio" src="https://github.com/user-attachments/assets/e9f8773e-190a-40f8-b9cc-ae6fdd8bef06" />
  

## Test Suites
<img width="815" height="860" alt="image" src="https://github.com/user-attachments/assets/84901154-8b43-4a24-9075-956350e2790c" />
<img width="786" height="113" alt="image" src="https://github.com/user-attachments/assets/22f71ad7-be04-4e1c-b91e-e71b86b15433" />


## Time spent

I spent about 2 hours

  - First Commit
  <img width="599" height="87" alt="image" src="https://github.com/user-attachments/assets/2117afed-b40e-4c52-9f06-00aa9e2541ba" />
  
  - Last Commit
  <img width="853" height="117" alt="image" src="https://github.com/user-attachments/assets/23472baf-b379-4bfe-880b-a00f8f90ab42" />



    


