/* Swiper */
const swiper = new Swiper(".swiper", {
  // direction: 'horizontal',
  loop: true,
  slidesPerView: 1,
  // autoHeight: true,
  autoplay: {
    delay: 5000,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

/************************************************ */

function gotoMatches(event) {
  event.preventDefault();
  var teaminfo = document.getElementById("team-info");
  var vol4 = document.getElementById("volet4");
  vol4.classList.add("hide");
  document.getElementById("volet4").classList.add("hide");
  teaminfo.classList.add("hide");

  // Hide player-info image
  document.getElementById("player-info").classList.add("hide");

  // Hide classement
  document.getElementById("classement").classList.add("hide");

  // Hide News
  document.getElementById("news-show").classList.add("hide");

  var coll = document.getElementsByClassName("collapsible");
  var i;

  for (i = 0; i < coll.length; i++) {
    coll[i].classList.toggle("active");
    var content = coll[i].nextElementSibling;
    content.style.display = "none";
  }

  const matches = document.getElementById("matches");
  matches.classList.remove("hide");
  matches.scrollIntoView({
    behavior: "smooth",
  });
}

function selectedGroupRanking(t) {
  // Hide Volets 2, 3, 4
  var teaminfo = document.getElementById("team-info");
  var vol4 = document.getElementById("volet4");
  vol4.classList.add("hide");
  document.getElementById("volet4").classList.add("hide");
  teaminfo.classList.add("hide");

  // Hide player-info image
  document.getElementById("player-info").classList.add("hide");

  // Hide matches
  document.getElementById("matches").classList.add("hide");

  // Hide News
  document.getElementById("news-show").classList.add("hide");

  var coll = document.getElementsByClassName("collapsible");
  var i;

  for (i = 0; i < coll.length; i++) {
    coll[i].classList.toggle("active");
    var content = coll[i].nextElementSibling;
    content.style.display = "none";
  }

  var filteredTeam = teamData.filter((team) => team.groups == t.value);

  filteredTeam.sort((a, b) => {
    var keyA = a.pts,
      keyB = b.pts;
    if (keyA < keyB) return 1;
    if (keyA > keyB) return -1;
    return 0;
  });

  if (filteredTeam) {
    document.getElementById("classement").classList.remove("hide");
    document.querySelector("#classement").scrollIntoView({
      behavior: "smooth",
    });
    const title = document.getElementById("groupe-classement");
    if (title.innerText === "Groupe " + t.value) {
      return;
    } else {
      title.innerText = "Groupe " + t.value;
      const myTableBody = document.getElementById("classement-body");

      myTableBody.innerHTML = "";
      for (let i = 0; i < filteredTeam.length; i++) {
        // create a table row element
        let tableRow = document.createElement("tr");

        // create a table cell (td) element
        let equipe = document.createElement("td");
        let mj = document.createElement("td");
        let g = document.createElement("td");
        let n = document.createElement("td");
        let p = document.createElement("td");
        let pts = document.createElement("td");

        // add content to table cell elements
        equipe.innerHTML = filteredTeam[i].name_en;
        mj.innerHTML = filteredTeam[i].MJ;
        g.innerHTML = filteredTeam[i].G;
        n.innerHTML = filteredTeam[i].N;
        p.innerHTML = filteredTeam[i].P;
        pts.innerHTML = filteredTeam[i].pts;

        // append table cell to table row
        tableRow.appendChild(equipe);
        tableRow.appendChild(mj);
        tableRow.appendChild(g);
        tableRow.appendChild(n);
        tableRow.appendChild(p);
        tableRow.appendChild(pts);

        // append table row to table body
        myTableBody.appendChild(tableRow);
      }
    }
  } else {
    alert("Group Data not found");
  }
}

/********************************************************************** */

var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function () {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}
/************************volet 2-3-4************************* */

/****************************************************************** */

var sGROUP = "";
var sTEAM = "";
var sPLAYER = "";

function selectedGroup(t) {
  var groupSelected = document.getElementById("group-selected");
  var vol2 = document.getElementById("vol-2");
  vol2.classList.remove("hide");
  groupSelected.innerText = "Groupe " + t.value;
  sGROUP = t.value;

  const toggle = document.querySelector("#volet-2").childNodes[1];
  toggle.classList.toggle("active");
  const content = toggle.nextElementSibling;

  if (content.style.display === "none" || content.style.display === "") {
    content.style.display = "block";
  }

  var filteredGroup = teamData.filter(({ groups }) => groups == t.value);

  viderLesInfo();
  for (let i = 0; i < 4; i++) {
    eval(
      "document.getElementById('team-" +
        (i + 1) +
        "').value=filteredGroup[i].name_en"
    );
    eval(
      "document.getElementById('flag-team-" +
        (i + 1) +
        "').src='https://flagcdn.com/h80/'+filteredGroup[i].iso2.toLocaleLowerCase()+'.png'"
    );
    // "tst".toLocaleLowerCase()
    // eval(
    //   "document.getElementById('flag-team-" +
    //     (i + 1) +
    //     "').src='https://countryflagsapi.com/png/'+filteredGroup[i].iso2"
    // );
  }
}

function gotoGroup(element) {
  const toggle = document.querySelector("#volet-2").childNodes[1];
  toggle.classList.toggle("active");
  const content = toggle.nextElementSibling;

  if (content.style.display === "none" || content.style.display === "") {
    content.style.display = "block";
  }
  document.querySelector("#volet-2").scrollIntoView({
    behavior: "smooth",
  });

  selectedGroup(element);
}

function goto(element, event) {
  event.preventDefault();
  const href = element.getAttribute("href");

  document.querySelector(href).scrollIntoView({
    behavior: "smooth",
  });
}

/******************************************** */

function viderLesInfo() {
  for (let i = 0; i < 11; i++) {
    var rowId = "Row" + (i + 1);
    var blocId = "player-bloc-" + (i + 1);

    var playerbloc = document.getElementById(blocId);
    var row = document.getElementById(rowId);
    row.classList.remove("hide");

    row.querySelector(".name").innerText = "";
    row.querySelector(".pay").innerText = "";
    row.querySelector(".date").innerText = "";
    row.querySelector(".pos").innerText = "";

    playerbloc.querySelector("#player-name").innerText = "";
    playerbloc.querySelector("#player-img").src = "";
    document.getElementById("player-info").src = "";
  }

  var rowNumbers = document.getElementById("mytable");
  if (rowNumbers.childElementCount > 11) {
    console.log("remove the rest" + rowNumbers.childElementCount);
    for (let i = 11; i < rowNumbers.childElementCount; i++) {
      rowNumbers.children[i].remove();
    }
  }
}

/********************************************************* */

function selectedTeam(t) {
  var teaminfo = document.getElementById("team-info");
  var vol4 = document.getElementById("volet4");
  teaminfo.classList.remove("hide");
  vol4.classList.remove("hide");
  document.getElementById("player-info").classList.add("hide");

  // Hide player-info image
  document.getElementById("matches").classList.add("hide");

  // Hide classement
  document.getElementById("classement").classList.add("hide");

  // Hide News
  document.getElementById("news-show").classList.add("hide");

  const toggle = document.querySelector("#vol-3").childNodes[1];
  toggle.classList.toggle("active");
  const content = toggle.nextElementSibling;

  if (content.style.display === "none" || content.style.display === "") {
    content.style.display = "block";
  }

  var filteredTeam = teamPlayers.filter(({ team }) => team == t.value);
  console.log("team selected : " + t.value);
  sTEAM = t.value;
  document.getElementById("volet4").classList.remove("hide");
  viderLesInfo();

  for (let i = 0; i < filteredTeam.length; i++) {
    var blocId = "player-bloc-" + (i + 1);
    var rowId = "Row" + (i + 1);
    var playerbloc = document.getElementById(blocId);
    //initialiser le bloc des players avec leurs noms et photos
    playerbloc.querySelector("#player-name").innerText =
      filteredTeam[i].player_name;
    playerbloc.querySelector("#player-img").src =
      "assets/img/players/" +
      sGROUP +
      "/" +
      sTEAM +
      "/" +
      filteredTeam[i].player_number +
      ".jpg";

    var row = document.getElementById(rowId);
    row.classList.remove("hide");

    row.querySelector(".name").innerText = filteredTeam[i].player_name;
    row.querySelector(".pay").innerText = filteredTeam[i].team;
    row.querySelector(".date").innerText = filteredTeam[i].birth_date;
    row.querySelector(".pos").innerText = filteredTeam[i].position;
  }
}
/****************************************************** */

function selectedPlayer(t) {
  var volet4 = document.getElementById("volet4");
  volet4.classList.add("hide");

  sPLAYER = t;
  document.getElementById("player-info").classList.remove("hide");
  eval(
    "document.getElementById('player-info').src = './assets/img/groupes/" +
      sGROUP +
      "/" +
      sTEAM +
      "/" +
      sPLAYER +
      ".jpg'"
  );
  console.log(
    "you selected group : " +
      sGROUP +
      " team : " +
      sTEAM +
      " player : " +
      sPLAYER
  );
}

/************************************************** */

function deleteRow(t) {
  console.log(t.parentNode.parentNode.parentNode.classList.add("hide"));
}

/********************************************************************** */

var volet = document.getElementById("volet4");
var ajouterzone = document.getElementById("Addzone");
var editerzone = document.getElementById("editzone");

function cancel() {
  volet.classList.remove("hide");
  ajouterzone.classList.add("hide");
  editerzone.classList.add("hide");
}
/******************************************************************* */
function Ajouter() {
  ajouterzone.classList.remove("hide");
  editerzone.classList.add("hide");
  volet.classList.add("hide");
}

/******************************************************************* */
function Editer(t) {
  ajouterzone.classList.add("hide");
  editerzone.classList.remove("hide");
  volet.classList.add("hide");

  var r = t.parentNode.parentNode.parentNode;

  document.querySelector("input#input0").value = r.children[0].innerText;
  document.querySelector("input#input1").value = r.children[1].innerText;
  document.querySelector("input#input2").value = r.children[2].innerText;
  document.querySelector("input#input3").value = r.children[3].innerText;
  document.querySelector("input#input4").value = r.id;
  console.log("element a editer : " + r.id);
}

/******************************************************* */

function add() {
  var table = document.getElementById("mytable");
  var row = document.getElementById("Row1").cloneNode(true);
  var nextId = table.childElementCount + 1;
  row.children[0].innerText = document.getElementById("name").value;
  row.children[0].id = "name" + nextId;
  row.children[1].innerText = document.getElementById("upload").value;
  row.children[1].id = "pay" + nextId;
  row.children[2].innerText = document.getElementById("date").value;
  row.children[2].id = "date" + nextId;
  row.children[3].innerText = document.getElementById("pos").value;
  row.children[3].id = "pos" + nextId;
  row.id = "Row" + nextId;
  row.classList.remove("hide");

  console.log(row.name);
  console.log(row.pay);
  console.log(row.children);

  ajouterzone.classList.add("hide");
  volet.classList.remove("hide");

  table.appendChild(row);
}

/******************************************************* */

function edit() {
  var rId = document.querySelector("input#input4").value;
  var r = document.getElementById(rId);
  r.children[0].innerText = document.querySelector("input#input0").value;
  r.children[1].innerText = document.querySelector("input#input1").value;
  r.children[2].innerText = document.querySelector("input#input2").value;
  r.children[3].innerText = document.querySelector("input#input3").value;

  editerzone.classList.add("hide");
  volet.classList.remove("hide");
}

//

const showNews = (event) => {
  var volet4 = document.getElementById("volet4");
  volet4.classList.add("hide");
  document.getElementById("player-info").classList.add("hide");

  // Collapse Volet 2
  const toggleVol2 = document.querySelector("#volet-2").childNodes[1];
  toggleVol2.classList.toggle("active");
  const contentVol2 = toggleVol2.nextElementSibling;
  if (
    contentVol2.style.display === "block" ||
    contentVol2.style.display === ""
  ) {
    contentVol2.style.display = "none";
  }

  // Collapse Volet 3
  const toggleVol3 = document.querySelector("#vol-3").childNodes[1];
  toggleVol3.classList.toggle("active");
  const contentVol3 = toggleVol3.nextElementSibling;
  if (
    contentVol3.style.display === "block" ||
    contentVol3.style.display === ""
  ) {
    contentVol3.style.display = "none";
  }

  // Hide player-info image
  document.getElementById("matches").classList.add("hide");

  // Hide classement
  document.getElementById("classement").classList.add("hide");

  // Show News
  const id = event.target.value;
  if (!id) {
    alert("New not found!");
  }
  const news = newsData.find((news) => news.id === parseInt(id));

  const newsShow = document.getElementById("news-show");

  newsShow.classList.remove("hide");
  newsShow.childNodes[1].src = news.image_url;
  newsShow.childNodes[3].innerText = news.title;
  newsShow.childNodes[5].innerText = news.description;
};

/********************************************************************** */
/************************************************ */
/*******************    DATA    ***************** */
/************************************************ */

const newsData = [
  {
    id: 1,
    title: "Maroc vs Croatie Match nul!",
    description: "Le 23 novembre 2022, le Maroc et la Croatie...",
    image_url: "./assets/img/test.png",
  },
  {
    id: 2,
    title: "Belgium vs Morocco 0-2: World Cup 2022 – as it happened",
    description: `Le Maroc a réussi un autre choc de la Coupe du monde dimanche, et la « Golden Generation » belge vieillissante a pris le coup cette fois.

    La défaite 2-0 dans le groupe F à Doha, au Qatar, a laissé Kevin de Bruyne et les demi-finalistes de 2018 en péril d’une sortie en phase de groupes.
    
    De Bruyne n’a pas fait avancer la Belgique contre le Maroc, le capitaine Eden Hazard a été retiré après une heure et le gardien Thibaut Courtois était probablement fautif pour le premier but.
    
    « Nous n’avons pas encore vu la meilleure Belgique », a déclaré Roberto Martinez, un Espagnol qui a entraîné l’équipe pendant six ans. « Nous n’avons pas été nous-mêmes. »
    
    Le capitaine marocain Romain Saiss a donné l’avantage à son équipe avec une déviation à peine perceptible de sa hanche après un coup franc d’Abdelhamid Sabiri à la 73e minute qui est passé sous le corps de Courtois – pour beaucoup, le meilleur gardien du monde.
    
    Zakaria Aboukhlal a guidé un tir dans le toit du filet sur une passe de Hakim Ziyech dans les arrêts de jeu pour porter le score à 2-0 alors que la défense belge, comptant plus de 300 apparitions internationales mais ancrée par deux joueurs dans la trentaine, a été battue par un attaquant rapide de 22 ans disputant sa première Coupe du monde.`,
    image_url: "./assets/img/Belgium-v-Morocco.webp",
  },
];

const teamPlayers = [
  {
    player_number: "1",
    position: "GK",
    player_name: "Yassine Bounou",
    birth_date: "5 April 1991",
    team: "Morocco",
  },
  {
    player_number: "2",
    position: "DF",
    player_name: "Achraf Hakimi",
    birth_date: "4 November 1998",
    team: "Morocco",
  },
  {
    player_number: "3",
    position: "DF",
    player_name: "Noussair Mazraoui",
    birth_date: "14 November 1997",
    team: "Morocco",
  },
  {
    player_number: "4",
    position: "MF",
    player_name: "Sofyan Amrabat",
    birth_date: "21 August 1996",
    team: "Morocco",
  },
  {
    player_number: "5",
    position: "DF",
    player_name: "Nayef Aguerd",
    birth_date: "30 March 1996",
    team: "Morocco",
  },
  {
    player_number: "6",
    position: "DF",
    player_name: "Romain Saïss (captain)",
    birth_date: "26 March 1990",
    team: "Morocco",
  },
  {
    player_number: "7",
    position: "MF",
    player_name: "Hakim Ziyech",
    birth_date: "19 March 1993",
    team: "Morocco",
  },
  {
    player_number: "8",
    position: "MF",
    player_name: "Azzedine Ounahi",
    birth_date: "19 April 2000",
    team: "Morocco",
  },
  {
    player_number: "15",
    position: "MF",
    player_name: "Selim Amallah",
    birth_date: "15 November 1996",
    team: "Morocco",
  },
  {
    player_number: "17",
    position: "MF",
    player_name: "Sofiane Boufal",
    birth_date: "17 September 1993",
    team: "Morocco",
  },
  {
    player_number: "19",
    position: "FW",
    player_name: "Youssef En-Nesyri",
    birth_date: "1 June 1997",
    team: "Morocco",
  },
  {
    player_number: "4",
    position: "DF",
    player_name: "Gonzalo Montiel",
    birth_date: "1 January 1997",
    team: "Argentina",
  },
  {
    player_number: "7",
    position: "MF",
    player_name: "Rodrigo De Paul",
    birth_date: "24 May 1994",
    team: "Argentina",
  },
  {
    player_number: "8",
    position: "MF",
    player_name: "Marcos Acuña",
    birth_date: "28 October 1991",
    team: "Argentina",
  },
  {
    player_number: "10",
    position: "FW",
    player_name: "Lionel Messi (captain)",
    birth_date: "24 June 1987",
    team: "Argentina",
  },
  {
    player_number: "11",
    position: "FW",
    player_name: "Ángel Di María",
    birth_date: "14 February 1988",
    team: "Argentina",
  },
  {
    player_number: "18",
    position: "MF",
    player_name: "Guido Rodríguez",
    birth_date: "12 April 1994",
    team: "Argentina",
  },
  {
    player_number: "19",
    position: "DF",
    player_name: "Nicolás Otamendi",
    birth_date: "12 February 1988",
    team: "Argentina",
  },
  {
    player_number: "20",
    position: "MF",
    player_name: "Alexis Mac Allister",
    birth_date: "24 December 1998",
    team: "Argentina",
  },
  {
    player_number: "22",
    position: "FW",
    player_name: "Lautaro Martínez",
    birth_date: "22 August 1997",
    team: "Argentina",
  },
  {
    player_number: "23",
    position: "GK",
    player_name: "Emiliano Martínez",
    birth_date: "2 September 1992",
    team: "Argentina",
  },
  {
    player_number: "25",
    position: "DF",
    player_name: "Lisandro Martínez",
    birth_date: "18 January 1998",
    team: "Argentina",
  },
  {
    player_number: "1",
    position: "GK",
    player_name: "Thibaut Courtois",
    birth_date: "11 May 1992",
    team: "Belgium",
  },
  {
    player_number: "2",
    position: "DF",
    player_name: "Toby Alderweireld",
    birth_date: "2 March 1989",
    team: "Belgium",
  },
  {
    player_number: "5",
    position: "DF",
    player_name: "Jan Vertonghen",
    birth_date: "24 April 1987",
    team: "Belgium",
  },
  {
    player_number: "6",
    position: "MF",
    player_name: "Axel Witsel",
    birth_date: "12 January 1989",
    team: "Belgium",
  },
  {
    player_number: "7",
    position: "MF",
    player_name: "Kevin De Bruyne",
    birth_date: "28 June 1991",
    team: "Belgium",
  },
  {
    player_number: "8",
    position: "MF",
    player_name: "Youri Tielemans",
    birth_date: "7 May 1997",
    team: "Belgium",
  },
  {
    player_number: "10",
    position: "FW",
    player_name: "Eden Hazard (captain)",
    birth_date: "7 January 1991",
    team: "Belgium",
  },
  {
    player_number: "11",
    position: "FW",
    player_name: "Yannick Carrasco",
    birth_date: "4 September 1993",
    team: "Belgium",
  },
  {
    player_number: "19",
    position: "DF",
    player_name: "Leander Dendoncker",
    birth_date: "15 April 1995",
    team: "Belgium",
  },
  {
    player_number: "21",
    position: "MF",
    player_name: "Timothy Castagne",
    birth_date: "5 December 1995",
    team: "Belgium",
  },
  {
    player_number: "23",
    position: "FW",
    player_name: "Michy Batshuayi",
    birth_date: "2 October 1993",
    team: "Belgium",
  },
  {
    player_number: "4",
    position: "DF",
    player_name: "Abdulelah Al-Amri",
    birth_date: "15 January 1997",
    team: "Saudi Arabia",
  },
  {
    player_number: "5",
    position: "DF",
    player_name: "Ali Al-Bulaihi",
    birth_date: "21 November 1989",
    team: "Saudi Arabia",
  },
  {
    player_number: "6",
    position: "DF",
    player_name: "Mohammed Al-Breik",
    birth_date: "15 September 1992",
    team: "Saudi Arabia",
  },
  {
    player_number: "8",
    position: "MF",
    player_name: "Abdulellah Al-Malki",
    birth_date: "11 October 1994",
    team: "Saudi Arabia",
  },
  {
    player_number: "9",
    position: "FW",
    player_name: "Firas Al-Buraikan",
    birth_date: "14 May 2000",
    team: "Saudi Arabia",
  },
  {
    player_number: "10",
    position: "FW",
    player_name: "Salem Al-Dawsari",
    birth_date: "19 August 1991",
    team: "Saudi Arabia",
  },
  {
    player_number: "11",
    position: "FW",
    player_name: "Saleh Al-Shehri",
    birth_date: "1 November 1993",
    team: "Saudi Arabia",
  },
  {
    player_number: "12",
    position: "DF",
    player_name: "Saud Abdulhamid",
    birth_date: "18 July 1999",
    team: "Saudi Arabia",
  },
  {
    player_number: "16",
    position: "MF",
    player_name: "Sami Al-Najei",
    birth_date: "7 February 1997",
    team: "Saudi Arabia",
  },
  {
    player_number: "21",
    position: "GK",
    player_name: "Mohammed Al-Owais",
    birth_date: "10 October 1991",
    team: "Saudi Arabia",
  },
  {
    player_number: "23",
    position: "MF",
    player_name: "Mohamed Kanno",
    birth_date: "22 September 1994",
    team: "Saudi Arabia",
  },
];

const teamData = [
  {
    _id: "629c9c6b5749c4077500eaa8",
    name_en: "Iran",
    name_fa: "ایران",
    flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/Flag_of_Iran.svg/125px-Flag_of_Iran.svg.png",
    fifa_code: "IRN",
    iso2: "IR",
    groups: "B",
    id: "6",
  },
  {
    _id: "629c9c6b5749c4077500eaa9",
    name_en: "England",
    name_fa: "انگلستان",
    flag: "https://upload.wikimedia.org/wikipedia/en/thumb/b/be/Flag_of_England.svg/125px-Flag_of_England.svg.png",
    fifa_code: "GB-ENG",
    iso2: "GB-ENG",
    groups: "B",
    id: "5",
  },
  {
    _id: "629c9c6b5749c4077500eaaa",
    name_en: "United States",
    name_fa: "آمریکا",
    flag: "https://upload.wikimedia.org/wikipedia/en/thumb/a/a4/Flag_of_the_United_States.svg/125px-Flag_of_the_United_States.svg.png",
    fifa_code: "USA",
    iso2: "US",
    groups: "B",
    id: "7",
  },
  {
    _id: "629c9c6b5749c4077500eaab",
    name_en: "Qatar",
    name_fa: "قطر",
    flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/Flag_of_Qatar.svg/125px-Flag_of_Qatar.svg.png",
    fifa_code: "QAT",
    iso2: "QA",
    groups: "A",
    id: "1",
  },
  {
    _id: "629c9c6b5749c4077500eaac",
    name_en: "Ecuador",
    name_fa: "اکوادور",
    flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/Flag_of_Ecuador.svg/125px-Flag_of_Ecuador.svg.png",
    fifa_code: "ECU",
    iso2: "Ec",
    groups: "A",
    id: "2",
  },
  {
    _id: "629c9c6b5749c4077500eaad",
    name_en: "Senegal",
    name_fa: "سنگال",
    flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/Flag_of_Senegal.svg/125px-Flag_of_Senegal.svg.png",
    fifa_code: "SN",
    iso2: "SEN",
    groups: "A",
    id: "3",
  },
  {
    _id: "629c9c6b5749c4077500eaae",
    name_en: "Nederlands",
    name_fa: "هلند",
    flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Flag_of_the_Netherlands.svg/125px-Flag_of_the_Netherlands.svg.png",
    fifa_code: "NL",
    iso2: "NL",
    groups: "A",
    id: "4",
  },
  {
    _id: "629c9c6b5749c4077500eab0",
    name_en: "Argentina",
    name_fa: "آرژانتین",
    flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Flag_of_Argentina.svg/125px-Flag_of_Argentina.svg.png",
    fifa_code: "ARG",
    iso2: "AR",
    groups: "C",
    id: "9",
  },
  {
    _id: "629c9c6b5749c4077500eab1",
    name_en: "Saudi Arabia",
    name_fa: "عربستان",
    flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/Flag_of_Saudi_Arabia.svg/125px-Flag_of_Saudi_Arabia.svg.png",
    fifa_code: "SA",
    iso2: "SA",
    groups: "C",
    id: "10",
  },
  {
    _id: "629c9c6b5749c4077500eab2",
    name_en: "Mexico",
    name_fa: "مکزیک",
    flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/Flag_of_Mexico.svg/125px-Flag_of_Mexico.svg.png",
    fifa_code: "MEX",
    iso2: "MX",
    groups: "C",
    id: "13",
  },
  {
    _id: "629c9c6b5749c4077500eab3",
    name_en: "Poland",
    name_fa: "لهستان",
    flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/Flag_of_Poland.svg/125px-Flag_of_Poland.svg.png",
    fifa_code: "POL",
    iso2: "PL",
    groups: "C",
    id: "14",
  },
  {
    _id: "629c9c6b5749c4077500eab4",
    name_en: "France",
    name_fa: "فرانسه",
    flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Flag_of_France_%281794%E2%80%931815%2C_1830%E2%80%931974%2C_2020%E2%80%93present%29.svg/125px-Flag_of_France_%281794%E2%80%931815%2C_1830%E2%80%931974%2C_2020%E2%80%93present%29.svg.png",
    fifa_code: "FRA",
    iso2: "FR",
    groups: "D",
    id: "15",
  },
  {
    _id: "629c9c6b5749c4077500eab5",
    name_en: "Australia",
    name_fa: "استرالیا",
    flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Flag_of_Australia_%28converted%29.svg/125px-Flag_of_Australia_%28converted%29.svg.png",
    fifa_code: "AUS",
    iso2: "AU",
    groups: "D",
    id: "16",
  },
  {
    _id: "629c9c6b5749c4077500eab6",
    name_en: "Denmark",
    name_fa: "دانمارک",
    flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/Flag_of_Denmark.svg/125px-Flag_of_Denmark.svg.png",
    fifa_code: "DNK",
    iso2: "DK",
    groups: "D",
    id: "11",
  },
  {
    _id: "629c9c6b5749c4077500eab7",
    name_en: "Tunisia",
    name_fa: "تونس",
    flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Flag_of_Tunisia.svg/125px-Flag_of_Tunisia.svg.png",
    fifa_code: "TUN",
    iso2: "TN",
    groups: "D",
    id: "12",
  },
  {
    _id: "629c9c6b5749c4077500eab8",
    name_en: "Spain",
    name_fa: "اسپانیا",
    flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Flag_of_Spain.svg/125px-Flag_of_Spain.svg.png",
    fifa_code: "ESP",
    iso2: "ES",
    groups: "E",
    id: "21",
  },
  {
    _id: "629c9c6b5749c4077500eab9",
    name_en: "Costa Rica",
    name_fa: "کاستاریکا",
    flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Flag_of_Costa_Rica_%28state%29.svg/125px-Flag_of_Costa_Rica_%28state%29.svg.png",
    fifa_code: "CRC",
    iso2: "CR",
    groups: "E",
    id: "22",
  },
  {
    _id: "629c9c6b5749c4077500eaba",
    name_en: "Germany",
    name_fa: "آلمان",
    flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Flag_of_Germany.svg/125px-Flag_of_Germany.svg.png",
    fifa_code: "GER",
    iso2: "DE",
    groups: "E",
    id: "19",
  },
  {
    _id: "629c9c6b5749c4077500eabb",
    name_en: "Japan",
    name_fa: "ژاپن",
    flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Flag_of_Japan.svg/125px-Flag_of_Japan.svg.png",
    fifa_code: "JPN",
    iso2: "JP",
    groups: "E",
    id: "20",
  },
  {
    _id: "629c9c6b5749c4077500eabc",
    name_en: "Belgium",
    name_fa: "بلژیک",
    flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/Flag_of_Belgium.svg/125px-Flag_of_Belgium.svg.png",
    fifa_code: "BEL",
    iso2: "BE",
    groups: "F",
    id: "23",
    MJ: 3,
    G: 1,
    N: 1,
    P: 1,
    pts: 4,
    classement: 3,
  },
  {
    _id: "629c9c6b5749c4077500eabd",
    name_en: "Canada",
    name_fa: "کانادا",
    flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Flag_of_Canada_%28Pantone%29.svg/125px-Flag_of_Canada_%28Pantone%29.svg.png",
    fifa_code: "CAN",
    iso2: "CA",
    groups: "F",
    id: "24",
    MJ: 3,
    G: 0,
    N: 0,
    P: 3,
    pts: 0,
    classement: 4,
  },
  {
    _id: "629c9c6b5749c4077500eabe",
    name_en: "Morocco",
    name_fa: "مراکش",
    flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Flag_of_Morocco.svg/125px-Flag_of_Morocco.svg.png",
    fifa_code: "MAR",
    iso2: "MA",
    groups: "F",
    id: "17",
    MJ: 3,
    G: 2,
    N: 1,
    P: 0,
    pts: 7,
    classement: 1,
  },
  {
    _id: "629c9c6b5749c4077500eabf",
    name_en: "Croatia",
    name_fa: "کرواسی",
    flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Flag_of_Croatia.svg/125px-Flag_of_Croatia.svg.png",
    fifa_code: "CRO",
    iso2: "HR",
    groups: "F",
    id: "18",
    MJ: 3,
    G: 1,
    N: 1,
    P: 0,
    pts: 5,
    classement: 2,
  },
  {
    _id: "629c9c6b5749c4077500eac0",
    name_en: "Brazil",
    name_fa: "برزیل",
    flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Flag_of_Brazil.svg/125px-Flag_of_Brazil.svg.png",
    fifa_code: "BRA",
    iso2: "BR",
    groups: "G",
    id: "25",
  },
  {
    _id: "629c9c6b5749c4077500eac1",
    name_en: "Serbia",
    name_fa: "صربستان",
    flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/Flag_of_Serbia.svg/125px-Flag_of_Serbia.svg.png",
    fifa_code: "SRB",
    iso2: "RS",
    groups: "G",
    id: "26",
  },
  {
    _id: "629c9c6b5749c4077500eac2",
    name_en: "Switzerland",
    name_fa: "سوئیس",
    flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/Flag_of_Switzerland.svg/100px-Flag_of_Switzerland.svg.png",
    fifa_code: "SUI",
    iso2: "CH",
    groups: "G",
    id: "31",
  },
  {
    _id: "629c9c6b5749c4077500eac3",
    name_en: "Cameroon",
    name_fa: "کامرون",
    flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Flag_of_Cameroon.svg/125px-Flag_of_Cameroon.svg.png",
    fifa_code: "CMR",
    iso2: "CM",
    groups: "G",
    id: "32",
  },
  {
    _id: "629c9c6b5749c4077500eac4",
    name_en: "Portugal",
    name_fa: "پرتغال",
    flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Flag_of_Portugal.svg/125px-Flag_of_Portugal.svg.png",
    fifa_code: "PT",
    iso2: "PT",
    groups: "H",
    id: "27",
  },
  {
    _id: "629c9c6b5749c4077500eac5",
    name_en: "Ghana",
    name_fa: "غنا",
    flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/Flag_of_Ghana.svg/125px-Flag_of_Ghana.svg.png",
    fifa_code: "GHA",
    iso2: "GH",
    groups: "H",
    id: "28",
  },
  {
    _id: "629c9c6b5749c4077500eac6",
    name_en: "Uruguay",
    name_fa: "اروگوئه",
    flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/Flag_of_Uruguay.svg/125px-Flag_of_Uruguay.svg.png",
    fifa_code: "URU",
    iso2: "UY",
    groups: "H",
    id: "29",
  },
  {
    _id: "629c9c6b5749c4077500eac7",
    name_en: "South Korea",
    name_fa: "کره جنوبی",
    flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/Flag_of_South_Korea.svg/125px-Flag_of_South_Korea.svg.png",
    fifa_code: "KOR",
    iso2: "KR",
    groups: "H",
    id: "30",
  },
  {
    _id: "631064dab140f1214a8afc83",
    name_en: "Wales",
    name_fa: "ولز",
    flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/Flag_of_Wales_%281959%29.svg/125px-Flag_of_Wales_%281959%29.svg.png",
    fifa_code: "GB-WLS",
    iso2: "GB-WLS",
    groups: "B",
    id: "8",
  },
];
