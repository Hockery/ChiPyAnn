

//通过路径来读取内容
var show_content = function(filename){

    //判断是否图片文件
    // var filename = "dfsd.png";//文件名
    if(filename.extMatch(txtExt))
        console.log(filename)
    else
        alert("不支持的文本文件");
}

show_content($('#abc').text())

new_element=document.createElement("script");
new_element.setAttribute("type","text/javascript");
new_element.setAttribute("src","js/show/show_txt.js");// 在这里引入了a.js
document.body.appendChild(new_element);