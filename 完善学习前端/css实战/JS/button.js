let state = false;
function getState(){
  this.state=!this.state;
  if(this.state===true){
    document.getElementById("on").style.animationName="button";
    document.getElementById("button").style.backgroundColor="red";
  }
  else{
    document.getElementById("on").style.animationName="none";
    document.getElementById("button").style.backgroundColor ="#1bf014";
  }
}
