import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectBook } from '../actions/index';
import { bindActionCreators } from 'redux';

class BookList extends Component {
	renderList() {
		return this.props.books.map((book) => {
			return (
        <li onClick={() => this.props.selectBook(book)} 
          key={book.title} className="list-group-item">
          {book.title}
        </li>
			)
		})
	}
	render() {
		return (
      <ul className="list-group col-sm-4">
        {this.renderList()}
      </ul>
		)
	}
}

function mapStateToProps(state) {
	// reveive app state and return props inside class
	return {
		books: state.books
	}

}

// Anythin returned from this function will end up as props on this container
function mapDispatchToProps(dispatch) {
	// whenever selectBook is called, the result should be passed to all reducers
	return bindActionCreators({ selectBook: selectBook}, dispatch);
}


export default connect(mapStateToProps, mapDispatchToProps)(BookList);