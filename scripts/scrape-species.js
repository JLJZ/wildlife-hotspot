#!/usr/bin/env node

/**
 * Scraper for iNaturalist API to update species data
 * Usage: node scripts/scrape-species.js
 */

const fs = require('fs');
const path = require('path');
const https = require('https');

// Species to scrape from iNaturalist API
const speciesToScrape = [
  { id: 1, name: "African Elephant", scientific: "Loxodonta africana" },
  { id: 2, name: "Polar Bear", scientific: "Ursus maritimus" },
  { id: 3, name: "Green Sea Turtle", scientific: "Chelonia mydas" },
  { id: 4, name: "Javan Rhinoceros", scientific: "Rhinoceros sondaicus" },
  { id: 5, name: "Sumatran Orangutan", scientific: "Pongo abelii" },
  { id: 6, name: "West African Giraffe", scientific: "Giraffa peralta" },
  { id: 7, name: "Hawksbill Turtle", scientific: "Eretmochelys imbricata" },
  { id: 8, name: "Saiga Antelope", scientific: "Saiga tatarica" }
];

// Status mapping from iNaturalist to our format
const statusMap = {
  'ex': 'EX',
  'cr': 'CR',
  'en': 'EN',
  'vu': 'VU'
};

// Default descriptions for each species
const descriptions = {
  "African Elephant": "The African savanna elephant is the largest living land animal, threatened primarily by poaching for ivory and loss and fragmentation of habitat across its range.",
  "Polar Bear": "Polar bears are top Arctic predators dependent on sea ice to hunt seals, and they face major threats from sea‑ice loss driven by climate change and pollution.",
  "Green Sea Turtle": "The green sea turtle is a large marine turtle threatened by bycatch, poaching, coastal development, and degradation of nesting beaches and feeding grounds.",
  "Javan Rhinoceros": "The Javan rhinoceros is one of the world's rarest large mammals, surviving only in Ujung Kulon National Park and threatened by disease, natural disasters, and extremely low genetic diversity.",
  "Sumatran Orangutan": "The Sumatran orangutan is an arboreal great ape threatened by rapid deforestation, expansion of oil‑palm plantations, and hunting.",
  "West African Giraffe": "The West African giraffe is the rarest giraffe subspecies, restricted mainly to Niger and threatened historically by hunting and habitat conversion, though conservation actions have led to recent recovery.",
  "Hawksbill Turtle": "The hawksbill turtle is a small to medium‑sized sea turtle threatened by historical exploitation for tortoiseshell, egg harvesting, bycatch, and coral reef degradation.",
  "Saiga Antelope": "The saiga is a migratory antelope with a distinctive bulbous nose, threatened historically by poaching and subject to catastrophic disease‑related die‑offs."
};

// Location data for each species
const locations = {
  "African Elephant": [
    { lat: -2.333, lng: 34.833, name: "Serengeti National Park, Tanzania" },
    { lat: -19.0, lng: 23.5, name: "Okavango Delta, Botswana" }
  ],
  "Polar Bear": [
    { lat: 78.0, lng: 16.0, name: "Svalbard, Norway" },
    { lat: 72.0, lng: -96.0, name: "Nunavut, Canada" }
  ],
  "Green Sea Turtle": [
    { lat: 19.6, lng: -155.0, name: "Kona Coast, Hawaiʻi, USA" },
    { lat: -8.5, lng: 115.5, name: "Bali, Indonesia" }
  ],
  "Javan Rhinoceros": [
    { lat: -6.7667, lng: 105.3833, name: "Ujung Kulon National Park, Indonesia" }
  ],
  "Sumatran Orangutan": [
    { lat: 3.8, lng: 97.3, name: "Leuser Ecosystem, Aceh, Indonesia" }
  ],
  "West African Giraffe": [
    { lat: 13.5, lng: 2.1, name: "Kouré, Niger" }
  ],
  "Hawksbill Turtle": [
    { lat: 13.9, lng: -61.0, name: "St Vincent and the Grenadines, Caribbean Sea" },
    { lat: -18.3, lng: 147.7, name: "Great Barrier Reef, Australia" }
  ],
  "Saiga Antelope": [
    { lat: 48.0, lng: 69.0, name: "Central Kazakhstan steppe" }
  ]
};

// Wikipedia URLs for each species
const wikipediaUrls = {
  "African Elephant": "https://en.wikipedia.org/wiki/African_bush_elephant",
  "Polar Bear": "https://en.wikipedia.org/wiki/Polar_bear",
  "Green Sea Turtle": "https://en.wikipedia.org/wiki/Green_sea_turtle",
  "Javan Rhinoceros": "https://en.wikipedia.org/wiki/Javan_rhinoceros",
  "Sumatran Orangutan": "https://en.wikipedia.org/wiki/Sumatran_orangutan",
  "West African Giraffe": "https://en.wikipedia.org/wiki/West_African_giraffe",
  "Hawksbill Turtle": "https://en.wikipedia.org/wiki/Hawksbill_sea_turtle",
  "Saiga Antelope": "https://en.wikipedia.org/wiki/Saiga_antelope"
};

/**
 * Fetch data from iNaturalist API
 */
function fetchSpeciesData(scientificName) {
  return new Promise((resolve, reject) => {
    const query = encodeURIComponent(scientificName);
    const url = `https://api.inaturalist.org/v1/taxa?q=${query}`;
    
    https.get(url, (response) => {
      let data = '';
      
      response.on('data', (chunk) => {
        data += chunk;
      });
      
      response.on('end', () => {
        try {
          const jsonData = JSON.parse(data);
          resolve(jsonData);
        } catch (error) {
          reject(error);
        }
      });
    }).on('error', (error) => {
      reject(error);
    });
  });
}

/**
 * Map iNaturalist status to our format
 */
function mapStatus(iNaturalistStatus) {
  if (!iNaturalistStatus) return 'VU'; // Default to Vulnerable
  return statusMap[iNaturalistStatus.toLowerCase()] || 'VU';
}

/**
 * Get status full name
 */
function getStatusFull(status) {
  const statusNames = {
    'EX': 'Extinct',
    'CR': 'Critically Endangered',
    'EN': 'Endangered',
    'VU': 'Vulnerable'
  };
  return statusNames[status] || 'Vulnerable';
}

/**
 * Load existing species data from the file
 */
function loadExistingSpeciesData() {
  try {
    const speciesPath = path.join(__dirname, '../src/data/species.ts');
    const content = fs.readFileSync(speciesPath, 'utf8');
    
    // Extract the speciesData array using regex
    const speciesDataMatch = content.match(/export const speciesData: Species\[\] = (\[.*?\]);/s);
    if (speciesDataMatch) {
      // Try to parse the TypeScript array directly
      try {
        // First try to parse as-is (it might already be valid JSON)
        return JSON.parse(speciesDataMatch[1]);
      } catch (parseError) {
        // If that fails, try to clean up the TypeScript syntax
        let jsonStr = speciesDataMatch[1];
        
        // Handle TypeScript-specific syntax issues
        jsonStr = jsonStr
          // Replace single quotes with double quotes, but be careful not to break URLs
          .replace(/'([^']+)':/g, '"$1":') // Replace property names
          .replace(/,\s*}/g, '}') // Remove trailing commas before closing braces
          .replace(/,\s*]/g, ']') // Remove trailing commas before closing brackets
          .replace(/undefined/g, 'null') // Replace undefined with null
          .replace(/(\w+):/g, '"$1":'); // Ensure property names are quoted
        
        // Handle boolean values
        jsonStr = jsonStr.replace(/\btrue\b/g, 'true').replace(/\bfalse\b/g, 'false');
        
        return JSON.parse(jsonStr);
      }
    }
  } catch (error) {
    console.log('Could not load existing species data:', error.message);
  }
  return [];
}

/**
 * Create updated species data
 */
async function createUpdatedSpeciesData() {
  const updatedSpecies = [];
  const existingSpecies = loadExistingSpeciesData();
  
  for (const species of speciesToScrape) {
    console.log(`Fetching data for ${species.name} (${species.scientific})...`);
    
    // Find existing data for this species
    const existingData = existingSpecies.find(s => s.id === species.id);
    
    try {
      const apiData = await fetchSpeciesData(species.scientific);
      
      if (apiData.results && apiData.results.length > 0) {
        const result = apiData.results[0];
        const defaultPhoto = result.default_photo;
        
        // Extract data from API response
        const mappedStatus = mapStatus(result.conservation_status?.status);
        
        // Start with existing data if available, otherwise use defaults
        const baseData = existingData || {
          id: species.id,
          name: species.name,
          scientific: species.scientific,
          status: 'VU',
          statusFull: 'Vulnerable',
          population: "Data not available from iNaturalist API",
          habitat: "Data not available from iNaturalist API",
          region: "Data not available from iNaturalist API",
          year: new Date().getFullYear(),
          image: "",
          license: "CC-BY-SA",
          description: descriptions[species.name] || "Description not available",
          locations: locations[species.name] || [],
          url: wikipediaUrls[species.name] || ""
        };
        
        // Only update fields that we successfully retrieved from API
        const updatedSpeciesEntry = {
          ...baseData,
          status: mappedStatus,
          statusFull: getStatusFull(mappedStatus),
          population: baseData.population, // Keep existing data
          habitat: baseData.habitat, // Keep existing data
          region: baseData.region, // Keep existing data
          year: new Date().getFullYear(),
          image: defaultPhoto?.medium_url || baseData.image, // Only update if we have a photo
          license: defaultPhoto?.license_code || baseData.license, // Only update if we have a license
          description: baseData.description, // Keep existing description
          locations: baseData.locations, // Keep existing locations
          url: baseData.url // Keep existing URL
        };
        
        updatedSpecies.push(updatedSpeciesEntry);
        console.log(`✓ Successfully fetched data for ${species.name}`);
      } else {
        console.log(`✗ No data found for ${species.name}, preserving existing data`);
        // Use existing data if available, otherwise use defaults
        const preservedData = existingData || {
          id: species.id,
          name: species.name,
          scientific: species.scientific,
          status: 'VU',
          statusFull: 'Vulnerable',
          population: "Data not available from iNaturalist API",
          habitat: "Data not available from iNaturalist API",
          region: "Data not available from iNaturalist API",
          year: new Date().getFullYear(),
          image: "",
          license: "CC-BY-SA",
          description: descriptions[species.name] || "Description not available",
          locations: locations[species.name] || [],
          url: wikipediaUrls[species.name] || ""
        };
        updatedSpecies.push(preservedData);
      }
    } catch (error) {
      console.log(`✗ Error fetching data for ${species.name}: ${error.message}, preserving existing data`);
      // Use existing data if available, otherwise use defaults
      const preservedData = existingData || {
        id: species.id,
        name: species.name,
        scientific: species.scientific,
        status: 'VU',
        statusFull: 'Vulnerable',
        population: "Data not available from iNaturalist API",
        habitat: "Data not available from iNaturalist API",
        region: "Data not available from iNaturalist API",
        year: new Date().getFullYear(),
        image: "",
        license: "CC-BY-SA",
        description: descriptions[species.name] || "Description not available",
        locations: locations[species.name] || [],
        url: wikipediaUrls[species.name] || ""
      };
      updatedSpecies.push(preservedData);
    }
  }
  
  return updatedSpecies;
}

/**
 * Generate the updated TypeScript file content
 */
function generateTypeScriptFile(updatedSpecies) {
  const speciesArray = JSON.stringify(updatedSpecies, null, 4);
  
  const fileContent = `export interface Location {
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

export const speciesData: Species[] = ${speciesArray};

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
`;
  
  return fileContent;
}

/**
 * Main execution
 */
async function main() {
  console.log('Starting iNaturalist API scraper...\n');
  
  try {
    const updatedSpecies = await createUpdatedSpeciesData();
    const fileContent = generateTypeScriptFile(updatedSpecies);
    
    // Write to file
    const outputPath = path.join(__dirname, '../src/data/species.ts');
    fs.writeFileSync(outputPath, fileContent);
    
    console.log(`\n✓ Successfully updated ${outputPath}`);
    console.log(`✓ Updated ${updatedSpecies.length} species entries`);
    
  } catch (error) {
    console.error('Error:', error);
    process.exit(1);
  }
}

// Run the script
if (require.main === module) {
  main();
}

module.exports = { fetchSpeciesData, mapStatus, createUpdatedSpeciesData };
