function BuildingList( {data, filterText, selectedUpdate} ) {
  // TODO: Apply names filter on buildingList
  const buildingList = data.filter((directory) => directory.name.toLowerCase().includes(filterText.toLowerCase()) || directory.code.toLowerCase().includes(filterText.toLowerCase()))
    //sort code retrieved from https://stackoverflow.com/questions/47998188/how-to-sort-an-object-alphabetically-within-an-array-in-react-js
    .sort(function(a, b) {  
      if(a.code.toLowerCase() < b.code.toLowerCase()) return -1;
      if(a.code.toLowerCase() > b.code.toLowerCase()) return 1;
      return 0;
    })
    .map(directory => {
      return (
          // TODO: Create onClick listener to capture building id being selected
          <tr key={directory.id}>
            <td onClick={() => selectedUpdate(directory.id)}> {directory.code} </td>
            <td onClick={() => selectedUpdate(directory.id)}> {directory.name} </td>
          </tr>
      );
    });

  return <>{buildingList}</>;
}

export default BuildingList;
