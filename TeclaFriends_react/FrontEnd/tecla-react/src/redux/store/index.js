import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import createSagaMiddleware from "redux-saga";
import {themeReducer} from "../reducers/theme";
import {loginReducer} from "../reducers/login";
import { courseReducer } from "../reducers/curso";
import {requestReducer} from "../reducers/request";
import {searchReducer} from "../reducers/search";
import{abilitiReducer} from '../reducers/ability'
import { helpReducer } from "../reducers/help";
import {showCourseReducer} from '../reducers/showCourses'
import {showAbilitieReducer} from '../reducers/showAbilities'
import {showNotificationsReducer} from '../reducers/notifications'
import {posibbleFriendReducer } from '../reducers/possibleFriend'
import {friendReducer} from '../reducers/showFriends'
import {discoverFriendReducer} from '../reducers/discoverFriends'
import {updateStatusReducer} from '../reducers/status'
import {feedbackReducer} from '../reducers/feedback'
import {feedbackGetReducer} from '../reducers/getFeedback'
import {userPublicationReducer} from '../reducers/userPublications'
import {allPublicationReducer} from '../reducers/allPublications'
import { rootSaga } from "../sagas/";



const sagaMiddleware = createSagaMiddleware();

const reducers = combineReducers({
  themeReducer, 
  loginReducer,
  courseReducer,
  requestReducer,
  searchReducer,
  abilitiReducer,
  helpReducer,
  showCourseReducer,
  showAbilitieReducer,
  showNotificationsReducer,
  posibbleFriendReducer,
  friendReducer,
  discoverFriendReducer,
  updateStatusReducer,
  feedbackReducer,
  feedbackGetReducer,
  userPublicationReducer,
  allPublicationReducer,
});

const logger = (store) => (next) => (action) => {
  console.group(action.type);
  console.info("dispatchig", action);
  let result = next(action);
  console.log("next state", store.getState());
  console.groupEnd();
  return result;
};

/*const reduxDevTools =
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
*/
const store = createStore(
  reducers,
  compose(
    applyMiddleware(sagaMiddleware),
    applyMiddleware(logger),
    //reduxDevTools
  )
);
sagaMiddleware.run(rootSaga);

export { store };