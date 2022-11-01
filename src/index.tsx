import ReactDOM from 'react-dom';
import {PageCatigories} from "./components/pages/PageCatigories";
import {PageCatigory} from "./components/pages/PageCatigory";
import {MainMenu} from "./components/pages/MainMenu";
import {Footer} from "./components/pages/Footer";
import './fonts/Rubik.css';


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
			<Footer />
		</Router>
	],
	document.querySelector('#root')
);      
    
