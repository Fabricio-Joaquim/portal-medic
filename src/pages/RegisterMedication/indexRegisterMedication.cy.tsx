import { BrowserRouter } from 'react-router-dom'
import RegisterMedication from './'
import React from 'react'
describe('<RegisterMedication />', () => {
  it('renders', () => {
    cy.mount(
      <BrowserRouter>
        <RegisterMedication />
      </BrowserRouter>
    )
  })
})