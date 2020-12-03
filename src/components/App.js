import React from 'react';
import { data } from '../data';
import Navbar from './Navbar';
import MovieCard from './MovieCard';
import { addMovies } from '../actions';

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
  render() {
  const movies = this.props.store.getState();
  console.log('render');
  return (
    <div className="App">
      <Navbar />
      <div className= "main">
        <div className = "tabs">
          <div className="tab">Movies</div>
          <div className="tab"> Favourites</div>
        </div>
        <div className="list">
          {/* index of particular movie in data array */}
        {movies.map((movie, index) => {
          return <MovieCard movie = {movie} key={`movies-${index}`}/>
        })}
        </div>
      </div>
    </div>
  );
}
}

export default App;
