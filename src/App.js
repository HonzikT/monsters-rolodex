import React, { Component } from 'react';
import { connect } from 'react-redux'

import { CardList } from './components/card-list/card-list.component'
import { SearchBox } from './components/search-box/search-box.component'

import './App.css';

import { setSearchField, requestRobots } from './actions.js'

const mapStateToProps = state => {
  return {
    searchField: state.searchRobots.searchField,
    robots: state.requestRobots.robots,
    isPending: state.requestRobots.isPending,
    error: state.requestRobots.error
  }
}

const mapDispatchToProps = dispatch => {
  return {
    handleChange: (event) => dispatch(setSearchField(event.target.value)),
    handleRequestRobots: () => dispatch(requestRobots())
  }
}

class App extends Component {

  componentDidMount() {
    this.props.handleRequestRobots()
  }

  render(){
    const { searchField, handleChange, robots, isPending } = this.props
    const filteredMonsters = robots.filter(monster =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    )
    if (isPending) {
      return (
        <h1 style={{textAlign: "center"}}>Please wait</h1>
      )
    } else {
      return (
        <div className="App">
        <h1>Monsters Rolodex</h1>
          <SearchBox
            placeholder='search monsters'
            handleChange={handleChange}
          />
          <CardList monsters={filteredMonsters} />
        </div>
      )
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
