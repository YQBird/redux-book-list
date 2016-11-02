export function selectBook(book){
	// selectBook is an Action creator, needs to return an action object
	return{
    type: 'BOOK_SELECTED',
    payload: book
	}
}