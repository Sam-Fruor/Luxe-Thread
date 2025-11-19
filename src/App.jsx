import React, { useState, useEffect } from 'react';
import { ShoppingBag, X, Minus, Plus, Trash2, CreditCard, Check, Search, Menu, ArrowRight, Star } from 'lucide-react';

import logo from './assets/Logo.png';

// --- Mock Data ---
const PRODUCTS = [
  // --- MEN ---
  {
    id: 1,
    name: "Classic Merino Wool Sweater",
    price: 89.00,
    category: "Men",
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1611312449408-fcece27cdbb7?auto=format&fit=crop&w=800&q=80",
    description: "Soft, breathable, and perfectly tailored for a modern fit."
  },
  {
    id: 3,
    name: "Urban Cargo Trousers",
    price: 65.00,
    category: "Men",
    rating: 4.5,
    image: "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?auto=format&fit=crop&w=800&q=80",
    description: "Functional pockets meets tailored street style."
  },
  {
    id: 7,
    name: "Denim Jacket Vintage Wash",
    price: 78.00,
    category: "Men",
    rating: 4.4,
    image: "https://images.unsplash.com/photo-1576871337632-b9aef4c17ab9?auto=format&fit=crop&w=800&q=80",
    description: "A timeless classic that gets better with age."
  },
  {
    id: 9,
    name: "Oxford Button-Down Shirt",
    price: 55.00,
    category: "Men",
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?auto=format&fit=crop&w=800&q=80",
    description: "Crisp cotton essential for work or weekends."
  },
  {
    id: 10,
    name: "Slim Fit Chinos",
    price: 48.00,
    category: "Men",
    rating: 4.6,
    image: "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?auto=format&fit=crop&w=800&q=80",
    description: "Versatile trousers that bridge the gap between casual and formal."
  },
  {
    id: 11,
    name: "Leather Biker Jacket",
    price: 245.00,
    category: "Men",
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1487222477894-8943e31ef7b2?auto=format&fit=crop&w=800&q=80",
    description: "Genuine leather with heavy-duty hardware."
  },
  {
    id: 12,
    name: "Puffer Vest",
    price: 62.00,
    category: "Men",
    rating: 4.3,
    image: "https://images.unsplash.com/photo-1516517372098-66df25068769?auto=format&fit=crop&w=800&q=80",
    description: "Lightweight warmth for transitional weather."
  },
  {
    id: 13,
    name: "Abstract Graphic Tee",
    price: 35.00,
    category: "Men",
    rating: 4.2,
    image: "https://images.unsplash.com/photo-1529374255404-311a2a4f1fd9?auto=format&fit=crop&w=800&q=80",
    description: "Soft organic cotton with a unique print."
  },
  {
    id: 14,
    name: "Linen Summer Shorts",
    price: 42.00,
    category: "Men",
    rating: 4.5,
    image: "https://images.unsplash.com/photo-1565510346757-8d4d02b48195?auto=format&fit=crop&w=800&q=80",
    description: "Breathable fabric perfect for hot days."
  },
  {
    id: 15,
    name: "Wool Blend Overcoat",
    price: 189.00,
    category: "Men",
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1544966396-756e46473578?auto=format&fit=crop&w=800&q=80",
    description: "Sophisticated outerwear for the colder months."
  },
  {
    id: 16,
    name: "Knit Polo Shirt",
    price: 58.00,
    category: "Men",
    rating: 4.6,
    image: "https://images.unsplash.com/photo-1626557981101-aae6f84aa6ae?auto=format&fit=crop&w=800&q=80",
    description: "Elevated casual wear with a textured finish."
  },
  {
    id: 17,
    name: "Relaxed Fit Hoodie",
    price: 68.00,
    category: "Men",
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1556906781-9a412961c28c?auto=format&fit=crop&w=800&q=80",
    description: "Heavyweight fleece for ultimate comfort."
  },
  {
    id: 18,
    name: "Tapered Joggers",
    price: 52.00,
    category: "Men",
    rating: 4.4,
    image: "https://images.unsplash.com/photo-1552953227-a4341fb6a9b4?auto=format&fit=crop&w=800&q=80",
    description: "Athleisure staples for gym or lounging."
  },
  {
    id: 19,
    name: "Corduroy Shirt Jacket",
    price: 85.00,
    category: "Men",
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1504198458649-3128b932f49e?auto=format&fit=crop&w=800&q=80",
    description: "Vintage inspired layering piece."
  },
  {
    id: 20,
    name: "Classic Bomber Jacket",
    price: 110.00,
    category: "Men",
    rating: 4.6,
    image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?auto=format&fit=crop&w=800&q=80",
    description: "Military-inspired style with a modern cut."
  },
  {
    id: 21,
    name: "V-Neck Cashmere Sweater",
    price: 150.00,
    category: "Men",
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1582552938357-32b906df40cb?auto=format&fit=crop&w=800&q=80",
    description: "Luxurious softness in a timeless silhouette."
  },
  {
    id: 22,
    name: "Flannel Plaid Shirt",
    price: 45.00,
    category: "Men",
    rating: 4.5,
    image: "https://images.unsplash.com/photo-1603252109303-2751441dd157?auto=format&fit=crop&w=800&q=80",
    description: "Rugged style for outdoor adventures."
  },
  {
    id: 23,
    name: "Tailored Suit Blazer",
    price: 199.00,
    category: "Men",
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=800&q=80",
    description: "Sharp lines for professional settings."
  },
  {
    id: 24,
    name: "Performance Shorts",
    price: 38.00,
    category: "Men",
    rating: 4.3,
    image: "https://images.unsplash.com/photo-1617317376997-8748e6862c01?auto=format&fit=crop&w=800&q=80",
    description: "Moisture-wicking fabric for high activity."
  },
  {
    id: 25,
    name: "Henley Long Sleeve",
    price: 40.00,
    category: "Men",
    rating: 4.4,
    image: "https://images.unsplash.com/photo-1586363104862-3a5e2ab60d99?auto=format&fit=crop&w=800&q=80",
    description: "Casual essential with button detailing."
  },

  // --- WOMEN ---
  {
    id: 2,
    name: "Structured Cotton Trench",
    price: 129.50,
    category: "Women",
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?auto=format&fit=crop&w=800&q=80",
    description: "Water-resistant cotton blend with a classic double-breasted front."
  },
  {
    id: 4,
    name: "Silk Pleated Midi Skirt",
    price: 95.00,
    category: "Women",
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1583496661160-fb5886a0aaaa?auto=format&fit=crop&w=800&q=80",
    description: "Elegant flow with a comfortable elastic waistband."
  },
  {
    id: 8,
    name: "Floral Wrap Dress",
    price: 82.00,
    category: "Women",
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1612336307429-8a898d10e223?auto=format&fit=crop&w=800&q=80",
    description: "Lightweight rayon fabric perfect for summer days."
  },
  {
    id: 26,
    name: "High-Waisted Wide Leg Jeans",
    price: 79.00,
    category: "Women",
    rating: 4.6,
    image: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?auto=format&fit=crop&w=800&q=80",
    description: "Vintage inspired denim cut."
  },
  {
    id: 27,
    name: "Satin Slip Dress",
    price: 88.00,
    category: "Women",
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&w=800&q=80",
    description: "Minimalist evening wear in emerald green."
  },
  {
    id: 28,
    name: "Oversized Knit Cardigan",
    price: 65.00,
    category: "Women",
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?auto=format&fit=crop&w=800&q=80",
    description: "Cozy layering piece in chunky knit."
  },
  {
    id: 29,
    name: "Cropped Leather Jacket",
    price: 195.00,
    category: "Women",
    rating: 4.5,
    image: "https://images.unsplash.com/photo-1551488852-d8a48f958911?auto=format&fit=crop&w=800&q=80",
    description: "Edgy staple with silver hardware details."
  },
  {
    id: 30,
    name: "Boho Maxi Dress",
    price: 110.00,
    category: "Women",
    rating: 4.6,
    image: "https://images.unsplash.com/photo-1605763240004-7e93b172d754?auto=format&fit=crop&w=800&q=80",
    description: "Free-spirited prints with a flowing silhouette."
  },
  {
    id: 31,
    name: "Classic Pencil Skirt",
    price: 55.00,
    category: "Women",
    rating: 4.4,
    image: "https://images.unsplash.com/photo-1551163943-3f6a855d1153?auto=format&fit=crop&w=800&q=80",
    description: "Office-ready tailored skirt."
  },
  {
    id: 32,
    name: "Silk Blouse",
    price: 92.00,
    category: "Women",
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?auto=format&fit=crop&w=800&q=80",
    description: "Lustrous fabric with a draped fit."
  },
  {
    id: 33,
    name: "Cashmere Turtleneck",
    price: 140.00,
    category: "Women",
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?auto=format&fit=crop&w=800&q=80",
    description: "Winter essential in soft neutral tones."
  },
  {
    id: 34,
    name: "Denim Shirt Dress",
    price: 72.00,
    category: "Women",
    rating: 4.5,
    image: "https://images.unsplash.com/photo-1591369822096-ffd140ec948f?auto=format&fit=crop&w=800&q=80",
    description: "Casual chic with a belted waist."
  },
  {
    id: 35,
    name: "Linen Trousers",
    price: 68.00,
    category: "Women",
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?auto=format&fit=crop&w=800&q=80",
    description: "Airy comfort for warmer climates."
  },
  {
    id: 36,
    name: "Velvet Blazer",
    price: 120.00,
    category: "Women",
    rating: 4.6,
    image: "https://images.unsplash.com/photo-1548624313-0396c75e4b1a?auto=format&fit=crop&w=800&q=80",
    description: "Rich texture for evening elegance."
  },
  {
    id: 37,
    name: "Off-Shoulder Top",
    price: 45.00,
    category: "Women",
    rating: 4.3,
    image: "https://images.unsplash.com/photo-1503185912284-5271ff81b9a8?auto=format&fit=crop&w=800&q=80",
    description: "Feminine neckline with ruffled details."
  },
  {
    id: 38,
    name: "A-Line Mini Skirt",
    price: 48.00,
    category: "Women",
    rating: 4.4,
    image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=800&q=80",
    description: "Playful silhouette in corduroy."
  },
  {
    id: 39,
    name: "Long Puffer Coat",
    price: 210.00,
    category: "Women",
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1545594861-364edc32507f?auto=format&fit=crop&w=800&q=80",
    description: "Maximum warmth with a modern matte finish."
  },
  {
    id: 40,
    name: "Wrap Blouse",
    price: 58.00,
    category: "Women",
    rating: 4.5,
    image: "https://images.unsplash.com/photo-1551803091-e206a341e8d1?auto=format&fit=crop&w=800&q=80",
    description: "Flattering cut suitable for work or dinner."
  },
  {
    id: 41,
    name: "Tailored Jumpsuit",
    price: 115.00,
    category: "Women",
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1594633313593-bab3825d0caf?auto=format&fit=crop&w=800&q=80",
    description: "One-piece wonder for effortless style."
  },
  {
    id: 42,
    name: "Boyfriend Blazer",
    price: 105.00,
    category: "Women",
    rating: 4.6,
    image: "https://images.unsplash.com/photo-1592621386393-3180246c8679?auto=format&fit=crop&w=800&q=80",
    description: "Relaxed fit for a cool, borrowed-from-the-boys look."
  },

  // --- ACCESSORIES ---
  {
    id: 5,
    name: "Minimalist Leather Tote",
    price: 145.00,
    category: "Accessories",
    rating: 5.0,
    image: "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?auto=format&fit=crop&w=800&q=80",
    description: "Full-grain leather with ample space for a laptop."
  },
  {
    id: 6,
    name: "Canvas Low-Top Sneakers",
    price: 55.00,
    category: "Accessories",
    rating: 4.6,
    image: "https://images.unsplash.com/photo-1607522370275-f14206c11513?auto=format&fit=crop&w=800&q=80",
    description: "Everyday comfort with a durable rubber sole."
  },
  {
    id: 43,
    name: "Classic Aviator Sunglasses",
    price: 125.00,
    category: "Accessories",
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?auto=format&fit=crop&w=800&q=80",
    description: "Gold-tone frames with polarized lenses."
  },
  {
    id: 44,
    name: "Leather Dress Belt",
    price: 45.00,
    category: "Accessories",
    rating: 4.5,
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=800&q=80",
    description: "Full grain leather with a brushed buckle."
  },
  {
    id: 45,
    name: "Silk Printed Scarf",
    price: 60.00,
    category: "Accessories",
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1584030373081-f37b7bb4fa3e?auto=format&fit=crop&w=800&q=80",
    description: "Adds a pop of color to any outfit."
  },
  {
    id: 46,
    name: "Merino Wool Beanie",
    price: 35.00,
    category: "Accessories",
    rating: 4.6,
    image: "https://images.unsplash.com/photo-1576871337622-98d48d1cf531?auto=format&fit=crop&w=800&q=80",
    description: "Warm and stylish for cold weather."
  },
  {
    id: 47,
    name: "Chronograph Watch",
    price: 250.00,
    category: "Accessories",
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1522312346375-d1a52e2b99b3?auto=format&fit=crop&w=800&q=80",
    description: "Stainless steel case with a leather strap."
  },
  {
    id: 48,
    name: "Slim Leather Wallet",
    price: 50.00,
    category: "Accessories",
    rating: 4.5,
    image: "https://images.unsplash.com/photo-1627123424574-724758594e93?auto=format&fit=crop&w=800&q=80",
    description: "Minimalist design holding essential cards."
  },
  {
    id: 49,
    name: "Canvas Weekender Bag",
    price: 110.00,
    category: "Accessories",
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=800&q=80",
    description: "Perfect size for short getaways."
  },
  {
    id: 50,
    name: "Wool Fedora Hat",
    price: 75.00,
    category: "Accessories",
    rating: 4.4,
    image: "https://images.unsplash.com/photo-1514327605112-b887c0e61c0a?auto=format&fit=crop&w=800&q=80",
    description: "Wide-brimmed hat for a sophisticated look."
  },
  {
    id: 51,
    name: "Gold Statement Necklace",
    price: 85.00,
    category: "Accessories",
    rating: 4.6,
    image: "https://images.unsplash.com/photo-1599643478518-17488fbbcd75?auto=format&fit=crop&w=800&q=80",
    description: "Bold links that elevate simple tees."
  },
  {
    id: 52,
    name: "Gold Hoop Earrings",
    price: 40.00,
    category: "Accessories",
    rating: 4.5,
    image: "https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?auto=format&fit=crop&w=800&q=80",
    description: "Classic everyday jewelry staple."
  },
  {
    id: 53,
    name: "Crossbody Bag",
    price: 95.00,
    category: "Accessories",
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format&fit=crop&w=800&q=80",
    description: "Hands-free convenience with style."
  },
  {
    id: 54,
    name: "Suede Ankle Boots",
    price: 130.00,
    category: "Accessories",
    rating: 4.6,
    image: "https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2?auto=format&fit=crop&w=800&q=80",
    description: "Versatile footwear for fall and spring."
  },
  {
    id: 55,
    name: "Athletic Running Shoes",
    price: 110.00,
    category: "Accessories",
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=800&q=80",
    description: "Engineered for comfort and speed."
  },
  {
    id: 56,
    name: "Leather Driving Gloves",
    price: 65.00,
    category: "Accessories",
    rating: 4.4,
    image: "https://images.unsplash.com/photo-1595341888016-a392ef81b7de?auto=format&fit=crop&w=800&q=80",
    description: "Supple leather with perforated details."
  },
  {
    id: 57,
    name: "Urban Tech Backpack",
    price: 120.00,
    category: "Accessories",
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=800&q=80",
    description: "Weather-resistant with padded laptop sleeve."
  },
  {
    id: 58,
    name: "Cotton Baseball Cap",
    price: 25.00,
    category: "Accessories",
    rating: 4.3,
    image: "https://images.unsplash.com/photo-1588850561407-ed78c282e89b?auto=format&fit=crop&w=800&q=80",
    description: "Casual sun protection."
  },
  {
    id: 59,
    name: "Chain Link Bracelet",
    price: 55.00,
    category: "Accessories",
    rating: 4.5,
    image: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?auto=format&fit=crop&w=800&q=80",
    description: "Subtle shine for your wrist."
  },
  {
    id: 60,
    name: "Chelsea Boots",
    price: 150.00,
    category: "Accessories",
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1605812853380-9d136597e6fa?auto=format&fit=crop&w=800&q=80",
    description: "Timeless slip-on boot style."
  }
];

export default function LuxeThreadApp() {
  const [view, setView] = useState('home'); // 'home', 'cart', 'checkout', 'success'
  const [cart, setCart] = useState([]);
  const [categoryFilter, setCategoryFilter] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [toast, setToast] = useState(null);

  // --- Cart Logic ---
  const addToCart = (product) => {
    setCart(prevCart => {
      const existingItem = prevCart.find(item => item.id === product.id);
      if (existingItem) {
        return prevCart.map(item => 
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prevCart, { ...product, quantity: 1 }];
    });
    showToast(`Added ${product.name} to bag`);
  };

  const removeFromCart = (productId) => {
    setCart(prevCart => prevCart.filter(item => item.id !== productId));
  };

  const updateQuantity = (productId, change) => {
    setCart(prevCart => prevCart.map(item => {
      if (item.id === productId) {
        const newQuantity = Math.max(1, item.quantity + change);
        return { ...item, quantity: newQuantity };
      }
      return item;
    }));
  };

  const getCartCount = () => cart.reduce((acc, item) => acc + item.quantity, 0);
  
  const getCartTotal = () => cart.reduce((acc, item) => acc + (item.price * item.quantity), 0);

  // --- Toast Notification ---
  const showToast = (message) => {
    setToast(message);
    setTimeout(() => setToast(null), 3000);
  };

  // --- Filtering ---
  const filteredProducts = PRODUCTS.filter(product => {
    const matchesCategory = categoryFilter === 'All' || product.category === categoryFilter;
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  // --- Subcomponents ---

  
  const Header = () => (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center cursor-pointer" onClick={() => setView('home')}>
            <img 
              src={logo} 
              alt="LuxeThread Logo" 
              className="h-10 w-auto mr-2 rounded-md object-contain" 
            />
            <span className="font-bold text-xl tracking-tight text-gray-900">LuxeThread</span>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex space-x-8">
            {['All', 'Men', 'Women', 'Accessories'].map((cat) => (
              <button
                key={cat}
                onClick={() => { setCategoryFilter(cat); setView('home'); }}
                className={`text-sm font-medium transition-colors ${
                  categoryFilter === cat && view === 'home' ? 'text-indigo-600' : 'text-gray-500 hover:text-gray-900'
                }`}
              >
                {cat}
              </button>
            ))}
          </nav>

          {/* Right Actions */}
          <div className="flex items-center space-x-4">
            <div className="relative hidden sm:block">
              <input
                type="text"
                placeholder="Search..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-9 pr-4 py-2 border border-gray-200 rounded-full text-sm focus:outline-none focus:border-indigo-500 w-40 focus:w-64 transition-all"
              />
              <Search className="w-4 h-4 text-gray-400 absolute left-3 top-3" />
            </div>
            
            <button 
              onClick={() => setView('cart')}
              className="relative p-2 text-gray-500 hover:text-indigo-600 transition-colors"
            >
              <ShoppingBag className="w-6 h-6" />
              {getCartCount() > 0 && (
                <span className="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-white transform translate-x-1/4 -translate-y-1/4 bg-indigo-600 rounded-full">
                  {getCartCount()}
                </span>
              )}
            </button>
            
            <button className="md:hidden p-2 text-gray-500" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 py-2">
          {['All', 'Men', 'Women', 'Accessories'].map((cat) => (
            <button
              key={cat}
              onClick={() => { setCategoryFilter(cat); setView('home'); setIsMobileMenuOpen(false); }}
              className="block w-full text-left px-4 py-3 text-base font-medium text-gray-500 hover:bg-gray-50 hover:text-indigo-600"
            >
              {cat}
            </button>
          ))}
        </div>
      )}
    </header>
  );

  const ProductGrid = () => (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="flex justify-between items-end mb-8">
        <div>
          <h2 className="text-3xl font-bold text-gray-900">{categoryFilter} Collection</h2>
          <p className="mt-2 text-gray-500">Showing {filteredProducts.length} results</p>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-10 gap-x-6 xl:gap-x-8">
        {filteredProducts.map((product) => (
          <div key={product.id} className="group relative">
            <div className="aspect-[3/4] w-full overflow-hidden rounded-2xl bg-gray-200 group-hover:opacity-75 transition-opacity">
              <img
                src={product.image}
                alt={product.name}
                className="h-full w-full object-cover object-center"
              />
              <button
                onClick={() => addToCart(product)}
                className="absolute bottom-4 right-4 bg-white p-3 rounded-full shadow-lg text-gray-900 hover:bg-indigo-600 hover:text-white transition-colors transform translate-y-12 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 duration-300"
              >
                <Plus className="w-6 h-6" />
              </button>
            </div>
            <div className="mt-4 flex justify-between">
              <div>
                <h3 className="text-sm font-medium text-gray-900">
                  {product.name}
                </h3>
                <p className="mt-1 text-sm text-gray-500">{product.category}</p>
              </div>
              <p className="text-sm font-bold text-gray-900">${product.price.toFixed(2)}</p>
            </div>
            <div className="flex items-center mt-1">
              <Star className="w-3 h-3 text-yellow-400 fill-current" />
              <span className="ml-1 text-xs text-gray-500">{product.rating}</span>
            </div>
          </div>
        ))}
      </div>
    </main>
  );

  const CartView = () => {
    const subtotal = getCartTotal();
    const tax = subtotal * 0.08;
    const shipping = subtotal > 100 ? 0 : 15.00;
    const total = subtotal + tax + shipping;

    if (cart.length === 0) {
      return (
        <div className="max-w-7xl mx-auto px-4 py-24 text-center">
          <div className="mx-auto h-24 w-24 bg-gray-100 rounded-full flex items-center justify-center mb-6">
            <ShoppingBag className="h-12 w-12 text-gray-400" />
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Your cart is empty</h2>
          <p className="text-gray-500 mb-8">Looks like you haven't added anything to your cart yet.</p>
          <button
            onClick={() => setView('home')}
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-full text-white bg-indigo-600 hover:bg-indigo-700 transition-colors"
          >
            Start Shopping <ArrowRight className="ml-2 w-4 h-4" />
          </button>
        </div>
      );
    }

    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-3xl font-bold text-gray-900 mb-12">Shopping Cart</h1>
        <div className="lg:grid lg:grid-cols-12 lg:gap-x-12 lg:items-start">
          
          {/* Cart Items */}
          <section className="lg:col-span-7">
            <ul className="border-t border-b border-gray-200 divide-y divide-gray-200">
              {cart.map((item) => (
                <li key={item.id} className="flex py-6 sm:py-10">
                  <div className="flex-shrink-0">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="h-24 w-24 rounded-md object-cover object-center sm:h-32 sm:w-32"
                    />
                  </div>

                  <div className="ml-4 flex-1 flex flex-col justify-between sm:ml-6">
                    <div className="relative pr-9 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:pr-0">
                      <div>
                        <div className="flex justify-between">
                          <h3 className="text-sm">
                            <span className="font-medium text-gray-700 hover:text-gray-800">
                              {item.name}
                            </span>
                          </h3>
                        </div>
                        <p className="mt-1 text-sm font-medium text-gray-900">${item.price.toFixed(2)}</p>
                        <p className="mt-1 text-sm text-gray-500">{item.category}</p>
                      </div>

                      <div className="mt-4 sm:mt-0 sm:pr-9 w-full">
                        <div className="flex items-center border border-gray-300 rounded-md w-max">
                          <button 
                            onClick={() => updateQuantity(item.id, -1)}
                            className="p-2 hover:bg-gray-100 text-gray-600"
                          >
                            <Minus className="w-3 h-3" />
                          </button>
                          <span className="px-2 text-sm font-medium text-gray-900">{item.quantity}</span>
                          <button 
                            onClick={() => updateQuantity(item.id, 1)}
                            className="p-2 hover:bg-gray-100 text-gray-600"
                          >
                            <Plus className="w-3 h-3" />
                          </button>
                        </div>
                        
                        <div className="absolute top-0 right-0">
                          <button 
                            onClick={() => removeFromCart(item.id)}
                            className="-m-2 p-2 inline-flex text-gray-400 hover:text-red-500 transition-colors"
                          >
                            <Trash2 className="w-5 h-5" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </section>

          {/* Order Summary */}
          <section className="lg:col-span-5 mt-16 lg:mt-0 rounded-2xl bg-gray-50 px-4 py-6 sm:p-6 lg:p-8">
            <h2 className="text-lg font-medium text-gray-900">Order Summary</h2>
            <dl className="mt-6 space-y-4">
              <div className="flex items-center justify-between">
                <dt className="text-sm text-gray-600">Subtotal</dt>
                <dd className="text-sm font-medium text-gray-900">${subtotal.toFixed(2)}</dd>
              </div>
              <div className="flex items-center justify-between border-t border-gray-200 pt-4">
                <dt className="flex items-center text-sm text-gray-600">
                  <span>Shipping estimate</span>
                </dt>
                <dd className="text-sm font-medium text-gray-900">
                  {shipping === 0 ? 'Free' : `$${shipping.toFixed(2)}`}
                </dd>
              </div>
              <div className="flex items-center justify-between border-t border-gray-200 pt-4">
                <dt className="text-sm text-gray-600">Tax estimate (8%)</dt>
                <dd className="text-sm font-medium text-gray-900">${tax.toFixed(2)}</dd>
              </div>
              <div className="flex items-center justify-between border-t border-gray-200 pt-4">
                <dt className="text-base font-bold text-gray-900">Order total</dt>
                <dd className="text-base font-bold text-indigo-600">${total.toFixed(2)}</dd>
              </div>
            </dl>

            <div className="mt-6">
              <button
                onClick={() => setView('checkout')}
                className="w-full flex justify-center items-center px-6 py-3 border border-transparent rounded-full shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors"
              >
                Checkout <ArrowRight className="ml-2 w-4 h-4" />
              </button>
            </div>
            <p className="mt-4 text-center text-xs text-gray-500">
              Free shipping on orders over $100
            </p>
          </section>
        </div>
      </div>
    );
  };

  const CheckoutView = () => {
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = (e) => {
      e.preventDefault();
      setIsLoading(true);
      // Mock API processing
      setTimeout(() => {
        setIsLoading(false);
        setCart([]);
        setView('success');
      }, 2000);
    };

    return (
      <div className="max-w-3xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <button 
          onClick={() => setView('cart')}
          className="mb-8 flex items-center text-sm text-gray-500 hover:text-gray-900"
        >
          <ArrowRight className="w-4 h-4 rotate-180 mr-2" /> Back to Cart
        </button>
        
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Secure Checkout</h1>
        
        <form onSubmit={handleSubmit} className="space-y-8">
          <div className="bg-white shadow-sm border border-gray-200 rounded-xl p-6 sm:p-8">
            <h2 className="text-lg font-medium text-gray-900 mb-6 flex items-center">
              <div className="w-6 h-6 rounded-full bg-indigo-100 text-indigo-600 flex items-center justify-center text-xs font-bold mr-3">1</div>
              Contact Information
            </h2>
            <div className="grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-2">
              <div className="col-span-2">
                <label className="block text-sm font-medium text-gray-700">Email address</label>
                <input required type="email" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm border p-2" />
              </div>
            </div>
          </div>

          <div className="bg-white shadow-sm border border-gray-200 rounded-xl p-6 sm:p-8">
            <h2 className="text-lg font-medium text-gray-900 mb-6 flex items-center">
              <div className="w-6 h-6 rounded-full bg-indigo-100 text-indigo-600 flex items-center justify-center text-xs font-bold mr-3">2</div>
              Shipping Address
            </h2>
            <div className="grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-2">
              <div>
                <label className="block text-sm font-medium text-gray-700">First name</label>
                <input required type="text" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm border p-2" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Last name</label>
                <input required type="text" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm border p-2" />
              </div>
              <div className="col-span-2">
                <label className="block text-sm font-medium text-gray-700">Address</label>
                <input required type="text" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm border p-2" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">City</label>
                <input required type="text" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm border p-2" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">ZIP / Postal code</label>
                <input required type="text" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm border p-2" />
              </div>
            </div>
          </div>

          <div className="bg-white shadow-sm border border-gray-200 rounded-xl p-6 sm:p-8">
            <h2 className="text-lg font-medium text-gray-900 mb-6 flex items-center">
              <div className="w-6 h-6 rounded-full bg-indigo-100 text-indigo-600 flex items-center justify-center text-xs font-bold mr-3">3</div>
              Payment Details
            </h2>
            <div className="grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-2">
              <div className="col-span-2">
                <label className="block text-sm font-medium text-gray-700">Card number</label>
                <div className="mt-1 relative rounded-md shadow-sm">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <CreditCard className="h-4 w-4 text-gray-400" />
                  </div>
                  <input required type="text" className="focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-10 sm:text-sm border-gray-300 rounded-md border p-2" placeholder="0000 0000 0000 0000" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Expiration date (MM/YY)</label>
                <input required type="text" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm border p-2" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">CVC</label>
                <input required type="text" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm border p-2" />
              </div>
            </div>
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className="w-full flex justify-center py-4 border border-transparent rounded-full shadow-sm text-lg font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-all disabled:opacity-75 disabled:cursor-not-allowed"
          >
            {isLoading ? (
              <span className="flex items-center">Processing Order...</span>
            ) : (
              `Pay Now`
            )}
          </button>
        </form>
      </div>
    );
  };

  const SuccessView = () => (
    <div className="min-h-[60vh] flex flex-col items-center justify-center px-4 text-center">
      <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-6">
        <Check className="w-10 h-10 text-green-600" />
      </div>
      <h1 className="text-3xl font-bold text-gray-900 mb-4">Order Confirmed!</h1>
      <p className="text-gray-500 mb-8 max-w-md">
        Thank you for your purchase. We've sent a confirmation email to your inbox. Your order #88291 will be shipped shortly.
      </p>
      <button
        onClick={() => setView('home')}
        className="px-8 py-3 bg-indigo-600 text-white rounded-full font-medium hover:bg-indigo-700 transition-colors shadow-lg"
      >
        Continue Shopping
      </button>
    </div>
  );

  // --- Main Render ---
  return (
    <div className="min-h-screen bg-white font-sans text-gray-900">
      <Header />
      
      {/* Toast Notification */}
      {toast && (
        <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-50 bg-gray-900 text-white px-6 py-3 rounded-full shadow-xl flex items-center space-x-2 transition-all animate-fade-in-up">
          <Check className="w-4 h-4 text-green-400" />
          <span className="text-sm font-medium">{toast}</span>
        </div>
      )}

      {/* Dynamic Content Views */}
      {view === 'home' && <ProductGrid />}
      {view === 'cart' && <CartView />}
      {view === 'checkout' && <CheckoutView />}
      {view === 'success' && <SuccessView />}

      {/* Footer */}
      <footer className="bg-gray-50 border-t border-gray-100 mt-auto">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center mb-4 md:mb-0">
              <span className="font-bold text-xl text-gray-900">LuxeThread</span>
            </div>
            <div className="flex space-x-6 text-gray-400">
              <span className="hover:text-gray-600 cursor-pointer">About</span>
              <span className="hover:text-gray-600 cursor-pointer">Terms</span>
              <span className="hover:text-gray-600 cursor-pointer">Privacy</span>
              <span className="hover:text-gray-600 cursor-pointer">Contact</span>
            </div>
            <p className="mt-4 md:mt-0 text-sm text-gray-500">
              &copy; 2024 LuxeThread. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}