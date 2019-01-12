

//通过路径来读取内容
var show_content = function(filename){

    //判断是否图片文件
    // var filename = "dfsd.png";//文件名
    if(filename.extMatch(imgExt))
        alert("图片文件");
    else
        alert("非图片文件");
}

show_content($('#abc').text())