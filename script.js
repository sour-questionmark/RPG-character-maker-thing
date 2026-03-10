// JavaScript Document
//onClick voor de dingste
const characters =[{

	id: 1,
	power: 50,
	name: "Eline",
	roles: "leerkracht",
	
	}, {
	
	id: 2,
	power: 1000000000000,
	name: "ferre",
	roles: "zwerver",
	}, {

	id: 3,
	power: 67,
	name: "vinn",
	roles: "turk",
	
	}, {

	id: 4,
	power: 4,
	name: "maurice",
	roles: "koffie",
	
	},


];

console.log(characters);
function displayCharactersList() {
	const container = document.getElementById("characters-list");
	const divInfoContainer = document.createElement("div");
	divInfoContainer.className = "info-container";
	for(var i=0; i<characters.length; i++){
		const pName = document.createElement("p");
		pName.className = "name";
		const spanNameLabel = document.createElement("span");
		spanNameLabel.textContent = "Name: ";
		const spanNameValue = document.createElement("span");
		spanNameValue.className = "name-value";
		spanNameValue.textContent = characters[i].name;
		pName.appendChild(spanNameLabel);
		pName.appendChild(spanNameValue);
		divInfoContainer.appendChild(pName);
		
		
		const pPower = document.createElement("p");
		pPower.className = "power";
		const spanPowerLabel = document.createElement("span");
		spanPowerLabel.textContent = "Power: ";
		const spanPowerValue = document.createElement("span");
		spanPowerValue.className = "power-value";
		spanPowerValue.textContent = characters[i].power;
		pPower.appendChild(spanPowerLabel);
		pPower.appendChild(spanPowerValue);
		divInfoContainer.appendChild(pPower);
		
		const pRole = document.createElement("p");
		pPower.className = "role";
		const spanRoleLabel = document.createElement("span");
		spanRoleLabel.textContent = "role: ";
		const spanRoleValue = document.createElement("span");
		spanRoleValue.className = "role-value";
		spanRoleValue.textContent = characters[i].role;
		pRole.appendChild(spanRoleLabel);
		pRole.appendChild(spanRoleValue);
		divInfoContainer.appendChild(pRole);
		
		const pButton = document.createElement("p");
		pButton.className = "button";
		const spanButtonLabel = document.createElement("span");
		spanButtonLabel.textContent = "X";
		spanButtonLabel.addEventListener("onClick",deleteCharacter(characters[i].id))
	
		pRole.appendChild(spanButtonLabel);
		divInfoContainer.appendChild(pButton);
		
		container.appendChild(divInfoContainer);
			

	}
document.addEventListener("DOMContentLoaded", function(){
	displayCharactersList();
})

	
function deleteCharacter(index){
	
}
	
	
	
