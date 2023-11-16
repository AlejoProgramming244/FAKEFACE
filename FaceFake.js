// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyAUu1I0Od0kTRnnzbc0tLZcevJN8BoUUT8",
    authDomain: "facefake-37c3c.firebaseapp.com",
    databaseURL: "https://facefake-37c3c-default-rtdb.firebaseio.com",
    projectId: "facefake-37c3c",
    storageBucket: "facefake-37c3c.appspot.com",
    messagingSenderId: "431971058340",
    appId: "1:431971058340:web:a070742f2ad5b2670c5c31"
  };
  
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);

user_name = localStorage.getItem("userfake")

document.getElementById("user_name").innerHTML = "¡Hola " + user_name +", " + "ahora eres uno de nosotros!";

function addRoom()
{
    Room_name = document.getElementById("input_FFRoom").value;
    localStorage.setItem("Room_name", Room_name);
    firebase.database().ref("/").child(Room_name).update({
        Rooms: "Nuevo Fake-Group"
    });

    window.location="FaceFakeMSG.html";
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("salida").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey = childSnapshot.key;
    Room_names = childKey;
    //Inicia código
    console.log("RoomFake", Room_names)
    row = "<div class='room_names' id="+ Room_names +" onclick='redirectToRoomName(this.id)'> FF" + Room_names + "</div> <hr>";
    document.getElementById("salida").innerHTML += row;
    //Termina código
    });});}
    getData();

function redirectToRoomName(Room_Names)
{
    console.log(Room_Names);
    localStorage.setItem("Room_name", Room_Names)
    window.location = "FaceFakeMSG.html";
}
    
function exit()
{
    localStorage.removeItem("userfake");
    localStorage.removeItem("Room_name");
    window.location.replace("index.html");
}

