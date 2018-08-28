let node = document.querySelector("#Mycontextmenu")
addEventListener("mouseup", function(e){
  document.oncontextmenu = ()=>false
  let x = e.clientX + document.documentElement.scrollLeft
  let y = e.clientY + document.documentElement.scrollTop
  if (e.button !== 2) {
      if (node.style.visibility  === "visible" && !is_Inmenu(x,y,node)) {  
        node.setAttribute("style","visibility:hidden;width:0px;height:0px;")
      }   
  } else {
      if (!is_Inmenu(x,y,node)) {
        let x = e.clientX - 160
        let y = e.clientY - 150 + 10
        node.setAttribute("style",`visibility:visible;left:${x}px;top:${y}px;width:300px;height:300px;`)
      }
  }
})

function is_Inmenu(x,y,node){
  return x > node.getBoundingClientRect().left + document.documentElement.scrollLeft &&
         x < node.getBoundingClientRect().right + document.documentElement.scrollLeft &&
         y > node.getBoundingClientRect().top + document.documentElement.scrollTop &&
         y < node.getBoundingClientRect().bottom + document.documentElement.scrollTop
         ? true : false
}


