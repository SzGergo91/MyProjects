//Global variables
let $globalWidth=screen.width;



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

	$('#GalacticCentre').on('mouseover',()=>{
		$('#GALCTooltip').fadeIn(1000);
	})

	$('#GalacticCentre').on('mouseout',()=>{
		$('#GALCTooltip').fadeOut();
	})

	$('#WOHG64').on('mouseover',()=>{
		$('#WOHTooltip').fadeIn(1000);
	})

	$('#WOHG64').on('mouseout',()=>{
		$('#WOHTooltip').fadeOut();
	})
	$('#Nebula').on('mouseover',()=>{
		$('#NebulaTooltip').fadeIn(1000);
	})

	$('#Nebula').on('mouseout',()=>{
		$('#NebulaTooltip').fadeOut();
	})


	$('#SunClick').on('mouseover',()=>{
		$('#OurSunTooltip').fadeIn(1000);
	}).on('mouseout',()=>{
		$('#OurSunTooltip').fadeOut(1000);
	})






	//Enter the Universe and Galaxies!
	$('#Milky-Way').on('click',()=>{
		//few repars
		if(($globalWidth>=768) && ($globalWidth<=1024))
		{
			$('#CG').css({
				display: "none",
			})
			$('#CGTooltip').css({
				display: "none",
			})
			$('#M81').css({
				display: "none",
			})
			$('#M81Tooltip').css({
				display: "none",
			})
			$('#M82').css({
				display: "none",
			})
			$('#M82Tooltip').css({
				display: "none",
			})
			$('#CIG').css({
				display: "none",
			})
			$('#CIGTooltip').css({
				display: "none",
			})
			$('#BEG').css({
				display: "none",
			})
			$('#BEGTooltip').css({
				display: "none",
			})
			$('#UYS').css({
				display: "none",
			})
			$('#UYSTooltip').css({
				display: "none",
			})


		}

		if(($globalWidth>=320) && ($globalWidth<=480))
		{
			$('#MilkyWay').animate({
				top: "0px",
				left: "0px",
				width: "100%",
				height: "160vw", 
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
		}
		else
		{
			if(($globalWidth>=481) && ($globalWidth<=767))
			{
				$('#MilkyWay').animate({
					top: "0px",
					left: "0px",
					width: "100%",
					height: "113vw", 
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

			}
			else
			{
				$('#MilkyWay').animate({
					top: "0vw",
					left: "0vw",
					width: "100%",
					height: "73.2vw", 
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
			}
		}

	})

	$('#SunClick').on("click",()=>{
			//Few repairs!
			$('#GalacticCentre').css({
				zIndex: "-1",
			})
			$('#WOHG64').css({
				zIndex: "-1",
			})
			$('#Nebula').css({
				zIndex: "-1",
			})
			$('#SunClick').css({
				zIndex: "-1",
			})
			$('#OurSunTooltip').css({
				zIndex: "-1",
			})

		if(($globalWidth>=320) && ($globalWidth<=480))
		{
			$('#Sun').animate({
				top: "5vw",
				left: "25vw",
				width: "53%",
				height: "55vw",
			},1000,()=>{
				$('#Info').html('Welcome to our Solar system!(Milky Way)')
				$('#SolarSystem').fadeIn(1000);
			})
		}
		else
		{
			if(($globalWidth>=481) && ($globalWidth<=767)){
				$('#Sun').animate({
					top: "22vw",
					left: "0vw",
					width: "51%",
					height: "53vw",
				},1000,()=>{
					$('#Info').html('Welcome to our Solar system!(Milky Way)')
					$('#SolarSystem').fadeIn(1000);
				})
			}
			else
			{
				$('#Sun').animate({
					top: "11vw",
					left: "0vw",
					width: "50%",
					height: "51.25vw",
				},1000,()=>{
					$('#Info').html('Welcome to our Solar system!(Milky Way)')
					$('#SolarSystem').fadeIn(1000);
				})
			}

		}
		
	})



	//Main things!
	$('#SolarSun').on('click',()=>{
		$('#Titles').html('The Sun');
		$('#Basic1').html('-Age:≈ 4.6 billion years!!');
		$('#Basic2').html(`-Mass 1.9885×10<sup>30</sup>kg, 333,000 × Earth`);
		$('#Basic3').html(`-The Sun is the star at the center of the Solar System.
		 It is a nearly perfect sphere of hot plasma,with internal convective motion
		 that generates a magnetic field via a dynamo process.It is by far the most 
		 important source of energy for life on Earth. Its diameter is about 1.39 million
		 kilometers (864,000 miles), or 109 times that of Earth, and its mass is about 330,000
		 times that of Earth. It accounts for about 99.86% of the total mass of the Solar System.
		 Roughly three quarters of the Sun's mass consists of hydrogen (~73%); the rest is mostly
		 helium (~25%), with much smaller quantities of heavier elements, including oxygen, carbon, neon, and iron`);
		$('#Information').slideDown(800);
		$('#SolarSun').fadeIn(1000,()=>{
			$('#SolarSun').attr('src','Sun.png');
		})

	})

	$('#Mercury').on('click',()=>{
		$('#Titles').html('Mercury');
		$('#Basic1').html('-Age: 4.6 billion years old!!');
		$('#Basic2').html(`-Mass 3.3011×10<sup>23</sup> kg, 0.055 Earths`);
		$('#Basic3').html(`-Mercury is the smallest and innermost planet in the Solar System.
		 Its orbital period around the Sun of 87.97 days is the shortest of all the planets in the Solar System.
		 It is named after the Roman deity Mercury, the messenger of the gods.
		 Like Venus, Mercury orbits the Sun within Earth's orbit as an inferior planet, and never exceeds 28°
		 away from the Sun when viewed from Earth. This proximity to the Sun means the planet can only be seen
		 near the western or eastern horizon during the early evening or early morning.
		 At this time it may appear as a bright star-like object, but is often far more difficult to observe than Venus.
		 The planet telescopically displays the complete range of phases, similar to Venus and the Moon, as it moves in its
		 inner orbit relative to Earth, which reoccurs over the so-called synodic period approximately every 116 days.
		 Mercury is tidally locked with the Sun in a 3:2 spin-orbit resonance, and rotates in a way that is unique
		 in the Solar System. As seen relative to the fixed stars, it rotates on its axis exactly three times for every two
		 revolutions it makes around the Sun. As seen from the Sun, in a frame of reference that rotates with the orbital motion,
		 it appears to rotate only once every two Mercurian years. An observer on Mercury would therefore see only one day every
		 two Mercurian years.`);
		$('#Information').slideDown(800);
		$('#SolarSun').fadeIn(1000,()=>{
			$('#SolarSun').attr('src','Planets/Mercury.png');
		})
	})

	$('#Venus').on('click',()=>{
		$('#Titles').html('Venus');
		$('#Basic1').html('-Age: 4.5999 billion years old!');
		$('#Basic2').html(`-Mass 4.8675×10<sup>24</sup> kg,0.815 Earths`);
		$('#Basic3').html(`-Venus is the second planet from the Sun,
		 orbiting it every 224.7 Earth days. It has the longest rotation period (243 days)
		 of any planet in the Solar System and rotates in the opposite direction to most other
		 planets (meaning the Sun rises in the west and sets in the east).It does not have
		 any natural satellites. It is named after the Roman goddess of love and beauty. It is the
		 second-brightest natural object in the night sky after the Moon, reaching an apparent magnitude
		 of −4.6 – bright enough to cast shadows at night and, rarely, visible to the naked eye in
		 broad daylight.Orbiting within Earth's orbit, Venus is an inferior planet and never
		 appears to venture far from the Sun; its maximum angular distance from the Sun (elongation) is 47.8°`)
		$('#Information').slideDown(800);
		$('#SolarSun').fadeIn(1000,()=>{
			$('#SolarSun').attr('src','Planets/Venus.png');
		})
	})

	$('#Earth').on('click',()=>{
		$('#Titles').html('Earth');
		$('#Basic1').html('-Age: 4,543 billion years!');
		$('#Basic2').html(`-Mass 5.97237×10<sup>24</sup> kg`);
		$('#Basic3').html(`-TOP SECRET! :)`)
		$('#Information').slideDown(800);
		$('#SolarSun').fadeIn(1000,()=>{
			$('#SolarSun').attr('src','Planets/Earth.png');
		})
	})

	$('#Mars').on('click',()=>{
		$('#Titles').html('Mars');
		$('#Basic1').html('-Age: 4,603 billion years old!');
		$('#Basic2').html(`-Mass 6.4171×10<sup>23</sup> kg`);
		$('#Basic3').html(`-Mars is the fourth planet from the Sun and the second-smallest planet in the Solar System after Mercury.
		 In English, Mars carries a name of the Roman god of war, and is often referred to as the "Red Planet"
		 because the iron oxide prevalent on its surface gives it a reddish appearance that is distinctive among the
		 astronomical bodies visible to the naked eye. Mars is a terrestrial planet with a thin atmosphere,
		 having surface features reminiscent both of the impact craters of the Moon and the valleys, deserts,
		 and polar ice caps of Earth.`)
		$('#Information').slideDown(800);
			$('#SolarSun').fadeIn(1000,()=>{
			$('#SolarSun').attr('src','Planets/Mars.png');
		})
	})

	$('#Jupiter').on('click',()=>{
		$('#Titles').html('Jupiter');
		$('#Basic1').html('-Age: 4,503 billion years old!');
		$('#Basic2').html(`-Mass 1.8982×10<sup>27</sup> kg (4.1848×1027 lb), 317.8 Earths, 1/1047 Sun`);
		$('#Basic3').html(`-Jupiter is the fifth planet from the Sun and the largest in the Solar System.
		 It is a giant planet with a mass one-thousandth that of the Sun, but two-and-a-half times that of all the other
		 planets in the Solar System combined. Jupiter and Saturn are gas giants; the other two giant planets,
		 Uranus and Neptune, are ice giants. Jupiter has been known to astronomers since antiquity. It is named
		 after the Roman god Jupiter. When viewed from Earth, Jupiter can reach an apparent magnitude of −2.94,
		 bright enough for its reflected light to cast shadows, and making it on average the third-brightest natural
		 object in the night sky after the Moon and Venus`);
		$('#Information').slideDown(800);
		$('#SolarSun').fadeIn(1000,()=>{
			$('#SolarSun').attr('src','Planets/Jupiter.png');
		})
	})

	$('#Saturn').on('click',()=>{
		$('#Titles').html('Saturn');
		$('#Basic1').html('-Age: 4,503 billion years old!');
		$('#Basic2').html(`-Mass 1.8982×10^27 kg (4.1848×1027 lb), 317.8 Earths, 1/1047 Sun`);
		$('#Basic3').html(`-Saturn is the sixth planet from the Sun and the second-largest in the Solar System,
		 after Jupiter. It is a gas giant with an average radius about nine times that of Earth. It has only one-eighth
		 the average density of Earth, but with its larger volume Saturn is over 95 times more massive. Saturn is named
		 after the Roman god of agriculture; its astronomical symbol (♄) represents the god's sickle.
		 Saturn's interior is probably composed of a core of iron–nickel and rock (silicon and oxygen compounds).
		 This core is surrounded by a deep layer of metallic hydrogen, an intermediate layer of liquid hydrogen and liquid helium,
		 and finally a gaseous outer layer. Saturn has a pale yellow hue due to ammonia crystals in its upper atmosphere.
		 Electrical current within the metallic hydrogen layer is thought to give rise to Saturn's planetary magnetic field,
		 which is weaker than Earth's, but has a magnetic moment 580 times that of Earth due to Saturn's larger size.
		 Saturn's magnetic field strength is around one-twentieth of Jupiter's. The outer atmosphere is generally bland and lacking
		 in contrast, although long-lived features can appear. Wind speeds on Saturn can reach 1,800 km/h (1,100 mph; 500 m/s),
		 higher than on Jupiter, but not as high as those on Neptune. In January 2019, astronomers reported that a day on the
		 planet Saturn has been determined to be  10h 33m 38s <sup>+ 1m 52s</sup>
		 <sub style='position:relative;top:5px;left:-91px;'>− 1m 19s</sub> ,<span style="position:relative;left:-91px;"> based on studies
		 of the planet's C Ring.</span>`);
		$('#Information').slideDown(800);
		$('#SolarSun').fadeIn(1000,()=>{
			$('#SolarSun').attr('src','Planets/Saturn.png');
		})
	})

	$('#Uranus').on('click',()=>{
		$('#Titles').html('Uranus');
		$('#Basic1').html('-Age: 4,503 billion years old!');
		$('#Basic2').html(`-Mass (8.6810±0.0013)×10<sup>25</sup> kg, 14.536 Earths, GM=5,793,939±13 km<sup>3</sup>/s<sup>2</sup>`);
		$('#Basic3').html(`-Uranus (from the Latin name Ūranus for the Greek god Οὐρανός) is the seventh planet
		 from the Sun. It has the third-largest planetary radius and fourth-largest planetary mass in the Solar System.
		 Uranus is similar in composition to Neptune, and both have bulk chemical compositions which differ from that of the
		 larger gas giants Jupiter and Saturn. For this reason, scientists often classify Uranus and Neptune as "ice giants"
		 to distinguish them from the gas giants. Uranus' atmosphere is similar to Jupiter's and Saturn's in its primary
		 composition of hydrogen and helium, but it contains more "ices" such as water, ammonia, and methane, along with traces
		 of other hydrocarbons.It is the coldest planetary atmosphere in the Solar System, with a minimum temperature of
		 49 K (−224 °C; −371 °F), and has a complex, layered cloud structure with water thought to make up the lowest clouds
		 and methane the uppermost layer of clouds. The interior of Uranus is mainly composed of ices and rock`);
		$('#Information').slideDown(800);
		$('#SolarSun').fadeIn(1000,()=>{
			$('#SolarSun').attr('src','Planets/Uranus.png');
		})
	})
	$('#Neptune').on('click',()=>{
		$('#Titles').html('Neptune');
		$('#Basic1').html('-Age: 4,503 billion years old!');
		$('#Basic2').html(`-Mass 1.02413×10<sup>26</sup> kg, 17.147 Earths, 5.15×10<sup>−5</sup> Suns`);
		$('#Basic3').html(`-Neptune is the eighth and farthest known planet from the Sun in the Solar System.
		 In the Solar System, it is the fourth-largest planet by diameter, the third-most-massive planet, and the densest
		 giant planet. Neptune is 17 times the mass of Earth, slightly more massive than its near-twin Uranus. 
		 Neptune is denser and physically smaller than Uranus because its greater mass causes more gravitational compression
		 of its atmosphere. Neptune orbits the Sun once every 164.8 years at an average distance of 30.1 AU (4.5 billion km).
		 It is named after the Roman god of the sea and has the astronomical symbol ♆, a stylised version of the god Neptune's
		 trident.`);
		$('#Information').slideDown(800);
		$('#SolarSun').fadeIn(1000,()=>{
			$('#SolarSun').attr('src','Planets/Neptune.png');
		})
	})
	$('#Pluto').on('click',()=>{
		$('#Titles').html('Pluto');
		$('#Basic1').html('-Age: 4.46 billion years old!');
		$('#Basic2').html(`-(1.303±0.003)×10<sup>22</sup> kg, 0.00218 Earths, 0.177 Moons`);
		$('#Basic3').html(`-Pluto (minor planet designation: 134340 Pluto) is a dwarf planet in the Kuiper belt,
		 a ring of bodies beyond Neptune. It was the first Kuiper belt object to be discovered and is the largest
		 known plutoid (or ice dwarf).Pluto was discovered by Clyde Tombaugh in 1930 and was originally considered
		 to be the ninth planet from the Sun. After 1992, its status as a planet was questioned following the discovery
		 of several objects of similar size in the Kuiper belt. In 2005, Eris, a dwarf planet in the scattered disc which is
		 27% more massive than Pluto, was discovered. This led the International Astronomical Union (IAU) to define the term 
		 "planet" formally in 2006, during their 26th General Assembly. That definition excluded Pluto and reclassified it as a
		 dwarf planet.`);
		$('#Information').slideDown(800);
		$('#SolarSun').fadeIn(1000,()=>{
			$('#SolarSun').attr('src','Planets/Pluto.png');
		})
	})
	


	$('#BackButton').on('click',()=>{
		$('#Information').fadeOut(800);
			$('#SolarSun').fadeIn(1000,()=>{
			$('#SolarSun').attr('src','Sun.png');
		})
	})

});