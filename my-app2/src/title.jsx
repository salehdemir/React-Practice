var myStyle = {
  color : ""
}

const dataTime = new Date();
const time = dataTime.getHours();
var msg = "";

  if (time <= 12 && time > 0 ){
 msg = "Good Morning"
 myStyle.color = "red"
}else if(time >= 12 && time <= 18){
  msg = "good Afternoon"
  myStyle.color = "Purple"
}else if(time >= 18 && time <=23){
  msg = "Good Evening"
  myStyle.color = "blue"
}else{
  msg = "your time is wrong"

}
function Title (){
   return <h1 style={myStyle}>{msg}</h1>
}

export default Title