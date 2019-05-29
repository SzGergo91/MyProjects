let $globalchange=true;


$(document).ready(()=>
	{
		$('#bgimg1').on('click',()=>{
			if($globalchange){
				$('#bgimg1').css({
					backgroundColor: "black",
					color: "white",
				})
				$globalchange=false;
				$('#tartalom').slideToggle(500);
			}
			else{
				$('#tartalom').slideToggle(500,()=>{
					$('#bgimg1').css({
					backgroundColor: "transparent",
					color: "black",
				})

				$globalchange=true;
				});
			}
			
		})
});