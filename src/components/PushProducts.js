import React from 'react';

const categories = [
  'electronics', 'home', 'toys', 'books', 'sports', 'automotive', 'health',
  'kitchen', 'garden', 'furniture', 'office'
];

const categoryDetails = {
  electronics: {
    titles: [
      "Smartphone X100", "Laptop Pro 2024", "Wireless Headphones", "4K Ultra HD Camera", 
      "Smartwatch Series 5", "Bluetooth Speaker", "Gaming Console", "Tablet Pro 10"
    ],
    descriptions: [
      "Latest smartphone with cutting-edge technology and features.",
      "High-performance laptop with a sleek design and powerful processor.",
      "Comfortable wireless headphones with superior sound quality.",
      "Capture stunning photos and videos with this high-resolution camera.",
      "Feature-rich smartwatch with health tracking and notifications.",
      "Portable Bluetooth speaker with crystal-clear sound and long battery life.",
      "Next-gen gaming console with incredible graphics and speed.",
      "Versatile tablet perfect for work and entertainment on the go."
    ]
  },
  home: {
    titles: [
      "Leather Sofa", "Wooden Dining Table", "Modern Floor Lamp", "Luxury Curtains", 
      "Memory Foam Mattress", "Coffee Table", "Wall Art", "Area Rug"
    ],
    descriptions: [
      "Comfortable leather sofa with a modern design and ample seating.",
      "Elegant wooden dining table with a spacious surface and sturdy construction.",
      "Sleek modern floor lamp that complements any home decor.",
      "Luxurious curtains made from high-quality fabric with a sophisticated design.",
      "Memory foam mattress that offers exceptional comfort and support.",
      "Stylish coffee table with a contemporary design and functional storage.",
      "Beautiful wall art to enhance the aesthetics of your living space.",
      "Soft and plush area rug that adds warmth and style to any room."
    ]
  },
  toys: {
    titles: [
      "Building Blocks Set", "Remote Control Car", "Dollhouse", "Action Figures", 
      "Educational Puzzle", "Stuffed Animal", "Toy Train", "Play Kitchen"
    ],
    descriptions: [
      "Creative building blocks set for hours of fun and imagination.",
      "Exciting remote control car with impressive speed and control.",
      "Detailed dollhouse with furniture for endless playtime adventures.",
      "Collection of action figures from popular characters and heroes.",
      "Engaging educational puzzle that promotes cognitive development.",
      "Soft and cuddly stuffed animal for comforting playtime.",
      "Fun and interactive toy train for kids of all ages.",
      "Realistic play kitchen set for aspiring young chefs."
    ]
  },
  books: {
    titles: [
      "The Great Gatsby", "1984", "To Kill a Mockingbird", "Moby Dick", 
      "Pride and Prejudice", "The Catcher in the Rye", "Harry Potter and the Sorcerer's Stone", "The Hobbit"
    ],
    descriptions: [
      "A classic novel depicting the opulence and decadence of the Roaring Twenties.",
      "A dystopian vision of a totalitarian future, with a powerful narrative.",
      "A profound and moving story of racial injustice and moral growth.",
      "An epic tale of obsession and revenge set on the high seas.",
      "A beloved classic exploring themes of love, class, and social expectations.",
      "A gripping coming-of-age novel about teenage rebellion and alienation.",
      "The magical beginning of the world-renowned Harry Potter series.",
      "A fantastical adventure that precedes the Lord of the Rings trilogy."
    ]
  },
  sports: {
    titles: [
      "Running Shoes", "Yoga Mat", "Fitness Tracker", "Basketball", 
      "Cycling Helmet", "Tennis Racket", "Soccer Ball", "Swimming Goggles"
    ],
    descriptions: [
      "High-performance running shoes designed for comfort and durability.",
      "Non-slip yoga mat providing excellent grip and cushioning.",
      "Advanced fitness tracker with heart rate monitoring and activity tracking.",
      "Durable basketball for indoor and outdoor play.",
      "Lightweight and protective cycling helmet with adjustable fit.",
      "Precision tennis racket with excellent control and power.",
      "Standard soccer ball designed for training and match play.",
      "Comfortable swimming goggles with anti-fog and UV protection."
    ]
  },
  automotive: {
    titles: [
      "Car GPS Navigation", "Dash Cam", "Leather Car Seat Covers", "Portable Jump Starter", 
      "Car Vacuum Cleaner", "Bluetooth Car Kit", "Roof Rack", "Car Cleaning Kit"
    ],
    descriptions: [
      "Advanced GPS navigation system with real-time traffic updates.",
      "High-definition dash cam for recording your driving experience.",
      "Premium leather seat covers for added comfort and style.",
      "Portable jump starter to ensure you’re never stranded with a dead battery.",
      "Compact car vacuum cleaner for quick and efficient cleaning.",
      "Bluetooth car kit for hands-free calls and audio streaming.",
      "Durable roof rack for transporting bikes, skis, and more.",
      "Complete car cleaning kit for maintaining your vehicle’s interior and exterior."
    ]
  },
  health: {
    titles: [
      "Blood Pressure Monitor", "Electric Toothbrush", "Fitness Tracker", "Air Purifier", 
      "Digital Thermometer", "Massage Gun", "Yoga Blocks", "Foot Spa"
    ],
    descriptions: [
      "Accurate blood pressure monitor with easy-to-read display.",
      "Advanced electric toothbrush for superior oral hygiene.",
      "Wearable fitness tracker with heart rate and activity monitoring.",
      "High-efficiency air purifier for cleaner and fresher indoor air.",
      "Digital thermometer with quick and precise temperature readings.",
      "Powerful massage gun for muscle recovery and relaxation.",
      "Supportive yoga blocks to assist in various yoga poses.",
      "Soothing foot spa with heat and massage functions."
    ]
  },
  kitchen: {
    titles: [
      "Blender", "Coffee Maker", "Cookware Set", "Food Processor", 
      "Toaster Oven", "Electric Kettle", "Knife Set", "Microwave Oven"
    ],
    descriptions: [
      "High-powered blender for smoothies and soups.",
      "Coffee maker with programmable settings and adjustable brew strength.",
      "Complete cookware set with pots, pans, and lids.",
      "Versatile food processor for chopping, slicing, and pureeing.",
      "Compact toaster oven with multiple cooking functions.",
      "Electric kettle with rapid boiling and auto shut-off features.",
      "Professional knife set with precision blades and ergonomic handles.",
      "Microwave oven with various cooking presets and defrosting options."
    ]
  },
  garden: {
    titles: [
      "Garden Tools Set", "Patio Furniture", "Grill", "Outdoor Planters", 
      "Garden Hose", "Bird Feeder", "Compost Bin", "Garden Shovel"
    ],
    descriptions: [
      "Complete garden tools set including trowels, pruners, and gloves.",
      "Stylish patio furniture set for relaxing and entertaining outdoors.",
      "High-performance grill for cooking delicious meals in your backyard.",
      "Decorative and functional outdoor planters for your plants.",
      "Durable garden hose with adjustable nozzle for watering your garden.",
      "Attractive bird feeder to invite wildlife into your garden.",
      "Compost bin for eco-friendly waste disposal and soil enrichment.",
      "Sturdy garden shovel for planting and soil cultivation."
    ]
  },
  furniture: {
    titles: [
      "Sofa Bed", "Dining Chair", "Office Desk", "Bookshelf", 
      "Coffee Table", "Accent Chair", "Bed Frame", "TV Stand"
    ],
    descriptions: [
      "Versatile sofa bed with a modern design and comfort.",
      "Stylish dining chair with a durable construction.",
      "Functional office desk with ample storage space.",
      "Elegant bookshelf for displaying your favorite books and decor.",
      "Chic coffee table that complements any living room decor.",
      "Comfortable accent chair to enhance your home’s interior design.",
      "Sturdy bed frame with a stylish headboard.",
      "Practical TV stand with storage for media devices."
    ]
  },
  office: {
    titles: [
      "Ergonomic Chair", "Office Desk", "Monitor Stand", "Desk Lamp", 
      "Filing Cabinet", "Bookcase", "Office Chair Mat", "Desk Organizer"
    ],
    descriptions: [
      "Ergonomic chair with adjustable features for all-day comfort.",
      "Sleek office desk with ample space for work and organization.",
      "Adjustable monitor stand to improve posture and reduce neck strain.",
      "Modern desk lamp with adjustable brightness and style.",
      "Functional filing cabinet for organized document storage.",
      "Elegant bookcase to display books and office decor.",
      "Protective office chair mat to prevent floor damage.",
      "Desk organizer to keep your workspace tidy and efficient."
    ]
  }
};

const generateProduct = (index) => {
  const category = categories[Math.floor(Math.random() * categories.length)];
  const { titles, descriptions } = categoryDetails[category] || { titles: [], descriptions: [] };
  const title = titles[index % titles.length];
  const description = descriptions[index % descriptions.length];
  
  return {
    title: title || `Product ${index}`,
    description: description || `This is a top-quality ${category} product number ${index}.`,
    category: category,
    price: Math.floor(Math.random() * 200) + 50,
    slider_show: false,
    rating: (Math.random() * 4 + 1).toFixed(1),
    available: Math.floor(Math.random() * 50) + 1
  };
};

const pushProducts = async () => {
  for (let i = 1; i <= 50; i++) {
    const product = generateProduct(i);

    try {
      const response = await fetch('http://localhost:1337/api/products', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ data: product }),
      });

      if (!response.ok) {
        const errorData = await response.text(); // Get error response text
        throw new Error(`HTTP error! Status: ${response.status} - ${errorData}`);
      }

      const responseData = await response.json();
      console.log(`Product ${i} pushed successfully`, responseData);
    } catch (error) {
      console.error(`Failed to push Product ${i}`, error.message);
    }

    // Add a delay to avoid overwhelming the server
    // await new Promise(resolve => setTimeout(resolve, 100)); // 100ms delay
  }
};

const PushProducts = () => {
  return (
    <div>
      <button onClick={pushProducts}>Push 100 Products</button>
    </div>
  );
};

export default PushProducts;
