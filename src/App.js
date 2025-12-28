import Cards from "./component/cards"
import Heading from "./component/heading"
import './style.css';

import dog1 from "./assets/images/dog1.jpg";
import dog2 from "./assets/images/dog2.jpg";
import dog3 from "./assets/images/dog3.jpg";
import dog4 from "./assets/images/dog4.jpg";
import cat1 from "./assets/images/cat1.jpg";
import cat2 from "./assets/images/cat2.jpg";
import cat3 from "./assets/images/cat3.jpg";
import cat4 from "./assets/images/cat4.jpg";

function Card(props) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "4px", padding: "4px", borderRadius: "12px",justifyContent:"center",alignItems:"center",backgroundColor:"white",boxShadow:" rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px" }}>
      <img src={props.img} alt="images"></img>
      <p>{props.name}</p>
    </div>
  )
}


var petimages = [
  {
    name: "julies rabbit ears",
    img: dog1
  },
  {
    name: "The innocent look",
    img: dog2
  },
  {
    name: "Big eyed buggy",
    img: dog3
  },
  {
    name: "The saint doggo",
    img: dog4
  },
  {
    name: "cuttie cat",
    img: cat1
  },
  {
    name: "gentle look",
    img: cat2
  },
  {
    name: "robbery cat",
    img: cat3
  },
  {
    name: "messy cat",
    img: cat4
  },
]


function App(){
return(
    <>
  <Heading></Heading>
  <div style={Cards}>
    {
      petimages.map((img) => {
        return (
          <Card name={img.name} img={img.img}></Card>
        )
      })
    }
  </div>
    </>
)
}

export default App