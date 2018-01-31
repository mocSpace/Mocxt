/**
 * Created by ycb on 2017/11/13.
 */
function fadeOut(ele) {
  if (ele) {
    var cs = 1;
    var timer = setInterval(function () {
      if (cs < 11) {
        ele.style.opacity = (10 - cs) / 10;
        cs++;
      } else {
        clearInterval(timer);
      }
    }, 10);
  }
}


function setHeightFull(el) {
  //获取窗口高度
  var winHeight = 0;
  if (window.innerHeight)
    winHeight = window.innerHeight;
  else if ((document.body) && (document.body.clientHeight))
    winHeight = document.body.clientHeight;
  el.style.height = winHeight + "px";
}
