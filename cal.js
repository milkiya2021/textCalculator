//계산기
function counter() {
    let text = document.getElementById("input").value;
    document.getElementById("resultOutput").innerHTML = text.length;
  
    if (text.length > 1000) {
      document.getElementById("resultOutput").value = text.substring(0, 1000);
      alert("1000자가 넘었어요!");
      set();
    }
  }
  
  counter();
  //document.querySelector("#confirm").addEventListener("click", calcu);
  
  document.getElementById("reset").onclick = function set() {
    alert("리셋되었습니다!!");
  
    let clear = document.getElementById("input");
    clear.value = null;
  
    let text = document.getElementById("input").value;
    document.getElementById("resultOutput").innerHTML = text.length;
    text.length.value = null;
  };