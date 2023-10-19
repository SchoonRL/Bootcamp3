import {useRef} from 'react';

function AddBuilding({data, addNewBuilding}) {
    const newCode = useRef(null);
    const newName = useRef(null);
    const newAddress = useRef(null);
    const newLatitude = useRef(null);
    const newLongitude = useRef(null);

    function ClickHandler() {
        //const codeCheck = data.find((entry) => entry.code === newCode)
        let maxId = Math.max.apply(null, data.map(function (e) {return e.id}));
        //console.log(maxId);
        //console.log(newCode.current.value);
        addNewBuilding(maxId + 1, newCode.current.value, newName.current.value, newAddress.current.value, newLatitude.current.value, newLongitude.current.value);
    }

    return (
        <div>
            <p>
                <i>Add building details below</i>
            </p>
            <p>
                <b>Code </b>{"("}<b>Required</b>{")"}<b>:</b>
            </p>
            <input 
                type="text"
                placeholder="Code"
                ref={newCode}
            />
            <p>
                <b>Name </b>{"("}<b>Required</b>{")"}<b>:</b>
            </p>
            <input 
                type="text"
                placeholder="Name"
                ref={newName}
            />
            <p>
                <b>Address:</b>
            </p>
            <input 
                type="text"
                placeholder="Address"
                ref={newAddress}
            />
            <p>
                <b>Latitude:</b>
            </p>
            <input 
                type="text"
                placeholder="Latitude"
                ref={newLatitude}
            />
            <p>
                <b>Longitude:</b>
            </p>
            <input 
                type="text"
                placeholder="Longitude"
                ref={newLongitude}
            />
            <button onClick={ClickHandler}>
                Add Building
            </button>
        </div>

    );
}
export default AddBuilding;

/*I looked at the document for an issue I was having regarding my submit button for adding
 a building to the list and it recommends event.preventDefault() but I'm not sure how it is
  supposed to work, can someone explain how it's supposed to work? It doesnt seem to do anything
   the way I implemented it


Michael Pangas (Peer Mentor)
  5 days ago
Yeah I added that on there. Essentially what you do is instead of defining your handleSubmit
 function (or whatever you named it) with no parameters, you would add a parameter that represents the event.
  This is something automatically defined in javascript, so you could just add a parameter and it will know what it is.
Once you have a parameter passed in, say you call it event, you can use the preventDefault() function
 to tell the webpage not to reload when the form is submitted. Forms reload the page by default when submitted. 
 This will preserve your changes to state, which will always reset when the page is reloaded since we aren't 
 actually modifying data.js (edited) 


Michael Pangas (Peer Mentor)
  5 days ago
Also this wouldn't require you to change the onClick listener at all, events are automatically created
 and given to the function so all that needs to be changed is the actual function, not how it's called
This thread seems to have some good info if you want a better understanding of events (edited) */