//let myHeading = document.querySelector("h1");
//myHeading.textContent = "Hello world!";

//alter——弹出指定消息的对话框
/*let iceCream = "chocolate";
if (iceCream === "chocolate") {
  alert("我最喜欢巧克力冰淇淋了。");
} else {
  alert("但是巧克力才是我的最爱呀……");
}*/



//事件
document.querySelector("img[src = '../images/test/11.jpg']").addEventListener("click", function () {
    // 获取img元素的alt属性值
    let altText = this.alt;
    alert(altText);
});

//匿名函数——>箭头函数
document.querySelector("h1").addEventListener("click", () => {
    alert("我是大标题。");
});
  

//添加一个图像切换器
let myImage = document.querySelector("img");//获取标签img(默认是第一张图片，可设置src属性切换图片)

myImage.onclick = function () {
    let mySrc = myImage.getAttribute("src");//获取当前图像的src属性
    if (mySrc === "../images/test/11.jpg") {
      myImage.setAttribute("src", "../images/test/1.png");
    } else {
      myImage.setAttribute("src", "../images/test/11.jpg");
    }
};




//添加一个按钮和一个标题
let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

//创建函数setUserName()：点击按钮时，设置标题内容为“Mozilla 酷毙了，” + 用户输入内容
/*function setUserName() {
    let myName = prompt("请输入你的名字。");
    localStorage.setItem("name", myName);
    myHeading.textContent = "Mozilla 酷毙了，" + myName;
}*/
//避免用户输入为空
function setUserName() {
  let myName = prompt("请输入你的名字。");
  if (!myName) {
    setUserName();
  }
  else{
    localStorage.setItem("name", myName);
    myHeading.textContent = "Mozilla 酷毙了，" + myName;
  }

}

//以下是初始化代码，因为它在页面初次读取时进行构造工作
//如果本地存储中没有名字，则调用setUserName()函数设置名字；否则，直接显示本地存储中的名字。
if (!localStorage.getItem("name")) {
    setUserName();
} 
else {
    let storedName = localStorage.getItem("name");
    myHeading.textContent = "Mozilla 酷毙了，" + storedName;
}

//给按钮绑定点击事件（调用setUserName()函数）
myButton.onclick = function () {
    setUserName();
};
  
  

