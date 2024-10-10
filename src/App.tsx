import { Redirect, Route } from 'react-router-dom';
import { IonApp, IonRouterOutlet, IonTabBar, IonTabButton, IonIcon, IonLabel, IonTabs } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { cloud, search } from 'ionicons/icons';
import WeatherPage from './pages/WeatherPage';
import SearchWeatherPage from './pages/SearchWeatherPage';

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonTabs>
        <IonRouterOutlet>
          <Route path="/weather" component={WeatherPage} exact />
          <Route path="/search" component={SearchWeatherPage} exact />
          <Route exact path="/" render={() => <Redirect to="/weather" />} />
        </IonRouterOutlet>
        <IonTabBar slot="bottom">
          <IonTabButton tab="weather" href="/weather">
            <IonIcon icon={cloud} />
            <IonLabel>Weather</IonLabel>
          </IonTabButton>
          <IonTabButton tab="search" href="/search">
            <IonIcon icon={search} />
            <IonLabel>Search</IonLabel>
          </IonTabButton>
        </IonTabBar>
      </IonTabs>
    </IonReactRouter>
  </IonApp>
);

export default App;
