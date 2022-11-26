function Ajouter(){
    var ajouter = document.getElementById('Addbutton');
    var volet = document.getElementById('volet4');
    var ajouterzone = document.getElementById('Addzone');
    var editerzone = document.getElementById('editzone');
    var editer = document.getElementById('EDIT');
    
        ajouterzone.style.display = 'block';
        editerzone.style.display = 'none';
        volet.style.display = 'none';   
     
}
function Editer(){
    var editer = document.getElementById('EDIT');
    var volet = document.getElementById('volet4');
    var ajouterzone = document.getElementById('Addzone');
    var editerzone = document.getElementById('editzone');
    var Delete = document.getElementById('DELETE');

        ajouterzone.style.display = 'none';
        editerzone.style.display = 'block';
        volet.style.display = 'none';   
}

function deleteRow(nom){
    var rows = document.querySelectorAll('#Row')

    rows.forEach((row)=>{
        console.log(row.children[0].innerText.trim())
       if(row.children[0].innerText.trim() == nom.trim()){
        
        row.remove()
       }else{
        console.log('not found')
       }
    })

}


function add(){
    
    var table = document.getElementById("mytable")
    var nom = document.getElementById('name').value
    var drapeau = document.getElementById('upload').value
    var datene = document.getElementById('date').value
    var post = document.getElementById('pos').value
    var ajouterzone = document.getElementById('Addzone')
    
    var volet = document.getElementById('volet4')
    ajouterzone.style.display = 'none';
      volet.style.display = 'block';
                 
    var template = `<tr id="Row" >
          <td id="name2">${nom}	</td>
          <td id="pay2">${drapeau}</td>
          <td id="date2" >	${datene}</td>
          <td > <div id="pos2">${post}</div> </td>
          <td><div class="button-center">
            <button class="bn632-hover bn20" type="button" id="EDIT" type="button" onclick="Editer()">Edit</button>
            <button class="bn632-hover bn20" type="button" id="DELETE" onclick="deleteRow('${nom}')">delete</button></div>
          </td>
        </tr>`
  table.innerHTML += template
      
  
}       
function cancel(){
    var cancelbutton = document.getElementById('cancel');
    window.location = "index.html"
    cancelbutton = window.location;
}
function edit(){
    var savebutton2 = document.getElementById('save2')
    var editerzone = document.getElementById('editzone')
    var volet = document.getElementById('volet4')

    {
    var c1 = document.getElementById('name2')
    var c2 = document.getElementById('date2')
    var c3 = document.getElementById('pos2')
    var c4 = document.getElementById('name3')
    var c5 = document.getElementById('date3')
    var c6 = document.getElementById('pos3')
    var c7 = document.getElementById('name4')
    var c8 = document.getElementById('date4')
    var c9 = document.getElementById('pos4')
    var c10 = document.getElementById('name5')
    var c11 = document.getElementById('date5')
    var c12 = document.getElementById('pos5')
    var c13 = document.getElementById('name6')
    var c14 = document.getElementById('date6')
    var c15= document.getElementById('pos6')
    var c16= document.getElementById('name7')
    var c17= document.getElementById('date7')
    var c18= document.getElementById('pos7')
    var c19= document.getElementById('name8')
    var c20= document.getElementById('date8')
    var c21= document.getElementById('pos8')
    var c22= document.getElementById('name9')
    var c23= document.getElementById('date9')
    var c24= document.getElementById('pos9')
    var c25= document.getElementById('name10')
    var c26= document.getElementById('date10')
    var c27= document.getElementById('pos10')
    var c28= document.getElementById('name11')
    var c29= document.getElementById('date11')
    var c30= document.getElementById('pos11')
    var c31= document.getElementById('name12')
    var c32= document.getElementById('date12')
    var c33= document.getElementById('pos12')
}
    var nom = document.getElementById('input1').value
    var datene = document.getElementById('input2').value
    var post = document.getElementById('input3').value
{
      c1.innerText = nom; 
      c2.innerText = datene;
      c3.innerText = post ;
      c4.innerText = nom; 
      c5.innerText = datene;
      c6.innerText = post ;
      c7.innerText = nom; 
      c8.innerText = datene;
      c9.innerText = post ;
      c10.innerText = nom; 
      c11.innerText = datene;
      c12.innerText = post ;
      c13.innerText = nom; 
      c14.innerText = datene;
      c15.innerText = post ;
      c16.innerText = nom; 
      c17.innerText = datene;
      c18.innerText = post ;
      c19.innerText = nom; 
      c20.innerText = datene;
      c21.innerText = post ;
      c22.innerText = nom; 
      c23.innerText = datene;
      c24.innerText = post ;
      c25.innerText = nom; 
      c26.innerText = datene;
      c27.innerText = post ;
      c28.innerText = nom; 
      c29.innerText = datene;
      c30.innerText = post ;
      c31.innerText = nom; 
      c32.innerText = datene;
      c33.innerText = post ;
}
      editerzone.style.display = 'none';
      volet.style.display = 'block';
}
