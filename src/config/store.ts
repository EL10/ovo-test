import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import rootReducer from "../domains/app/root-reducer";

export default function configureStore(initialState?: object) {
  const store = createStore(rootReducer, initialState, applyMiddleware(thunk));

  if (process.env.NODE_ENV !== "production") {
    if (module.hot) {
      module.hot.accept("../domains/app/root-reducer", () => {
        store.replaceReducer(rootReducer);
      });
    }
  }

  return store;
}
