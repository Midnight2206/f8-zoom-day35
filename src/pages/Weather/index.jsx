import { useState } from "react";
import classNames from "classnames/bind";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCloud,
  faCloudRain,
  faSun,
  faCloudBolt,
  faCloudSunRain,
  faCloudShowersHeavy,
  faCloudSun,
  faCloudMoon,
  faChevronDown,
} from "@fortawesome/free-solid-svg-icons";
import styles from "./weather.module.scss";
const cx = classNames.bind(styles);

const weatherDay = [
  { weather: "Nhiều mây", icon: faCloud, color: "#ccc", humidity: Math.floor(Math.random() * 50 + 50) },
  { weather: "Có mưa", icon: faCloudRain, color: "#666", humidity: Math.floor(Math.random() * 40 + 60) },
  { weather: "Nắng", icon: faSun, color: "#FFEA00", humidity: Math.floor(Math.random() * 60) },
  { weather: "Mưa giông", icon: faCloudBolt, color: "#333", humidity: Math.floor(Math.random() * 20 + 80) },
  { weather: "Trời nắng có lúc mưa", icon: faCloudSunRain, color: "#FFF176", humidity: Math.floor(Math.random() * 50 + 50) },
  { weather: "Mưa lớn", icon: faCloudShowersHeavy, color: "#222", humidity: Math.floor(Math.random() * 20 + 80) },
  { weather: "Ngày quang mây", icon: faCloudSun, color: "#FFFF00", humidity: Math.floor(Math.random() * 70) },
];

const weatherNight = [
  { weather: "Nhiều mây", icon: faCloud, color: "#ccc", humidity: Math.floor(Math.random() * 30 + 70) },
  { weather: "Có mưa", icon: faCloudRain, color: "#666", humidity: Math.floor(Math.random() * 30 + 70) },
  { weather: "Mưa giông", icon: faCloudBolt, color: "#333", humidity: Math.floor(Math.random() * 10 + 90) },
  { weather: "Mưa lớn", icon: faCloudShowersHeavy, color: "#222", humidity: Math.floor(Math.random() * 10 + 90) },
  { weather: "Đêm quang mây", icon: faCloudMoon, color: "#ccc", humidity: Math.floor(Math.random() * 70) },
];

function Weather() {
  const [dropShow, setDropShow] = useState(false);
  const [city, setCity] = useState(null);
  const [timeKey, setTimeKey] = useState(Date.now());

  const now = new Date(timeKey);
  const hour = now.getHours();
  const hourRender = String(hour).padStart(2, "0");
  const min = String(now.getMinutes()).padStart(2, "0");
  const isDay = hour > 6 && hour < 18;

  const weatherList = isDay ? weatherDay : weatherNight;
  const randomWeather = weatherList[Math.floor(Math.random() * weatherList.length)];

  const weatherData = [
    { city: "Hà Nội", temp: Math.floor(Math.random() * 36) + 5, ...randomWeather, windy: Math.floor(Math.random() * 70 + 5), gustyWind: Math.floor(Math.random() * 70 + 15), id: "hanoi" },
    { city: "TP.HCM", temp: Math.floor(Math.random() * 36) + 5, ...randomWeather, windy: Math.floor(Math.random() * 70 + 5), gustyWind: Math.floor(Math.random() * 70 + 15), id: "hcm" },
    { city: "Đà Nẵng", temp: Math.floor(Math.random() * 36) + 5, ...randomWeather, windy: Math.floor(Math.random() * 70 + 5), gustyWind: Math.floor(Math.random() * 70 + 15), id: "danang" },
  ];

  return (
    <>
      <div className={cx("weather-header")}>
        <h1>THỜI TIẾT HÔM NAY</h1>
        <div className={cx("drop-down")}>
          <div className={cx("drop-down-value")} onClick={() => setDropShow((prev) => !prev)}>
            <span>{city ? city.city : "--  Chọn thành phố  --"}</span>
            <FontAwesomeIcon icon={faChevronDown} />
          </div>
          <div className={cx("drop-down-menu", { show: dropShow })}>
            {weatherData.map((data) => (
              <div key={data.id} className={cx("drop-down-item")} onClick={() => { setCity(data); setDropShow(false); }}>
                {data.city}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className={cx("weather-body")}>
        <div
          className={cx("weather-card")}
          style={{
            backgroundColor: !city
              ? "#fff"
              : city.temp <= 8
              ? "#A8DADC"
              : city.temp <= 16
              ? "#B7E4C7"
              : city.temp <= 24
              ? "#FFF9A6"
              : city.temp <= 32
              ? "#FFD6A5"
              : "#e61818ff",
          }}
        >
          {!city ? (
            <span className={cx("info-error")}>Bạn chưa chọn thành phố</span>
          ) : (
            <>
              <div className={cx("card-header")}>
                <span className={cx("card-header-title")}>{city.city} bây giờ</span>
                <span>{hourRender}:{min}</span>
              </div>

              <div className={cx("card-body")}>
                <div className={cx("card-body-left")}>
                  <span className={cx("card-temp")}>{city.temp} °C</span>
                  <span style={{ color: city.color }} className={cx("card-weather-icon")}>
                    <FontAwesomeIcon icon={city.icon} />
                  </span>
                  <span className={cx("card-weather-status")}>{city.weather}</span>
                </div>
                <div className={cx("card-body-right")}>
                  <span className={cx("card-right-row")}>Gió: {city.windy}Km/h</span>
                  <span className={cx("card-right-row")}>Gió giật: {city.gustyWind}Km/h</span>
                  <span className={cx("card-right-row")}>Độ ẩm: {city.humidity}%</span>
                  <span className={cx("card-right-row")}>Chất lượng không khí: Tốt</span>
                </div>
              </div>

              <div className={cx("card-footer")}>
                <button
                  className={cx("reset-btn")}
                  onClick={() => {
                    setTimeKey(Date.now());
                    if (city) {
                      const now = new Date();
                      const hour = now.getHours();
                      const isDay = hour > 6 && hour < 18;
                      const weatherList = isDay ? weatherDay : weatherNight;
                      const randomWeather = weatherList[Math.floor(Math.random() * weatherList.length)];

                      setCity((prev) => ({ ...prev, ...randomWeather, temp: Math.floor(Math.random() * 36) + 5, windy: Math.floor(Math.random() * 70 + 5), gustyWind: Math.floor(Math.random() * 70 + 15) }));
                    }
                  }}
                >
                  Reset
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
}

export default Weather;
