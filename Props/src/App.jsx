import Joke from "./Joke"
import jokesData from "../jokesData";




function App() {
  const jokesElements = jokesData.map((joke) =>{
    return <Joke
      setup = {joke.setup}
      punchline = {joke.punchline}      
    />
  })


  return(
    <div>
      {jokesElements}
  </div>  
  );
}




export default App


{/* <Joke
setup = "I got my daughter a fridge for her birthday."
punchline = "I can't wait to see her face light up when she opens it."
/>

<Joke
setup = {4}
punchline = "He just ransomware!"
/>

<Joke
setup = "Why don't pirates travel on mountain roads?"
punchline = "Scurvy."
/>

<Joke
setup = "Why do bees stay in the hive in the winter?"
punchline = "Swarm."
/>

<Joke
setup = "What's the best thing about Switzerland?"
punchline = "I don't know, but the flag is a big plus!"
/> */}