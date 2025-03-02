/**
 * Converts an address or array of addresses into latitude/longitude coordinates
 * using Google Maps Geocoding service
 * @param {string|string[]} address - Single address or array of addresses to geocode
 * @returns {string|string[]} Comma-separated lat/lng coordinates
 */

function GEOCODE_GOOGLE(address) {
    if (address.map) {
        return address.map(GEOCODE_GOOGLE)
    } else {
        var r = Maps.newGeocoder().geocode(address)
        for (var i = 0; i < r.results.length; i++) {
            var res = r.results
            return res.geometry.location.lat + ", " + res.geometry.location.lng
        }
    }
}
