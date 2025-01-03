import { useState } from "react";

interface Props {
  handleSetName(name: string): void;
  takenNames: string[];
}

function PlayerNamer({ handleSetName, takenNames }: Props) {
  const [inputText, setInputText] = useState("");

  const handleSetClick = () => {
    if (takenNames.includes(inputText)) {
      window.alert("Somebody is already using that name");
    } else if (inputText.length > 0) {
      handleSetName(inputText);
    } else {
      window.alert("Nome obrigatório");
    }
  };

  return (
    <div className="flex flex-col gap-2 mt-4">
      <input
        value={inputText}
        placeholder="Digite seu nome"
        className="px-2 rounded-md h-9 text-slate-700"
        onChange={(e) => {
          setInputText(e.target.value);
        }}
      />
      <button
        onClick={handleSetClick}
        className="bg-white text-black px-4 py-1 rounded-lg shadow-sm border border-gray-200 hover:bg-gray-100 hover:shadow-md transition-all duration-200"
      >
        Confirmar
      </button>
    </div>
  );
}

export default PlayerNamer;
