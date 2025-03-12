function gameObject() {
  return {
    "home": {
      "teamName": "Brooklyn Nets",
      "colors": ["Black", "White"],
      "players": {
        "Alan Anderson": {
          "number": 0,
          "shoe": 16,
          "points": 22,
          "rebounds": 12,
          "assists": 12,
          "steals": 3,
          "blocks": 1,
          "slamDunks": 1
        },
        "Reggie Evans": {
          "number": 30,
          "shoe": 14,
          "points": 12,
          "rebounds": 12,
          "assists": 12,
          "steals": 12,
          "blocks": 12,
          "slamDunks": 7
        },
        "Brook Lopez": {
          "number": 11,
          "shoe": 17,
          "points": 17,
          "rebounds": 19,
          "assists": 10,
          "steals": 3,
          "blocks": 1,
          "slamDunks": 15
        },
        "Mason Plumlee": {
          "number": 1,
          "shoe": 19,
          "points": 26,
          "rebounds": 12,
          "assists": 6,
          "steals": 3,
          "blocks": 8,
          "slamDunks": 5
        },
        "Jason Terry": {
          "number": 31,
          "shoe": 15,
          "points": 19,
          "rebounds": 2,
          "assists": 2,
          "steals": 4,
          "blocks": 11,
          "slamDunks": 1
        }
      }
    },
    "away": {
      "teamName": "Charlotte Hornets",
      "colors": ["Turquoise", "Purple"],
      "players": {
        "Jeff Adrien": {
          "number": 4,
          "shoe": 18,
          "points": 10,
          "rebounds": 1,
          "assists": 1,
          "steals": 2,
          "blocks": 7,
          "slamDunks": 2
        },
        "Bismak Biyombo": {
          "number": 0,
          "shoe": 16,
          "points": 12,
          "rebounds": 4,
          "assists": 7,
          "steals": 7,
          "blocks": 15,
          "slamDunks": 10
        },
        "DeSagna Diop": {
          "number": 2,
          "shoe": 14,
          "points": 24,
          "rebounds": 12,
          "assists": 12,
          "steals": 4,
          "blocks": 5,
          "slamDunks": 5
        },
        "Ben Gordon": {
          "number": 8,
          "shoe": 15,
          "points": 33,
          "rebounds": 3,
          "assists": 2,
          "steals": 1,
          "blocks": 1,
          "slamDunks": 0
        },
        "Brendan Haywood": {
          "number": 33,
          "shoe": 15,
          "points": 6,
          "rebounds": 12,
          "assists": 12,
          "steals": 22,
          "blocks": 5,
          "slamDunks": 12
        }
      }
    }
  };
}

// Function to get points scored by a player
function numPointsScored(playerName) {
  const game = gameObject();
  
  // Check home team players
  if (game.home.players[playerName]) {
    return game.home.players[playerName].points;
  }
  
  // Check away team players
  if (game.away.players[playerName]) {
    return game.away.players[playerName].points;
  }
  
  // If player not found
  return "Player not found";
}

// Function to get shoe size of a player
function shoeSize(playerName) {
  const game = gameObject();
  
  // Check home team players
  if (game.home.players[playerName]) {
    return game.home.players[playerName].shoe;
  }
  
  // Check away team players
  if (game.away.players[playerName]) {
    return game.away.players[playerName].shoe;
  }
  
  // If player not found
  return "Player not found";
}

// Function to get team colors
function teamColors(teamName) {
  const game = gameObject();
  
  if (game.home.teamName === teamName) {
    return game.home.colors;
  }
  
  if (game.away.teamName === teamName) {
    return game.away.colors;
  }
  
  return "Team not found";
}

// Function to get team names
function teamNames() {
  const game = gameObject();
  return [game.home.teamName, game.away.teamName];
}

// Function to get player numbers for a team
function playerNumbers(teamName) {
  const game = gameObject();
  const numbers = [];
  
  if (game.home.teamName === teamName) {
    for (const player in game.home.players) {
      numbers.push(game.home.players[player].number);
    }
    return numbers;
  }
  
  if (game.away.teamName === teamName) {
    for (const player in game.away.players) {
      numbers.push(game.away.players[player].number);
    }
    return numbers;
  }
  
  return "Team not found";
}

// Function to get a player's stats
function playerStats(playerName) {
  const game = gameObject();
  
  // Check home team players
  if (game.home.players[playerName]) {
    return game.home.players[playerName];
  }
  
  // Check away team players
  if (game.away.players[playerName]) {
    return game.away.players[playerName];
  }
  
  // If player not found
  return "Player not found";
}
// Function to get rebounds for player with largest shoe size
function bigShoeRebounds() {
  const game = gameObject();
  let biggestShoe = 0;
  let playerWithBiggestShoe = null;
  
  // Check home team players
  for (const player in game.home.players) {
    if (game.home.players[player].shoe > biggestShoe) {
      biggestShoe = game.home.players[player].shoe;
      playerWithBiggestShoe = game.home.players[player];
    }
  }
  
  // Check away team players
  for (const player in game.away.players) {
    if (game.away.players[player].shoe > biggestShoe) {
      biggestShoe = game.away.players[player].shoe;
      playerWithBiggestShoe = game.away.players[player];
    }
  }
  
  // Return rebounds of player with biggest shoe
  return playerWithBiggestShoe.rebounds;
}

// Bonus 1: Find player with most points
function mostPointsScored() {
  const game = gameObject();
  let mostPoints = 0;
  let playerWithMostPoints = "";
  
  // Check home team players
  for (const player in game.home.players) {
    if (game.home.players[player].points > mostPoints) {
      mostPoints = game.home.players[player].points;
      playerWithMostPoints = player;
    }
  }
  
  // Check away team players
  for (const player in game.away.players) {
    if (game.away.players[player].points > mostPoints) {
      mostPoints = game.away.players[player].points;
      playerWithMostPoints = player;
    }
  }
  
  return playerWithMostPoints;
}

// Bonus 2: Find winning team
function winningTeam() {
  const game = gameObject();
  let homeTeamPoints = 0;
  let awayTeamPoints = 0;
  
  // Sum up home team points
  for (const player in game.home.players) {
    homeTeamPoints += game.home.players[player].points;
  }
  
  // Sum up away team points
  for (const player in game.away.players) {
    awayTeamPoints += game.away.players[player].points;
  }
  
  // Return the team with more points
  if (homeTeamPoints > awayTeamPoints) {
    return game.home.teamName;
  } else if (awayTeamPoints > homeTeamPoints) {
    return game.away.teamName;
  } else {
    return "It's a tie!";
  }
}

// Bonus 3: Find player with longest name
function playerWithLongestName() {
  const game = gameObject();
  let longestName = "";
  
  // Check home team players
  for (const player in game.home.players) {
    if (player.length > longestName.length) {
      longestName = player;
    }
  }
  
  // Check away team players
  for (const player in game.away.players) {
    if (player.length > longestName.length) {
      longestName = player;
    }
  }
  
  return longestName;
}

// Super Bonus: Check if player with longest name has most steals
function doesLongNameStealATon() {
  const game = gameObject();
  const playerWithLongest = playerWithLongestName();
  let mostSteals = 0;
  let playerWithMostSteals = "";
  
  // Find player with most steals
  // Check home team players
  for (const player in game.home.players) {
    if (game.home.players[player].steals > mostSteals) {
      mostSteals = game.home.players[player].steals;
      playerWithMostSteals = player;
    }
  }
  
  // Check away team players
  for (const player in game.away.players) {
    if (game.away.players[player].steals > mostSteals) {
      mostSteals = game.away.players[player].steals;
      playerWithMostSteals = player;
    }
  }
  
  // Return true if the player with longest name has the most steals
  return playerWithLongest === playerWithMostSteals;
}