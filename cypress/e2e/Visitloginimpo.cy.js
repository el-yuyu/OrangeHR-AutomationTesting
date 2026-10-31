it.only('Visit login', function(){


    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login') // visit the website
    cy.wait(3000) // means three second
    cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Admin') // type the user name 
    cy.wait(3000) // means three second
    cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type('admin123') // type the password
    cy.wait(3000) // means three second
    cy.get('.oxd-button').click() // perss the login 
    cy.wait(3000) // means three second
})
