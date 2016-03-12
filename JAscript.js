/**
 * Created by Jose on 2016-02-14.
 */
//document.getElementById("categories").innerHTML = callCategories();

function changeMain(newFrame){
    switch(newFrame){
        case "Bibliography":
            document.getElementById("mainframe").src = "Bibliography.html";
            break;
        case "Projects":
            document.getElementById("mainframe").src = "Projects.html";
            break;
        case "TA":
            document.getElementById("mainframe").src = "TeachingAssistant.html";
            break;
        case "Classes":
            document.getElementById("mainframe").src = "Classes.html";
            break;
        case "Videos":
            document.getElementById("mainframe").src = "Videos.html";
            break;
        case "Resume":
            document.getElementById("mainframe").src = "Jose Albas Resume.pdf";
            break;
        case "References":
            document.getElementById("mainframe").src = "5 list References.pdf";
            break;
        case "Grades":
            document.getElementById("mainframe").src = "ReportCard.pdf";
            break;
        case "Citizenship":
            document.getElementById("mainframe").src = "Citizenship.html";
            break;
        default:
            document.getElementById("mainframe").src = "main.html"
    }
}

function changeCSS(){
    if(document.getElementById("css").getAttribute('href') == 'JAstyle.css')
        document.getElementById("css").setAttribute('href','antique.css');
    else
        document.getElementById("css").setAttribute('href','JAstyle.css');
}


function changeLanguage(language) {
    var patt = new RegExp("pdf");
    var pattern = new RegExp("jpg");

    if (patt.test(document.getElementById("mainframe").src) == false && pattern.test(document.getElementById("mainframe").src) == false
        && (document.getElementById("spanishflag").onclick || document.getElementById("englishflag").onclick)) {
        document.getElementById("English").style.display = 'none';
        document.getElementById("Spanish").style.display = 'none';
        window.frames['mainframe'].contentDocument.getElementById('English').style.display = 'none';
        window.frames['mainframe'].contentDocument.getElementById('Spanish').style.display = 'none';
        switch (language) {
            case 'english':

                document.getElementById("English").style.display = 'block';
                window.frames['mainframe'].contentDocument.getElementById('English').style.display = 'block';
                break;
            case 'spanish':

                document.getElementById("Spanish").style.display = 'block';
                window.frames['mainframe'].contentDocument.getElementById('Spanish').style.display = 'block';
                break;
            default:
                document.getElementById("English").style.display = 'block';
                window.frames['mainframe'].contentDocument.getElementById('English').style.display = 'block';
        }
    }
}

//function check(e){
//    if(e.keyCode == 13)
//        alert("Enter was pressed");
//}