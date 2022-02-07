import { connect } from 'react-redux';
import CardForm from './card_form';
import { createCard } from '../../actions/card_actions'

const mapStateToProps = (state) => {
  return {
    users: state.entities.users,
    type: 'create'
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    submit: (card)=>dispatch(createCard(card)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CardForm);