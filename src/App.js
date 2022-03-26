import Card from "./components/Card";
import Navbar from "./components/Navbar"
import Top from "./components/Top";
import data from "./data";


function App() {
  const element = data.map(e => {
    return <Card item={e} key={e.id}/>
  } )

  return (
    <div>
      <Navbar />
      <Top />
      {element}
    </div>
    )
}

export default App;



/* {
  id: 1,
  title: "Life Lessons with Katie Zaferes",
  description: "I will share with you what I call \"Positively Impactful Moments of Disappointment.\" Throughout my career, many of my highest moments only came after setbacks and losses. But learning from those difficult moments is what gave me the ability to rise above them and reach my goals.",
  price: 136,
  coverImg: "katie-zaferes.png",
  stats: {
      rating: 5.0,
      reviewCount: 6
  },
  location: "Online",
  openSpots: 0,
}, */