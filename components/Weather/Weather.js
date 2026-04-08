import { useEffect, useState } from "react";
import styles from "./Weather.module.css";
import { Sun, Cloud, CloudRain, CloudSnow } from "lucide-react";

export default function Weather() {
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    fetch(
      "https://api.open-meteo.com/v1/forecast?latitude=53.48&longitude=9.50&current_weather=true"
    )
      .then((res) => res.json())
      .then((data) => {setWeather(data.current_weather);
      });
  }, []);

  const getWeather = (code) => {
    if (code === 0) return { label: "sonnig", icon: Sun };
    if (code <= 3) return { label: "leicht bewölkt", icon: Cloud };
    if (code <= 48) return { label: "nebelig", icon: Cloud };
    if (code <= 67) return { label: "regnerisch", icon: CloudRain };
    if (code <= 77) return { label: "Schnee", icon: CloudSnow };

    return { label: "Bewölkt", icon: Cloud };
  };

  const today = new Date().toLocaleDateString("de-DE", {
    weekday: "long",
    day: "numeric",
    month: "long",
  });

  const weatherData = weather ? getWeather(weather.weathercode) : null;

  return (
    <div className={styles.weather}>
      <div className={styles.date}>{today}</div>

      {weather && weatherData ? (
        <div className={styles.column}>
          {/* ✅ ICON direkt rendern */}
          <weatherData.icon className={styles.icon} />

          <div className={styles.temp}>
            {weatherData.label} bei {Math.round(weather.temperature)}°
          </div>
        </div>
      ) : (
        <div className={styles.loading}>Lädt...</div>
      )}
    </div>
  );
}