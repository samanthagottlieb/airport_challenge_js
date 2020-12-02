'use strict'

describe('Airport', () => {
  
  var airport;

  beforeEach(() => {
    airport = new Airport();
  })

  it('allows the user to create an Airport instance', () => {
    expect(airport).toBeInstanceOf(Airport);
  })
});