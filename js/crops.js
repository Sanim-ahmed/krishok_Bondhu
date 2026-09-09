/* Krishok Bondhu - Crop Data */

const cropsData = [
    {
        id: 1,
        name: "Rice",
        nameKey: "rice",
        image: "assets/images/rice.jpg"
    },
    {
        id: 2,
        name: "Wheat",
        nameKey: "wheat",
        image: "assets/images/wheat.jpg"
    },
    {
        id: 3,
        name: "Potato",
        nameKey: "potato",
        image: "assets/images/potato.jpg"
    },
    {
        id: 4,
        name: "Tomato",
        nameKey: "tomato",
        image: "assets/images/tomato.jpg"
    },
    {
        id: 5,
        name: "Onion",
        nameKey: "onion",
        image: "assets/images/onion.jpg"
    },
    {
        id: 6,
        name: "Brinjal",
        nameKey: "brinjal",
        image: "assets/images/brinjal.jpg"
    },
    {
        id: 7,
        name: "Chili",
        nameKey: "chili",
        image: "assets/images/chili.jpg"
    },
    {
        id: 8,
        name: "Jute",
        nameKey: "jute",
        image: "assets/images/jute.jpg"
    },
    {
        id: 9,
        name: "Mustard",
        nameKey: "mustard",
        image: "assets/images/mustard.jpg"
    },
    {
        id: 10,
        name: "Lentil",
        nameKey: "lentil",
        image: "assets/images/lentil.jpg"
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
