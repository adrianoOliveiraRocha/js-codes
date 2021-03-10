var count = 0;

function algorithm1(numberOfBoards) {
  for(let i = 1; i <= numberOfBoards; i++) {
    count++;
  }
}


function algorithm2(first_board, last_board) {
  // console.log(parseInt((first_board + last_board) / 2));
  if(first_board === last_board) {
    count++;    
  } else {
    let middle_board = parseInt((first_board + last_board) / 2);
    try {
      algorithm2(first_board, middle_board);
      algorithm2(middle_board, last_board);
    } catch (error) {
      // "It's finished"
    }
  }
}

// algorithm1(10); // count = 10
algorithm2(1, 10); // count ≃ 120000
