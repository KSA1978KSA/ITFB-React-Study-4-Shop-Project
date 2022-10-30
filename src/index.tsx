import ReactDOM from 'react-dom';
import {PageCatigories} from "./components/pages/PageCatigories";
import {PageCatigory} from "./components/pages/PageCatigory";
import {MainMenu} from "./components/elements/MainMenu";
import {Footer} from "./components/elements/Footer";
import './fonts/Rubik.css';

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
    
