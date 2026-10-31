it.only('add employee and delete', function(){

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