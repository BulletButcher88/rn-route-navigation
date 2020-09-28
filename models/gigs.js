class Gig {
  constructor(
    id,
    categoryId,
    title,
    doorPrice,
    imageUrl,
    description,
    performingArtist,
    date,
    duration,
    venue,
    capacity,
    location,
    freeEntrance,
    isAllAges,
    isFestival
  ) {
    this.id = id;
    this.categoryId = categoryId;
    this.title = title;
    this.doorPrice = doorPrice;
    this.imageUrl = imageUrl;
    this.description = description;
    this.performingArtist = performingArtist;
    this.date = date;
    this.duration = duration;
    this.venue = venue;
    this.capacity = capacity;
    this.location = location;
    this.freeEntrance = freeEntrance;
    this.isAllAges = isAllAges;
    this.isFestival = isFestival
  }
}

export default Gig;