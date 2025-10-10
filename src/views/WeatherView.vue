<template>
  <div class="container mt-5">
    <div class="row justify-content-center">
      <div class="col-md-6 col-lg-4"> 
        <div class="header">
          <h1>WEATHER APP</h1>
          <div class="search-bar">
            <input
              type="text"
              v-model="city"
              placeholder="Enter city name"
              class="search-input"
            />
            <button @click="searchByCity" class="search-button">Search</button>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="container mt-5">
    <div class="row justify-content-center">
      <div class="col-md-6 col-lg-4">
        <main>
          <div v-if="weatherData">
            <h2>
              {{ weatherData.name }}, {{ weatherData.sys.country }}
            </h2>
            <div>
              <img :src="iconUrl" alt="Weather Icon" />
              <p>{{ temperature }} °C</p>
            </div>
            <span>{{ weatherData.weather[0].description }}</span>
          </div>
        </main>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

const apikey = "c454187b8a34559c377d6e251a56b7ea";

export default {
  name: "WeatherCheck",
  data() {
    return {
      city: "",
      weatherData: null,
    };
  },
  computed: {
    temperature() {
      return this.weatherData
        ? Math.floor(this.weatherData.main.temp - 273)
        : null;
    },
    iconUrl() {
      return this.weatherData
        ? `https://openweathermap.org/img/w/${this.weatherData.weather[0].icon}.png`
        : null;
    },
  },
  mounted() {
    this.fetchCurrentLocationWeather();
  },
  methods: {
    // 搜索城市天气
    async searchByCity() {
      if (!this.city.trim()) {
        alert("Please enter a city name!");
        return;
      }

      const url = `https://api.openweathermap.org/data/2.5/weather?q=${this.city}&appid=${apikey}`;
      await this.fetchWeatherData(url);
    },

    // 自动定位天气
    async fetchCurrentLocationWeather() {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(async (position) => {
          const { latitude, longitude } = position.coords;
          const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apikey}`;
          await this.fetchWeatherData(url);
        });
      }
    },

    // 通用获取天气数据函数
    async fetchWeatherData(url) {
      try {
        const response = await axios.get(url);
        this.weatherData = response.data;
      } catch (error) {
        console.error("Error fetching weather data:", error);
        alert("City not found or network issue. Please try again.");
      }
    },
  },
};
</script>

<style scoped>
.search-bar {
  display: flex;
  gap: 8px;
}
.search-input {
  flex: 1;
  padding: 6px;
  border-radius: 5px;
  border: 1px solid #ccc;
}
.search-button {
  background-color: #007bff;
  color: white;
  border: none;
  padding: 6px 10px;
  border-radius: 5px;
}
</style>
