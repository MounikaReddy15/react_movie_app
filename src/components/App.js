import React from 'react';
import { connect } from "react-redux";
import { data } from '../data';
import Navbar from './Navbar';
import MovieCard from './MovieCard';
import { addMovies, setShowFavourites } from '../actions';
import { data as moviesList } from "../data";
// import { connect } from "../index";

class App extends React.Component {
  componentDidMount() {
    // const {store} = this.props;
    // to listen to the state changes
    // store.subscribe(() => {
    //   console.log('updated');
    //   // we shud not use this method
    //   this.forceUpdate();
    // });
    // make api call
    // dispatch action
    // instead of hardcoding the data every time to perform this action
    // we can store it in a func and call whenever reqd
    this.props.dispatch(addMovies(moviesList));
    //   {
    //   type: 'ADD_MOVIES',
    //   movies: data
    // });
    // console.log('state', store.getState());
  }

  isMovieFavourite = (movie) => {
  // it will check in the state if this movie is in the state or not
  const { movies } = this.props;
  const index = movies.favourites.indexOf(movie);
  if(index !== -1) {
    // found the movie
    return true;
  }
  return false;
  }

  onChangeTab = (val) => {
    this.props.dispatch(setShowFavourites(val));
  }

render() {
    // {list: [], favourites: []}
    // current state: {movies: {}, search: {}}
    const { movies, search } = this.props;
    const { list, favourites=[], showFavourites=[] } = movies;
    // console.log('render', this.props.store.getState());
    const displayMovies = showFavourites ? favourites : list

   return (
    <div className="App">
      <Navbar search={search}/>
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
          dispatch = {this.props.dispatch}
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

// its a wrapper around app compo 
// class AppWrapper extends React.Component {
//   render() {
//     return (
//       // consumer can only be used in render
//         <StoreContext.Consumer>
//           {/* consumer expects a callbacfunc */}
//           {(store)=> <App store= {store} />}
//         </StoreContext.Consumer>
//       );
//   }
// }


// what data we want from store
function mapStateToProps(state) {
  return {
    movies: state.movies,
    search: state.movies
  }
};

// whenever connect func is calling callback we'll get state
// this returns a new compo
const connectedAppComponent = connect(mapStateToProps)(App);

export default connectedAppComponent;
