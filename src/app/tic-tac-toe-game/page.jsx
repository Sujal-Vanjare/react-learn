"use client";
import { useState } from "react";
import "./page.css";

// In React, it’s conventional to use onSomething names for props
// which represent events and handleSomething for the function definitions which handle those events.

// Square Component: Represents a single square on the Tic-Tac-Toe board.
function Square({ value, onSquareClick, isWinningSquare }) {
  return (
    <button
      className={`square ${isWinningSquare ? "winning-square" : ""}`} // Add a class to highlight winning squares
      onClick={onSquareClick} // Call the onClick handler when the square is clicked
    >
      {value} {/* Display the value (X, O, or null) */}
    </button>
  );
}

// Board Component: Represents the Tic-Tac-Toe board and handles game logic.
function Board({ xIsNext, squares, onPlay }) {
  // Handle click on a square
  function handleClick(i) {
    const result = calculateWinner(squares);
    // If there's a winner or the square is already filled, do nothing
    if (result || squares[i]) {
      return;
    }
    // Create a copy of the squares array to avoid mutating the original state
    const nextSquares = squares.slice();
    // Set the value of the clicked square based on whose turn it is
    nextSquares[i] = xIsNext ? "X" : "O";
    // Calculate the move location (row, col) for the move history
    const moveLocation = `(${Math.floor(i / 3) + 1}, ${(i % 3) + 1})`;
    // Pass the updated squares and move location to the parent component
    onPlay(nextSquares, moveLocation);
  }

  // Check for a winner or draw
  const result = calculateWinner(squares);
  const winner = result ? result.winner : null; // Winner (X or O)
  const winningSquares = result ? result.winningSquares : []; // Indices of winning squares
  let status;
  if (winner) {
    status = "Winner: " + winner; // Display the winner
  } else if (squares.every((square) => square !== null)) {
    status = "It's a draw!"; // Display a draw message if all squares are filled
  } else {
    status = "Next player: " + (xIsNext ? "X" : "O"); // Display the next player
  }

  // Dynamically generate the board using nested loops
  const boardRows = [];
  for (let row = 0; row < 3; row++) {
    const boardSquares = [];
    for (let col = 0; col < 3; col++) {
      const squareIndex = row * 3 + col; // Calculate the index of the square
      const isWinningSquare = winningSquares.includes(squareIndex); // Check if the square is part of the winning line
      boardSquares.push(
        <Square
          key={squareIndex}
          value={squares[squareIndex]}
          onSquareClick={() => handleClick(squareIndex)}
          isWinningSquare={isWinningSquare}
        />
      );
    }
    boardRows.push(
      <div key={row} className="board-row">
        {boardSquares}
      </div>
    );
  }

  return (
    <>
      <div className="status">{status}</div> {/* Display game status */}
      {boardRows} {/* Render the board */}
    </>
  );
}

// Game Component: Manages the overall game state and history.
export default function Game() {
  // State to store the game history (each move's squares and location)
  const [history, setHistory] = useState([
    { squares: Array(9).fill(null), moveLocation: null },
  ]);
  // State to track the current move index
  const [currentMove, setCurrentMove] = useState(0);
  // State to toggle the sorting order of the move history
  const [isAscending, setIsAscending] = useState(true);
  // Determine whose turn it is (X or O)
  const xIsNext = currentMove % 2 === 0;
  // Get the current state of the squares from the history
  const currentSquares = history[currentMove].squares;

  // Handle a new move
  function handlePlay(nextSquares, moveLocation) {
    // Create a new history array up to the current move, then add the new move
    const nextHistory = [
      ...history.slice(0, currentMove + 1),
      { squares: nextSquares, moveLocation },
    ];
    setHistory(nextHistory); // Update the history
    setCurrentMove(nextHistory.length - 1); // Set the current move to the latest one
  }

  // Jump to a specific move in the history
  function jumpTo(nextMove) {
    setCurrentMove(nextMove);
  }

  // Toggle the sorting order of the move history
  function toggleSortOrder() {
    setIsAscending(!isAscending);
  }

  // Generate the list of moves for the move history
  const moves = history.map((step, move) => {
    const { squares, moveLocation } = step;
    let description;
    if (move === currentMove) {
      description = `You are at move #${move}`; // Display the current move
    } else if (move > 0) {
      description = `Go to move #${move} (${moveLocation})`; // Display past moves with location
    } else {
      description = "Go to game start"; // Display the initial state
    }
    return (
      <li key={move}>
        {move === currentMove ? (
          <span>{description}</span> // Display the current move as text
        ) : (
          <button onClick={() => jumpTo(move)}>{description}</button> // Display past moves as buttons
        )}
      </li>
    );
  });

  // Sort the moves based on the current sorting order
  const sortedMoves = isAscending ? moves : moves.slice().reverse();

  return (
    <div className="game">
      <div className="game-board">
        {/* Render the Board component */}
        <Board
          xIsNext={xIsNext}
          squares={currentSquares}
          onPlay={(nextSquares, moveLocation) =>
            handlePlay(nextSquares, moveLocation)
          }
        />
      </div>
      <div className="game-info">
        {/* Button to toggle sorting order */}
        <button onClick={toggleSortOrder}>
          Sort {isAscending ? "Descending" : "Ascending"}
        </button>
        {/* Render the move history */}
        <ol className="list-decimal ml-4">{sortedMoves}</ol>
      </div>
    </div>
  );
}

// Helper function to calculate the winner
function calculateWinner(squares) {
  const lines = [
    [0, 1, 2], // Top row
    [3, 4, 5], // Middle row
    [6, 7, 8], // Bottom row
    [0, 3, 6], // Left column
    [1, 4, 7], // Middle column
    [2, 5, 8], // Right column
    [0, 4, 8], // Diagonal (top-left to bottom-right)
    [2, 4, 6], // Diagonal (top-right to bottom-left)
  ];
  // Check each line to see if all squares in the line are the same and not null
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return { winner: squares[a], winningSquares: [a, b, c] }; // Return the winner and winning squares
    }
  }
  return null; // No winner
}
