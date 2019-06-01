let $globalvalue=0;
let $globallabel="";

const execute=()=>{
		switch($globallabel)
			{
				case "Seconds" :
					$('#Seconds').html(`${$globalvalue}`);
					$('#Minutes').html(`${$globalvalue/60}`);
					$('#Hours').html(`${$globalvalue/3600}`);
					$('#Days').html(`${$globalvalue/86400}`);
					$('#Weeks').html(`${$globalvalue/(86400*7)}`);
					$('#Months').html(`${$globalvalue/(86400*30)}`);
					$('#SobekSec').html(`${$globalvalue/(86400*105)}`);
					$('#Years').html(`${$globalvalue/(86400*365.25)}`);
					$('#Decade').html(`${$globalvalue/(86400*3652.5)}`);
					$('#Generation').html(`${$globalvalue/(86400*3652.5*2.5)}`);
					$('#Century').html(`${$globalvalue/(86400*36525)}`);
					$('#Millenium').html(`${$globalvalue/(86400*365250)}`);
					$('#SobekDays').html(`${$globalvalue/(86400*86400*105)}`);
					break;
				case "Minutes" :
					$('#Seconds').html(`${$globalvalue*60}`);
					$('#Minutes').html(`${$globalvalue}`);
					$('#Hours').html(`${$globalvalue/60}`);
					$('#Days').html(`${$globalvalue/1440}`);
					$('#Weeks').html(`${$globalvalue/(1440*7)}`);
					$('#Months').html(`${$globalvalue/(1440*30)}`);
					$('#SobekSec').html(`${$globalvalue/(1440*105)}`);
					$('#Years').html(`${$globalvalue/(1440*365.25)}`);
					$('#Decade').html(`${$globalvalue/(1440*3652.5)}`);
					$('#Generation').html(`${$globalvalue/(1440*3652.5*2.5)}`);
					$('#Century').html(`${$globalvalue/(1440*36525)}`);
					$('#Millenium').html(`${$globalvalue/(1440*365250)}`);
					$('#SobekDays').html(`${$globalvalue/(1440*86400*105)}`);
					break;
				case "Hours" :
					$('#Seconds').html(`${$globalvalue*3600}`);
					$('#Minutes').html(`${$globalvalue*60}`);
					$('#Hours').html(`${$globalvalue}`);
					$('#Days').html(`${$globalvalue/24}`);
					$('#Weeks').html(`${$globalvalue/(24*7)}`);
					$('#Months').html(`${$globalvalue/(24*30)}`);
					$('#SobekSec').html(`${$globalvalue/(24*105)}`);
					$('#Years').html(`${$globalvalue/(24*365.25)}`);
					$('#Decade').html(`${$globalvalue/(24*3652.5)}`);
					$('#Generation').html(`${$globalvalue/(24*3652.5*2.5)}`);
					$('#Century').html(`${$globalvalue/(24*36525)}`);
					$('#Millenium').html(`${$globalvalue/(24*365250)}`);
					$('#SobekDays').html(`${$globalvalue/(24*86400*105)}`);
					break;
				case "Days" :
					$('#Seconds').html(`${$globalvalue*86400}`);
					$('#Minutes').html(`${$globalvalue*1440}`);
					$('#Hours').html(`${$globalvalue*24}`);
					$('#Days').html(`${$globalvalue}`);
					$('#Weeks').html(`${$globalvalue/(7)}`);
					$('#Months').html(`${$globalvalue/(30)}`);
					$('#SobekSec').html(`${$globalvalue/(105)}`);
					$('#Years').html(`${$globalvalue/(365.25)}`);
					$('#Decade').html(`${$globalvalue/(3652.5)}`);
					$('#Generation').html(`${$globalvalue/(3652.5*2.5)}`);
					$('#Century').html(`${$globalvalue/(36525)}`);
					$('#Millenium').html(`${$globalvalue/(365250)}`);
					$('#SobekDays').html(`${$globalvalue/(86400*105)}`);
					break;
				case "Weeks" :
					$('#Seconds').html(`${$globalvalue*(86400*7)}`);
					$('#Minutes').html(`${$globalvalue*(1440*7)}`);
					$('#Hours').html(`${$globalvalue*168}`);
					$('#Days').html(`${$globalvalue*7}`);
					$('#Weeks').html(`${$globalvalue}`);
					$('#Months').html(`${$globalvalue/(4.28571428571)}`);
					$('#SobekSec').html(`${$globalvalue/(15)}`);
					$('#Years').html(`${$globalvalue/(52.1785714286)}`);
					$('#Decade').html(`${$globalvalue/(521.785714286)}`);
					$('#Generation').html(`${$globalvalue/(521.785714286*2.5)}`);
					$('#Century').html(`${$globalvalue/(5217.85714286)}`);
					$('#Millenium').html(`${$globalvalue/(52178.5714286)}`);
					$('#SobekDays').html(`${$globalvalue/(86400*15)}`);
					break;
				case "Months" :
					$('#Seconds').html(`${$globalvalue*(86400*30)}`);
					$('#Minutes').html(`${$globalvalue*(1440*30)}`);
					$('#Hours').html(`${$globalvalue*720}`);
					$('#Days').html(`${$globalvalue*30}`);
					$('#Weeks').html(`${$globalvalue*4.28571428571}`);
					$('#Months').html(`${$globalvalue}`);
					$('#SobekSec').html(`${$globalvalue/(3.5)}`);
					$('#Years').html(`${$globalvalue/(12.175)}`);
					$('#Decade').html(`${$globalvalue/(121.75)}`);
					$('#Generation').html(`${$globalvalue/(121.75*2.5)}`);
					$('#Century').html(`${$globalvalue/(1217.5)}`);
					$('#Millenium').html(`${$globalvalue/(12175)}`);
					$('#SobekDays').html(`${$globalvalue/(86400*3.5)}`);
					break;

				case "SobekSec" :
					$('#Seconds').html(`${$globalvalue*(86400*105)}`);
					$('#Minutes').html(`${$globalvalue*(1440*105)}`);
					$('#Hours').html(`${$globalvalue*2520}`);
					$('#Days').html(`${$globalvalue*105}`);
					$('#Weeks').html(`${$globalvalue*15}`);
					$('#Months').html(`${$globalvalue*3.5}`);
					$('#SobekSec').html(`${$globalvalue}`);
					$('#Years').html(`${$globalvalue/(3.47857142857)}`);
					$('#Decade').html(`${$globalvalue/(34.7857142857)}`);
					$('#Generation').html(`${$globalvalue/(34.7857142857*2.5)}`);
					$('#Century').html(`${$globalvalue/(347.857142857)}`);
					$('#Millenium').html(`${$globalvalue/(3478.57142857)}`);
					$('#SobekDays').html(`${$globalvalue/(86400)}`);
					break;

				case "Years" :
					$('#Seconds').html(`${$globalvalue*(86400*365.25)}`);
					$('#Minutes').html(`${$globalvalue*(1440*365.25)}`);
					$('#Hours').html(`${$globalvalue*8766}`);
					$('#Days').html(`${$globalvalue*365.25}`);
					$('#Weeks').html(`${$globalvalue*52.1785714286}`);
					$('#Months').html(`${$globalvalue*12}`);
					$('#SobekSec').html(`${$globalvalue*3.47857142857}`);
					$('#Years').html(`${$globalvalue}`);
					$('#Decade').html(`${$globalvalue/(10)}`);
					$('#Generation').html(`${$globalvalue/(25)}`);
					$('#Century').html(`${$globalvalue/(100)}`);
					$('#Millenium').html(`${$globalvalue/(1000)}`);
					$('#SobekDays').html(`${$globalvalue/(24837.7823409)}`);
					break;
				case "Decade" :
					$('#Seconds').html(`${$globalvalue*(86400*3652.5)}`);
					$('#Minutes').html(`${$globalvalue*(1440*3652.5)}`);
					$('#Hours').html(`${$globalvalue*87660}`);
					$('#Days').html(`${$globalvalue*3652.5}`);
					$('#Weeks').html(`${$globalvalue*521.785714286}`);
					$('#Months').html(`${$globalvalue*120}`);
					$('#SobekSec').html(`${$globalvalue*34.7857142857}`);
					$('#Years').html(`${$globalvalue*10}`);
					$('#Decade').html(`${$globalvalue}`);
					$('#Generation').html(`${$globalvalue/(2.5)}`);
					$('#Century').html(`${$globalvalue/(10)}`);
					$('#Millenium').html(`${$globalvalue/(100)}`);
					$('#SobekDays').html(`${$globalvalue/(2483.77823409)}`);
					break;
				case "Generation" :
					$('#Seconds').html(`${$globalvalue*(86400*3652.5*2.5)}`);
					$('#Minutes').html(`${$globalvalue*(1440*3652.5*2.5)}`);
					$('#Hours').html(`${$globalvalue*87660*2.5}`);
					$('#Days').html(`${$globalvalue*3652.5*2.5}`);
					$('#Weeks').html(`${$globalvalue*521.785714286*2.5}`);
					$('#Months').html(`${$globalvalue*120*2.5}`);
					$('#SobekSec').html(`${$globalvalue*34.7857142857*2.5}`);
					$('#Years').html(`${$globalvalue*25}`);
					$('#Decade').html(`${$globalvalue*2.5}`);
					$('#Generation').html(`${$globalvalue}`);
					$('#Century').html(`${$globalvalue/(4)}`);
					$('#Millenium').html(`${$globalvalue/(40)}`);
					$('#SobekDays').html(`${$globalvalue/(993.511293636)}`);
					break;
				case "Century" :
					$('#Seconds').html(`${$globalvalue*(86400*36525)}`);
					$('#Minutes').html(`${$globalvalue*(1440*36525)}`);
					$('#Hours').html(`${$globalvalue*876600}`);
					$('#Days').html(`${$globalvalue*36525}`);
					$('#Weeks').html(`${$globalvalue*5217.85714286}`);
					$('#Months').html(`${$globalvalue*1200}`);
					$('#SobekSec').html(`${$globalvalue*347.857142857}`);
					$('#Years').html(`${$globalvalue*100}`);
					$('#Decade').html(`${$globalvalue*10}`);
					$('#Generation').html(`${$globalvalue*(4)}`);
					$('#Century').html(`${$globalvalue}`);
					$('#Millenium').html(`${$globalvalue/(10)}`);
					$('#SobekDays').html(`${$globalvalue/(248.377823409)}`);
					break;
				case "Millenium" :
					$('#Seconds').html(`${$globalvalue*(86400*365250)}`);
					$('#Minutes').html(`${$globalvalue*(1440*365250)}`);
					$('#Hours').html(`${$globalvalue*8766000}`);
					$('#Days').html(`${$globalvalue*365250}`);
					$('#Weeks').html(`${$globalvalue*52178.5714286}`);
					$('#Months').html(`${$globalvalue*12000}`);
					$('#SobekSec').html(`${$globalvalue*3478.57142857}`);
					$('#Years').html(`${$globalvalue*1000}`);
					$('#Decade').html(`${$globalvalue*100}`);
					$('#Generation').html(`${$globalvalue*(40)}`);
					$('#Century').html(`${$globalvalue*10}`);
					$('#Millenium').html(`${$globalvalue}`);
					$('#SobekDays').html(`${$globalvalue/(24.8377823409)}`);
					break;
				case "SobekDays" :
					$('#Seconds').html(`${$globalvalue*(86400*9072000.00001)}`);
					$('#Minutes').html(`${$globalvalue*(1440*9072000.00001)}`);
					$('#Hours').html(`${$globalvalue*217728000}`);
					$('#Days').html(`${$globalvalue*9072000}`);
					$('#Weeks').html(`${$globalvalue*1296000}`);
					$('#Months').html(`${$globalvalue*298053.388091}`);
					$('#SobekSec').html(`${$globalvalue*86400}`);
					$('#Years').html(`${$globalvalue*24837.7823409}`);
					$('#Decade').html(`${$globalvalue*2483.77823409}`);
					$('#Generation').html(`${$globalvalue*(993.511293636)}`);
					$('#Century').html(`${$globalvalue*248.377823409}`);
					$('#Millenium').html(`${$globalvalue*24.8377823409}`);
					$('#SobekDays').html(`${$globalvalue}`);
					break;

			}
}


$(document).ready(()=>{
	$('.buttons').on('mousedown',event=>{
		$(event.currentTarget).css({
			width: "195px",
			height: "97.5px",
			marginRight: "8px",
			backgroundColor: "black",
			color: "white",
		})

	})
	$('.buttons').on('mouseup',event=>{
		$(event.currentTarget).css({
			width: "200px",
			height: "100px",
			marginRight: "3px",
			backgroundColor: "green",
			color: "black",
		})
		
	})

	$('.buttons').on('mouseleave',event=>{
		$(event.currentTarget).css({
			width: "200px",
			height: "100px",
			marginRight: "3px",
			backgroundColor: "green",
			color: "black",
		})
		
	})

	$('.buttons').on('click',event=>{
		$globallabel=$(event.currentTarget).html();
		$('#Inputlabel').html($globallabel);
		
		if($('#Input').val().length!== 0)
		{
			$globalvalue=$('#Input').val();
			execute();
		}
		
	})



	//With DOM

});
