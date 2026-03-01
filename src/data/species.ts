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
  image: string;
  description: string;
  locations: Location[];
}

export const speciesData: Species[] = [
  {
    "id": 1,
    "name": "African Elephant",
    "scientific": "Loxodonta africana",
    "status": "VU",
    "statusFull": "Vulnerable",
    "population": "Decreasing; estimated several hundred thousand individuals remaining in fragmented populations",
    "habitat": "Savanna, grassland, and woodland",
    "region": "Sub‑Saharan Africa (e.g., Kenya, Tanzania, Botswana, South Africa, Namibia)",
    "year": 2021,
    "image": "https://upload.wikimedia.org/wikipedia/commons/3/37/African_Bush_Elephant.jpg",
    "description": "The African savanna elephant is the largest living land animal, threatened primarily by poaching for ivory and loss and fragmentation of habitat across its range.",
    "locations": [
      {
        "lat": -2.333,
        "lng": 34.833,
        "name": "Serengeti National Park, Tanzania"
      },
      {
        "lat": -19.0,
        "lng": 23.5,
        "name": "Okavango Delta, Botswana"
      }
    ],
    "url": "https://www.iucnredlist.org/species/181008073/181022663"
  },
  {
    "id": 2,
    "name": "Polar Bear",
    "scientific": "Ursus maritimus",
    "status": "VU",
    "statusFull": "Vulnerable",
    "population": "Estimated 22,000–31,000 individuals; overall trend decreasing",
    "habitat": "Sea ice, coastal marine, and tundra",
    "region": "Arctic Circle including Canada, Greenland, Norway (Svalbard), Russia, and Alaska",
    "year": 2015,
    "image": "https://upload.wikimedia.org/wikipedia/commons/e/e7/Polar_Bear_-_Alaska_%28cropped%29.jpg",
    "description": "Polar bears are top Arctic predators dependent on sea ice to hunt seals, and they face major threats from sea‑ice loss driven by climate change and pollution.",
    "locations": [
      {
        "lat": 78.0,
        "lng": 16.0,
        "name": "Svalbard, Norway"
      },
      {
        "lat": 72.0,
        "lng": -96.0,
        "name": "Nunavut, Canada"
      }
    ],
    "url": "https://www.iucnredlist.org/species/22823/14871490"
  },
  {
    "id": 3,
    "name": "Green Sea Turtle",
    "scientific": "Chelonia mydas",
    "status": "EN",
    "statusFull": "Endangered",
    "population": "Global trend increasing in some rookeries but still considered endangered overall",
    "habitat": "Tropical and subtropical coastal waters, seagrass beds, coral reefs",
    "region": "Global tropical and subtropical oceans, including Caribbean, Indo‑Pacific, and Eastern Pacific",
    "year": 2019,
    "image": "https://upload.wikimedia.org/wikipedia/commons/f/fb/Green_turtle_swimming_over_coral_reefs_in_Kona.jpg",
    "description": "The green sea turtle is a large marine turtle threatened by bycatch, poaching, coastal development, and degradation of nesting beaches and feeding grounds.",
    "locations": [
      {
        "lat": 19.6,
        "lng": -155.0,
        "name": "Kona Coast, Hawaiʻi, USA"
      },
      {
        "lat": -8.5,
        "lng": 115.5,
        "name": "Bali, Indonesia"
      }
    ],
    "url": "https://www.iucnredlist.org/species/4615/11037468"
  },
  {
    "id": 4,
    "name": "Javan Rhinoceros",
    "scientific": "Rhinoceros sondaicus",
    "status": "CR",
    "statusFull": "Critically Endangered",
    "population": "Around 75 individuals; single remaining wild population",
    "habitat": "Lowland tropical rainforest and freshwater swamp forest",
    "region": "Ujung Kulon Peninsula, western Java, Indonesia",
    "year": 2021,
    "image": "https://upload.wikimedia.org/wikipedia/commons/3/3c/Rhinoceros_sondaicus_in_London_Zoo.jpg",
    "description": "The Javan rhinoceros is one of the world’s rarest large mammals, surviving only in Ujung Kulon National Park and threatened by disease, natural disasters, and extremely low genetic diversity.",
    "locations": [
      {
        "lat": -6.7667,
        "lng": 105.3833,
        "name": "Ujung Kulon National Park, Indonesia"
      }
    ],
    "url": "https://www.iucnredlist.org/species/19495/18493900"
  },
  {
    "id": 5,
    "name": "Sumatran Orangutan",
    "scientific": "Pongo abelii",
    "status": "CR",
    "statusFull": "Critically Endangered",
    "population": "Estimated fewer than 14,000 individuals; decreasing",
    "habitat": "Tropical and subtropical moist broadleaf forest",
    "region": "Northern Sumatra, Indonesia",
    "year": 2017,
    "image": "https://upload.wikimedia.org/wikipedia/commons/0/04/Orangutan-Sumatra.jpg",
    "description": "The Sumatran orangutan is an arboreal great ape threatened by rapid deforestation, expansion of oil‑palm plantations, and hunting.",
    "locations": [
      {
        "lat": 3.8,
        "lng": 97.3,
        "name": "Leuser Ecosystem, Aceh, Indonesia"
      }
    ],
    "url": "https://www.iucnredlist.org/species/121097935/123797627"
  },
  {
    "id": 6,
    "name": "West African Giraffe",
    "scientific": "Giraffa peralta",
    "status": "VU",
    "statusFull": "Vulnerable",
    "population": "Around 600–700 individuals; recovering but still vulnerable",
    "habitat": "Sahelian woodland and savanna",
    "region": "South‑western Niger",
    "year": 2018,
    "image": "https://upload.wikimedia.org/wikipedia/commons/0/09/Giraffa_camelopardalis_peralta.jpg",
    "description": "The West African giraffe is the rarest giraffe subspecies, restricted mainly to Niger and threatened historically by hunting and habitat conversion, though conservation actions have led to recent recovery.",
    "locations": [
      {
        "lat": 13.5,
        "lng": 2.1,
        "name": "Kouré, Niger"
      }
    ],
    "url": "https://www.iucnredlist.org/species/136913/51140837"
  },
  {
    "id": 7,
    "name": "Hawksbill Turtle",
    "scientific": "Eretmochelys imbricata",
    "status": "CR",
    "statusFull": "Critically Endangered",
    "population": "Global population severely reduced; many nesting colonies collapsed",
    "habitat": "Tropical coral reefs and coastal waters",
    "region": "Tropical Atlantic, Indian, and Pacific Oceans",
    "year": 2008,
    "image": "https://upload.wikimedia.org/wikipedia/commons/0/09/Hawksbill_turtle_on_the_Coral_Reef.jpg",
    "description": "The hawksbill turtle is a small to medium‑sized sea turtle threatened by historical exploitation for tortoiseshell, egg harvesting, bycatch, and coral reef degradation.",
    "locations": [
      {
        "lat": 13.9,
        "lng": -61.0,
        "name": "St Vincent and the Grenadines, Caribbean Sea"
      },
      {
        "lat": -18.3,
        "lng": 147.7,
        "name": "Great Barrier Reef, Australia"
      }
    ],
    "url": "https://www.iucnredlist.org/species/8005/12881238"
  },
  {
    "id": 8,
    "name": "Saiga Antelope",
    "scientific": "Saiga tatarica",
    "status": "CR",
    "statusFull": "Critically Endangered",
    "population": "Hundreds of thousands following recent recovery, but highly vulnerable to mass die‑offs and poaching",
    "habitat": "Semi‑arid grassland and steppe",
    "region": "Kazakhstan, Mongolia, Russia, and Uzbekistan (fragmented range)",
    "year": 2018,
    "image": "https://upload.wikimedia.org/wikipedia/commons/0/0c/Saiga_antelope.jpg",
    "description": "The saiga is a migratory antelope with a distinctive bulbous nose, threatened historically by poaching and subject to catastrophic disease‑related die‑offs.",
    "locations": [
      {
        "lat": 48.0,
        "lng": 69.0,
        "name": "Central Kazakhstan steppe"
      }
    ],
    "url": "https://www.iucnredlist.org/species/19832/24316380"
  }
];

export const statusColors: Record<string, string> = {
  'EX': '#8b949e',
  'CR': '#f0883e',
  'EN': '#f85149',
  'VU': '#3fb950'
};
