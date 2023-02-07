import { useState } from 'react';
import './App.css';
import Generator from './components/Generator';
import AddInsult from './components/AddInsult';

const App = () => {
  const [insults, setInsults] = useState([
    {
        text: 'Were such things here as we do speak about? Or have we eaten on the insane root That takes the reason prisoner?',
        play: 'Macbeth',
        id: 1
    },
    {
        text: 'Never hung poison on a fouler toad.',
        play: 'Richard III',
        id: 2
    },
    {
        text: 'He thinks too much: such men are dangerous.',
        play: 'Julius Ceasar',
        id: 3
    },
    {
        text: 'Thou calledst me a dog before thou hadst a cause. But since I am a dog, beware my fangs.',
        play: 'The Merchant of Venice',
        id: 4
    },
    {
        text: 'Give me your hand...I can tell your fortune. You are a fool.',
        play: 'The Two Noble Kinsmen',
        id: 5
    },
    {
        text: 'He smells like a fish, a very ancient and fish-like smell, a kind of not-of-the-newest poor-John. A strange fish!',
        play: 'The Tempest',
        id: 6
    },
    {
        text: 'It is a tale Told by an idiot, full of sound and fury, Signifying nothing.',
        play: 'Macbeth',
        id: 7
    },
    {
        text: 'Alas, poor heart, that kiss is comfortless As frozen water to a starved snake.',
        play: 'Titus Andronicus',
        id: 8
    },
    {
        text: 'He hath eaten me out of house and home; he hath put all substance into that fat belly of his.',
        play: 'Henry IV, Part 2',
        id: 9
    },
    {
        text: 'Out, you green-sickness carrion! Out, you baggage! You tallow-face!',
        play: 'Romeo and Juliet',
        id: 10
    }
  ]);

  let newArr = [...insults]; //will add new insults here in cloned list

    const addNewInsult = (textInput, playInput) => {
        if(textInput || playInput !== '') {
            const newInsult = {
                id: (newArr.length + 1),
                text: textInput,
                play: playInput
            }
            newArr.push(newInsult);
            setInsults(newArr); //so when clicking generator btn the new array with new insults will show up
            console.log(newArr);
            alert('New insult added!')
        } else {
            alert('invalid input')
        }
        
    }

  return (
    <div className="App">
      <h1>Shakespeare Insult Generator</h1>
      <Generator insults={insults} />
      <AddInsult addNewInsult={addNewInsult}/>
    </div>
  );
}

export default App;