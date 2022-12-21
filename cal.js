//계산기
function counter() {
    let text = document.getElementById("input").value;
    document.getElementById("resultOutput").innerHTML = text.length;
  
    if (text.length > 200) {
      document.getElementById("resultOutput").value = text.substring(0, 200);
      alert("200자가 넘었어요!");
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