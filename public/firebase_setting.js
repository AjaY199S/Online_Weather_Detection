/// Firebase data fectching temprature, humidity and soil moisture
  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyCXaMML_zWjej8PCu1ED8lD-XCFj-zOkG8",
    authDomain: "iot-project-899a3.firebaseapp.com",
    databaseURL: "https://iot-project-899a3.firebaseio.com",
    projectId: "iot-project-899a3",
    storageBucket: "iot-project-899a3.appspot.com",
    messagingSenderId: "503202438308",
    appId: "1:503202438308:web:43e3a48760cfd35c"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  var rootRef = firebase.database().ref("ESP8266");

	info_load=()=>{
		
	    rootRef.on('value',gotData,gotErr);
	 }
	function gotData(data)
	{
		
		var esp8266 = data.val();
		document.getElementById("humidity_info").innerHTML = esp8266.Humidity;
		document.getElementById("temp_info").innerHTML = esp8266.Temp;
		
	}
	function gotErr(err)
	{
		console.log("error !");
		console.log(err);
	}