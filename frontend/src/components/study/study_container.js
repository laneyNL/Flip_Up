import { connect } from 'react-redux';
import Study from './study';
import { getDeck } from './../../actions/deck_actions'
import { getCard, updateCard } from './../../actions/card_actions'



const mapStateToProps = (state) => {
  return {
    decks: state.entities.decks,
    cards: state.entities.cards
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getDeck: (id)=>dispatch(getDeck(id)),
    getCard: (id)=>dispatch(getCard(id)),
    updateCard: (card)=>dispatch(updateCard(card))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Study);