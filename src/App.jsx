import React from 'react';
import Search from './components/Search';
import ViewBuilding from './components/ViewBuilding';
import BuildingList from './components/BuildingList';
import Credit from './components/Credit';

function App({ data }) {
  // TODO: Update the following two variables to use the useState() hook
  const filterText = '';
  const selectedBuilding = 0; 

  function filterUpdate(value) {
    // TODO: Set the state of the filter text to the value being passed in
  }

  function selectedUpdate(id) {
    // TODO: Set the state of the selected building to the id being passed in
  }

  return (
    <div className="bg">
      <div className="row">
        <h1>UF Directory App</h1>
      </div>
      {/* TODO: Edit Search component to include necessary props */}
      <Search />
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
                {/* TODO: Edit BuildingList component to include necessary props */}
                <BuildingList
                  data={data}
                />
              </tbody>
              </table>
            </div>
          </div>
          <div className="column2">
            <ViewBuilding />
          </div>
        </div>
        <Credit />
      </main>
    </div>
  );
}

export default App;
