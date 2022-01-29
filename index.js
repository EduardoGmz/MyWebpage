var students = [
    {
        lname: "Gomez Macias",
        Name: "Cesar Eduardo",
        age: 21,
        birthday: {
            year: 2000,
            month: "April",
            day: 13
        },
        Career: "IDYGS"
    }
]

var table = document.getElementsByTagName("table")[0];
for (var i = 0; i < students.length; i++) {
    var templ = document.getElementById("tbodytempl").content.cloneNode(true);
    var tdnumber = templ.querySelector("span[name='tbodynumber']");
    var tdName = templ.querySelector("span[name='tbodyname']");
    var tdage = templ.querySelector("span[name='tbodyage']");
    var tdCareer = templ.querySelector("span[name='tbodycareer']");

    tdnumber.innerText = i + 1;
    tdName.innerText = students[i].lname + " " + students[i].Name;
    tdage.innerText = students[i].age;
    tdCareer.innerText = students[i].Career;
    
    table.append(templ);
}