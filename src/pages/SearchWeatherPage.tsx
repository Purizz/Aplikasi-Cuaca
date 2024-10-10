import React, { useState } from 'react';
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonInput, IonButton, IonSpinner } from '@ionic/react';
import { getWeatherByCity } from '../services/WeatherService';

const SearchWeatherPage: React.FC = () => {
  const [city, setCity] = useState('');
  const [weatherData, setWeatherData] = useState<any>(null);
  const [loading, setLoading] = useState(false);

  const handleSearch = async () => {
    setLoading(true);
    try {
      const data = await getWeatherByCity(city);
      setWeatherData(data);
    } catch (error) {
      console.error('Error fetching weather data');
    } finally {
      setLoading(false);
    }
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Search Weather</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <div style={{ textAlign: 'center', padding: '20px' }}>
          <IonInput
            value={city}
            placeholder="Enter city"
            onIonChange={(e) => setCity(e.detail.value!)}
          />
          <IonButton onClick={handleSearch}>Search</IonButton>
        </div>

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

export default SearchWeatherPage;
