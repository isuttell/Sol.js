/* global beforeEach, describe, it, expect, inject */

describe('Models', function() {
  var Models = require('../../app/load/Models'),
    mockModelDir = './test/app/mockModels',
    mockSol,
    models;

  beforeEach(function() {
    // Reset
    mockSol = {
      paths: {
        models: mockModelDir
      }
    };
    models = new Models(mockSol);
  });

  it('should be a function and return and object', function() {
    expect(typeof Models).toBe('function');
    expect(typeof new Models(mockSol)).toBe('object');
  });

  it('should return a object of Wateline Collections', function() {
    expect(typeof models).toBe('object');
    for (var model in models) {
      expect(typeof models[model]).toBe('function');
    }
  });

  it('should return only read files that end with \'Model.js\'', function() {
    var modelsLength = 0;

    // Count them up
    for (var model in models) {
      if (models.hasOwnProperty(model)) {
        modelsLength++;
      }
    }
    expect(modelsLength).toBe(1);

  });
});
