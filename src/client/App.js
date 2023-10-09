import React from 'react';

import { Switch, Route } from 'react-router-dom';

import './App.scss';

import SearchBar from './components/search-bar/search-bar.component';
import ProductDetailView from './views/product-detail/product-detail.component';
import SearchView from './views/search/search.component';

const App = () => (
	<div>
		<SearchBar />
		<div className='container'>
			<Switch>
				<Route exact path='/items' component={SearchView} />
				<Route exact path='/items/:id' component={ProductDetailView} />
			</Switch>
		</div>
	</div>
);

export default App;
