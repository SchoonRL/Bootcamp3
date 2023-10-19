function ViewBuilding({data, selectedBuilding}) {
  // TODO: Find the corresponding data based off the selected building's id and display its data
  //const [buildingsList, setbuildingsList] = useState({data});
  // console.log("ID: ", selectedBuilding);

  function Info({data, selectedBuilding}) {
    var hasClicked = false;   
    
    if(selectedBuilding != 0) {
      hasClicked = true;
    }
    //console.log("Selected: " + selectedBuilding);
    const building = data.find((entry) => entry.id === selectedBuilding)
    
    //console.log(building);
    if (hasClicked && building != null && building.address != null) {
      //console.log(building.address);
          return (
            <div>
              <p> <b>Code:</b> {building.code} </p>
              <p> <b>Name:</b> {building.name} </p>
              <p> <b>Address:</b> {building.address} </p>
              <p> <b>Coordinates:</b> {building.coordinates.latitude}, {building.coordinates.longitude} </p>
            </div>
          );
    } else if (hasClicked && building != null) {
      return (
        <div>
          <p> <b>Code:</b> {building.code} </p>
          <p> <b>Name:</b> {building.name} </p>
          <p> <b>Address:</b> {building.address} </p>
        </div>
      );
    }
    /*
    if (hasClicked && data[selectedBuilding - 1].address) {
      //console.log("IIIIIIIID: " + data[selectedBuilding - 1].id);
      return (
        <div>
          <p>{data[selectedBuilding - 1].id}</p>
          <p> <b>Code:</b> {data[selectedBuilding - 1].code} </p>
          <p> <b>Name:</b> {data[selectedBuilding - 1].name} </p>
          <p> <b>Address:</b> {data[selectedBuilding - 1].address} </p>
          <p> <b>Coordinates:</b> {data[selectedBuilding - 1].coordinates.latitude}, {data[selectedBuilding - 1].coordinates.longitude} </p>
        </div>
      );
    } else if (hasClicked) {
      return (
        <div>
          <p>{data[selectedBuilding - 1].id}</p>
          <p> <b>Code:</b> {data[selectedBuilding - 1].code} </p>
          <p> <b>Name:</b> {data[selectedBuilding - 1].name} </p>
          <p> <b>Address:</b> {data[selectedBuilding - 1].address} </p>
        </div>
      );
    }
    */
  }

 

  return (
    <div>
      <p>
        {' '}
        <i>Click on a name to view more information</i>
      </p>
      <Info 
        data={data}
        selectedBuilding={selectedBuilding}
      />
    </div>
  );
}

export default ViewBuilding;
