it.only('Add Job and delete', function(){

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