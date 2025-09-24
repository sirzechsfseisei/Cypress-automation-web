# web-ui-testing

## Description

This project uses [Cypress](https://www.cypress.io/) for end-to-end (E2E) testing.  
Cypress is a modern testing framework that makes it easy to write, run, and debug automated browser tests for web applications.  
It supports features like real-time reloading, time travel debugging, and powerful API commands for DOM interaction.

## Project Structure
    ```plaintext
        project/
          ├─ cypress/
          │   ├─ e2e/            # Your test files (.cy.js / .cy.ts)
          │   ├─ fixtures/       # Static test data
          │   ├─ support/        # Custom commands and setup
          ├─ cypress.config.js   # Cypress configuration file
          ├─ package.json
          └─ node_modules/

## Operating System
  Cypress supports running under these operating systems:

    macOS 11 and above (Intel or Apple Silicon 64-bit (x64 or arm64))
    Linux (x64 or arm64) see also Linux Prerequisites down below
    Ubuntu 20.04 and above
    Debian 11 and above
    Fedora 41 and above
    Windows 10 and 11 (x64)
    Windows 11 24H2 (arm64, runs in x64 emulation mode, minimum Cypress 14.5.0 required) - preview status
    Windows Server 2019, 2022 and 2025 (x64)

## How to Use

### 1. Prerequisites
Before you start, make sure you have:
- **Node.js** (LTS version recommended)
- **npm**(8.6.0 and above) or **yarn** (clasic : 1.22.22 and above)(modern : 4.x and above)
- A code editor (e.g., Visual Studio Code)

### 2. Install Dependencies
 **Windows**:  
  Download and install from [https://nodejs.org/](https://nodejs.org/) (choose **LTS** version).  
  After installation, check versions:  
    
    ```
    * node -v
    * npm -v
    ```

 **Linux**:
    
    ```
    * sudo apt update
    * sudo apt install -y nodejs npm
    * node -v
    * npm -v
    ```

 **MacOS**:
    
    ```
    * brew install node
    * node -v
    * npm -v
    ```

 Create Folder Cypress
    
    * mkdir cypress-project
    * cd cypress-project

 Inisialisasi Project
    
    * npm init -y

 Install Cypress
    
    * npm install cypress --save-dev

 Cek version Cypress
    
    * npx cypress --version


## How to Use

### Update Module

npm i

### Run in Interactive Mode (Test Runner UI)

npx cypress open

### Run in Headless Mode (Terminal)

npx cypress run

## Example Built-in Test
Example example.cy.js

describe('Example Test', () => {
  it('Visits the Kitchen Sink', () => {
    cy.visit('https://example.cypress.io')
    cy.contains('type').click()

    // Should be on a new URL which includes '/commands/actions'
    cy.url().should('include', '/commands/actions')

    // Get an input, type into it and verify value
    cy.get('.action-email')
      .type('fake@email.com')
      .should('have.value', 'fake@email.com')
    cy.get('button').click();
          })
        })

## Screenshot Example
Test Runner UI:

![Test Runner UI](https://github.com/sirzechsfseisei/Cypress-automation-web/blob/main/cypress/fixtures/path/Screenshot_10.png)
![Test Runner UI](https://prnt.sc/y0lw9eBscdU6)




