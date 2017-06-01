import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyCPqS3xl_X3AIEuLlN8PqGONbqj0TVFZSk';

// create a new component that produces some html
const App = () => 
		<div>
			<SearchBar />
		</div>;

// take this component's generated html and display it on the page/dom
ReactDOM.render(<App />, document.querySelector('.container'));