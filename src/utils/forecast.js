const request = require("request");

const forecast = (latitude, longitude, callback) => {
  const url = `https://api.darksky.net/forecast/b42d55fe9db1df94ef64991d882bf5a6/${latitude},${longitude}?units=si`;
  request({ url, json: true }, (error, { body }) => {
    if (error) {
      callback("Unable to connect to weather service");
    } else if (body.error) {
      callback("Unable to find location");
    } else {
      const { temperature, precipProbability } = body.currently;
      callback(
        undefined,
        `${body.daily.data[0].summary} It is currently ${temperature} degrees out. There is a ${precipProbability}% chance of rain`
      );
    }
  });
};

module.exports = forecast;
