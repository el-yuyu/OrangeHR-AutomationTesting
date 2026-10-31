it.only('logout', function(){

    cy.get('.oxd-userdropdown-tab > .oxd-icon').click() // click the ddl to log out
    cy.wait(3000) // means three second
    cy.get(':nth-child(4) > .oxd-userdropdown-link').click() // click the logout
    cy.wait(3000) // means three second



   
})