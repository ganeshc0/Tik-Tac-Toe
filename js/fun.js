var flag=true;
var values=[1,0,1,0,1,0,0,1,0];
var player1,player2;
var player1count=player2count=0;
document.querySelector('#tbl').addEventListener('click',function(e)
{
     index=e.target.id;
    
     if(values[index]==1||values[index]==0 )
   { 
    
      if(flag){
          e.target.innerText = "X";
          values[index] = 'X';
      }
      else{
          e.target.innerText = "O";
          values[index] = 'O';
      }
    flag=!flag;
    getWinner();
    }
    else 
    {
        alert('not allow');
      
    }
    
}); 


 function getWinner()
 {
  winnerIndexs=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
  ]
for(let i=0;i<winnerIndexs.length;i++)
  {
    let[a,b,c] = winnerIndexs[i];
    if(values[a]==values[b] && values[b]==values[c])
    {
      getScore(a,b,c);
      break; 
    }
    
  }
 

}

function getScore(x,y,z)
{
  if(flag)
 { 
  console.log(player2,"winner");
  player2count++;
 }
  else
  {
    console.log(player1,"winner");
    player1count++;
  }
  document.querySelector('#score1').innerHTML="<strong>"+player1count+"</strong>";
  document.querySelector('#score2').innerHTML="<strong>"+player2count+"</strong>"; 
  document.getElementById(x).style.backgroundColor="red";
  document.getElementById(y).style.backgroundColor="red";
  document.getElementById(z).style.backgroundColor="red";
  values=[null,null,null,null,null,null,null,null,null,];
}

// start games function

document.querySelector("#start").addEventListener('click',function()
{
  player1 =document.querySelector('#user1').value;
  player2 =document.querySelector('#user2').value;

  if(player1 ==""|| player2 =="")
  {
    alert('please Enter The Name Player Name')
  }
  else
  {
    document.querySelector('.game').style.visibility='visible';
    document.querySelector('.name').style.visibility='hidden';
    document.querySelector('#name1').innerHTML="<strong>"+player1+"</strong>";
    document.querySelector('#name2').innerHTML="<strong>"+player2+"</strong>"; 
  }

})

document.querySelector('#reset').addEventListener('click',function()

{
  var divs = document.querySelectorAll(".div");
  for(let i=0;i<divs.length;i++)
  {
    divs[i].innerHTML="";
    divs[i].style.backgroundColor="";
  }
  values=[1,0,1,0,1,0,0,1,0];
  flag=true;
})