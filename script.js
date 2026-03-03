// JavaScript Document

const characters =[{

	id: 1,
	power: 60,
	name: "Eline",
	roles: "witch",
	
	}, {
	
	id: 2,
	power: 50,
	name: "Vesper",
	roles: "wizard",},


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
		container.appendChild(divInfoContainer);
		
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
		container.appendChild(divInfoContainer);
	}

document.addEventListener("DOMContentLoaded", function(){
	displayCharactersList();
})