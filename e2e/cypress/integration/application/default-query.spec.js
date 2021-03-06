Cypress.config('baseUrl', 'http://localhost:3000')

describe('Saving default query to cookie when user does not login.', () => {

  it('can work correctly', () => {
    // arrange
    cy.visit('/statistics')

    cy.get('.v-input:contains("Set all usernames") input').should('have.value', '')
    cy.get('.worker-item:contains("CodeForces") input').should('have.value', '')

    cy.get('.v-input:contains("Set all usernames") input').type('main-name')
    // wait for other workers to update
    cy.get('.worker-item:contains("CodeForces") input').should('have.value', 'main-name')
    cy.get('.worker-item:contains("HDU") input').clear().type('user1')
    cy.get('.worker-item:contains("POJ") input').clear()

    // act
    cy.contains('save username').click()
    cy.contains('Success!')

    cy.reload()
    cy.get('.worker-item:contains("HDU") input').should('have.value', 'user1')
    cy.get('.worker-item:contains("POJ") input').should('have.value', '')
    cy.get('.v-input:contains("Set all usernames") input').should('have.value', 'main-name')
  })
})

describe('Saving usernames to server when user has logined.', () => {

  let username
  before(() => {
    cy.registerAndGetUsername().then(u => {
      username = u
    })
    cy.clearCookies()
  })

  it('can save usernames', () => {
    cy.login(username)

    cy.visit('/statistics')

    cy.get('.v-input:contains("Set all usernames") input').should('have.value', '')
    cy.get('.worker-item:contains("CodeForces") input').should('have.value', '')

    cy.get('.v-input:contains("Set all usernames") input').type('main-name')
    // wait for other worker to update
    cy.get('.worker-item:contains("CodeForces") input').should('have.value', 'main-name')
    cy.get('.worker-item:contains("HDU") input').clear().type('user1')
    cy.get('.worker-item:contains("POJ") input').clear()

    cy.contains('save username').click()
    cy.contains('Success!')
  })

  it('can get saved usernames from server', () => {
    cy.login(username)

    cy.visit('/statistics')
    cy.get('.worker-item:contains("HDU") input').should('have.value', 'user1')
    cy.get('.worker-item:contains("POJ") input').should('have.value', '')
    cy.get('.v-input:contains("Set all usernames") input').should('have.value', 'main-name')

    cy.get('.worker-item:contains("CodeForces") input').should('have.value', 'main-name')
  })
})