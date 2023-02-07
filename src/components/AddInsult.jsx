import './AddInsult.css'

const AddInsult = ({ addNewInsult }) => {
    let textInput = '';
    let playInput = '';

    return (
        <section className="add-insult">
            <textarea type="text" className="add-insult__text"
            placeholder="Add insult" onChange={ (event)  => { textInput = event.target.value; } } />
            
            <input type="text" 
            placeholder="Add play" onChange={ (event)  => { playInput = event.target.value; } }  />

            <button className="btn" onClick={ () => {addNewInsult(textInput, playInput)} }>Add new insult</button>
        </section>
    );
}

export default AddInsult;
