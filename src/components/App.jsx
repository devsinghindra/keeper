import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
    const [notes, setNotes] = React.useState([]);

    function onAdd(note) {
        setNotes(() => {
            return [...notes, note];
        })
    }

    function onDelete(index) {
        setNotes(notes.filter((note, i) => {
            return i !== index;
        }));
    }

    return (
        <div>
            <Header />
            <CreateArea
                onAdd={onAdd}
            />
            {notes.map((note, index) => {
                return (<Note key={index} id={index} onDelete={onDelete} title={note.title} content={note.content} />);
            })}
            <Footer />
        </div>
    );
}

export default App;
