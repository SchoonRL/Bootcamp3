function BuildingList( {data} ) {
  // TODO: Apply names filter on buildingList
  const buildingList = data
    .map(directory => {
      return (
          // TODO: Create onClick listener to capture building id being selected
          <tr key={directory.id}>
            <td>{directory.code} </td>
            <td> {directory.name} </td>
          </tr>
      );
    });

  return <>{buildingList}</>;
}

export default BuildingList;
