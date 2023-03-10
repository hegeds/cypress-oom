describe('Clicking the button 1000 times', () => {
  for (let i = 0; i < 2; i++) {
    it(`Clicking the button 1000 times in the ${i}th loop`, () => {
      cy.visit('/')

      for (let j = 0; j < 1000; j++) {
        cy.log(`${j}th click`)
        cy.contains('button', 'API').click()
        cy.wait(1000)
      }
    })
  }
})
