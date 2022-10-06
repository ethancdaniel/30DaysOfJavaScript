// Level 3
// 2
const users = [
    {
        _id: 'ab12ex',
        username: 'Alex',
        email: 'alex@alex.com',
        password: '123123',
        createdAt:'08/01/2020 9:00 AM',
        isLoggedIn: false
    },
    {
        _id: 'fg12cy',
        username: 'Asab',
        email: 'asab@asab.com',
        password: '123456',
        createdAt:'08/01/2020 9:30 AM',
        isLoggedIn: true
    },
    {
        _id: 'zwf8md',
        username: 'Brook',
        email: 'brook@brook.com',
        password: '123111',
        createdAt:'08/01/2020 9:45 AM',
        isLoggedIn: true
    },
    {
        _id: 'eefamr',
        username: 'Martha',
        email: 'martha@martha.com',
        password: '123222',
        createdAt:'08/01/2020 9:50 AM',
        isLoggedIn: false
    },
    {
        _id: 'ghderc',
        username: 'Thomas',
        email: 'thomas@thomas.com',
        password: '123333',
        createdAt:'08/01/2020 10:00 AM',
        isLoggedIn: false
    }
    ];

    const products = [
  {
    _id: 'eedfcf',
    name: 'mobile phone',
    description: 'Huawei Honor',
    price: 200,
    ratings: [
      { userId: 'fg12cy', rate: 5 },
      { userId: 'zwf8md', rate: 4.5 }
    ],
    likes: []
  },
  {
    _id: 'aegfal',
    name: 'Laptop',
    description: 'MacPro: System Darwin',
    price: 2500,
    ratings: [],
    likes: ['fg12cy']
  },
  {
    _id: 'hedfcg',
    name: 'TV',
    description: 'Smart TV:Procaster',
    price: 400,
    ratings: [{ userId: 'fg12cy', rate: 5 }],
    likes: ['fg12cy']
  }
]

function signUp(user) {
    for (u of users) {
        if (u.email == user.email) {
            alert('User already exists.')
            return false
        }
    }
    users.push(user)
    return true
}

function signIn(user) {
    for (u of users) {
        if (u.email == user.email && u.password == user.password) {
            console.log('Successfully signed in.')
            return true
        }
    }
    console.log('Incorrect e-mail or password.')
    return false
}

// 3
function calcAvgRating(product) {
    total = 0
    for (rating in product.ratings) {
        total += rating.rate
    }
    return total / product.ratings.length
}

print(calcAvgRating(products[0]))

// 4
const likeProduct = (user, product) => {
    if (user._id in product.likes) {
        product.likes.splice(product.likes.indexOf(user._id), 1)
    } else {
        product.likes.push(user._id)
    }
}