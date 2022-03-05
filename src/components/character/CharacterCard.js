import React from "react";
import { Link } from "react-router-dom";
import { Button, Card, CardBody, CardColumns, CardImg, CardSubtitle, CardText, CardTitle } from "reactstrap";

const CharacterCard = ({ character }) => {
  return (
    <div>

      <CardColumns className="detailCardCol">
        <Card className="detailCard">
          <CardImg
            src={character.avatar}
            top
            width="50%"
          />
          <CardBody>
            <CardTitle tag="h5">
              {character.name || "Name not found!"}
            </CardTitle>
            <CardSubtitle
              className="mb-2 text-muted"
              tag="h6"
            >
              {character.job || "Job not found!"}
            </CardSubtitle>
            <CardText>
              {character.about || "Description not found!"}
            </CardText>
            <Link to="/">
              <Button>Home Page</Button>
            </Link>
          </CardBody>
        </Card>
      </CardColumns>
    </div>
  );
};

export default CharacterCard;
