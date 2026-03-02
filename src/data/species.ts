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
  license: string;
  description: string;
  locations: Location[];
  url: string;
}

export const speciesData: Species[] = [
    {
        "id": 1,
        "name": "African Elephant",
        "scientific": "Loxodonta africana",
        "status": "EN",
        "statusFull": "Endangered",
        "population": "Decreasing; estimated several hundred thousand individuals remaining in fragmented populations",
        "habitat": "Savanna, grassland, and woodland",
        "region": "Sub‑Saharan Africa (e.g., Kenya, Tanzania, Botswana, South Africa, Namibia)",
        "year": 2026,
        "image": "https://inaturalist-open-data.s3.amazonaws.com/photos/93674728/medium.jpg",
        "description": "The African savanna elephant is the largest living land animal, threatened primarily by poaching for ivory and loss and fragmentation of habitat across its range.",
        "locations": [
            {
                "lat": -2.333,
                "lng": 34.833,
                "name": "Serengeti National Park, Tanzania"
            },
            {
                "lat": -19,
                "lng": 23.5,
                "name": "Okavango Delta, Botswana"
            }
        ],
        "url": "https://www.iucnredlist.org/species/181008073/181022663",
        "license": "cc-by"
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
        "year": 2026,
        "image": "https://inaturalist-open-data.s3.amazonaws.com/photos/102785980/medium.jpg",
        "description": "Polar bears are top Arctic predators dependent on sea ice to hunt seals, and they face major threats from sea‑ice loss driven by climate change and pollution.",
        "locations": [
            {
                "lat": 78,
                "lng": 16,
                "name": "Svalbard, Norway"
            },
            {
                "lat": 72,
                "lng": -96,
                "name": "Nunavut, Canada"
            }
        ],
        "url": "https://www.iucnredlist.org/species/22823/14871490",
        "license": "cc-by-nc"
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
        "year": 2026,
        "image": "https://inaturalist-open-data.s3.amazonaws.com/photos/248337518/medium.jpg",
        "description": "The green sea turtle is a large marine turtle threatened by bycatch, poaching, coastal development, and degradation of nesting beaches and feeding grounds.",
        "locations": [
            {
                "lat": 19.6,
                "lng": -155,
                "name": "Kona Coast, Hawaiʻi, USA"
            },
            {
                "lat": -8.5,
                "lng": 115.5,
                "name": "Bali, Indonesia"
            }
        ],
        "url": "https://www.iucnredlist.org/species/4615/11037468",
        "license": "cc-by-nc"
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
        "year": 2026,
        "image": "https://inaturalist-open-data.s3.amazonaws.com/photos/298835434/medium.jpg",
        "description": "The Javan rhinoceros is one of the world’s rarest large mammals, surviving only in Ujung Kulon National Park and threatened by disease, natural disasters, and extremely low genetic diversity.",
        "locations": [
            {
                "lat": -6.7667,
                "lng": 105.3833,
                "name": "Ujung Kulon National Park, Indonesia"
            }
        ],
        "url": "https://www.iucnredlist.org/species/19495/18493900",
        "license": "cc-by-nc"
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
        "year": 2026,
        "image": "https://inaturalist-open-data.s3.amazonaws.com/photos/109776453/medium.jpeg",
        "description": "The Sumatran orangutan is an arboreal great ape threatened by rapid deforestation, expansion of oil‑palm plantations, and hunting.",
        "locations": [
            {
                "lat": 3.8,
                "lng": 97.3,
                "name": "Leuser Ecosystem, Aceh, Indonesia"
            }
        ],
        "url": "https://www.iucnredlist.org/species/121097935/123797627",
        "license": "cc-by-nc"
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
        "year": 2026,
        "image": "https://inaturalist-open-data.s3.amazonaws.com/photos/6305258/medium.jpg",
        "description": "The West African giraffe is the rarest giraffe subspecies, restricted mainly to Niger and threatened historically by hunting and habitat conversion, though conservation actions have led to recent recovery.",
        "locations": [
            {
                "lat": 13.5,
                "lng": 2.1,
                "name": "Kouré, Niger"
            }
        ],
        "url": "https://www.iucnredlist.org/species/136913/51140837",
        "license": "cc-by-nc"
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
        "year": 2026,
        "image": "https://inaturalist-open-data.s3.amazonaws.com/photos/9696846/medium.jpg",
        "description": "The hawksbill turtle is a small to medium‑sized sea turtle threatened by historical exploitation for tortoiseshell, egg harvesting, bycatch, and coral reef degradation.",
        "locations": [
            {
                "lat": 13.9,
                "lng": -61,
                "name": "St Vincent and the Grenadines, Caribbean Sea"
            },
            {
                "lat": -18.3,
                "lng": 147.7,
                "name": "Great Barrier Reef, Australia"
            }
        ],
        "url": "https://www.iucnredlist.org/species/8005/12881238",
        "license": "cc-by-nc-sa"
    },
    {
        "id": 8,
        "name": "Saiga Antelope",
        "scientific": "Saiga tatarica",
        "status": "VU",
        "statusFull": "Vulnerable",
        "population": "Hundreds of thousands following recent recovery, but highly vulnerable to mass die‑offs and poaching",
        "habitat": "Semi‑arid grassland and steppe",
        "region": "Kazakhstan, Mongolia, Russia, and Uzbekistan (fragmented range)",
        "year": 2026,
        "image": "https://inaturalist-open-data.s3.amazonaws.com/photos/599566850/medium.jpg",
        "description": "The saiga is a migratory antelope with a distinctive bulbous nose, threatened historically by poaching and subject to catastrophic disease‑related die‑offs.",
        "locations": [
            {
                "lat": 48,
                "lng": 69,
                "name": "Central Kazakhstan steppe"
            }
        ],
        "url": "https://www.iucnredlist.org/species/19832/24316380",
        "license": "cc-by-nc"
    }
];

/**
 * Maps iNaturalist conservation status codes to our standardized format
 */
export function mapConservationStatus(iNaturalistStatus: string): 'EX' | 'CR' | 'EN' | 'VU' {
  const statusMap: Record<string, 'EX' | 'CR' | 'EN' | 'VU'> = {
    'ex': 'EX',
    'cr': 'CR', 
    'en': 'EN',
    'vu': 'VU'
  };
  
  return statusMap[iNaturalistStatus.toLowerCase()] || 'VU'; // Default to VU if unknown
}

export const statusColors: Record<string, string> = {
  'EX': '#8b949e',
  'CR': '#f0883e',
  'EN': '#f85149',
  'VU': '#3fb950'
};
