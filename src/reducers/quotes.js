export default (state = [], action) => {
  switch (action.type) {
    case 'ADD_QUOTE':

      return (
        {
          quotes: [action.quote]
          // content: state.concat(action.quote.content)
      
        }
      )
    default:
      return state
  }
  // return state;
}
