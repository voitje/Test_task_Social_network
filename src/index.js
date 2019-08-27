import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import store from "./store/index";
import "./index.css";
import * as serviceWorker from "./serviceWorker";
import "./App.css";
import UserBlock from "./components/userBlock/userBlock";
import UserPage from "./pages/userPage/userPage";
import PostBlock from "./components/postBlock/postBlock";
import { Provider } from "react-redux";

// 1) ПОНЯТЬ ГДЕ ПИСАТЬ АПИ ЭКШЕНЫ
// (ТЯНУТЬ В ACTIONS->REDUCER->STORE ИЗ СТОРА ПО ВСЕ СТРАНИЦА КИДАЕМ ДАННЫЕ) / DONE
// 2) РЕАЛИЗОВАТЬ СТРАНИЦУ ДЛЯ ПОЛЬЗОВАТЕЛЯ

const sum = (a) => {
  let s = a;

  let foo = (b) => {
    s += b;
    return foo;
  };

  foo.valueOf = () =>{
    return s;
  };

  return foo;
};

const palindrome = (str) => {
  return str == str.split('').reverse().join('');
}

const anagram = (s1, s2) => {

  const arrs1 = s1.toLowerCase().split('');
  const arrs2 = s2.toLowerCase().split('');
  if (arrs1.sort().join()=== arrs2.sort().join()) {
    return true;
  }
  else
  {
    return false;
  }
};

function App() {
  return (
    <div className="test">
      <Switch>
        <Route path="/user/:personId" component={UserPage} />
        {/*</Switch>*/}
        <Route path="/" component={UserBlock} />
        {console.log(anagram('finder', 'Friend'))}
      </Switch>
      {/*<PostBlock />*/}
    </div>
  );
}

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);

serviceWorker.unregister();
