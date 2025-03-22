let user_score = 0;
let comp_score = 0;
let draw = 0;

function uinp(){
    user_score=document.getElementById('userinp').value;
    document.getElementById('user').innerHTML=`${user_score}`;
}
function cinp(){
    comp_score=document.getElementById('compinp').value;
    document.getElementById('comp').innerHTML=`${comp_score}`;
}
function dinp(){
    draw=document.getElementById('drawinp').value;
    document.getElementById('draw').innerHTML=`${draw}`;
}

function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}


async function spin0(){
    document.getElementById('quess').style.backgroundImage="url('assets/white.jpeg')";
    document.getElementById('q').style.visibility="visible";
    const randomNum = Math.floor(Math.random() * 3);
    document.getElementById('q').style.animationName=('spin');
    document.getElementById('body').style.pointerEvents=('none');
    await delay(500)
    document.getElementById('body').style.pointerEvents=('all');
    document.getElementById('q').style.animationName=('la');
    document.getElementById('quess').style.backgroundImage=`url('assets/${randomNum}.png')`;
    document.getElementById('q').style.visibility="hidden";
    if(randomNum==0) draw++;
    else if(randomNum==1)   comp_score++;
    else    user_score++;
    document.getElementById('user').innerHTML=`${user_score}`;
    document.getElementById('comp').innerHTML=`${comp_score}`;
    document.getElementById('draw').innerHTML=`${draw}`;
}

async function spin1(){
    document.getElementById('quess').style.backgroundImage="url('assets/white.jpeg')";
    document.getElementById('q').style.visibility="visible";
    const randomNum = Math.floor(Math.random() * 3);
    document.getElementById('q').style.animationName=('spin');
    document.getElementById('body').style.pointerEvents=('none');
    await delay(500)
    document.getElementById('body').style.pointerEvents=('all');
    document.getElementById('q').style.animationName=('la');
    document.getElementById('quess').style.backgroundImage=`url('assets/${randomNum}.png')`;
    document.getElementById('q').style.visibility="hidden";
    if(randomNum==1) draw++;
    else if(randomNum==2)   comp_score++;
    else    user_score++;
    document.getElementById('user').innerHTML=user_score;
    document.getElementById('comp').innerHTML=comp_score;
    document.getElementById('draw').innerHTML=draw;
}

async function spin2(){
    document.getElementById('quess').style.backgroundImage="url('assets/white.jpeg')";
    document.getElementById('q').style.visibility="visible";
    const randomNum = Math.floor(Math.random() * 3);
    document.getElementById('q').style.animationName=('spin');
    document.getElementById('body').style.pointerEvents=('none');
    await delay(500)
    document.getElementById('body').style.pointerEvents=('all');
    document.getElementById('q').style.animationName=('la');
    document.getElementById('quess').style.backgroundImage=`url('assets/${randomNum}.png')`;
    document.getElementById('q').style.visibility="hidden";
    if(randomNum==2) draw++;
    else if(randomNum==0)   comp_score++;
    else    user_score++;
    document.getElementById('user').innerHTML=user_score;
    document.getElementById('comp').innerHTML=comp_score;
    document.getElementById('draw').innerHTML=draw;
}