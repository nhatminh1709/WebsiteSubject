
function convert(){
  let r = document.getElementById("input");
  let sl = document.getElementById("convertTo");
  if(r.value === ""){
      alert("Nhap n vao");
      sl.value = "first";
    } else{
      if(sl.value == "rad"){
      document.getElementById("sin").value = Math.sin(r.value) + " (rad) ";
      document.getElementById("cos").value = Math.cos(r.value) + " (rad) ";
      document.getElementById("tan").value = Math.sin(r.value)/Math.cos(r.value) + " (rad) ";
    } else{
      document.getElementById("sin").value = Math.sin(r.value*Math.PI/180).toFixed(5) + " (deg) ";
      document.getElementById("cos").value = Math.cos(r.value*Math.PI/180).toFixed(5) + " (deg) ";
      document.getElementById("tan").value = Math.tan(r.value*Math.PI/180).toFixed(5)  + " (deg) ";
    }
  }
  
}
