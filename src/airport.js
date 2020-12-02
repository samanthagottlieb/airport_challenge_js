'use strict';

class Airport {
  constructor() {
    this.planes = []
  }

  land(plane) {
    this.planes.push(plane)    
  };

  getPlanes() {
    return this.planes
  }
};