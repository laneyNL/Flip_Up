import React from 'react';
import NavContainer from '../nav/nav_container'
import { Link } from 'react-router-dom';
import "./search_result_index.css"

export default class SearchResultIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      errors: '',
      filters: [],
    }
  }

  componentDidMount() {
    this.props.getDecks(this.props.match.params.filters).then()
  }

  componentDidUpdate(prevProps) {
    if (prevProps.match.params.filters !== this.props.match.params.filters) {
      this.props.getDecks(this.props.match.params.filters).then()
    }
  }

  renderDecks() {
    if (!Object.keys(this.props.decks).length) return null;

    return Object.values(this.props.decks).map( deck => {
      if (!deck.cards.length) return null;
      let cats = deck.category.map(cat => {
        return <div className='search-item-cat'>{cat}</div>
      })
      console.log(cats)
      return (
        <Link to={`/decks/${deck._id}`} className='search-index-item'>
          <div>
            <span className='search-item-name'>{deck.name}</span>
          </div>
          <div className='search-item-cats'>
            <div>{cats}</div>
          </div>
          <div>
            <span className='search-item-cards'>{deck.cards.length} cards</span>
          </div>
        </Link>
      )
    })
  }

  render() {
    if (!this.props.decks) return null;
    return (
      <div>
        <NavContainer />

        <div className='search-index-container'>
          <div className='search-index-list'>
            {this.renderDecks()}
          </div>
        </div>

        <div>{this.state.errors}</div>
      </div>
    );
  }
}
