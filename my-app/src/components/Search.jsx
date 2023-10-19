import {useRef, useEffect} from 'react';

function Search({ filterUpdate }) {
  // ==TODO: Update the input variable to use the useRef() hook
  const input = useRef(null);

  function handleChange(event) {
    // ==TODO: Update the value of the filter with the input from the textbox
    // Hint: You will need to use the "current" property of the input variable
        //input.current.value
    filterUpdate(input.current.value);
    //console.log(input.current);
  }

  useEffect(() => {
    input.current.focus();
  }, []);

//console.log(input);
  return (
    // ==TODO: Add a ref attribute to the input tag
    // ==TODO: Add an onChange attribute to the input tag
    <form>
      <input 
        ref={input}
        type="text"
        placeholder="Type to Filter"
        onChange={handleChange}
      />
      
    </form>
  );
}
export default Search;
