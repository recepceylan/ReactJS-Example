import { useState } from "react";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";
import { FormGroup, Input, Label } from "reactstrap";
import { saveCharacter } from "../../services/MainService";

function CharacterAdd({ saveCharacter }) {

    const [character, setCharacter] = useState({});
    let navigate = useNavigate();

    function handleChange(event) {
        const { name, value } = event.target;
        setCharacter((previousCharacter) => ({
            ...previousCharacter,
            [name]: value,
        }));
    }

    function onSave(event) {
        event.preventDefault();
        saveCharacter(character);
        navigate("/");
    }

    return (
        <div className="addContainer">
            <form onSubmit={onSave} className="addForm">
                <h2>Add New Character</h2>
                <FormGroup>
                    <Label for="name">
                        Name Surname
                    </Label>
                    <Input
                        type="text"
                        id="name"
                        name="name"
                        placeholder="Enter Name"
                        onChange={(event) => handleChange(event)}
                        required
                    />
                </FormGroup>
                <FormGroup>
                    <Label for="job">
                        Job Title
                    </Label>
                    <Input
                        type="text"
                        id="job"
                        name="job"
                        placeholder="Enter Job Title"
                        onChange={(event) => handleChange(event)}
                        required
                    />
                </FormGroup>
                <FormGroup>
                    <Label for="about">
                        About Him/Her
                    </Label>
                    <Input
                        type="textarea"
                        id="about"
                        name="about"
                        placeholder="Enter About Info"
                        onChange={(event) => handleChange(event)}
                        required
                    />
                </FormGroup>
                <FormGroup>
                    <Label for="avatar">
                        Image Link
                    </Label>
                    <Input
                        type="text"
                        id="avatar"
                        name="avatar"
                        placeholder="Enter Image Link"
                        onChange={(event) => handleChange(event)}
                        required
                    />
                </FormGroup>
                <button type="submit" className="btn btn-success">
                    Add Character
                </button>
            </form>
        </div>
    );
}

const mapDispatchToProps = {
    saveCharacter,
};

export default connect(null, mapDispatchToProps)(CharacterAdd);