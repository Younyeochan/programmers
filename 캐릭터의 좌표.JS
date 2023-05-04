/*
머쓱이는 RPG게임을 하고 있습니다. 
게임에는 up, down, left, right 방향키가 있으며 각 키를 누르면 
위, 아래, 왼쪽, 오른쪽으로 한 칸씩 이동합니다. 예를 들어 [0,0]에서 
up을 누른다면 캐릭터의 좌표는 [0, 1], down을 누른다면 [0, -1], 
left를 누른다면 [-1, 0], right를 누른다면 [1, 0]입니다. 
머쓱이가 입력한 방향키의 배열 keyinput와 맵의 크기 board이 매개변수로 주어집니다. 
캐릭터는 항상 [0,0]에서 시작할 때 키 입력이 모두 끝난 뒤에 캐릭터의 좌표 [x, y]를 return하도록 solution 함수를 완성해주세요.

- [0, 0]은 board의 정 중앙에 위치합니다. 예를 들어 board의 가로 크기가 9라면 캐릭터는 왼쪽으로 최대 [-4, 0]까지 오른쪽으로 최대 [4, 0]까지 이동할 수 있습니다.

제한사항
board은 [가로 크기, 세로 크기] 형태로 주어집니다.
board의 가로 크기와 세로 크기는 홀수입니다.
board의 크기를 벗어난 방향키 입력은 무시합니다.
0 ≤ keyinput의 길이 ≤ 50
1 ≤ board[0] ≤ 99
1 ≤ board[1] ≤ 99
keyinput은 항상 up, down, left, right만 주어집니다.

keyinput	                                board	    result
["left", "right", "up", "right", "right"]	[11, 11]	[2, 1]
["down", "down", "down", "down", "down"]	[7, 9]	    [0, -4]

입출력 예 설명 #1
[0, 0]에서 왼쪽으로 한 칸 오른쪽으로 한 칸 위로 한 칸 오른쪽으로 두 칸 이동한 좌표는 [2, 1]입니다.
입출력 예 설명 #2
[0, 0]에서 아래로 다섯 칸 이동한 좌표는 [0, -5]이지만 맵의 세로 크기가 9이므로 아래로는 네 칸을 넘어서 이동할 수 없습니다. 따라서 [0, -4]를 return합니다.
*/ 

// let keyinput = ["left", "right", "up", "right", "right"];
let keyinput = ["down", "down", "down", "down", "down"];

// let board = [11, 11];
let board = [7, 9];

const solution = (keyinput, board) => {
    let mon = {
        "left" : - 1,
        "right" : + 1,
        "up" : + 1,
        'down' : -1,
    }

    let updown = keyinput.filter(a => a == "up" || a == "down").map(a => mon[a]).reduce((acc, cur) => acc + cur, 0);
    let lfrt = keyinput.filter(a => a == "right" || a == "left").map(a => mon[a]).reduce((acc, cur) => acc + cur, 0);
    // 일단 [0 0] 임 맵의 크기가 9야 세로 크기가 9임 그러면 홀수니깐 8칸임 그걸 반 4칸으로 이동 가능 그러면 updown / 2 를해 그래서 나오는 값을 절대값으로 만듬 걍 걔를 출력 음수면 음수로

    return [(lfrt / 2), (board[1] -1) / 2]
}

console.log(solution(keyinput, board));