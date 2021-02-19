import React, { Component } from 'react';
import { connect } from 'react-redux';
import QuoteCard from '../components/QuoteCard';

class Quotes extends Component {

  render() {

    const quotes = this.props.quotes.quotes

    return (
      <div>
        <hr />
        <div className="row justify-content-center">
          <h2>Quotes</h2>
        </div>
        <hr />
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              {/* {quotes.map(quote => <QuoteCard key={quote.id} quote={quote.content}/>)} */}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

//add arguments to connect as needed

const mapStateToProps = state => {
  return({
    quotes: state.quotes
  })
}
export default connect(mapStateToProps)(Quotes);
