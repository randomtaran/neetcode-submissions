class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
        let [colMap, rowMap, gridMap] = [{},{},{}];
        let[row, col] = [board.length, board[0].length];
        for(let i=0 ; i<row ; i++){
            for(let j=0 ; j<col ; j++){
                if(board[i][j] === '.') continue;
                if(
                    colMap[i]?.find(val => val === board[i][j]) ||
                    rowMap[j]?.find(val => val === board[i][j]) ||
                    gridMap[[Math.floor(i/3), Math.floor(j/3)]]?.find(val => val === board[i][j])
                ){
                    return false;
                }

                colMap[i] = [...(colMap[i] ?? []), board[i][j]];
                rowMap[j] = [...(rowMap[j] ?? []), board[i][j]];
                gridMap[[Math.floor(i/3), Math.floor(j/3)]] = [...(gridMap[[Math.floor(i/3), Math.floor(j/3)]] ?? []), board[i][j]];
            }
        }
        return true;
    }
}
