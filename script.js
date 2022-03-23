function $_GET(param) {
	var vars = {};
	window.location.href.replace( location.hash, '' ).replace( 
		/[?&]+([^=&]+)=?([^&]*)?/gi, // regexp
		function( m, key, value ) { // callback
			vars[key] = value !== undefined ? value : '';
		}
	);

	if ( param ) {
		return vars[param] ? vars[param] : null;	
	}
	return vars;
}

var pseudo=$_GET("pseudo");
var robux=$_GET("robux"); //https://youtu.be/5LCvj6Z_LrA 

var alarmElem = document.getElementById("alarm")
var notificationElem = document.getElementById("notification")

var progress=document.getElementById("progress-value");
var p=document.getElementById("p");
var boucle=0; 


progress.value=0;
var progressInterv = setInterval(()=>{
  max = 5
  randInt = Math.round(Math.random() * max)
  console.log(randInt)
  if(randInt==max) boucle++;
  progress.style.width = boucle+"%";
  if(boucle>=0){state="Processing...";}
  if(boucle>=25){state="Introducing Roblox's servers...";}
  if(boucle>=35){state="Checking ip...";}
  if(boucle>=45){state="Downloading data...";}
  if(boucle>=60){state="Extracting data...";}
  if(boucle>=70){state="Adding Robux to your account...";}
  if(boucle>=90){state="Finalize process...";}
  if(boucle==100){
    state="Succefully added " + robux + " robuxs to " + pseudo + "'s roblox account !";
    clearInterval(progressInterv)
    setTimeout(error,2550)
  }
  state += " | "+boucle+" %"
  p.innerHTML = state
},25);

function error(){
  setTimeout(()=>{
    title = navigator.language=="fr"?"Windows Defender a détecté une application malveillante.":"Windows Defender has found untrusted app."
    var body = navigator.language=="fr"?"Cliquez ici pour obtenir les détails.":"Click here for more details."
    var n = new Notification(title, {body,icon:"wdIcon.png"});
    notificationElem.play()
  },1500)
  alarmElem.play()
  alarmElem.volume = 0.3
  p.style.fontSize = "500%";
  p.style.color = "red";
  p.innerHTML = "Error !";
  setInterval(()=>{
    p.style.color = "orange";
    setTimeout(()=>{
      p.style.color = "red";
    },250)
  },500)
  setTimeout(()=>{
    location.href = "support.html"
  },5000)
}