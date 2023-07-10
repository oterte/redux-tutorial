import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { createStore } from "redux";
import counter from "./reducers";
import rootReducer from "./reducers";
import { Provider } from "react-redux";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

// 작성한 리듀서를 넣는다
const store = createStore(rootReducer);


console.log(store.getState());
// getState()를 통해 현재 state를 가져올 수 있다.

// 그리고 disptach()를 이용해 action을 넣어서 disptach 하여 상태를 업데이트 할 수 있다.
const render = () =>
  root.render(
    <React.StrictMode>
      <Provider store={store}>
        <App
          value={store.getState()}
          onIncrement={() => store.dispatch({ type: "INCREMENT" })}
          onDecrement={() => store.dispatch({ type: "DECREMENT" })}
        />
      </Provider>
    </React.StrictMode>
  );
render();

store.subscribe(render);

reportWebVitals();
