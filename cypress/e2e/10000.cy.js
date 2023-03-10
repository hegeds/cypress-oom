describe('Clicking the button 10000 times', () => {
  it(`Clicking the button 10000 times`, () => {
    cy.visit('/')

    for (let j = 0; j < 10000; j++) {
      cy.log(`${j}th click`)
      cy.contains('button', 'API').click()
      cy.wait(1000)
    }
  })
})
