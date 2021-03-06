import React from 'react';
import ReactDOM from 'react-dom';
import { afterChange } from 'react-recollect';
import './index.css';
import App from './App/App';
import registerServiceWorker from './registerServiceWorker';
import * as storage from './utils/storage';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();

afterChange(store => {
  storage.setItem(storage.KEYS.APP_DATA, {
    stories: store.stories,
    currentStoryId: store.currentStory ? store.currentStory.id : '',
  });
});
