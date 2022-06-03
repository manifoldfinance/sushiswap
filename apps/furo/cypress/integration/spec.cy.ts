describe('Connect Wallet', () => {
  it('visit', function () {
    cy.visit('/')
    cy.wait(1000)
    cy.contains('Welcome')
  })

  // describe('Metamask', () => {
  //   it('Connect Wallet', () => {
  //     cy.get('div').contains('Connect Wallet').click()
  //     //cy.get('div').contains('MetaMask').click()
  //   })
  // })
})
