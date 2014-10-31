/* global beforeEach, describe, it, expect, inject */

describe('Config', function ()
{
    var Config = require('../../app/load/Config'),
        mockConfigDir = './test/app/mockConfig',
        mockSol,
        configs;

    beforeEach(function() {
      // Reset
      mockSol = {
        paths: {
          config: mockConfigDir
        }
      };
      configs = Config.load(mockSol);
    });

    describe('load', function(){
        it('should be a function', function ()
        {
            expect(typeof Config.load).toBe('function');
        });

        it('should return a object of Config objects', function(){
            expect(typeof configs).toBe('object');
            for(var config in configs) {
                expect(typeof configs[config] === 'object').toBe(true);
            }
        });

        it('should return only read files that end with \'.js\'', function(){
            var configsLength = 0;

            // Count them up
            for(var config in configs) {
                if(typeof configs[config] === 'object') {
                    configsLength++;
                }
            }
            expect(configsLength).toBe(1);

        });
    });
});
