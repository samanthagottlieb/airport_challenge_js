'use strict';

describe('Airport', () => {
  var airport;
  var plane;

  beforeEach(() => {
    airport = new Airport();
    plane = jasmine.createSpy('plane')
  })

  it('allows the user to create an Airport instance', () => {
    expect(airport).toBeInstanceOf(Airport);
  })

  it('has no planes by default', () => {
    expect(airport.getPlanes()).toEqual([])
  })

  describe('#land', () => {
    it('instructs the plane to land at an airport', () => {     
      expect(airport.land).toBeDefined()
    });

    it('lands a plane at an airport', () => {
      airport.land(plane)
      expect(airport.getPlanes()).toContain(plane)
    })
  });
});