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

userfake = localStorage.getItem("userfake");
room_name = localStorage.getItem("Room_name");

function Enviar()
{
      msg = document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name: userfake,
            message: msg,
            like: 0
      });

      msg = document.getElementById("msg").value = "";
}

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("out").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
      Room_names = childKey;
      firebase_message_id = childKey;
      message_data = childData;
      //Inicia código
      console.log(firebase_message_id);
      console.log(message_data);
      
      nombre = message_data['name'];
      mensaje = message_data['message'];
      like = message_data['like'];
      
      name_with_tag = "<h4>" + nombre + "<img class='user_tick' src='tick.png'></h4>";

      message_with_tag = "<h4 class='message_h4'>" + mensaje + "</h4>"
      
      like_button = "<button class='btn btn-warning' id='"+ firebase_message_id +"' value='"+ like +"' onclick='updateLike(this.id)'>";
      
      span_with_tag = "<span class='glyphicon glyphicon-thumbs-up'>Like:" + like + "</span></button><hr>";
      
      row = name_with_tag + message_with_tag + like_button + span_with_tag;
      
      document.getElementById("out").innerHTML += row;
      //Termina código
      } });  }); }
      getData();
function exit()
{
      localStorage.removeItem("userfake");
      localStorage.removeItem("Room_name");
      window.location.replace("index.html");
}