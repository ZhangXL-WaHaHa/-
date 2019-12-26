//多行文本溢出处理
function ellipsizeTextBox(className) {
    var eles = document.getElementsByClassName(className);
    var el = null;
    for (var i = 0; i < eles.length; i++) {
        el = eles[i];
        var wordArray = el.innerHTML.split('');
        while(el.scrollHeight > el.offsetHeight) {
            wordArray.pop();
            el.innerHTML = wordArray.join('') + '...';
        }
    }
}
ellipsizeTextBox("square2-JS");