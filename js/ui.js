class UI {
  Alert(elmnt) {
    let div = document.createElement("div");
    div.className = "aaa";
    div.appendChild(document.createTextNode(elmnt));
    let e = document.querySelector("#login");
    //بری تعیین مکان نمایش
    if (e.style.display == "none") {
      const result = document.querySelectorAll(".head")[1];
      result.appendChild(div);
      this.remove();
    } else {
      const result = document.querySelectorAll(".head")[0];
      result.appendChild(div);
      this.remove();
    }
  }
//   AlertB(elmnt) {
//     let div = document.createElement("div");
//     div.className = "aaa";
//     div.appendChild(document.createTextNode(elmnt));
//     const result = document.querySelector(".head");
//     result.appendChild(div);
//     this.remove();
//   }
  agree(elmnt) {
    elmnt.classList.add("agree");
  }
  disagree(elmnt) {
    elmnt.classList.remove("agree");
    elmnt.classList.add("error");
  }
  remove() {
    setTimeout(() => {
      document.querySelector(".head div").remove();
    }, 2500);
  }
}
