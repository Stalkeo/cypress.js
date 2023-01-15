describe('Проверка формы логина и пароля', function() {

    it('Позитивный кейс: верный логин и верный пароль', function() {
        cy.visit('https://login.qa.studio');

        cy.get('#mail').type('german@dolnikov.ru');
        cy.get('#loginButton').should('be.disabled');
        cy.get('#pass').type('iLoveqastudio1');
        cy.get('#loginButton').should('not.be.disabled');
        cy.get('#loginButton').click();

        cy.contains('Авторизация прошла успешно');
        cy.get('#exitMessageButton > .exitIcon');
    })

    it('Негативный кейс: верный логин и неверный пароль', function() {
        cy.visit('https://login.qa.studio');

        cy.get('#mail').type('german@dolnikov.ru');
        cy.get('#loginButton').should('be.disabled');
        cy.get('#pass').type('iLoveqastudio12');
        cy.get('#loginButton').should('not.be.disabled');
        cy.get('#loginButton').click();

        cy.contains('Такого логина или пароля нет');
        cy.get('#exitMessageButton > .exitIcon');
    })

    it('Позитивный кейс: восстановление пароля', function() {
        cy.visit('https://login.qa.studio');

        cy.get('#forgotEmailButton').click();
        cy.contains('Восстановите пароль');
        cy.get('#mailForgot').type('german@dolnikov.ru');
        cy.get('#restoreEmailButton').click();
        cy.contains('Успешно отправили пароль на e-mail');
        cy.get('#exitMessageButton > .exitIcon');
    })

    it('Негативный кейс: верный логин и неверный пароль', function() {
        cy.visit('https://login.qa.studio');

        cy.get('#mail').type('german@dolnikov.ru');
        cy.get('#loginButton').should('be.disabled');
        cy.get('#pass').type('iLoveqastudio12');
        cy.get('#loginButton').should('not.be.disabled');
        cy.get('#loginButton').click();

        cy.contains('Такого логина или пароля нет');
        cy.get('#exitMessageButton > .exitIcon');
    })

    it('Негативный кейс: неверный логин и верный пароль', function() {
        cy.visit('https://login.qa.studio');

        cy.get('#mail').type('german1@dolnikov.ru');
        cy.get('#loginButton').should('be.disabled');
        cy.get('#pass').type('iLoveqastudio1');
        cy.get('#loginButton').should('not.be.disabled');
        cy.get('#loginButton').click();
        cy.contains('Такого логина или пароля нет');
        cy.get('#exitMessageButton > .exitIcon');
    })

    it('Негативный кейс: неверный логин и верный пароль', function() {
        cy.visit('https://login.qa.studio');

        cy.get('#mail').type('GerMan@Dolnikov.ru');
        cy.get('#loginButton').should('be.disabled');
        cy.get('#pass').type('iLoveqastudio1');
        cy.get('#loginButton').should('not.be.disabled');
        cy.get('#loginButton').click();
        cy.contains('Такого логина или пароля нет');
        cy.get('#exitMessageButton > .exitIcon');
    })
        
})