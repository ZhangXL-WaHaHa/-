
			var i = window.location.href.split("=")[1];
			
			$(".message").eq(i).removeClass("die");
			$(".message").eq(i).addClass("appear");
			$(".message").eq(i).siblings('.message').removeClass("appear");
			$(".message").eq(i).siblings('.message').addClass("die");
			
			$(".left").click(function(){
				i++;
				if(i==10){
					i = 0;
				}
				$(".message").eq(i).removeClass("die");
				$(".message").eq(i).addClass("appear");
			})
			$(".left").click(function(){
				$(".message").eq(i).siblings('.message').removeClass("appear");
				$(".message").eq(i).siblings('.message').addClass("die");
			})
			
			$(".right").click(function(){
				i--;
				if(i==-1){
					i = 9;
				}
				$(".message").eq(i).removeClass("die");
				$(".message").eq(i).addClass("appear");
			})
			$(".right").click(function(){
				$(".message").eq(i).siblings('.message').removeClass("appear");
				$(".message").eq(i).siblings('.message').addClass("die");
			})
			