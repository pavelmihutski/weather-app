import { combineReducers } from 'redux';

import ui from './ui';
import weather from './weather';

export default combineReducers({
  ui,
  weather
});
