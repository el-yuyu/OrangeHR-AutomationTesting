//const { before } = require("mocha");

//const { after } = require("mocha")

before('Visit login', function(){


    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login') // visit the website
    cy.wait(3000) // means three second
    cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Admin') // type the user name 
    cy.wait(3000) // means three second
    cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type('admin123') // type the password
    cy.wait(3000) // means three second
    cy.get('.oxd-button').click() // perss the login 
    cy.wait(3000) // means three second
})




it('add employee and delete', function(){

cy.get(':nth-child(1) > .oxd-main-menu-item').click() // click the admin menu
    cy.wait(3000) // means three second
    cy.get('.orangehrm-header-container > .oxd-button').click() // add empo
    cy.wait(3000) // means three second
    cy.get(':nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text > .oxd-select-text--after > .oxd-icon').click() // click DDL
    cy.wait(3000) // means three second
    cy.get('.oxd-select-dropdown > :nth-child(2)').click() // Click the Admin
    cy.wait(3000) // means three second
    cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text > .oxd-select-text--after > .oxd-icon').click() // click the status DDL
    cy.wait(3000) // means three second
    cy.get('.oxd-select-dropdown > :nth-child(2)').click() // click enable
    cy.wait(3000) // means three second
    cy.get('.oxd-autocomplete-text-input > input').type('y') // write in the empo name
    cy.wait(3000) // means three second
    cy.get('.oxd-autocomplete-dropdown > :nth-child(4) > span').click() // click the emponame
    cy.wait(3000) // means three second
    cy.get(':nth-child(4) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Yousef86') // type the user name
    cy.wait(3000) // means three second
    cy.get('.user-password-cell > .oxd-input-group > :nth-child(2) > .oxd-input').type('y12345678') // typing the password
    cy.wait(3000) // means three second
    cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('y12345678') // typing the password confomation
    cy.wait(3000) // means three second
    cy.get('.oxd-button--secondary').click() // click save
    cy.wait(6000) // means three second
    cy.get(':nth-child(2) > .oxd-input').type('Yousef2') // click the user name
    cy.wait(4000) // means three second



    cy.get('.oxd-form-actions > .oxd-button--secondary').click() // click the search
    cy.wait(3000) // means three second
    cy.get('.oxd-table-cell-actions > :nth-child(1) > .oxd-icon').click() // CLICK THE DELETE
    cy.wait(3000) // means three second
    cy.get('.oxd-button--label-danger').click() // CLICK THE DELETE CONFIRM

   
})



it('Add Job and delete', function(){

     cy.get(':nth-child(2) > .oxd-topbar-body-nav-tab-item > .oxd-icon').click() // click job
    cy.wait(3000) // means three second
    cy.get(':nth-child(1) > .oxd-topbar-body-nav-tab-link').click() // click on job title
    cy.wait(3000) // means three second
    cy.get('.oxd-button').click() // click on add
    cy.get(':nth-child(2) > .oxd-input').type('Burned out Student') // type the job title
    cy.wait(3000) // means three second
    cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-textarea').type('A student with no time') // job descreption
    cy.wait(3000) // means three second
    cy.get(':nth-child(4) > .oxd-input-group > :nth-child(2) > .oxd-textarea').type('nothing to say here') // write on the note
    cy.wait(3000) // means three second
    cy.get('.oxd-file-div > .oxd-icon').click() // click on upload file
    cy.wait(3000) // means three second
    cy.get('[type="file"]').selectFile('C:/Users/youse/Desktop/OrangeHR/cypress/fixtures/Project.docx',{force: true});   // upload file command
    cy.wait(3000) // means three second
    cy.get('.oxd-button--secondary').click() // click on save
    cy.wait(3000) // means three second
    cy.get(':nth-child(1) > .oxd-table-row > [style="flex: 1 1 0%;"] > .oxd-table-cell-actions > :nth-child(1)').click() // click on delete
    cy.wait(3000) // means three second
    cy.get('.oxd-button--label-danger'). click() // delete confirm


   
})



it('My info', function(){

cy.get(':nth-child(6) > .oxd-main-menu-item').click() // click on my info 
    cy.wait(5000) // means three second
    cy.get('.--name-grouped-field > :nth-child(1) > :nth-child(2) > .oxd-input').clear().type('Yousef') // clear the first name
    cy.wait(3000) // means three second
    cy.get(':nth-child(2) > :nth-child(2) > .oxd-input').clear().type('Hamza') // the second name
    cy.wait(3000) // means three second
    cy.get(':nth-child(3) > :nth-child(2) > .oxd-input').clear().type('Alhamza') // the last name
    cy.wait(3000) // means three second
    cy.get(':nth-child(1) > :nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-input').clear().type('YY') // WRITE THE EMPO ID
    cy.wait(3000) // means three second
    cy.get(':nth-child(3) > :nth-child(1) > :nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').clear().type('44400') // THE OTHR ID
    cy.wait(3000) // means three second
    cy.get(':nth-child(2) > :nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-input').clear().type('YYYY')
    cy.wait(3000) // means three second
    cy.get(':nth-child(5) > :nth-child(1) > :nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text > .oxd-select-text--after > .oxd-icon').click() // CLICK THE NATIONALITY
    cy.wait(3000) // means three second
    cy.get(':nth-child(1) > :nth-child(2) > .oxd-radio-wrapper > label > .oxd-radio-input').click() // GENDER CHOICE
    cy.wait(3000) // means three second
    cy.get(':nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-date-wrapper > .oxd-date-input > .oxd-input').clear().type('2004-09-15') // CLEAR THE CLANDER THEN TYPE
    cy.wait(3000) // means three second
    cy.get(':nth-child(1) > .oxd-form > .oxd-form-actions > .oxd-button').click() // CLICK ON SAVE
    cy.wait(3000) // means three second
    cy.get('.orangehrm-edit-employee-imagesection').click() // click to change the pfp
    cy.wait(3000) // means three second
    cy.get('.oxd-file-div > .oxd-icon-button').click() // click to actully change it 
    cy.wait(3000) // means three second
    cy.get('[type="file"]').selectFile('C:/Users/youse/Desktop/OrangeHR/cypress/fixtures/Screenshot 2025-11-23 203541.png',{force: true});   // upload file command
    cy.wait(3000) // means three second
    cy.get('.oxd-button').click() // to save the pfp
    cy.wait(3000) // means three second
  
})



after('logout', function(){

    cy.get('.oxd-userdropdown-tab > .oxd-icon').click() // click the ddl to log out
    cy.wait(3000) // means three second
    cy.get(':nth-child(4) > .oxd-userdropdown-link').click() // click the logout
    cy.wait(3000) // means three second



   
})
