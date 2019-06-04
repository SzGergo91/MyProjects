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

	$('#CG').on('mouseover',()=>{
		$('#CGTooltip').fadeIn(1000);
	})

	$('#CG').on('mouseout',()=>{
		$('#CGTooltip').fadeOut();
	})
	$('#M81').on('mouseover',()=>{
		$('#M81Tooltip').fadeIn(1000);
	})

	$('#M81').on('mouseout',()=>{
		$('#M81Tooltip').fadeOut();
	})
	$('#M82').on('mouseover',()=>{
		$('#M82Tooltip').fadeIn(1000);
	})

	$('#M82').on('mouseout',()=>{
		$('#M82Tooltip').fadeOut();
	})
	$('#CIG').on('mouseover',()=>{
		$('#CIGTooltip').fadeIn(1000);
	})

	$('#CIG').on('mouseout',()=>{
		$('#CIGTooltip').fadeOut();
	})
	$('#BEG').on('mouseover',()=>{
		$('#BEGTooltip').fadeIn(1000);
	})

	$('#BEG').on('mouseout',()=>{
		$('#BEGTooltip').fadeOut();
	})
	$('#UYS').on('mouseover',()=>{
		$('#UYSTooltip').fadeIn(1000);
	})

	$('#UYS').on('mouseout',()=>{
		$('#UYSTooltip').fadeOut();
	})



	//Valtas
	$('#Milky-Way').on('click',()=>{
		$('#MilkyWay').animate({
			top: "0px",
			left: "0px",
			width: "100%",
			height: "1000px", 
			borderRadius: "0"
		},1500,()=>{
			$('#Universe').css({
				display: "none",
			})
			$('#Galaxy').css({
				display: "block",
			})
			$('#Info').html('Select our star in the Galaxy!');
		})
	})
});