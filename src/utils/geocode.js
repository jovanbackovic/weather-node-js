const request = require("request");
const chalk = require("chalk");

const geocode = (address, callback) => {
  const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(
    address
  )}.json?access_token=pk.eyJ1IjoiYmFja285MCIsImEiOiJjanhjdnp1OGEwN2M2M29zOGI0bXo2YW05In0.EC6UddiyabuLf6Qj8fscpA&limit=1`;
  request({ url, json: true }, (error, { body }) => {
    if (error) {
      callback("Unable to connect to geolocation service");
    } else {
      const { features } = body;
      if (features.length === 0) {
        callback("Unable to find coordinates");
      } else {
        const { place_name, center } = features[0];
        const longitude = center[0];
        const latitude = center[1];
        callback(undefined, {
          latitude,
          longitude,
          location: place_name
        });
      }
    }
  });
};

module.exports = geocode;
