import React, { useEffect, useState } from 'react';
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonSpinner } from '@ionic/react';
import { getWeatherByCity } from '../services/WeatherService';

const WeatherPage: React.FC = () => {
  const [weatherData, setWeatherData] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchWeather() {
      try {
        const data = await getWeatherByCity('Manado');
        setWeatherData(data);
      } catch (error) {
        console.error('Error fetching weather data');
      } finally {
        setLoading(false);
      }
    }
    fetchWeather();
  }, []);

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Weather in Manado</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        {loading ? (
          <IonSpinner name="crescent" />
        ) : (
          weatherData && (
            <div style={{ textAlign: 'center', padding: '20px' }}>
              <h2>{weatherData.name}</h2>
              <h3>{weatherData.main.temp}°C</h3>
              <img src={`http://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`} alt="Weather Icon" />
              <p>{weatherData.weather[0].description}</p>
            </div>
          )
        )}
      </IonContent>
    </IonPage>
  );
};

export default WeatherPage;
