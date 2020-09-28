import Category from '../models/category';
import Gig from '../models/gigs'

export const CATEGORIES = [
  new Category('c1', 'Gig Guide', '#f5428d', 'https://s3-ap-southeast-2.amazonaws.com/static.moshtix.com.au/directory/Moshpix/539/01_77280display.jpg', 'Unique music in your local area, hosted by local venues'),
  new Category('c2', 'Local Pubs', '#f54242', 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQqIJJYvZfMwSYUpSHFl-Sb19_s1gixE2a2Hw&usqp=CAU', 'Traveling alone? Let us introduce you to a local who is going to a gig nearby.'),
  new Category('c3', 'Local Host', '#f5a442',
    'https://www.hiddencitysecrets.com.au/wp-content/uploads/2018/06/The-Old-Bar-Dive-Bar-Johnston-St-Fitzroy-Bar-Bars-Cocktail-Top-Best-Good-Rock-Live-Music-Gigs-Gig-Beer-001-1.jpg',
    'Meet up with a local punter, make friends with the locals '),
  new Category('c4', 'Local Radio', '#f5d142', 'https://www.sbs.com.au/nitv/sites/sbs.com.au.nitv/files/styles/full/public/25-01-2016_3-51-39_pm.jpg?itok=ChPiZcqK'),
  new Category('c5', 'SOUND MERCH', '#FFCF55',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRF7jP8LTUToarE0FYn6ZMDV3M5B5cWyLv2PQ&usqp=CAU'),
  new Category('c6', 'Music Gear', '#41d95d',
    'https://lh3.googleusercontent.com/proxy/wBOwTA4aHxzILqb_paArqomt_ZFRJF51ZaGU-1SyQLQ-n6TJrp_v7F-o4anTV7jT0FRfhXY5ZrUg30FgXppvtUbQCGtqR657_DimCDZznmQMfB7HVJtuxmU3EJsEdzJqcBncZYI6QQ'),
  new Category('c7', 'Breakfast', '#9eecff', 'https://media.timeout.com/images/105360940/image.jpg'),
];


export const GIGS = [
  new Gig(
    "01",
    ['c1', 'c5'],
    "MEGA TOTE FESTIVAL",
    30,
    "https://www.monsterchildren.com/wp-content/uploads/2016/01/Art-Brixton-Broadcast-Melbourne-850x1194.jpg",
    "The gang at Brixton are staying pretty tight lipped so far, but we do know that all the bands above will be blowing minds on February 27th at the Tote Hotel in Collingwood, Melbourne. And it’s Free! More to come folks. Stay tuned! See below recaps from previous events in both Berlin and Barcelona",
    ["Beaches", "The UV Race", "Ausmuteants", 'The Living Eyes'],
    '12/12/2020',
    6.5,
    "The Tote Hotel",
    '230',
    [-37.7994, 144.9872],
    false,
    false,
    true
  ),
  new Gig(
    "02",
    ['c1', 'c4'],
    "Ghost of Cape Man",
    30,
    "https://4.bp.blogspot.com/_lupM0lp1FvU/SrH2NNscngI/AAAAAAAAAuE/XORBwbl_FCA/s320/ghostman.jpg",
    "The human embodiment of the unexplainable realms between man and electro-tape...",
    ["artist1", "artist2", "artist3"],
    '18/11/2020',
    2.5,
    "The Old Bar",
    '175',
    [-37.798333, 144.977111],
    false,
    false,
    false
  ),
  new Gig(
    "03",
    ['c2', 'c5'],
    "SHOULD NOT SHOW",
    30,
    "NO",
    "NOT WORKING",
    ["TESTTEST", "artist3"],
    '18/11/2020',
    2.5,
    "NO BAR",
    '175',
    [-37.798333, 144.977111],
    false,
    false,
    false
  ),
]