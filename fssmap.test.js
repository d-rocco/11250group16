const initMap = require('./fssmap')
const Map = require('./fssmap')
const getElementById = require('./fssmap')
//const getCurrentPosition = require('./fssmap')

test('properly initializes the map', () => {
    expect(initMap(new Map(getElementById('map'))).toBe({
        latitude: 28.0, longitude: -83.5
    }))
})
