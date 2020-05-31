var node = document.querySelector("#container");
var draging = null; // 定义初始元素

var dataa=['1','2','3','4']
var  objhtmll="";
for(var j=0;j<4;j++){
    objhtmll += ` <div class="sort-num-item active" style="height: 39px;">`+dataa[j]+`</div> `
}
$(".sort-num").html(objhtmll);
var data=['选项A','选项B','选项C','选项D']
var  objhtml="";
for(var j=0;j<4;j++){
    objhtml += `<li class="item list-group-item sort-item-txt sort-item undefined"     draggable="true">`+dataa[j]+
    `<div class="sort-item-handle">
        <span class="sort-handle-line "></span>
        <span class="sort-handle-line "></span>
        <span class="sort-handle-line "></span>
    </div>
    </li>`
}
$(".list-group").html(objhtml);

node.ondragstart = function(e) {
    e.dataTransfer.setData("te", e.target.innerText); 
    draging = e.target; // 获取拖动元素
    $(draging).css('background','#018bff')// 拖动触发
}
node.ondragover = function(e) {
    e.preventDefault();// 阻止默认行为
    var target = e.target;
    // 判断target目标是不是li并且不等于拖动的元素
    if (target.nodeName === "LI"&&target !== draging) {
        if (_index(draging) < _index(target)) {
            target.parentNode.insertBefore(draging,target.nextSibling);
        } else {
            target.parentNode.insertBefore(draging, target);
        }
        $(draging).css('background','#fff')// 放置到目标位置触发
    }
}
function _index(e) {
    var index = 0;
    if (!e || !e.parentNode) {
        return -1;
    }
    while (e && (e = e.previousElementSibling)) {
        index++;
    }
    return index;
}


