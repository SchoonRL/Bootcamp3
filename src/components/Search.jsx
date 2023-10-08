function Search({ filterUpdate }) {
  // TODO: Update the input variable to use the useRef() hook
  const input = null;

  function handleChange() {
    // TODO: Update the value of the filter with the input from the textbox
    // Hint: You will need to use the "current" property of the input variable
  }

  return (
    // TODO: Add a ref attribute to the input tag
    // TODO: Add an onChange attribute to the input tag
    <form>
      <input 
        type="text"
        placeholder="Type to Filter"
      />
    </form>
  );
}
export default Search;
