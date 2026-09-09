/* Krishok Bondhu - Crop Data */

const cropsData = [
    {
        id: 1,
        name: "Rice",
        image: "assets/images/rice.jpg",
        shortDescription: "Staple food crop of Bangladesh, grown in flooded fields.",
        season: "Kharif (Monsoon)",
        soilType: "Clay loam, alluvial soil",
        irrigation: "Standing water, 5-10 cm depth",
        fertilizer: "Urea, TSP, MoP",
        harvestTime: "120-150 days after planting",
        description: "Rice is the most important staple food crop of Bangladesh, cultivated on about 80% of the cultivable land. It requires warm, humid climate with adequate water supply. Bangladesh produces both Aman (monsoon) and Boro (dry season) rice varieties."
    },
    {
        id: 2,
        name: "Wheat",
        image: "assets/images/wheat.jpg",
        shortDescription: "Rabi season crop, important for food security.",
        season: "Rabi (Winter)",
        soilType: "Well-drained loam soil",
        irrigation: "4-5 irrigations during growth",
        fertilizer: "Urea, TSP, Gypsum",
        harvestTime: "120-150 days after sowing",
        description: "Wheat is the second most important cereal crop in Bangladesh, grown during the winter season. It is a cool-season crop that requires moderate temperatures and well-drained soil for optimal growth."
    },
    {
        id: 3,
        name: "Potato",
        image: "assets/images/potato.jpg",
        shortDescription: "Root vegetable, major cash crop for farmers.",
        season: "Rabi (Winter)",
        soilType: "Sandy loam, well-drained",
        irrigation: "Regular irrigation needed",
        fertilizer: "DAP, Urea, MOP, Gypsum",
        harvestTime: "90-120 days after planting",
        description: "Potato is one of the most important cash crops in Bangladesh. It is widely cultivated in the northern and central regions. Potato cultivation provides significant income to small and marginal farmers."
    },
    {
        id: 4,
        name: "Tomato",
        image: "assets/images/tomato.jpg",
        shortDescription: "Popular vegetable, grown year-round.",
        season: "Year-round",
        soilType: "Well-drained fertile loam",
        irrigation: "Regular, avoid waterlogging",
        fertilizer: "DAP, Urea, MOP",
        harvestTime: "60-80 days after transplanting",
        description: "Tomato is a widely cultivated vegetable in Bangladesh. It is rich in vitamins and minerals, especially Vitamin C and lycopene. Both local and hybrid varieties are grown throughout the country."
    },
    {
        id: 5,
        name: "Onion",
        image: "assets/images/onion.jpg",
        shortDescription: "Essential spice crop with high market demand.",
        season: "Rabi (Winter)",
        soilType: "Sandy loam, light soil",
        irrigation: "Moderate, 4-5 irrigations",
        fertilizer: "DAP, Urea, MOP",
        harvestTime: "120-150 days after planting",
        description: "Onion is a key ingredient in Bangladeshi cuisine. The country imports a significant amount of onions despite domestic production. Major growing regions include Jessore, Rajshahi, and Rangpur."
    },
    {
        id: 6,
        name: "Brinjal",
        image: "assets/images/brinjal.jpg",
        shortDescription: "Versatile vegetable, multiple varieties available.",
        season: "Year-round",
        soilType: "Fertile loam soil",
        irrigation: "Regular irrigation required",
        fertilizer: "DAP, Urea, MOP, Compost",
        harvestTime: "60-70 days after transplanting",
        description: "Brinjal (Eggplant) is one of the most popular vegetables in Bangladesh. It comes in various shapes, sizes, and colors. The crop is susceptible to fruit and shoot borer, which requires careful management."
    },
    {
        id: 7,
        name: "Chili",
        image: "assets/images/chili.jpg",
        shortDescription: "Spice crop with strong export potential.",
        season: "Year-round",
        soilType: "Well-drained sandy loam",
        irrigation: "Moderate, avoid excess water",
        fertilizer: "DAP, Urea, Compost",
        harvestTime: "90-120 days after transplanting",
        description: "Chili is an important spice crop in Bangladesh, used extensively in cooking. Both green and dried chilies are consumed locally. Bangladesh produces several varieties including Bullet, Shotno, and Khali."
    },
    {
        id: 8,
        name: "Jute",
        image: "assets/images/jute.jpg",
        shortDescription: "Golden fiber, major cash crop for Bangladesh.",
        season: "Kharif (Monsoon)",
        soilType: "Alluvial, high fertile soil",
        irrigation: "Rain-fed, supplemental irrigation",
        fertilizer: "Urea, TSP, Gypsum",
        harvestTime: "120-150 days after sowing",
        description: "Jute is known as the 'Golden Fiber' of Bangladesh and has been a major export earner. Bangladesh is the world's second-largest producer of jute. It is used for making ropes, sacks, and various handicrafts."
    },
    {
        id: 9,
        name: "Mustard",
        image: "assets/images/mustard.jpg",
        shortDescription: "Oilseed crop, important for cooking oil.",
        season: "Rabi (Winter)",
        soilType: "Well-drained loam soil",
        irrigation: "Minimal, 1-2 irrigations",
        fertilizer: "DAP, Urea, Boron",
        harvestTime: "100-120 days after sowing",
        description: "Mustard is the most important oilseed crop in Bangladesh. It is grown during the winter season and is used for producing mustard oil and spices. Major varieties include BARI Sarisha-6 and Tori-7."
    },
    {
        id: 10,
        name: "Lentil",
        image: "assets/images/lentil.jpg",
        shortDescription: "Pulse crop, important protein source.",
        season: "Rabi (Winter)",
        soilType: "Well-drained loam to clay loam",
        irrigation: "Minimal, 1-2 irrigations",
        fertilizer: "TSP, MoP, Urea",
        harvestTime: "100-120 days after sowing",
        description: "Lentil (Masoor) is an important pulse crop in Bangladesh, providing essential protein to the diet. It is grown during the winter season and helps in soil fertility improvement through nitrogen fixation."
    }
];

// Function to get crop by ID
function getCropById(id) {
    return cropsData.find(crop => crop.id === parseInt(id));
}

// Function to get all crops
function getAllCrops() {
    return cropsData;
}
