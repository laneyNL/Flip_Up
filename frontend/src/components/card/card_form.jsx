import React from 'react';
import { withRouter } from 'react-router-dom';

class CardForm extends React.Component {
  constructor(props) {
    super(props);

    if (this.props.type === 'create') {
      this.state = {
        front: '',
        back: ''
      };
    } else {
      this.state = {
        front: this.props.card.front,
        back: this.props.card.back
      };
    }
  }

  update(field) {
    return e => this.setState({ [field]: e.currentTarget.value });
  }

  cardSubmit(e) {
    e.preventDefault();
    if (this.state.type === 'create') {
      //reset form so they can create another card
      this.props.submit(this.state).then(()=>{
        this.setState({
          front: '',
          back: ''
        })
      })
    } else {
      //route to the deck page if they just update a card
      this.props.submit(this.state).then((deck)=>{
        this.props.history.push(`/decks`)
      })
    }
  }


  render() {
    return (
      <div>
        <form onSubmit={this.cardSubmit}>
          <div>
            <br />
            <input type="text"
              value={this.state.front}
              onChange={this.update('front')}
              placeholder="front"
            />
            <br />
            <input type="text"
              value={this.state.back}
              onChange={this.update('back')}
              placeholder="back"
            />
            <br />
            <input type="submit" value="Submit" />
          </div>
        </form>
      </div>
    );
  }
}

export default withRouter(CardForm);