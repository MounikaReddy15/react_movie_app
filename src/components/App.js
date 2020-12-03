import React from 'react';
import { data } from '../data';
import Navbar from './Navbar';
import MovieCard from './MovieCard';
import { addMovies, setShowFavourites } from '../actions';

class App extends React.Component {
  componentDidMount() {
    const {store} = this.props;
    // to listen to the state changes
    store.subscribe(() => {
      console.log('updated');
      // we shud not use this method
      this.forceUpdate();
    });
    // make api call
    // dispatch action
    // instead of hardcoding the data every time to perform this action
    // we can store it in a func and call whenever reqd
    store.dispatch(addMovies(data));
    //   {
    //   type: 'ADD_MOVIES',
    //   movies: data
    // });
    console.log('state', store.getState());
  }

  isMovieFavourite = (movie) => {
  // it will check in the state if this movie is in the state or not
  const { favourites } = this.props.store.getState();
  const index = favourites.indexOf(movie);
  if(index !== -1) {
    // found the movie
    return true;
  }
  return false;
  }

  onChangeTab = (val) => {
    this.props.store.dispatch(setShowFavourites(val));
  }

  render() {
    // {list: [], favourites: []}
  const { list, favourites, showFavourites } = this.props.store.getState();
  console.log('render', this.props.store.getState());
  const displayMovies = showFavourites ? favourites : list
  return (
    <div className="App">
      <Navbar />
      <div className= "main">
        <div className = "tabs">
          <div className={`tab ${showFavourites ? '' : 'active-tabs'}`} onClick = {() => this.onChangeTab(false)}> Movies </div>
          <div className={`tab ${showFavourites ? 'active-tabs' : ''}`} onClick = {() => this.onChangeTab(true)}> Favourites</div>
        </div>
        <div className="list">
          {/* index of particular movie in data array */}
        {displayMovies.map((movie, index) => {
          return <MovieCard 
          movie = {movie} 
          key={`movies-${index}`}
          dispatch = {this.props.store.dispatch}
          isFavourite = {this.isMovieFavourite(movie)}
          />
        })}
        </div>
        {displayMovies.length === 0 ? <div className = "no-movies">No movies to display!</div> : null}
      </div>
    </div>
  );
}
}

export default App;
