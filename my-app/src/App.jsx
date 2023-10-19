import React, { useState } from 'react';
import Search from './components/Search';
import ViewBuilding from './components/ViewBuilding';
import BuildingList from './components/BuildingList';
import RemoveBuilding from './components/RemoveBuilding';
import AddBuilding from './components/AddBuilding';
import Credit from './components/Credit';

/*==
  1. Pass a function prop into Search.jsx that will modify a variable you have in App.jsx
  2. Type text into search bar which is captured in Search.jsx and send that text back up to App.jsx using that function prop
  3. That same variable in App.jsx should be passed into your BuildingList.jsx as a prop
  4. Use this value in BuildingList.jsx to filter the list displayed*/
 
// ==Pass destructured props as: {data, prop, function} and make sure to explicitly pass props/functions in main: i.e. -> data={data}

function App({ data }) {
  // ==TODO: Update the following two variables to use the useState() hook
  const [filterText, setFilterText] = useState('');
  const [selectedBuilding, setSelectedBuilding] = useState(0); 
  const [buildingsList, setbuildingsList] = useState(data);
  //console.log("Hello");
  function filterUpdate(value) {
    // ==TODO: Set the state of the filter text to the value being passed in
    //console.log("value: ", value);
    setFilterText(value);
    //console.log("Filtertext: ", filterText);
  }

  function selectedUpdate(id) {
    // ==TODO: Set the state of the selected building to the id being passed in
    //console.log("id: ", id);
    setSelectedBuilding(id);
    //console.log(selectedBuilding);
  }

  function removefromBuildings(building_List, selectedBuilding) {
    console.log("Removed CLICKED " + selectedBuilding);
    RemoveBuilding({building_List, selectedBuilding, buildingsListUpdate})
  }

  function addNewBuilding(newId, newcode, newname, newaddress, newlatitude, newlongitude) {
    /*console.log("Id: " + newId);
    console.log("Code: " + newcode);
    console.log("Name: " + newname);
    console.log("Address: " + newaddress);
    console.log("Latitude: " + newlatitude);
    console.log("Longitude: " + newlongitude);
*/
    setbuildingsList([...buildingsList, 
      {id: newId, code: newcode, name: newname, coordinates: {latitude: newlatitude, longitude: newlongitude}, address: newaddress}]);
  }

  function buildingsListUpdate(newList) {
    //console.log("We are here now");
    setbuildingsList(newList);
    //buildingsList.forEach(function(entry) {console.log(entry);});
    //data.forEach(function(entry) {console.log(entry);});
  }

  return (
    <div className="bg">
      <div className="row">
        <h1>UF Directory App</h1>
      </div>
      {/* ==TODO: Edit Search component to include necessary props */}
      <Search 
        filterUpdate={filterUpdate}
      />
      <main>
        <div className="row">
          <div className="column1">
            <div className="tableWrapper">
              <table className="table table-striped table-hover">
              <thead>
                <tr>
                  <td>
                    <b>Code Building</b>
                  </td>
                </tr>
              </thead>
              <tbody>
                {/* ==TODO: Edit BuildingList component to include necessary props */}
                <BuildingList
                  data={buildingsList}
                  filterText={filterText}
                  selectedUpdate={selectedUpdate}
                />
              </tbody>
              </table>
            </div>
          </div>
          <div className="column2">
            {/* TODO: Pass in building id */}
            <ViewBuilding 
              data={buildingsList}
              selectedBuilding={selectedBuilding}
            />
            <button onClick={() => removefromBuildings(buildingsList, selectedBuilding)}>
              Remove Building
            </button>
          </div>
          <div className='column1'>
            <p></p>
          </div>
          <div className='column3'>
            <AddBuilding 
              data={buildingsList}
              addNewBuilding={addNewBuilding}
            />
          </div>
        </div>
        <Credit />
      </main>
    </div>
  );
}

export default App;
