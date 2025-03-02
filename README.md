# Geocode-Google-Sheets

A Google Apps Script function to geocode addresses in Google Sheets using the Google Maps API.

## Files

- **`Code.gs`**: Contains the `GEOCODE_GOOGLE` function.

## Usage

1. Copy the function in `Code.gs` into your Google Apps Script project.
2. Call `GEOCODE_GOOGLE(address)` from your script or a custom menu.
   - Pass a single address (string) to receive a latitude/longitude string.
   - Pass an array of addresses (string[]) to receive an array of latitude/longitude strings.

## Example

```js
var result = GEOCODE_GOOGLE("1600 Amphitheatre Parkway, Mountain View, CA");
Logger.log(result); // e.g. "37.422, -122.084"
```
