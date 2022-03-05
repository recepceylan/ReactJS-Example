export function saveCharacter(character) {
    return () => {
        let idCounter = localStorage.getItem("idCounter");
        if (!idCounter) {
            localStorage.setItem("idCounter", 100);
            idCounter = localStorage.getItem("idCounter");
        }
        idCounter++;
        localStorage.setItem("idCounter", idCounter);

        let previousList = JSON.parse(localStorage.getItem("characterList"));
        if (!previousList) {
            localStorage.setItem("characterList", JSON.stringify([]));
            previousList = [];
        }

        character.id = idCounter.toString();
        previousList.push(character);
        localStorage.setItem("characterList", JSON.stringify(previousList));
    };
}

export function deleteCharacter(characterId) {
    return () => {
        let previousList = JSON.parse(localStorage.getItem("characterList"));
        let newList = previousList.filter((c) => c.id !== characterId);
        localStorage.setItem("characterList", JSON.stringify(newList));
    };
}