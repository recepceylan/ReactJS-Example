import alertify from "alertifyjs";
import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { Table, Button } from "reactstrap";
import { getCharacters } from "../../redux/actions/characterActions";
import { deleteCharacter } from "../../services/MainService";

function CharacterList({ characters, getCharacters, deleteCharacter }) {
  useEffect(() => {
    getCharacters();
  }, [getCharacters]);

  function onDelete(id) {
    deleteCharacter(id);
    getCharacters();
  }

  return (
    <div>
      <Table>
        <thead>
          <tr>
            <th>Avatar</th>
            <th>Character Name</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {characters.map((character) => (
            <tr key={character.id}>
              <th>
                <img src={character.avatar} className="listImage" />
              </th>
              <th>{character.name}</th>
              <th>
                <Link to={`/detail/${character.id}`}>
                  <Button className="viewButton"></Button>
                </Link>
                <Button onClick={() => onDelete(character.id)} className="deleteButton"></Button>
              </th>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}

function mapStateToProps(state) {
  return {
    characters: state.characterListReducer,
  };
}

const mapDispatchToProps = {
  getCharacters,
  deleteCharacter
};

export default connect(mapStateToProps, mapDispatchToProps)(CharacterList);
