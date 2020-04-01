const SHOP_DATA = {
  sports: {
    id: 1,
    title: 'Sports',
    routeName: 'sports',
    items: [
      {
        id: 1,
        name: 'Air Max',
        imageUrl:
          'https://images.pexels.com/photos/786003/pexels-photo-786003.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        price: 25
      },
      {
        id: 2,
        name: 'Walking',
        imageUrl:
          'https://images.pexels.com/photos/1124466/pexels-photo-1124466.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        price: 18
      },
      {
        id: 3,
        name: 'Basketball',
        imageUrl:
          'https://images.pexels.com/photos/2385477/pexels-photo-2385477.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        price: 35
      },
      {
        id: 4,
        name: 'Air Max',
        imageUrl:
          'https://images.pexels.com/photos/2231435/pexels-photo-2231435.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        price: 25
      },
      {
        id: 5,
        name: 'Ultra Boost',
        imageUrl:
          'https://images.pexels.com/photos/684152/pexels-photo-684152.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        price: 18
      },
      {
        id: 6,
        name: 'Boost',
        imageUrl:
          'https://images.pexels.com/photos/233312/pexels-photo-233312.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
        price: 14
      },
      {
        id: 7,
        name: 'Super Star',
        imageUrl:
          'https://images.pexels.com/photos/1661470/pexels-photo-1661470.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
        price: 18
      },
      {
        id: 8,
        name: 'Walking',
        imageUrl:
          'https://images.pexels.com/photos/3281608/pexels-photo-3281608.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
        price: 14
      },
      {
        id: 9,
        name: 'White Boost',
        imageUrl:
          'https://images.pexels.com/photos/90365/pexels-photo-90365.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
        price: 16
      }
    ]
  },
  sneakers: {
    id: 2,
    title: 'Sneakers',
    routeName: 'sneakers',
    items: [
      {
        id: 10,
        name: 'Adidas NMD',
        imageUrl: 'https://i.ibb.co/0s3pdnc/adidas-nmd.png',
        price: 220
      },
      {
        id: 11,
        name: 'Adidas Yeezy',
        imageUrl: 'https://i.ibb.co/dJbG1cT/yeezy.png',
        price: 280
      },
      {
        id: 12,
        name: 'Black Converse',
        imageUrl: 'https://i.ibb.co/bPmVXyP/black-converse.png',
        price: 110
      },
      {
        id: 13,
        name: 'Nike White AirForce',
        imageUrl: 'https://i.ibb.co/1RcFPk0/white-nike-high-tops.png',
        price: 160
      },
      {
        id: 14,
        name: 'Nike Red High Tops',
        imageUrl: 'https://i.ibb.co/QcvzydB/nikes-red.png',
        price: 160
      },
      {
        id: 15,
        name: 'Nike Brown High Tops',
        imageUrl: 'https://i.ibb.co/fMTV342/nike-brown.png',
        price: 160
      },
      {
        id: 16,
        name: 'Air Jordan Limited',
        imageUrl: 'https://i.ibb.co/w4k6Ws9/nike-funky.png',
        price: 190
      },
      {
        id: 17,
        name: 'Timberlands',
        imageUrl: 'https://i.ibb.co/Mhh6wBg/timberlands.png',
        price: 200
      }
    ]
  },
  boots: {
    id: 3,
    title: 'Boots',
    routeName: 'boots',
    items: [
      {
        id: 18,
        name: 'Boots 1',
        imageUrl:
          'https://images.pexels.com/photos/3022403/pexels-photo-3022403.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
        price: 125
      },
      {
        id: 19,
        name: 'Boots 2',
        imageUrl:
          'https://images.pexels.com/photos/1662163/pexels-photo-1662163.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
        price: 90
      },
      {
        id: 20,
        name: 'Boots 3',
        imageUrl:
          'https://images.pexels.com/photos/1485166/pexels-photo-1485166.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
        price: 90
      },
      {
        id: 21,
        name: 'Boots 4',
        imageUrl:
          'https://images.pexels.com/photos/1467574/pexels-photo-1467574.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
        price: 165
      },
      {
        id: 22,
        name: 'Boots 5',
        imageUrl:
          'https://images.pexels.com/photos/1755386/pexels-photo-1755386.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
        price: 185
      }
    ]
  },
  womens: {
    id: 4,
    title: 'Womens',
    routeName: 'womens',
    items: [
      {
        id: 23,
        name: 'Blue Tanktop',
        imageUrl: 'https://i.ibb.co/7CQVJNm/blue-tank.png',
        price: 25
      },
      {
        id: 24,
        name: 'Floral Blouse',
        imageUrl: 'https://i.ibb.co/4W2DGKm/floral-blouse.png',
        price: 20
      },
      {
        id: 25,
        name: 'Floral Dress',
        imageUrl: 'https://i.ibb.co/KV18Ysr/floral-skirt.png',
        price: 80
      },
      {
        id: 26,
        name: 'Red Dots Dress',
        imageUrl: 'https://i.ibb.co/N3BN1bh/red-polka-dot-dress.png',
        price: 80
      },
      {
        id: 27,
        name: 'Striped Sweater',
        imageUrl: 'https://i.ibb.co/KmSkMbH/striped-sweater.png',
        price: 45
      },
      {
        id: 28,
        name: 'Yellow Track Suit',
        imageUrl: 'https://i.ibb.co/v1cvwNf/yellow-track-suit.png',
        price: 135
      },
      {
        id: 29,
        name: 'White Blouse',
        imageUrl: 'https://i.ibb.co/qBcrsJg/white-vest.png',
        price: 20
      }
    ]
  },
  mens: {
    id: 5,
    title: 'Mens',
    routeName: 'mens',
    items: [
      {
        id: 30,
        name: 'Camo Down Vest',
        imageUrl: 'https://i.ibb.co/xJS0T3Y/camo-vest.png',
        price: 325
      },
      {
        id: 31,
        name: 'Floral T-shirt',
        imageUrl: 'https://i.ibb.co/qMQ75QZ/floral-shirt.png',
        price: 20
      },
      {
        id: 32,
        name: 'Black & White Longsleeve',
        imageUrl: 'https://i.ibb.co/55z32tw/long-sleeve.png',
        price: 25
      },
      {
        id: 33,
        name: 'Pink T-shirt',
        imageUrl: 'https://i.ibb.co/RvwnBL8/pink-shirt.png',
        price: 25
      },
      {
        id: 34,
        name: 'Jean Long Sleeve',
        imageUrl: 'https://i.ibb.co/VpW4x5t/roll-up-jean-shirt.png',
        price: 40
      },
      {
        id: 35,
        name: 'Burgundy T-shirt',
        imageUrl: 'https://i.ibb.co/mh3VM1f/polka-dot-shirt.png',
        price: 25
      }
    ]
  }
};

export default SHOP_DATA;
