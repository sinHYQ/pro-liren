// 头部导航
var header_r_p = document.querySelectorAll(".header-r-p");
for (let i = 0; i < header_r_p.length; i++) {
  header_r_p[i] = i;
  header_r_p[i].onmouseover = function () {
    header_r_p[i].style.color = "red";
    header_r_p[i].style.animation = "spanMove 0.5s linear";
    header_r_p[i].style.animationFillMode = "forwards";
  };
  header_r_p[i].onmouseout = function () {
    header_r_p[i].style.color = "#000";
    header_r_p[i].style.animation = "spanMove2 0.5s linear";
  };
}

// 导航栏隐藏栏
var goods_list = document.querySelector(".goods-list");
var goods_list_children = goods_list.children; //[a,a,a,...]
var nav_none = document.querySelector(".nav-none");
var nav_ul = document.querySelectorAll(".nav-ul");
var goods_list = document.querySelector(".goods-list");

for (let j = 0; j < goods_list_children.length; j++) {
  goods_list_children.j1 = j;
  nav_ul.j2 = j;
  // 鼠标悬停
  goods_list_children[j].onmouseover = function () {
    nav_none.style.height = "228px";
    // 排他
    for (var m = 0; m < nav_ul.length; m++) {
      nav_ul[m].style.height = "0";
    }
    nav_ul[j].style.height = "228px";
  };
  goods_list.onmouseenter = function () {
    nav_none.style.height = "228px";
  };
  goods_list.onmouseleave = function () {
    nav_none.style.height = "0";
  };
  nav_none.onmouseenter = function () {
    nav_none.style.height = "228px";
  };
  nav_none.onmouseleave = function () {
    nav_none.style.height = "0";
  };
}

// 无缝轮播图
var left = document.querySelector(".left");
var right = document.querySelector(".right");
var circle = document.querySelectorAll(".circle");
var ul = document.querySelector(".lunbo-ul");
var viewBox = document.querySelector(".lunbo-banner");
// 排他函数
function backcircle(ele) {
  for (var j = 0; j < ele.length; j++) {
    ele[j].className = "circle";
  }
}
// 给右边按钮绑定事件
var flag1 = 0; //图片
var flag2 = 0; //小圆点
right.onclick = function () {
  flag1++;
  flag2++;
  if (flag2 == circle.length) {
    flag2 = 0;
  }
  if (flag1 == ul.children.length) {
    // 拉回
    ul.style.left = 0;
    flag1 = 1;
  }
  // 调用排他
  backcircle(circle);
  circle[flag2].className = "circle active";
  var target = flag1 * -1920;
  moveAnimation2(ul, target);
};
// 给左边按钮绑定事件
left.onclick = function () {
  if (flag1 == 0) {
    flag1 = ul.children.length - 1;
    ul.style.left = flag1 * -1920 + "px";
  }
  flag1--;
  flag2--;
  if (flag2 < 0) {
    flag2 = circle.length - 1;
  }
  backcircle(circle);
  circle[flag2].className = "circle active";
  var target = flag1 * -1920;
  moveAnimation2(ul, target);
};
// 自动轮播
function autoplay() {
  ul.Id = setInterval(function () {
    right.click();
  }, 4000);
}
autoplay();
// 焦点轮播
for (var i = 0; i < circle.length; i++) {
  circle[i].index = i;
  circle[i].onclick = function () {
    flag1 = this.index;
    flag2 = this.index;
    backcircle(circle);
    circle[flag2].className = "circle active";
    var target = flag1 * -1920;
    moveAnimation2(ul, target);
  };
}

// 新闻滚动
var new_ul = document.querySelector(".new-ul");
var index = 0;
new_ul.Id = setInterval(function () {
  index++;
  if (index == new_ul.children.length) {
    new_ul.style.top = 0;
    index = 1;
  } else {
    var target = index * -25;
  }
  moveAnimation3(new_ul, target);
}, 2000);

// 猜你喜欢
var likeProduce = document.querySelectorAll(".likeProduce");
var flex_span = document.querySelectorAll(".flex-span");
var likeList = document.querySelector(".likeList");
for (let i = 0; i < flex_span.length; i++) {
  flex_span[i].index1 = i;
  likeProduce[i].index2 = i;
  flex_span[i].onclick = function () {
    // 排他
    for (var j = 0; j < likeProduce.length; j++) {
      likeProduce[j].style.display = "none";
      var k = j + 1;
      var moren = "moren" + k;
      flex_span[j].className = moren;
      console.log(flex_span[j]);
    }
    likeProduce[i].style.display = "block";
    var j=i+1;
    var flex_spanbian='flex_span'+j;
    console.log(flex_spanbian);
    flex_span[i].className = flex_spanbian;
    console.log(flex_span[i]);
  };
}

// 换一批
var huan = document.querySelector(".huan");
var huan1 = 0;
huan.onclick = function () {
  huan1++;
  if (huan1 < likeProduce.length) {
    for (var j = 0; j < likeProduce.length; j++) {
      likeProduce[j].style.display = "none";
    }
    likeProduce[huan1].style.display = "block";
  } else {
    huan1 == 0;
    likeProduce[huan1].style.display = "block";
  }
};

// 精致美食
var new_list_c = document.querySelectorAll(".new-list-c");
var new_none = document.querySelectorAll(".new-none");
var none_text = document.querySelectorAll(".none-text");
for (let i = 0; i < new_list_c.length; i++) {
  new_list_c[i].onmouseover = function () {
    // 排他
    for (var m = 0; m < new_none.length; m++) {
      new_none[m].style.opacity = "0";
    }
    new_none[i].style.opacity = "0.6";
  };
  new_list_c[i].onmouseout = function () {
    new_none[i].style.opacity = "0";
  };
}
// 视频
var video = document.querySelector(".video");
var mask = document.querySelector(".mask1");
new_list_c[3].onclick = function () {
  video.style.display = "block";
  mask.style.display = "block";
};
mask.onclick = function () {
  mask.style.display = "none";
  video.style.display = "none";
};

// 侧边栏
var side = document.querySelector("aside");
var backTop = document.querySelector(".backTop");
console.log(backTop);
window.onscroll = function () {
  console.log(window.pageYOffset);
  if (window.pageYOffset > 700) {
    side.style.display = "block";
  } else {
    side.style.display = "none";
  }
};
backTop.onclick = function () {
  window.pageYOffset = 0;
};
