export interface Location {
  lat: number;
  lng: number;
  name: string;
}

export interface Species {
  id: number;
  name: string;
  scientific: string;
  status: 'EX' | 'CR' | 'EN' | 'VU';
  statusFull: string;
  population: string;
  habitat: string;
  region: string;
  year: number;
  icon: string;
  description: string;
  locations: Location[];
}

export const speciesData: Species[] = [
  {
    id: 1,
    name: "Amur Leopard",
    scientific: "Panthera pardus orientalis",
    status: "CR",
    statusFull: "Critically Endangered",
    population: "~100 individuals",
    habitat: "Temperate Forests",
    region: "Russian Far East, China",
    year: 1996,
    icon: "🐆",
    description: "The Amur leopard is one of the rarest big cats in the world. These solitary creatures are known for their beautiful spotted coat and incredible jumping ability. They are adapted to cold climates with thick fur.",
    locations: [
      { lat: 43.5, lng: 132.5, name: "Land of the Leopard National Park, Russia" },
      { lat: 44.2, lng: 131.5, name: "Northeast China" }
    ]
  },
  {
    id: 2,
    name: "Sumatran Orangutan",
    scientific: "Pongo abelii",
    status: "CR",
    statusFull: "Critically Endangered",
    population: "~14,000 individuals",
    habitat: "Tropical Rainforests",
    region: "Sumatra, Indonesia",
    year: 2000,
    icon: "🦧",
    description: "Sumatran orangutans are the most arboreal of the great apes. They spend nearly all their time in trees, building new nests each night. These intelligent primates share 97% of human DNA.",
    locations: [
      { lat: 2.5, lng: 98.5, name: "Gunung Leuser National Park" },
      { lat: 1.8, lng: 99.5, name: "Batang Toru" }
    ]
  },
  {
    id: 3,
    name: "Hawksbill Sea Turtle",
    scientific: "Eretmochelys imbricata",
    status: "CR",
    statusFull: "Critically Endangered",
    population: "~23,000 nesting females",
    habitat: "Coral Reefs",
    region: "Tropical Oceans",
    year: 1988,
    icon: "🐢",
    description: "Hawksbill turtles are named for their narrow, pointed beaks. They feed primarily on sponges and are found throughout the world's tropical oceans. Their beautiful shells have made them targets for the illegal wildlife trade.",
    locations: [
      { lat: 18.5, lng: -66.5, name: "Caribbean Sea" },
      { lat: -8.0, lng: 156.0, name: "Solomon Islands" },
      { lat: 10.0, lng: 98.0, name: "Andaman Sea" }
    ]
  },
  {
    id: 4,
    name: "Vaquita",
    scientific: "Phocoena sinus",
    status: "CR",
    statusFull: "Critically Endangered",
    population: "~10 individuals",
    habitat: "Marine/Coastal",
    region: "Gulf of California, Mexico",
    year: 1990,
    icon: "🐬",
    description: "The vaquita is the world's smallest and most endangered cetacean. With only about 10 individuals remaining, they are on the brink of extinction, primarily due to bycatch in illegal gillnets.",
    locations: [
      { lat: 31.0, lng: -114.5, name: "Northern Gulf of California" }
    ]
  },
  {
    id: 5,
    name: "Mountain Gorilla",
    scientific: "Gorilla beringei beringei",
    status: "EN",
    statusFull: "Endangered",
    population: "~1,063 individuals",
    habitat: "Montane Forests",
    region: "Central Africa",
    year: 1996,
    icon: "🦍",
    description: "Mountain gorillas live in high-altitude forests and are larger and heavier than other gorillas. Despite their fearsome appearance, they are gentle vegetarians and live in close-knit family groups.",
    locations: [
      { lat: -1.5, lng: 29.5, name: "Virunga Mountains, DRC" },
      { lat: -1.2, lng: 29.8, name: "Bwindi Impenetrable Forest, Uganda" }
    ]
  },
  {
    id: 6,
    name: "Black Rhinoceros",
    scientific: "Diceros bicornis",
    status: "CR",
    statusFull: "Critically Endangered",
    population: "~5,600 individuals",
    habitat: "Savanna, Semi-Desert",
    region: "Eastern & Southern Africa",
    year: 1996,
    icon: "🦏",
    description: "Black rhinos are browsers with a pointed, prehensile upper lip. Despite their name, they are actually gray. Poaching for their horns remains their biggest threat.",
    locations: [
      { lat: -2.5, lng: 34.5, name: "Serengeti, Tanzania" },
      { lat: -18.0, lng: 32.5, name: "Zimbabwe" },
      { lat: -25.0, lng: 31.5, name: "Kruger National Park, South Africa" }
    ]
  },
  {
    id: 7,
    name: "Sumatran Tiger",
    scientific: "Panthera tigris sumatrae",
    status: "CR",
    statusFull: "Critically Endangered",
    population: "~400 individuals",
    habitat: "Tropical Rainforests",
    region: "Sumatra, Indonesia",
    year: 1996,
    icon: "🐅",
    description: "The Sumatran tiger is the smallest surviving tiger subspecies. They are excellent swimmers and have distinctive narrow stripes that provide camouflage in their forest habitat.",
    locations: [
      { lat: 1.0, lng: 101.0, name: "Kerinci Seblat National Park" },
      { lat: 0.5, lng: 99.5, name: "Gunung Leuser National Park" }
    ]
  },
  {
    id: 8,
    name: "Blue Whale",
    scientific: "Balaenoptera musculus",
    status: "EN",
    statusFull: "Endangered",
    population: "~10,000-25,000 individuals",
    habitat: "Open Ocean",
    region: "Worldwide Oceans",
    year: 1996,
    icon: "🐋",
    description: "The blue whale is the largest animal ever known to exist. Their hearts alone weigh as much as a car. Despite recovering from near-extinction, they face threats from climate change and shipping traffic.",
    locations: [
      { lat: 34.0, lng: -123.0, name: "Pacific Coast, USA" },
      { lat: 60.0, lng: -5.0, name: "North Atlantic" },
      { lat: -60.0, lng: -65.0, name: "Southern Ocean" }
    ]
  },
  {
    id: 9,
    name: "African Forest Elephant",
    scientific: "Loxodonta cyclotis",
    status: "CR",
    statusFull: "Critically Endangered",
    population: "~415,000 individuals",
    habitat: "Tropical Rainforests",
    region: "Central Africa",
    year: 2021,
    icon: "🐘",
    description: "African forest elephants are smaller than their savanna cousins with straighter, downward-pointing tusks. They play a crucial role in maintaining the structure and composition of African forests.",
    locations: [
      { lat: 0.5, lng: 12.5, name: "Congo Basin" },
      { lat: -1.0, lng: 15.0, name: "Odzou" }
    ]
  },
  {
    id: 10,
    name: "Snow Leopard",
    scientific: "Panthera uncia",
    status: "VU",
    statusFull: "Vulnerable",
    population: "~4,000-6,500 individuals",
    habitat: "High Mountain",
    region: "Central Asia",
    year: 2016,
    icon: "🐱",
    description: "Snow leopards are known as 'ghosts of the mountains' due to their elusive nature. They are perfectly adapted to cold, harsh mountain environments with their thick fur and long tails for balance.",
    locations: [
      { lat: 36.0, lng: 74.0, name: "Himalayas" },
      { lat: 45.0, lng: 80.0, name: "Altai Mountains" },
      { lat: 33.0, lng: 68.0, name: "Hindu Kush" }
    ]
  },
  {
    id: 11,
    name: "Dodo",
    scientific: "Raphus cucullatus",
    status: "EX",
    statusFull: "Extinct",
    population: "Extinct since ~1662",
    habitat: "Forests",
    region: "Mauritius",
    year: 1662,
    icon: "🦤",
    description: "The dodo was a flightless bird endemic to the island of Mauritius. It went extinct less than a century after European discovery, primarily due to hunting and introduced species. It has become an icon of extinction.",
    locations: [
      { lat: -20.3, lng: 57.5, name: "Mauritius (historical)" }
    ]
  },
  {
    id: 12,
    name: "Tasmanian Tiger",
    scientific: "Thylacinus cynocephalus",
    status: "EX",
    statusFull: "Extinct",
    population: "Extinct since 1936",
    habitat: "Grasslands, Forests",
    region: "Tasmania, Australia",
    year: 1936,
    icon: "🐅",
    description: "The thylacine, or Tasmanian tiger, was the largest carnivorous marsupial of modern times. Despite numerous alleged sightings, it is believed to have gone extinct in the early 20th century.",
    locations: [
      { lat: -42.0, lng: 146.5, name: "Tasmania (historical)" }
    ]
  },
  {
    id: 13,
    name: "Woolly Mammoth",
    scientific: "Mammuthus primigenius",
    status: "EX",
    statusFull: "Extinct",
    population: "Extinct since ~4,000 years ago",
    habitat: "Tundra, Steppe",
    region: "Northern Eurasia, North America",
    year: -4000,
    icon: "🐘",
    description: "Woolly mammoths were covered in thick fur and lived during the Ice Age. They were hunted by early humans and eventually went extinct, possibly due to climate change and hunting.",
    locations: [
      { lat: 70.0, lng: 170.0, name: "Siberian Arctic (frozen remains)" },
      { lat: 55.0, lng: -130.0, name: "Yukon Territory (historical)" }
    ]
  },
  {
    id: 14,
    name: "Passenger Pigeon",
    scientific: "Ectopistes migratorius",
    status: "EX",
    statusFull: "Extinct",
    population: "Extinct since 1914",
    habitat: "Forests",
    region: "North America",
    year: 1914,
    icon: "🐦",
    description: "Once the most abundant bird in North America, with flocks numbering billions, the passenger pigeon was hunted to extinction in less than a century. The last known individual died in 1914.",
    locations: [
      { lat: 42.0, lng: -83.0, name: "Michigan, USA (historical)" },
      { lat: 40.5, lng: -74.0, name: "New York, USA (historical)" }
    ]
  },
  {
    id: 15,
    name: "Great Auk",
    scientific: "Pinguinus impennis",
    status: "EX",
    statusFull: "Extinct",
    population: "Extinct since 1844",
    habitat: "Coastal Islands",
    region: "North Atlantic",
    year: 1844,
    icon: "🐧",
    description: "The great auk was a flightless seabird that lived in the North Atlantic. It was hunted extensively for its feathers, meat, and oil. The last two were killed in 1844 on Eldey Island, Iceland.",
    locations: [
      { lat: 63.5, lng: -20.0, name: "Eldey Island, Iceland (last known)" },
      { lat: 47.5, lng: -52.5, name: "Newfoundland (historical)" }
    ]
  },
  {
    id: 16,
    name: "Pangolin",
    scientific: "Manis spp.",
    status: "CR",
    statusFull: "Critically Endangered",
    population: "Unknown (declining)",
    habitat: "Tropical Forests, Savanna",
    region: "Asia & Africa",
    year: 2014,
    icon: "🦎",
    description: "Pangolins are the world's only scaled mammals. They are nocturnal, insect-eating creatures that curl into a ball when threatened. They are the most trafficked mammals in the world.",
    locations: [
      { lat: 22.0, lng: 105.0, name: "Vietnam" },
      { lat: 23.5, lng: 90.0, name: "Bangladesh" },
      { lat: -3.0, lng: 35.0, name: "Serengeti, Tanzania" }
    ]
  },
  {
    id: 17,
    name: "Leatherback Sea Turtle",
    scientific: "Dermochelys coriacea",
    status: "VU",
    statusFull: "Vulnerable",
    population: "~34,000-36,000 nesting females",
    habitat: "Open Ocean",
    region: "Tropical & Temperate Oceans",
    year: 1988,
    icon: "🐢",
    description: "The leatherback is the largest of all sea turtles and can dive deeper than 1,000 meters. Unlike other turtles, they have a flexible, leathery shell instead of a hard carapace.",
    locations: [
      { lat: 9.0, lng: -80.0, name: "Caribbean coast of Panama" },
      { lat: -4.0, lng: 55.5, name: "Seychelles" },
      { lat: 1.5, lng: 103.5, name: "Singapore" }
    ]
  },
  {
    id: 18,
    name: "Bengal Tiger",
    scientific: "Panthera tigris tigris",
    status: "EN",
    statusFull: "Endangered",
    population: "~3,500 individuals",
    habitat: "Tropical Forests, Grasslands",
    region: "Indian Subcontinent",
    year: 2011,
    icon: "🐯",
    description: "The Bengal tiger is the most numerous tiger subspecies. They are powerful apex predators that require large territories. India hosts the majority of the world's remaining Bengal tigers.",
    locations: [
      { lat: 26.0, lng: 78.0, name: "Kanha National Park, India" },
      { lat: 25.0, lng: 85.0, name: "Sundarbans, India/Bangladesh" },
      { lat: 28.0, lng: 85.0, name: "Chitwan National Park, Nepal" }
    ]
  },
  {
    id: 19,
    name: "Saola",
    scientific: "Pseudoryx nghetinhensis",
    status: "CR",
    statusFull: "Critically Endangered",
    population: "Unknown (possibly <100)",
    habitat: "Wet Evergreen Forests",
    region: "Vietnam & Laos",
    year: 1992,
    icon: "🦌",
    description: "The saola, also called the Asian unicorn, was only discovered in 1992. It is one of the rarest large mammals in the world and has never been seen by scientists in the wild.",
    locations: [
      { lat: 17.5, lng: 106.0, name: "Annamite Mountains, Vietnam" },
      { lat: 18.0, lng: 105.0, name: "Bolikhamxay Province, Laos" }
    ]
  },
  {
    id: 20,
    name: "Giant Panda",
    scientific: "Ailuropoda melanoleuca",
    status: "VU",
    statusFull: "Vulnerable",
    population: "~1,864 individuals",
    habitat: "Temperate Forests",
    region: "Central China",
    year: 1990,
    icon: "🐼",
    description: "Giant pandas are beloved worldwide for their distinctive black and white coloration. Despite being classified as carnivores, 99% of their diet consists of bamboo. Conservation efforts have brought them back from the brink.",
    locations: [
      { lat: 30.5, lng: 103.0, name: "Sichuan Mountains" },
      { lat: 29.5, lng: 108.0, name: "Qinling Mountains" }
    ]
  },
  {
    id: 21,
    name: "North Atlantic Right Whale",
    scientific: "Eubalaena glacialis",
    status: "CR",
    statusFull: "Critically Endangered",
    population: "~340 individuals",
    habitat: "Coastal Waters",
    region: "North Atlantic",
    year: 2008,
    icon: "🐋",
    description: "North Atlantic right whales were named by whalers as the 'right' whale to hunt. They are now one of the most endangered whales, facing threats from ship strikes and fishing gear entanglement.",
    locations: [
      { lat: 43.0, lng: -70.0, name: "Gulf of Maine, USA" },
      { lat: 46.0, lng: -60.0, name: "Cape Breton, Canada" }
    ]
  },
  {
    id: 22,
    name: "Asian Elephant",
    scientific: "Elephas maximus",
    status: "EN",
    statusFull: "Endangered",
    population: "~40,000-50,000 individuals",
    habitat: "Tropical Forests",
    region: "South & Southeast Asia",
    year: 1986,
    icon: "🐘",
    description: "Asian elephants are smaller than African elephants and have smaller ears. They are highly intelligent, social animals that have been domesticated for centuries for logging and ceremonial purposes.",
    locations: [
      { lat: 11.5, lng: 85.0, name: "India" },
      { lat: 19.0, lng: 99.0, name: "Thailand" },
      { lat: 4.0, lng: 102.0, name: "Malaysia" }
    ]
  },
  {
    id: 23,
    name: "Golden Lion Tamarin",
    scientific: "Leontopithecus rosalia",
    status: "EN",
    statusFull: "Endangered",
    population: "~3,200 individuals",
    habitat: "Atlantic Coastal Forests",
    region: "Brazil",
    year: 1982,
    icon: "🐒",
    description: "Golden lion tamarins are small, brightly colored monkeys known for their magnificent golden fur mane. They are endemic to the Atlantic coastal forests of Brazil, one of the world's most threatened ecosystems.",
    locations: [
      { lat: -22.5, lng: -43.0, name: "Rio de Janeiro state" },
      { lat: -23.0, lng: -44.5, name: "São Paulo state" }
    ]
  },
  {
    id: 24,
    name: "Steller's Sea Cow",
    scientific: "Hydrodamalis gigas",
    status: "EX",
    statusFull: "Extinct",
    population: "Extinct since 1768",
    habitat: "Coastal Waters",
    region: "Commander Islands, Bering Sea",
    year: 1768,
    icon: "🐄",
    description: "Steller's sea cows were massive, slow-moving marine mammals discovered in 1741. They were hunted to extinction within just 27 years for their meat, fat, and hide.",
    locations: [
      { lat: 55.0, lng: 166.0, name: "Bering Island (historical)" }
    ]
  },
  {
    id: 25,
    name: "California Condor",
    scientific: "Gymnogyps californianus",
    status: "CR",
    statusFull: "Critically Endangered",
    population: "~500 individuals",
    habitat: "Rocky Shrub, Coniferous Forests",
    region: "California, USA",
    year: 1967,
    icon: "🦅",
    description: "The California condor is North America's largest flying land bird with a wingspan of nearly 10 feet. Once extinct in the wild, intensive conservation efforts have brought them back.",
    locations: [
      { lat: 34.5, lng: -119.5, name: "Ventura County, California" },
      { lat: 36.0, lng: -121.0, name: "Big Sur, California" }
    ]
  },
  {
    id: 26,
    name: "Chimpanzee",
    scientific: "Pan troglodytes",
    status: "EN",
    statusFull: "Endangered",
    population: "~170,000-300,000 individuals",
    habitat: "Tropical Forests",
    region: "Central & West Africa",
    year: 2016,
    icon: "🐒",
    description: "Chimpanzees are our closest living relatives, sharing about 98% of our DNA. They are highly intelligent, social animals that use tools and can learn sign language.",
    locations: [
      { lat: 0.5, lng: 12.5, name: "Congo Basin" },
      { lat: 1.5, lng: 28.0, name: "Kibale Forest, Uganda" },
      { lat: 9.0, lng: -2.0, name: "Tai Forest, Ivory Coast" }
    ]
  },
  {
    id: 27,
    name: "Red Panda",
    scientific: "Ailurus fulgens",
    status: "EN",
    statusFull: "Endangered",
    population: "~10,000 individuals",
    habitat: "Temperate Forests",
    region: "Eastern Himalayas",
    year: 2015,
    icon: "🐼",
    description: "Red pandas are not closely related to giant pandas despite their name. These small, arboreal mammals feed primarily on bamboo and are known for their striking russet fur and bushy tails.",
    locations: [
      { lat: 27.5, lng: 88.0, name: "Sikkim, India" },
      { lat: 28.0, lng: 85.0, name: "Nepal" },
      { lat: 26.0, lng: 98.0, name: "Yunnan, China" }
    ]
  },
  {
    id: 28,
    name: "Blue-crowned Lorikeet",
    scientific: "Vini australis",
    status: "VU",
    statusFull: "Vulnerable",
    population: "~10,000-100,000 individuals",
    habitat: "Forests, Gardens",
    region: "Samoa, Tonga",
    year: 2018,
    icon: "🦜",
    description: "This small, colorful parrot is endemic to the islands of Samoa and Tonga. They are highly social birds that travel in small flocks and feed on nectar and fruit.",
    locations: [
      { lat: -14.0, lng: -172.0, name: "Upolu, Samoa" },
      { lat: -21.0, lng: -175.0, name: "Tonga" }
    ]
  },
  {
    id: 29,
    name: "Galápagos Penguin",
    scientific: "Spheniscus mendiculus",
    status: "EN",
    statusFull: "Endangered",
    population: "~1,900 individuals",
    habitat: "Coastal Waters",
    region: "Galápagos Islands",
    year: 2000,
    icon: "🐧",
    description: "The Galápagos penguin is the only penguin species found north of the equator. They are adapted to the relatively warm climate and are threatened by climate change and fishing.",
    locations: [
      { lat: -0.5, lng: -90.5, name: "Isabela Island" },
      { lat: -0.7, lng: -90.3, name: "Fernandina Island" }
    ]
  },
  {
    id: 30,
    name: "African Wild Dog",
    scientific: "Lycaon pictus",
    status: "EN",
    statusFull: "Endangered",
    population: "~6,600 individuals",
    habitat: "Savanna, Woodland",
    region: "Southern Africa",
    year: 2012,
    icon: "🐕",
    description: "African wild dogs are highly social canids that live in packs with complex social structures. They are efficient hunters with success rates higher than lions.",
    locations: [
      { lat: -2.5, lng: 34.5, name: "Serengeti, Tanzania" },
      { lat: -20.0, lng: 23.5, name: "Okavango Delta, Botswana" },
      { lat: -17.5, lng: 31.0, name: "Zimbabwe" }
    ]
  },
  {
    id: 31,
    name: "Javan Rhinoceros",
    scientific: "Rhinoceros sondaicus",
    status: "CR",
    statusFull: "Critically Endangered",
    population: "~76 individuals",
    habitat: "Dense Lowland Tropical Forest",
    region: "Java, Indonesia",
    year: 1996,
    icon: "🦏",
    description: "The Javan rhinoceros is the rarest of all rhino species and one of the rarest large mammals on Earth. They are found only in Ujung Kulon National Park in Java.",
    locations: [
      { lat: -6.5, lng: 105.5, name: "Ujung Kulon National Park, Java" }
    ]
  },
  {
    id: 32,
    name: "Iberian Lynx",
    scientific: "Lynx pardinus",
    status: "VU",
    statusFull: "Vulnerable",
    population: "~1,100 individuals",
    habitat: "Mediterranean Woodland",
    region: "Spain & Portugal",
    year: 2002,
    icon: "🐱",
    description: "The Iberian lynx is the world's most endangered cat species. Once on the brink of extinction, intensive conservation efforts have brought populations back from just 100 individuals.",
    locations: [
      { lat: 37.5, lng: -6.5, name: "Doñana, Spain" },
      { lat: 38.0, lng: -3.0, name: "Sierra de Andújar, Spain" }
    ]
  },
  {
    id: 33,
    name: "Whooping Crane",
    scientific: "Grus americana",
    status: "EN",
    statusFull: "Endangered",
    population: "~800 individuals",
    habitat: "Wetlands, Prairies",
    region: "North America",
    year: 1970,
    icon: "🦢",
    description: "The whooping crane is North America's tallest bird and one of the rarest. They are known for their distinctive whooping call that can be heard from miles away.",
    locations: [
      { lat: 35.0, lng: -97.0, name: "Aransas National Wildlife Refuge, Texas" },
      { lat: 53.0, lng: -100.0, name: "Wood Buffalo National Park, Canada" }
    ]
  },
  {
    id: 34,
    name: "Kakapo",
    scientific: "Strigops habroptilus",
    status: "CR",
    statusFull: "Critically Endangered",
    population: "~250 individuals",
    habitat: "Forests",
    region: "New Zealand",
    year: 1994,
    icon: "🦉",
    description: "The kakapo is the world's only flightless parrot and the heaviest parrot species. These nocturnal birds can live over 90 years and are critically endangered with just a few dozen breeding adults.",
    locations: [
      { lat: -44.0, lng: 176.5, name: "Codfish Island, New Zealand" },
      { lat: -43.0, lng: 173.5, name: "Mount Bruce, New Zealand" }
    ]
  },
  {
    id: 35,
    name: "Fin Whale",
    scientific: "Balaenoptera physalus",
    status: "VU",
    statusFull: "Vulnerable",
    population: "~100,000-119,000 individuals",
    habitat: "Open Ocean",
    region: "Worldwide",
    year: 2018,
    icon: "🐋",
    description: "The fin whale is the second-largest animal ever to exist, reaching lengths of up to 85 feet. They were nearly wiped out by industrial whaling in the 20th century.",
    locations: [
      { lat: 45.0, lng: -45.0, name: "North Atlantic" },
      { lat: 35.0, lng: -155.0, name: "Pacific Ocean" },
      { lat: -55.0, lng: -70.0, name: "Southern Ocean" }
    ]
  },
  {
    id: 36,
    name: "Gharial",
    scientific: "Gavialis gangeticus",
    status: "CR",
    statusFull: "Critically Endangered",
    population: "~650 individuals",
    habitat: "Rivers",
    region: "India & Nepal",
    year: 2007,
    icon: "🐊",
    description: "The gharial is one of the most distinctive crocodilians with its extremely long, thin snout filled with interlocking teeth. They are excellent fish hunters but have been decimated by hunting and habitat loss.",
    locations: [
      { lat: 26.5, lng: 80.5, name: "Kanha National Park, India" },
      { lat: 27.5, lng: 84.5, name: "Chitwan National Park, Nepal" }
    ]
  },
  {
    id: 37,
    name: "Bonobo",
    scientific: "Pan paniscus",
    status: "EN",
    statusFull: "Endangered",
    population: "~15,000-20,000 individuals",
    habitat: "Tropical Rainforests",
    region: "Democratic Republic of Congo",
    year: 2016,
    icon: "🐒",
    description: "Bonobos are our closest living relatives along with chimpanzees. They live in matriarchal societies and are known for their peaceful conflict resolution through social bonding.",
    locations: [
      { lat: -2.0, lng: 16.5, name: "Salonga National Park, DRC" },
      { lat: -1.0, lng: 19.0, name: "Lomela, DRC" }
    ]
  },
  {
    id: 38,
    name: "Hawaiian Monk Seal",
    scientific: "Neomonachus schauinslandi",
    status: "EN",
    statusFull: "Endangered",
    population: "~1,400 individuals",
    habitat: "Coastal Waters",
    region: "Hawaiian Islands",
    year: 1976,
    icon: "🦭",
    description: "Hawaiian monk seals are one of the rarest seal species in the world. They are endemic to the Hawaiian Islands and face threats from marine debris, entanglement, and disease.",
    locations: [
      { lat: 21.5, lng: -158.0, name: "Oahu, Hawaii" },
      { lat: 19.5, lng: -155.5, name: "Big Island, Hawaii" },
      { lat: 23.5, lng: -164.5, name: "Northwest Hawaiian Islands" }
    ]
  },
  {
    id: 39,
    name: "Spoon-headed Lake Sculpin",
    scientific: "Cottus ricei",
    status: "VU",
    statusFull: "Vulnerable",
    population: "Unknown (declining)",
    habitat: "Lakes",
    region: "North America",
    year: 1996,
    icon: "🐟",
    description: "This freshwater fish is native to lakes in the northeastern United States and Canada. It is threatened by habitat degradation and competition from invasive species.",
    locations: [
      { lat: 45.0, lng: -73.0, name: "Lake Champlain" },
      { lat: 43.5, lng: -72.5, name: "Lake George, New York" }
    ]
  },
  {
    id: 40,
    name: "Indochinese Tiger",
    scientific: "Panthera tigris corbetti",
    status: "EN",
    statusFull: "Endangered",
    population: "~350 individuals",
    habitat: "Tropical Forests, Mountains",
    region: "Southeast Asia",
    year: 2011,
    icon: "🐯",
    description: "The Indochinese tiger is a medium-sized tiger subspecies found in the forests of Southeast Asia. They are solitary hunters with distinctive narrow stripes.",
    locations: [
      { lat: 22.0, lng: 100.0, name: "Mekong River region" },
      { lat: 18.5, lng: 98.5, name: "Thailand" },
      { lat: 21.5, lng: 103.0, name: "Vietnam" }
    ]
  }
];

export const statusColors: Record<string, string> = {
  'EX': '#8b949e',
  'CR': '#f0883e',
  'EN': '#f85149',
  'VU': '#3fb950'
};
