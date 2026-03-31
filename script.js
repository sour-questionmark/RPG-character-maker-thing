// JavaScript Document
//onClick voor de dingste
let characters =[{

	id: 1,
	power: 50,
	name: "soraya",
	role: "yuri enjoyer",
	
	}, {
	
	id: 2,
	power: 1000000000000,
	name: "ferre",
	role: "zwerver",
	}, {

	id: 3,
	power: 67,
	name: "vinn",
	role: "turk",
	
	}, {

	id: 4,
	power: 4,
	name: "maurice",
	role: "koffie",
	
	}


];

console.log(characters);
function displayCharactersList() {
	const container = document.getElementById("characters-container");
	container.innerHTML = "";
	
	for(var i=0; i<characters.length; i++){
		createCharacterCard(characters[i]);

	}
}

function createCharacterCard(character) {
	const container = document.getElementById("characters-container");
	
	const characterContainer = document.createElement("div");
	characterContainer.classList = "col-6 col-m-12";


	const divInfoContainer = document.createElement("div");
	divInfoContainer.className = "info-container";
	const pName = document.createElement("p");
	pName.className = "name";
	const spanNameLabel = document.createElement("span");
	spanNameLabel.textContent = "Name: ";
	const spanNameValue = document.createElement("span");
	spanNameValue.className = "name-value";
	spanNameValue.textContent = character.name;
	pName.appendChild(spanNameLabel);
	pName.appendChild(spanNameValue);
	divInfoContainer.appendChild(pName);


	const pPower = document.createElement("p");
	pPower.className = "power";
	const spanPowerLabel = document.createElement("span");
	spanPowerLabel.textContent = "Power: ";
	const spanPowerValue = document.createElement("span");
	spanPowerValue.className = "power-value";
	spanPowerValue.textContent = character.power;
	pPower.appendChild(spanPowerLabel);
	pPower.appendChild(spanPowerValue);
	divInfoContainer.appendChild(pPower);

	const pRole = document.createElement("p");
	pRole.className = "role";
	const spanRoleLabel = document.createElement("span");
	spanRoleLabel.textContent = "role: ";
	const spanRoleValue = document.createElement("span");
	spanRoleValue.className = "role-value";
	spanRoleValue.textContent = character.role;
	pRole.appendChild(spanRoleLabel);
	pRole.appendChild(spanRoleValue);
	divInfoContainer.appendChild(pRole);

	const pButton = document.createElement("p");
	pButton.className = "button";
	const spanButtonLabel = document.createElement("span");
	spanButtonLabel.textContent = "X";
	spanButtonLabel.addEventListener("click", () => deleteCharacter(character));

	pButton.appendChild(spanButtonLabel);
	divInfoContainer.appendChild(pButton);

	characterContainer.appendChild(divInfoContainer);

	const imgContainer = document.createElement("div");
	imgContainer.className="img-container";

	characterContainer.appendChild(imgContainer);

	container.appendChild(characterContainer);
	
}
document.addEventListener("DOMContentLoaded", function(){
	//displayCharactersList();
});


function deleteCharacter(character){
	characters = characters.filter(item => item !== character);
	displayCharactersList();
}
	

function showAddCharacterContainer() {
	document.getElementById("add-character-container").style.display = "block";
	const fileInput = document.getElementById("add-character-picture-input");
	fileInput.addEventListener("change", previewFile);
}
function previewFile() {
	const file = document.getElementById("add-character-picture-input").files[0];
	const reader = new FileReader();

	reader.addEventListener("load", () => {
		// convert image file to base64 string
		document.getElementById("add-character-picture").src = reader.result;
	});
	if (file) {
		reader.readAsDataURL(file);
	}
}


function saveCharacter(){
	const name = document.getElementById("add-character-name").value;
	const power = document.getElementById("add-character-power").value;
	const role = document.getElementById("add-character-role").value;
	const picture = document.getElementById("add-character-picture").src;
	
	characters.push({
		name: name,
		role: "",
		power: "",
		picture: picture
	})
}
