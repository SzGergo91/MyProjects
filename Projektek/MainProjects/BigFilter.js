
let $globalExtras=0;

$(document).ready(()=>{
	$('.img').on('mouseenter',event=>{
		$(event.currentTarget).css({
			width: "100%",
			height: "200px"
		})
	}).on('mouseleave',event=>{
		$(event.currentTarget).css({
			width: "95%",
			height: "185px"
		})
	})
	$('#Extras').on('click',()=>{
		if($globalExtras === 0){
			$('#Extras').css({
				transform: "rotate(45deg)",
				transition: "1s",
			})
			$('#FilterMenu').css({
				visibility: "visible",
			})
			$('#FilterMenu').animate({
				left: "0px",
				opacity: "1",
			},500)
			$globalExtras=1;

		}
		else
		{
			$('#Extras').css({
				transform: "rotate(0deg)",
				transition: "1s",
			})
			$('#FilterMenu').css({
				visibility: "hidden",
			})
			$('#FilterMenu').animate({
				left: "500px",
				opacity: "0",
			},500)
			$globalExtras=0;
		}
	})	

	//Image views!
	$('.img').on('click',event=>{
		$(event.currentTarget).next().toggle();
	})
})