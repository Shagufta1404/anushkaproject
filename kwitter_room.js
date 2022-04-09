var firebaseConfig = {
      apiKey: "AIzaSyDSL_IL_sLjRC0dw3Wn4YLSNVLhZcXN9Y4",
      authDomain: "kwitter-a3ec5.firebaseapp.com",
      databaseURL: "https://kwitter-a3ec5-default-rtdb.firebaseio.com",
      projectId: "kwitter-a3ec5",
      storageBucket: "kwitter-a3ec5.appspot.com",
      messagingSenderId: "779197971879",
      appId: "1:779197971879:web:982a098cecd40c66378a82"
    };
    
    // Initialize Firebase
     firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS HERE
user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML="Welcome "+ user_name + "!";
function addRoom()
{
      room_name = document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpose : "room added"
      });
      localStorage.setItem("room_name", room_name);
      window.location = "kwitter_page.html";
}
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
console.log("Room name - " + Room_names);
row = "<div class= 'room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#"+ Room_names +"</div><hr>";
document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();
function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";
}