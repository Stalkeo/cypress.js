describe('Длинный автотест для https://testqastudio.me/ ', function() {

    it('Длииииииный кейс', function() {
        cy.visit('https://testqastudio.me/');
        cy.get('.post-11342 > .product-inner > .product-thumbnail > .woocommerce-LoopProduct-link > .attachment-woocommerce_thumbnail').click();
        cy.get('.summary > .cart > .product-button-wrapper > .quantity > .increase > svg').click();
        cy.get('.summary > .cart > .product-button-wrapper > .quantity > .increase > svg').click();
        cy.get('.summary > .cart > .product-button-wrapper > .single_add_to_cart_button').click();
        cy.wait(10000)
        cy.get('#cart-modal > .off-modal-layer').click();
        cy.get('[href="https://testqastudio.me"]').click();
        cy.get('.post-11337 > .product-inner > .product-thumbnail > .woocommerce-LoopProduct-link > .attachment-woocommerce_thumbnail').click();
        cy.get('.summary > .cart > .product-button-wrapper > .single_add_to_cart_button').click();
        cy.wait(10000)
        cy.get('.checkout').click();
        cy.get('#billing_first_name').type('Даня');
        cy.get('#billing_last_name').type('Войтович');
        cy.get('#billing_address_1').type('ул. Гвоздкова 10, кв 51');
        cy.get('#billing_city').type('Волгоград');
        cy.get('#billing_state').type('Волгоградская область');
        cy.get('#billing_postcode').type('400002');
        cy.get('#billing_phone').type('+79996299997');
        cy.get('#billing_email').type('danvo97@mail.ru');
        cy.wait(1000)
        cy.get('#place_order').click();
        cy.contains('Ваш заказ принят. Благодарим вас.');
        



       // cy.get('#mail').type('german@dolnikov.ru');
       // cy.get('#loginButton').should('be.disabled');
       // cy.get('#pass').type('iLoveqastudio1');
       // cy.get('#loginButton').should('not.be.disabled');
       // cy.get('#loginButton').click();

       // cy.contains('Авторизация прошла успешно');
       // cy.get('#exitMessageButton > .exitIcon');
    })
      
})