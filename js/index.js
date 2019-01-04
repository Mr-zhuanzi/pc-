 var liNodes = document.querySelectorAll('.list li');
 var arrow = document.querySelector('.arrow');
 var downNodes=document.querySelectorAll('.down');
  // 让小箭头默认第一个li下面
 arrow.style.left = liNodes[0].getBoundingClientRect().left+liNodes[0].offsetWidth/2-arrow.offsetWidth/2+'px';
 // 让小房子默认颜色为黑色
 downNodes[0].style.width='100%';
 window.onload=function () {
     // 点击li,li变色，小箭头的位移值等于
     for(var i=0;i<liNodes.length;i++){
         liNodes[i].index=i;
         // 点击li，小箭头去哪个地方
         liNodes[i].onclick=function () {
             for (var j=0;j<downNodes.length;j++){
                 downNodes[j].style.width='';
             }
             downNodes[this.index].style.width='100%';
             arrow.style.left=this.getBoundingClientRect().left+this.offsetWidth/2-arrow.offsetWidth/2+'px';
         }
     }
 }