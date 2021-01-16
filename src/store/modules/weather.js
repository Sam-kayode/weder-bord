import axios from "axios";

const state = {
  weather: {},
};

const getters = {
  allWeather: (state) => state.weather,
};

const actions = {

  async fetchWeather({ commit }, loc) {

    const url_base = "https://api.openweathermap.org/data/2.5/";
    const api_key = "6a35c316d1ab8d31050687bceb043dcc";
     

    axios
      .get(
        `${url_base}onecall?lat=${loc[0]}&lon=${loc[1]}&exclude=minutely,hourly,alerts&units=metric&appid=${api_key}`
      )
      .then((response) => {
        if (loc[2]) {
          response.data.name = loc[2];
        }
     
        const milliseconds = response.data.current.dt * 1000;
        const dateObject = new Date(milliseconds);
        const day = dateObject.toLocaleString("en-US", { hour: "numeric" });
        const daytime= day.includes("PM")
         response.data.daytime= daytime;


         const newResponse= response.data
         /* to remive one of the forecast values */
             newResponse.daily.shift()

             /* ---------------------- */
        commit("setWeather", newResponse);
        console.log(newResponse);
        console.log(newResponse.current.weather[0].main)
      });
    /*  const result = await fetch(
      `${url_base}onecall?lat=${lat}&lon=${long}&exclude=minutely,hourly,alerts&units=metric&appid=${api_key}`
    );
     const response= await result.json */
  },
};

const mutations = {
  setWeather: (state, weather) => (state.weather = weather),
};

export default {
  state,
  getters,
  actions,
  mutations,
};
