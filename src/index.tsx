import ReactDOM from "react-dom";
import { PageCatigories } from "./components/pages/PageCatigories";
import { PageCatigory } from "./components/pages/PageCatigory";
import { MainMenu } from "./components/common/MainMenu";
import { Footer } from "./components/common/Footer";
import { Global_Tab } from "./components/elements/Global/Global_Tab";
import "./assets/fonts/Rubik.css";
import "./index.css";

/* 
чтобы загрузить png, нужно создать кастомную папку с типами "types" и

создать там файл custom.d.ts:

declare module "*.png" {
  const value: any;
  export = value;
}

tsconfig.json:
"include": ["./src", "./types"],

*/

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

ReactDOM.render(
  [
    <Router>
      <MainMenu />
      <div className="page">
        <div className="page__wrapper">
          <Global_Tab tabVolume={116} />

          <div className="page__container">
            <Routes>
              <Route path="/PageCatigories">
                <Route index element={<PageCatigories />} />
              </Route>

              <Route path="/PageCatigory">
                <Route index element={<PageCatigory />} />
              </Route>

              <Route
                path="*"
                element={<Navigate to="/PageCatigories" replace />}
              />
            </Routes>
          </div>

          <div className="page__bottom" />
        </div>
      </div>
      <Footer />
    </Router>,
  ],
  document.querySelector("#root")
);
