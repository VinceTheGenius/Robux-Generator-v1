var lang=navigator.language;
var classToHidden="fr";
if(lang=="fr-FR"){
  classToHidden="en";
}

var docs=document.getElementsByClassName(classToHidden);
for(var i=0;i<docs.length;i++){
  docs[i].hidden=true;
}