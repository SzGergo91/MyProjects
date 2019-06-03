$(document).ready(()=>{
	$('#Andromeda').on('mouseover',()=>{
		$('#AdrTooltip').fadeIn(1000);
	})

	$('#Andromeda').on('mouseout',()=>{
		$('#AdrTooltip').fadeOut();
	})

	$('#Cosmos_Redshift').on('mouseover',()=>{
		$('#CRTooltip').fadeIn(1000);
	})

	$('#Cosmos_Redshift').on('mouseout',()=>{
		$('#CRTooltip').fadeOut();
	})

	$('#Milky-Way').on('mouseover',()=>{
		$('#MWTooltip').fadeIn(1000);
	})

	$('#Milky-Way').on('mouseout',()=>{
		$('#MWTooltip').fadeOut();
	})

	//Valtas
	$('#Milky-Way').on('click',()=>{
		$('#MilkyWay').animate({
			top: "300px",
			left: "100px",
			width: "100%",
			height: "400px",
		},1000,()=>{
			$('#Universe').css({
				display: "none",
			})
			$('#Galaxy').css({
				display: "Block",
			})
		})
	})
});