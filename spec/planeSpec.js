'use strict';

describe('Plane', () => {
  var plane;

  beforeEach(() => {
    plane = new Plane();
  });

  it('allows the user to create a Plane instance', () => {
    expect(plane).toBeInstanceOf(Plane);
  });
});