function GetUser(){
  var getUsn = document.getElementById("userName");
  // if(getUsn.value.charAt(0))
  if(getUsn.value == ""){
    getUsn.style.color = "black";
    getUsn.style.outline = "black";
    document.getElementById("r0").style.display = "none";
  } else{
    for(var i =0; i<getUsn.value.length;i++){
      if(getUsn.value.charAt(i)== " "){
        getUsn.style.color = "red";
        getUsn.style.outline = "1px solid red";
        document.getElementById("r0").style.color = "red";
        document.getElementById("r0").style.display = "block";
        document.getElementById("r0").innerHTML = "Khong duoc co khoang trong"
      }
    }
  }
}

function GetPas(){
  var getpwd = document.getElementById("passwd");
  if(getpwd.value==""){
    document.getElementById("r1").style.display= "none";
  } else if(getpwd.value.length<8){
    document.getElementById("r1").style.display= "block";
    document.getElementById("r1").style.color = "red";
    document.getElementById("r1").innerHTML = "Mat khau qua ngan";
  } else{
      document.getElementById("r1").style.display= "none";
  }
}

function GetConf(){
  var getCon = document.getElementById("conf");
  var getpwd = document.getElementById("passwd");
  if(getCon.value==""){
    document.getElementById("r2").style.display= "none";
  } else if(getCon.value!=getpwd.value){
    document.getElementById("r2").style.display= "block";
    document.getElementById("r2").style.color = "red";
    document.getElementById("r2").innerHTML = "Mat khau khong trung hop";

  }else{
      document.getElementById("r2").style.display= "none";
  }
}

function checkPhone() {
   var num = document.getElementById("tel");
  if(num.value.length<12){
    alert("So dien thoai khong hop le");
  } else if(num.value.charAt(0)!=0){
    alert("So dien thoai khong hop le");
  }
}

function submit_data(){

}
