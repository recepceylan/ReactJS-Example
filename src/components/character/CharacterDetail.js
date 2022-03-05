import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import CharacterCard from "./CharacterCard";
import { getCharacters } from "../../redux/actions/characterActions";

function CharacterDetail({ getCharacters, characters, ...props }) {

  const [character, setCharacter] = useState({ ...props.character });

  let { id } = useParams();

  useEffect(() => {

    if (characters.length === 0) {
      getCharacters();
    }

    id && characters.length > 0
      ? setCharacter(getCharacterById(characters, id))
      : setCharacter({
        name: "",
        avatar: "",
        job: "",
      });
  }, [characters]);

  return <CharacterCard character={character} />;
}

export function getCharacterById(characters, id) {
  let character = characters.find((character) => character.id === id) || null;
  return character;
}

function mapStateToProps(state) {
  return {
    characters: state.characterListReducer,
  };
}

const mapDispatchToProps = {
  getCharacters,
};

export default connect(mapStateToProps, mapDispatchToProps)(CharacterDetail);
