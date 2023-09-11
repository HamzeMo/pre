describe('create 3 assertion', () => {
    it('Make Sure That The Default Currency Is SAR', () => {
        cy.visit("https://www.almosafer.com/ar ")
        cy.get('.cta__saudi').click()
        cy.get('[data-testid="Header__CurrencySelector"]').should("contain","SAR")
    });
    it('Make Sure That The Default Langauge Is Arabic ', () => {
        cy.visit("https://www.almosafer.com/ar ")
        cy.get('.cta__saudi').click()
        cy.get('[data-testid="Header__LanguageSwitch"]').should("contain","English")
    });
    it('Make Sure That The Flight Tab Is Clicked By Default  ', () => {
        cy.visit("https://www.almosafer.com/ar ")
        cy.get('.cta__saudi').click()
        cy.get('#uncontrolled-tab-example-tab-flights').should("have.class","active")
    });
});
 