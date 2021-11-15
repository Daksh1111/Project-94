function getData() {
    firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
     Room_names = childKey;
    });});};

    var firebaseConfig = {
        apiKey: "AIzaSyAKpASFkk84fkMBM-ymIC9Aqf8rWcr3AKg",
        authDomain: "chatterbox-58484.firebaseapp.com",
        databaseURL: "https://chatterbox-58484-default-rtdb.firebaseio.com",
        projectId: "chatterbox-58484",
        storageBucket: "chatterbox-58484.appspot.com",
        messagingSenderId: "55825783112",
        appId: "1:55825783112:web:04bc430d54ff17911b3b7d"
      };
      
      
      firebase.initializeApp(firebaseConfig);

        user_name = localStorage.getItem("user_name");
        document.getElementById("user_name").innerHTML = " Welcome " +  user_name;

getData();