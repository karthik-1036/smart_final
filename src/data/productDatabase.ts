export const productDatabase = {
  smartphones: [
    {
      id: 'iphone-15-pro',
      title: 'iPhone 15 Pro',
      description: "Apple's latest flagship with A17 Pro chip and titanium design",
      image: 'https://images.unsplash.com/photo-1695048133142-1a20484d2569',
      category: 'smartphones',
      amazonPrice: 134900,
      flipkartPrice: 133999,
      amazonLink: 'https://amzn.to/iphone15pro',
      flipkartLink: 'https://flip.kart/iphone15pro',
      features: [
        'A17 Pro chip',
        'Pro camera system',
        'Titanium design',
        '6.1" Super Retina XDR display'
      ],
      specs: {
        processor: 'A17 Pro',
        ram: '8GB',
        storage: '256GB',
        camera: '48MP + 12MP + 12MP'
      },
      tags: ['premium', 'photography', 'gaming', 'business']
    },
    {
      id: 'samsung-s24-ultra',
      title: 'Samsung Galaxy S24 Ultra',
      description: 'Ultimate Android flagship with S Pen and AI features',
      image: 'https://images.unsplash.com/photo-1707227155046-274521394970',
      category: 'smartphones',
      amazonPrice: 129999,
      flipkartPrice: 128999,
      amazonLink: 'https://amzn.to/s24ultra',
      flipkartLink: 'https://flip.kart/s24ultra',
      features: [
        'Snapdragon 8 Gen 3',
        'S Pen included',
        '200MP camera system',
        '6.8" QHD+ display'
      ],
      specs: {
        processor: 'Snapdragon 8 Gen 3',
        ram: '12GB',
        storage: '256GB',
        camera: '200MP + 12MP + 10MP + 10MP'
      },
      tags: ['premium', 'photography', 'gaming', 'business']
    },
    {
      id: 'oneplus-12',
      title: 'OnePlus 12',
      description: 'Flagship killer with Hasselblad cameras',
      image: 'https://images.unsplash.com/photo-1706893206固定',
      category: 'smartphones',
      amazonPrice: 64999,
      flipkartPrice: 63999,
      amazonLink: 'https://amzn.to/oneplus12',
      flipkartLink: 'https://flip.kart/oneplus12',
      features: [
        'Snapdragon 8 Gen 3',
        'Hasselblad cameras',
        '100W charging',
        '6.7" AMOLED display'
      ],
      specs: {
        processor: 'Snapdragon 8 Gen 3',
        ram: '12GB',
        storage: '256GB',
        camera: '50MP + 48MP + 32MP'
      },
      tags: ['premium', 'performance', 'gaming', 'value']
    }
  ]
};