
function loadjson(file){
	return new Promise((resolve,reject)=>{
		return fetch(file).then(response=>{
			if(response.ok){
				resolve(response.json());

			}
			else{
				reject(new Error('error'));
			}
		})
	})
} 

var newfile = loadjson("data.json");
newfile.then(data=>{
	console.log(data);
	basic(data.details);
	careerinfo(data.careerobjective);
	education(data.educationalqualification);
	skills(data.techinicalskills);
	activs(data.cocurricularactivities);
	cert(data.certification);
	strengths(data.personalitytraits)
	
	


})

var child1 = document.querySelector(".child1");
function basic(det){

	var img = document.createElement("img");
	img.src=det.image;
	child1.appendChild(img);

	var name = document.createElement("h3");
	name.textContent = det.myname;
	child1.appendChild(name);

    var Email = document.createElement("h3");
	Email.textContent="Email :";
	child1.appendChild(Email);
	var Email1= document.createElement("a");
	Email1.href="mailto:varshaakv22@gmail.com";
	Email1.textContent=det.Email;
	child1.appendChild(Email1);

    var Phone = document.createElement("h3");
	Phone.textContent="Phone :";
	child1.appendChild(Phone);
	var Phone1 = document.createElement("number");
	Phone1.textContent = det.Phone;
	child1.appendChild(Phone1);

	var Address = document.createElement("h3");
	Address.textContent="Address :";
	child1.appendChild(Address);
	var Address1 = document.createElement("text");
	Address1.textContent = det.Address;
	child1.appendChild(Address1);

}




var child2 = document.querySelector(".child2");

function careerinfo(info1){
	var heading1 = document.createElement("h2");
	heading1.textContent="Career Objective:";
	child2.appendChild(heading1);
	for (i in info1.details){
		var skillui = document.createElement("ul");
		var skillli = document.createElement("li");
		skillli.textContent = info1.details[i];
		skillui.appendChild(skillli);
		child2.appendChild(skillui);
		console.log([i]);
		console.log(info1.details[i])
    }
}

function education(edu){
	var heading3 = document.createElement("h2");
	heading3.textContent="Educational Qalification:";
	child2.appendChild(heading3);
	var table1 = document.createElement("table");
	table1.border="1";
	child2.appendChild(table1);

	tabledata="";
	for(i=0;i<edu.length;i++){
		tabledata+="<tr><td>"+edu[i].course+"</td><td>"+edu[i].institute+"</td><td>"+edu[i].passoutyear+"</td><td>"+edu[i].percentage+"</td></tr>";
	}
	table1.innerHTML=tabledata;
}

function skills(skillinfo) {
	var heading4 = document.createElement("h2");
	heading4.textContent="Techinical Skills:";
	child2.appendChild(heading4);
	for(i=0;i<skillinfo.length;i++){
		var title=document.createElement("h4");
		title.textContent=skillinfo[i].title;
		child2.appendChild(title);
		var skillul=document.createElement("ul");
		var skillli=document.createElement("li");
		skillli.textContent=skillinfo[i].info;
		skillul.appendChild(skillli);
		child2.appendChild(skillul);

	}
}


function activs(extra){
	var heading5 = document.createElement("h2");
	heading5.textContent = "Co-Curricular Activities:";
	child2.appendChild(heading5);
	for (i in extra.details){
		var skillui = document.createElement("ul");
		var skillli = document.createElement("li");
		skillli.textContent = extra.details[i];
		skillui.appendChild(skillli);
		child2.appendChild(skillui);
		console.log([i]);
		console.log(extra.details[i])

	}
	
}


function cert(othskills){
	var heading5 = document.createElement("h2");
	heading5.textContent = "Certification:";
	child2.appendChild(heading5);
	for (i in othskills.details){
		var skillui = document.createElement("ul");
		var skillli = document.createElement("li");
		skillli.textContent = othskills.details[i];
		skillui.appendChild(skillli);
		child2.appendChild(skillui);
		console.log([i]);
		console.log(othskills.details[i])

	}
	
}


function strengths(strn){
	var heading5 = document.createElement("h2");
	heading5.textContent = "Personalitytraits:";
	child2.appendChild(heading5);
	for (i in strn.details){
		var skillui = document.createElement("ul");
		var skillli = document.createElement("li");
		skillli.textContent = strn.details[i];
		skillui.appendChild(skillli);
		child2.appendChild(skillui);
		console.log([i]);
		console.log(strn.details[i])

	}
	
}
	

