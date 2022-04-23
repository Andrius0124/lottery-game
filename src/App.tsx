import React from "react";
import GamePage from "./pages/game/Game.page";
import GameStateProvider from "./providers/GameState.provider";

function App() {
  return (
    <div>
      <GameStateProvider>
        <GamePage></GamePage>;
      </GameStateProvider>
    </div>
  );
}

export default App;
