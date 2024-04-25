import img1 from "../Images/html-3.jpg";
import img2 from "../Images/html-1.jpg";
import img3 from "../Images/html-2.jpg";
import img4 from "../Images/html-4.jpg";

export const properties = [
    {
        "id": 1,
        "name": "Grand Hotel",
        "slug": "grand-hotel",
        "description": "",
        "allowsCancellation": true,
        "offersAirportTaxiService": true,
        "hasAirConditioning": true,
        "taxIncludedInPrice": true,
        "roomSize": "full",
        "distanceFromCityCenter": "500M",
        "numberOfBathrooms": 1,
        "bedDimensions": "21m3 1 full bed",
        "originalPrice": "59",
        "discountedPrice": "45",
        "rating": {
            "id": 1,
            "count": 8.9,
            "value": "Excellent"
        },
        "featuredImageUrl": img1,
        "images": [
            {
                "id": 1,
                "imageUrl": img1
            },
            {
                "id": 2,
                "imageUrl": img2
            },
            {
                "id": 3,
                "imageUrl": img3
            },
            {
                "id": 4,
                "imageUrl": img4
            }
        ]
    },
    {
        "id": 4,
        "name": "Mountain Lodge",
        "slug": "mountain-lodge",
        "description": "Embrace nature's beauty at Mountain Lodge...",
        "allowsCancellation": true,
        "offersAirportTaxiService": true,
        "hasAirConditioning": true,
        "taxIncludedInPrice": true,
        "roomSize": "cabin",
        "distanceFromCityCenter": "10KM",
        "numberOfBathrooms": 1,
        "bedDimensions": "25m3 1 king bed, 2 twin beds",
        "originalPrice": "120",
        "discountedPrice": "100",
        "rating": {
            "id": 4,
            "count": 9.0,
            "value": "Excellent"
        },
        "featuredImageUrl": img2,
        "images": [
            {
                "id": 1,
                "imageUrl": img1,
            },
            {
                "id": 2,
                "imageUrl": img2
            },
            {
                "id": 3,
                "imageUrl": img3
            },
            {
                "id": 4,
                "imageUrl": img4
            }
        ]
    },
    {
        "id": 3,
        "name": "Cozy Cottage",
        "slug": "cozy-cottage",
        "description": "Escape to a charming retreat at Cozy Cottage...",
        "allowsCancellation": true,
        "offersAirportTaxiService": true,
        "hasAirConditioning": false,
        "taxIncludedInPrice": false,
        "roomSize": "cottage",
        "distanceFromCityCenter": "3KM",
        "numberOfBathrooms": 1,
        "bedDimensions": "15m3 1 queen bed",
        "originalPrice": "80",
        "discountedPrice": "75",
        "rating": {
            "id": 3,
            "count": 8.5,
            "value": "Great"
        },
        "featuredImageUrl": img3,
        "images": [
            {
                "id": 1,
                "imageUrl": img1
            },
            {
                "id": 2,
                "imageUrl": img2
            },
            {
                "id": 3,
                "imageUrl": img3
            },
            {
                "id": 4,
                "imageUrl": img4
            }
        ]
    },
    {
        "id": 2,
        "name": "Sunset Resort",
        "slug": "sunset-resort",
        "description": "Experience luxury and relaxation at Sunset Resort...",
        "allowsCancellation": true,
        "offersAirportTaxiService": false,
        "hasAirConditioning": true,
        "taxIncludedInPrice": true,
        "roomSize": "suite",
        "distanceFromCityCenter": "1KM",
        "numberOfBathrooms": 2,
        "bedDimensions": "30m3 1 king bed, 2 queen beds",
        "originalPrice": "150",
        "discountedPrice": "120",
        "rating": {
            "id": 2,
            "count": 9.2,
            "value": "Outstanding"
        },
        "featuredImageUrl": img4,
        "images": [
            {
                "id": 1,
                "imageUrl": img1
            },
            {
                "id": 2,
                "imageUrl": img2
            },
            {
                "id": 3,
                "imageUrl": img3
            },
            {
                "id": 4,
                "imageUrl": img4
            }
        ]
    }       
];