async function getData() {
  const response = await fetch("./data/MOCK_DATA.json");
  const data = await response.json();
  const rand = Math.floor(Math.random() * data.length);
  const selectedData = data[rand];
  const InfoDiv = document.createElement("div");
  document.body.appendChild(InfoDiv);

  InfoDiv.innerHTML = `
    <p><b>Name:</b> ${selectedData.name}</p>
    <p><b>Age:</b> ${selectedData.age}</p>
    <p><b>Occupation:</b> ${selectedData.occupation}</p>
    <p><b>Gender:</b> ${selectedData.gender}</p>
    <p><b>Address:</b> ${selectedData.address}</p>
    <button>Statement</button> <button>Accuse</button>`;

  const pTags = document.getElementsByTagName("p");
  const buttonTags = document.getElementsByTagName("button");
  InfoDiv.classList.add("InfoDivClass");
  portraitDiv.id = "picDiv";
  pTags[0].id = "Name";
  pTags[1].id = "Age";
  pTags[2].id = "Occupation";
  pTags[3].id = "Gender";
  pTags[4].id = "Address";
  buttonTags[0].id = "Statement";
  buttonTags[1].id = "Accuse";

  const infoCardclass = document.getElementsByClassName("InfoDivClass");

  //Tag Styles
  const pTagsStyle = {
    margin: "0px",
  };
  for (let i = 0; i < pTags.length; i++) {
    for (let property in pTagsStyle) {
      pTags[i].style[property] = pTagsStyle[property];
    }
  }

  const buttonTagsStyle = {
    border: "1px solid black",
    borderRadius: "5px",
    backgroundColor: "white",
    padding: "10px",
    fontFamily: "Courier",
    fontWeight: "Bold",
  };
  for (let i = 0; i < buttonTags.length; i++) {
    for (let property in buttonTagsStyle) {
      buttonTags[i].style[property] = buttonTagsStyle[property];
    }
  }
  const InfoDivStyle = {
    fontFamily: "Courier",
    fontSize: ".8em",
    position: "absolute",
    padding: "15px",
    top: "25px",
    left: "70px",
    width: "370px",
    height: "170px",
    border: "1px solid black",
    borderRadius: "5px",
    textAlign: "righ",
    alignItems: "center",
    boxShadow: "5px 5px",
    backgroundColor: "#fff",
    display: "grid",
    gridTemplateColumns: "repeat(6,1fr)",
    gridTemplateRows: "repeat(4,1fr)",
    gridColumnGap: "10px",
    gridRowGap: "0px",
    zIndex: "0",
  };
  for (let i = 0; i < infoCardclass.length; i++) {
    for (let property in InfoDivStyle) {
      infoCardclass[i].style[property] = InfoDivStyle[property];
    }
  }
  document.getElementById("Name").style.gridArea = "1 / 3 / 2 / 6";
  document.getElementById("Age").style.gridArea = "1 / 6 / 2 / 7";
  document.getElementById("Occupation").style.gridArea = "2 / 3 / 3 / 6";
  document.getElementById("Gender").style.gridArea = " 2 / 6 / 3 / 7";
  document.getElementById("Address").style.gridArea = " 3 / 3 / 4 / 7";
  document.getElementById("Statement").style.gridArea = "4 / 3 / 5 / 5";
  document.getElementById("Accuse").style.gridArea = "4 / 5 / 5 / 7";
  document.getElementById("Statement").style.backgroundColor = "#fff";
  document.getElementById("Accuse").style.backgroundColor = "#000";
  document.getElementById("Accuse").style.color = "#fff";
}
getData();

//Element creation
const cardComponent = document.createElement("div");
const portraitDiv = document.createElement("div");

//Append Elements to document
document.body.appendChild(portraitDiv);

//Content

//HTML Tags

//Class Assignment
portraitDiv.classList.add("IdDivClass");

//ID Assignment

//Class Names and Styles
const idCardclass = document.getElementsByClassName("IdDivClass");

//ID Styles
const picDivStyle = {
  backgroundImage: "url('images/lady1.png')",
};
for (let property in picDivStyle) {
  portraitDiv.style[property] = picDivStyle[property];
}
//Class Styles
const IdDivStyle = {
  position: "absolute",
  top: "10px",
  width: "170px",
  height: "170px",
  border: "1px solid black",
  borderRadius: "5px",
  boxShadow: "5px 5px",
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  backgroundColor: "white",
  zIndex: "1",
};
for (let i = 0; i < idCardclass.length; i++) {
  for (let property in IdDivStyle) {
    idCardclass[i].style[property] = IdDivStyle[property];
  }
}
