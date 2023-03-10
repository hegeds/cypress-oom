describe('Clicking the button 100 times', () => {
  for (let i = 0; i < 3; i++) {
    it(`Clicking the button 100 times in the ${i}th loop`, () => {
      cy.visit('/')

      for (let j = 0; j < 100; j++) {
        cy.log(`${j}th click`)
        cy.contains('button', 'API').click()
        cy.wait(1000)
      }
    })
  }
})
