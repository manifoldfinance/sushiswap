describe('Connect Wallet', () => {
  it('visit', function () {
    cy.visit('/')
    cy.contains('Welcome')
  })

  describe('Metamask', () => {
    it('Connect Wallet', () => {
      cy.get('div').contains('Connect Wallet').click()
      cy.get('div').contains('MetaMask').click()
      cy.acceptMetamaskAccess(false)
    })
  })
})
