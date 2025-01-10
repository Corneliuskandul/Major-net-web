
```
function showPhoneNumber() {
  document.getElementById("phone-number-popup").style.display = "block";
}

function makeCall() {
  window.location.href = "tel:0986103388";
}
```

*JavaScript (in script.js file):*
```
function sendEmail(subject) {
	var email = "corneliuskandulu@gmail.com";
	var body = "I am interested in discussing " + subject;
	var mailto = "mailto:" + email + "?subject=" + subject + "&body=" + body;
	window.location.href = mailto;
}
```
@Controller
public class ButtonController {
	@RequestMapping("/sendEmail")
	public String sendEmail(@RequestParam("subject") String subject, Model model) {
		String email = "corneliuskandulu@gmail.com";
		String body = "I am interested in discussing " + subject;
		String mailto = "mailto:" + email + "?subject=" + subject + "&body=" + body;
		model.addAttribute("mailto", mailto);
		return "email";
	}
}
```
const xmlhttp = new XMLHttpRequest();
xmlhttp.open("GET", "your_xml_file.xml", false);
xmlhttp.send();
const xmlDoc = xmlhttp.responseXML; 
const dataElements = xmlDoc.getElementsByTagName("data"); 
const dataContainer = document.getElementById("dataContainer");
for (let i = 0; i < dataElements.length; i++) {
  const dataItem = dataElements[i];
  const name = dataItem.getElementsByTagName("name")[0].textContent;
  const value = dataItem.getElementsByTagName("value")[0].textContent;

  const dataDiv = document.createElement("div");
  dataDiv.innerHTML = `<b>${name}:</b> ${value}`;
  dataContainer.appendChild(dataDiv);
}
// script.js
const xmlhttp = new XMLHttpRequest();
xmlhttp.open("GET", "data.xml", false);
xmlhttp.send();
const xmlDoc = xmlhttp.responseXML;

const dataElements = xmlDoc.getElementsByTagName("item");
const dataContainer = document.getElementById("dataContainer");

for (let i = 0; i < dataElements.length; i++) {
  const dataItem = dataElements[i];
  const name = dataItem.getElementsByTagName("name")[0].textContent;
  const value = dataItem.getElementsByTagName("value")[0].textContent;

  const dataDiv = document.createElement("div");
  dataDiv.innerHTML = `<b>${name}:</b> ${value}`;
  dataContainer.appendChild(dataDiv);
}




