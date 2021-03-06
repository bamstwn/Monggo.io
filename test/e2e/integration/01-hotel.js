describe('Hotel', () => {
  it('Visit admin page', () => {
    cy.visit('/admin')
    cy.contains('[data-cy="app-title"]', 'Monggo.IO')
    cy.screenshot()
  })

  it('Visit hotel page', () => {
    cy.get('[data-cy="hotel"]').click()
    cy.contains('[data-cy="page-title"]', 'Hotel')
    cy.screenshot()
    cy.wait(5000)
  })

  it('Add new hotel', () => {
    cy.get('[data-cy="trigger-add"]').click()
    cy.get('input[name="name"]')
      .clear()
      .type('Monggo Hotel')
    cy.get('input[name="callingCode"]')
      .clear()
      .type('Indonesia{enter}')
    cy.get('input[name="phone"]')
      .clear()
      .type('085123456789')
    cy.get('input[name="wifiName"]')
      .clear()
      .type('Wifi')
    cy.get('input[name="wifiPass"]')
      .clear()
      .type('Wifi')
    cy.get('textarea[name="description"]')
      .clear()
      .type('Monggo Hotel is really awesome place to stay!')
    cy.uploadFile('input[name="images"]', 'img/hotel-mumbai.jpg', 'jpg')
    cy.get('[data-cy="dialog-action"]').click()
    cy.wait(10000)
    cy.screenshot()
  })

  it('Edit existing hotel', () => {
    cy.get('[data-cy="trigger-edit-monggo-hotel"]').click()
    cy.wait(10000)
    cy.get('input[name="name"]')
      .clear()
      .type('Monggo Hotel Awesome')
    cy.get('input[name="callingCode"]').type(
      '{del}{del}United States of America{enter}'
    )
    cy.get('input[name="phone"]')
      .clear()
      .type('085987654321')
    cy.get('input[name="wifiName"]')
      .clear()
      .type('Ifiw')
    cy.get('input[name="wifiPass"]')
      .clear()
      .type('Ifiw')
    cy.get('textarea[name="description"]')
      .clear()
      .type('Monggo Hotel Awesome is do really awesome place to stay!')
    cy.uploadFile('input[name="images"]', 'img/hotel-mumbai-2.jpg', 'jpg')
    cy.get('[data-cy="dialog-action"]').click()
    cy.wait(10000)
    cy.screenshot()
  })

  it('Delete existing hotel', () => {
    cy.get('[data-cy="trigger-delete-monggo-hotel-awesome"]').click()
    cy.get('[data-cy="delete-action"]').click()
    cy.screenshot()
  })
})
