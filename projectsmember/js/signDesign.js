﻿function ShowHideDiv() {
    var ddlOther = document.getElementById("ddlOther");
    var dvOther = document.getElementById("dvOther");
    dvOther.style.display = ddlOther.value == "7" ? "block" : "none";
}


function selProject() {
   
    var selProjectType = document.getElementById("selProjectType");
    if (selProjectType.value == "0") {
        var dvWebDesign = document.getElementById("dvWebDesign");
        var dvExmpWebPage = document.getElementById("dvExmpWebPage");
        dvWebDesign.style.display = selProjectType.value == "0" ? "block" : "none";
        dvExmpWebPage.style.display = selProjectType.value == "0" ? "block" : "none";
    }
    else if (selProjectType.value == "1") {
        var dvDataAnalys = document.getElementById("dvDataAnalys");
        dvDataAnalys.style.display = selProjectType.value == "1" ? "block" : "none";
    }
    else if (selProjectType.value == "2") {

        var dvFixProgramBug = document.getElementById("dvFixProgramBug");
        dvFixProgramBug.style.display = selProjectType.value == "2" ? "block" : "none";
        dvSubject.style.display = selProjectType.value == "2" ? "block" : "none";
    }
    else if (selProjectType.value == "3") {
        var dvTeaching = document.getElementById("dvTeaching");
        dvTeaching.style.display = selProjectType.value == "3" ? "block" : "none";
        dvSubject.style.display = selProjectType.value == "3" ? "block" : "none";
    }
    else {
        var dvOtherProject = document.getElementById("dvOtherProject");
        dvOtherProject.style.display = selProjectType.value == "4" ? "block" : "none";
    }
}

/*function selProject() {
    var selProjectType = document.getElementById("selProjectType");
    var dvWebDesign = document.getElementById("dvWebDesign");
    var dvExmpWebPage = document.getElementById("dvExmpWebPage");
    dvWebDesign.style.display = selProjectType.value == "0" ? "block" : "none";
    dvExmpWebPage.style.display = selProjectType.value == "0" ? "block" : "none";
}
*/