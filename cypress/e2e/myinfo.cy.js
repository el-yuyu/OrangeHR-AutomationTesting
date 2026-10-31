it.only('My info', function(){

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