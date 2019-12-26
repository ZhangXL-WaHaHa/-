var i = 0 ;
				var timer;
				 
				//用jquery方法设置第一张图片显示，其余隐藏
				$('.LP').eq(0).removeClass("die");
				$('.LP').eq(0).addClass("appear");
				$('.LP').eq(0).siblings('.LP').removeClass("appear");
				$('.LP').eq(0).siblings('.LP').addClass("die");
				   
				//调用showTime()函数（轮播函数）
				showTime();
				   
				//当鼠标经过下面的数字时，触发两个事件（鼠标悬停和鼠标离开）
				$('.btn-1').click(function(){
				//获取当前i的值，并显示，同时还要清除定时器
					i = $(this).index();
					Show();
					clearInterval(timer);
					showTime();
				}/* ,function(){
				    //
				    showTime();
				  } */);
				   
				 //鼠标点击左侧的箭头
				  $('.left').click(function(){
				    clearInterval(timer);
				    if(i == 0){
				      i = 10//注意此时i的值
				    }
				    i--;
				    Show();
				    showTime();
				  });
				   
				  //鼠标点击右侧的箭头
				  $('.right').click(function(){
				    clearInterval(timer);
				    if(i == 9){
				      i = -1;//注意此时i的值
				    }
				    i++;
				    Show();
				    showTime();
				  });
				 
				   
				//创建一个showTime函数
				function showTime(){
				  //定时器
				  timer = setInterval(function(){
				    //调用一个Show()函数
				    Show();
				    i++;
				    //当图片是最后一张的后面时，设置图片为第一张
				    if(i==10){
				      i=0;
				    }
				  },5000);
				}
				//创建一个Show函数
				function Show(){
				  //在这里可以用其他jquery的动画
				  $('.LP').eq(i).removeClass("die");
				  $('.LP').eq(i).addClass("appear");
				  $('.LP').eq(i).siblings('.LP').removeClass("appear");
				  $('.LP').eq(i).siblings('.LP').addClass("die");
				  $('.btn-1').eq(i).addClass('blue').siblings('.btn-1').removeClass('blue'); 
				}
				
				//控制文字信息介绍的变换
				