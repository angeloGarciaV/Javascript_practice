//Element creation
const cardComponent = document.createElement("div");
const portraitDiv = document.createElement("div");
const InfoDiv = document.createElement("div");

//Append Elements to document
document.body.appendChild(InfoDiv);
document.body.appendChild(portraitDiv);

//Content
let InfoDivContent = {
  text: {
    Name: "Jane Doe",
    Age: "31",
    Address: "32 Anderson St.",
    Occupation: "Nurse",
  },
};
InfoDiv.innerHTML = `
                        <p><b>Name:</b> ${InfoDivContent.text.Name}</p>
                        <p><b>Age:</b> ${InfoDivContent.text.Age}</p>
                        <p><b>Occupation:</b> ${InfoDivContent.text.Occupation}</p>
                        <p><b>Address:</b> ${InfoDivContent.text.Address}</p>
                        <button>Statement</button> <button>Accuse</button>`;

//HTML Tags
const pTags = document.getElementsByTagName("p");
const buttonTags = document.getElementsByTagName("button");

//Class Assignment
portraitDiv.classList.add("IdDivClass");
InfoDiv.classList.add("InfoDivClass");

//ID Assignment
portraitDiv.id = "picDiv";
pTags[0].id = "Name";
pTags[1].id = "Age";
pTags[2].id = "Occupation";
pTags[3].id = "Address";
buttonTags[0].id = "Statement";
buttonTags[1].id = "Accuse";

//Class Names and Styles
const idCardclass = document.getElementsByClassName("IdDivClass");
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
};
for (let i = 0; i < buttonTags.length; i++) {
  for (let property in buttonTagsStyle) {
    buttonTags[i].style[property] = buttonTagsStyle[property];
  }
}
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
  width: "150px",
  height: "150px",
  border: "1px solid black",
  borderRadius: "5px",
  boxShadow: "5px 5px",
  backgroundSize: "fit",
  backgroundRepeat: "no-repeat",
};
for (let i = 0; i < idCardclass.length; i++) {
  for (let property in IdDivStyle) {
    idCardclass[i].style[property] = IdDivStyle[property];
  }
}
const InfoDivStyle = {
  position: "absolute",
  padding: "15px",
  top: "25px",
  left: "70px",
  width: "350px",
  height: "150px",
  border: "1px solid black",
  borderRadius: "5px",
  textAlign: "righ",
  alignItems: "center",
  boxShadow: "5px 5px",
  backgroundColor: "#fff",
  display: "grid",
  gridTemplateColumns: "repeat(5,1fr)",
  gridTemplateRows: "repeat(5,1fr)",
  gridColumnGap: "10px",
  gridRowGap: "0px",
  fontSize: "1.1em",
};
for (let i = 0; i < infoCardclass.length; i++) {
  for (let property in InfoDivStyle) {
    infoCardclass[i].style[property] = InfoDivStyle[property];
  }
}
document.getElementById("Name").style.gridArea = "1 / 3 / 2 / 5";
document.getElementById("Age").style.gridArea = "1 / 5 / 2 / 6";
document.getElementById("Occupation").style.gridArea = "2 / 3 / 3 / 5";
document.getElementById("Address").style.gridArea = "3 / 3 / 5 / 6";
document.getElementById("Statement").style.gridArea = "5 / 3 / 6 / 4";
document.getElementById("Accuse").style.gridArea = "5 / 4 / 6 / 5";
document.getElementById("Statement").style.backgroundColor = "#93e694";
document.getElementById("Accuse").style.backgroundColor = "#e69393";
