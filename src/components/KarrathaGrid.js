import '../styles/karratha-grid.css';

const tiles = [
  {
    icon: '🏙️',
    heading: 'The city',
    body: "Karratha is the Pilbara's major regional hub — a modern, well-serviced town with real infrastructure, not just a work camp. One of WA's fastest-growing regional centres.",
    tag: 'Regional hub',
    color: 'city'
  },
  {
    icon: '🌊',
    heading: 'Lifestyle',
    body: 'A warm climate, a friendly and hardworking community, and an outdoor lifestyle like nowhere else. The Pilbara coast is on your doorstep year-round.',
    tag: 'Outdoor living',
    color: 'life'
  },
  {
    icon: '🎣',
    heading: 'Things to do',
    body: 'National parks, world-class fishing, 4WD tracks, camping, and Hearson\'s Cove — all within easy reach. Buy a boat and make the most of it.',
    tag: 'Adventure awaits',
    color: 'do'
  },
  {
    icon: '🛒',
    heading: 'Amenities',
    body: 'Coles, Woolworths, Kmart, movie theatre, gyms, restaurants, and cafes — everything you need is here. Karratha is a fully self-contained regional city.',
    tag: 'Fully serviced',
    color: 'amenity'
  },
  {
  icon: '🦘',
  heading: 'Wildlife',
  body: 'From kangaroos to whale sharks, the Pilbara is home to some of Australia\'s most iconic wildlife. Ningaloo Reef is just a few hours down the road.',
  tag: 'Natural wonders',
  color: 'wildlife'
},
{
  icon: '✈️',
  heading: 'Getting here',
  body: 'Karratha Airport operates daily flights to and from Perth. Getting to and from home is straightforward, making FIFO and residential arrangements easy to manage.',
  tag: 'Well connected',
  color: 'transport'
}
];

function KarrathaGrid() {
  return (
    <div className="karratha-grid">
      {tiles.map((tile) => (
        <div key={tile.heading} className="karratha-tile">
          <div className={`tile-icon icon-${tile.color}`}>{tile.icon}</div>
          <h3 className="tile-heading">{tile.heading}</h3>
          <p className="tile-body">{tile.body}</p>
          <span className={`tile-tag tag-${tile.color}`}>{tile.tag}</span>
        </div>
      ))}
    </div>
  );
}

export default KarrathaGrid;