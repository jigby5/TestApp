import './App.css';

const bandNames = [
  {
    name: 'Dire Straits',
    members: 'John Knopfler, David Knopfler, John Illsley, Pick Withers',
    formed: 1977,
  },
  {
    name: 'R.E.M.',
    members: 'Michael Stripe, Peter Buck, Mike Mills, Bill Berry',
    formed: 1980,
  },
  {
    name: 'Led Zeppelin',
    members: 'Robert Plant, Jimmy Page',
    formed: 1969,
  },
];

function Welcome() {
  return (
    <>
      <h1>Criminally Underrated Bands</h1>
    </>
  );
}
function Band({
  name,
  members,
  formed,
}: {
  name: string;
  members: string;
  formed: number;
}) {
  return (
    <>
      <h2>{name}</h2>
      <h2>{members}</h2>
      <h2>{formed}</h2>
    </>
  );
}
function BandList() {
  return (
    <>
      {bandNames.map((singleBand) => (
        <Band {...singleBand} />
      ))}
    </>
  );
}
function App() {
  return (
    <>
      <Welcome />
      <BandList />
    </>
  );
}

export default App;
