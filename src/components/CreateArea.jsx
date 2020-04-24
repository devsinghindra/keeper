import React from "react";

function CreateArea(props) {
    const [note, setNote] = React.useState({ title: "", content: "" });
    function onNoteChange(event) {
        const { name, value } = event.target;
        setNote(prevValue => {
            return {
                ...prevValue,
                [name]: value
            };
        });
    }
    function onButtonClick(event) {
        props.onAdd(note);
        console.log(note);
        setNote({ title: "", content: "" })
        event.preventDefault();
    }
    return (
        <div>
            <form>
                <input
                    name="title"
                    placeholder="Title"
                    onChange={onNoteChange}
                    value={note.title}
                />
                <textarea
                    name="content"
                    placeholder="Take a note..."
                    rows="3"
                    onChange={onNoteChange}
                    value={note.content}
                />
                <button type="submit" onClick={onButtonClick}>
                    Add
        </button>
            </form>
        </div>
    );
}

export default CreateArea;
