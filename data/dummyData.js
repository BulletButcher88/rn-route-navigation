import Category from '../models/category';
import Gig from '../models/gigs'
import Article from '../models/article'

export const CATEGORIES = [
  new Category('c1', 'Gig Guide', '#f5428d', 'https://www.beat.com.au/wp-content/uploads/2019/05/amylthesniffers_thetote_090519_joshuabraybrook-8.jpg', 'Unique music in your local area, hosted by local venues'),
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
    "gig01",
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
    "gig02",
    ['c1', 'c4'],
    "Ghost of Cape Man",
    30,
    "https://4.bp.blogspot.com/_lupM0lp1FvU/SrH2NNscngI/AAAAAAAAAuE/XORBwbl_FCA/s320/ghostman.jpg",
    "The human embodiment of the unexplainable realms between man and electro-tape...",
    ["Melvins", "Helmet", "Slugmother"],
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
    ['c1', 'c2', 'c5'],
    "Rowland S Howard",
    30,
    "https://4.bp.blogspot.com/_lupM0lp1FvU/SbYngRS-qgI/AAAAAAAAAkI/eSVKDWjjpvA/s320/rowland.gif",
    "NOT WORKING",
    ["RSH", "Magic Dirt"],
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


export const ARTICLES = [
  new Article(
    'art1',
    'COVID Artist',
    'It has been a tough year for musicians.Seemingly overnight, tours were postponed indefinitely or cancelled altogether.Theatre doors remain closed and locked, heavy chains wrapped around their handles.',
    '6/09/2020',
    'Georgie Tunny',
    'https://www.abc.net.au/cm/rimage/12618950-16x9-xlarge.jpg?v=2',
    'Melbourne',
  ),

  new Article(
    'art2',
    'Best Live Music Venues',
    'Sometimes, it feels like live music is an endangered species in Melbourne. Every other month a treasured pub is under attack from developers or Johnny-come-lately residents with sensitive ears. In spite of these challenges, our scene is flourishing. Any night of the week, it\'s easy to find quality live music on somewhere.Whether you like folk, indie or heavy metal, these spots have you covered.',
    '27/10/2019',
    'Mark Butcher',
    'https://cdn.broadsheet.com.au/cache/91/c7/91c770eb815f19e6463c094217453bd1.jpg',
    'Melbourne'
  ),

  new Article(
    'art3',
    'DARKFIELD',
    'Astounding audio design creates a myriad of journeys into the imagination. A shipping container at Elizabeth Quay, blending in with the eclectic temporary FringeWorld stalls of The Palace Society. Milling around the door, we are greeted with strict instructions to turn off mobile phones, remove smart watches and any potential light source. Warned of potential claustrophobia and sensory overload, we are given a last chance to opt out. Even for immersive theatre, these are strict and stern conditions.',
    '6/09/2020',
    'Elizabeth Quay,',
    'data:image/jpeg;base64,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',
    'Melbourne',
  )
]