function RemoveBuilding({building_List, selectedBuilding, buildingsListUpdate}) {
const newBuildingList = building_List.filter((i) => i.id !== selectedBuilding);
//const RemoveBuilding = (building_List) => {buildingsListUpdate(building_List.filter((i) => i !== selectedBuilding))}; 
//console.log("Writing from RemoveBuilding");
//newBuildingList.forEach(function(entry) {console.log(entry.id);});
buildingsListUpdate(newBuildingList);
//let i = "";

/*for (i in building_List) {
    console.log(JSON.stringify(i.code));
}*/
return (null)
}
export default RemoveBuilding;