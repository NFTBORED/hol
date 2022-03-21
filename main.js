function sleep (time) {
  return new Promise((resolve) => setTimeout(resolve, time));
}

function sleep1 (time) {
  return new Promise((resolve) => setTimeout(resolve, time));
}

window.addEventListener('load', () =>{

  const boredApe1Div = document.querySelector('#bAPE1');
  const boredApe2Div = document.querySelector('#bAPE2');
  const bapePriceEth = [18880, 15001, 15000, 2500, 2121, 1420.69, 1337, 1337, 1333, 1200, 3400, 1000, 1000, 1000, 1000, 999.69, 999, 999, 991.9, 950, 950, 888.88, 888, 888, 888, 888, 888, 888, 800.85, 800, 800, 800, 777, 777, 777, 777, 777, 750, 733.13, 696.969, 694.2069, 690, 677.9, 666.69, 666.69, 666, 666, 650, 569.69, 569, 560];
  const bapePriceDol = ["55,607,641", "44,182,745", "44,179,800", "7,363,300", "6,247,023", "4,184,386", "3,937,892", "3,937,892", "3,926,111", "3,534,384", "9,804,070", "2,883,550", "2,883,550", "2,883,550", "2,883,550", "2,882,656", "2,880,666", "2,880,666", "2,860,193", "2,739,372", "2,739,372", "2,563,129", "2,560,592", "2,560,592", "2,560,592", "2,560,592", "2,560,592", "2,560,592", "2,309,291", "2,306,840", "2,306,840", "2,306,840", "2,240,518", "2,240,518", "2,240,518", "2,240,518", "2,240,518", "2,162,662", "2,114,017", "2,009,744", "2,001,780", "1,989,649", "1,954,758", "1,922,433", "1,922,347", "1,920,444", "1,920,444", "1,874,307", "1,642,729", "1,640,739", "1,614,788"];
  const bapeHash =     [648, 1552, 8229, 8307, 2121, 7616, 6392, 3696, 528, 6446, 1216, 2596, 7947, 6572, 8179, 3756, 2167, 8489, 9919, 6817, 1187, 3943, 2432, 2676, 8747, 2549, 5383, 8295, 7265, 5702, 5017, 5280, 7845, 9031, 5409, 3146, 8274, 6692, 7863, 1779, 8465, 6317, 6779, 1149, 1345, 5491, 8954, 2306, 682, 3223, 6623 ];

  console.log(bapePriceEth.value);
  console.log(bapePriceDol.value);
  console.log(bapeHash.value);


  console.log(bapePriceEth.length);
  console.log(bapePriceDol.length);
  console.log(bapeHash.length);


  var randomNum = Math.floor(Math.random() * 51) + 1;
  console.log(randomNum);

  // console.log(randomNum.toString().length);
  // console.log("0" * randomNum.toString().length);
  // console.log("0" * 2);

  // console.log("0".repeat(randomNum.toString().length));

  const boredApe1 = document.createElement("img");
  boredApe1.classList = "bapeIMG";

  boredApe1.src = "./Bored Ape Images/" + ("0".repeat(4 - randomNum.toString().length)) + randomNum + ".png";
  // boredApe1.src = "https://lh3.googleusercontent.com/3lRi6eEg1q_ZUx8F3ZIOnyhH84HPTq8I10SQumA9uBnaXYgidDi_iL-0peyTNVuUjkctpoyemL3r8MxBxB7GVa-20YoKlnC-2joX=w600";

  const bape1Dup = document.createElement("img");
  bape1Dup.src = boredApe1.src;
  bape1Dup.classList = "backIMG";


  const boredApe2 = document.createElement("img");
  boredApe2.classList = "bapeIMG";
  var randomNum1 = Math.floor(Math.random() * 51) + 1;
  console.log(randomNum1);

  if(randomNum == randomNum1){
    console.log("Same numbers");
  }


  // var i;
  //
  // for (i = 0; i < 1; i = i + 0){
  //   if(randomNum == randomNum1){
  //     randomNum1 = Math.floor(Math.random() * 10) + 1;
  //   }
  //   else{
  //     i = 2;
  //   }
  // }
  //
  // console.log("This is i: " + i);


  while (randomNum == randomNum1){
    randomNum1 = Math.floor(Math.random() * 51) + 1;
  }
  console.log("New 2nd number " + randomNum1);


  boredApe2.src = "./Bored Ape Images/" + ("0".repeat(4 - randomNum1.toString().length)) + randomNum1 + ".png";

  const bape2Dup = document.createElement("img");
  bape2Dup.src = boredApe2.src;
  bape2Dup.classList = "backIMG";

  var price1STeth;
  var price2NDeth;
  var price1STdol;
  var price2NDdol;

  boredApe1Div.appendChild(boredApe1);
  boredApe1Div.appendChild(bape1Dup);
  boredApe2Div.appendChild(boredApe2);
  boredApe2Div.appendChild(bape2Dup);

  const bapeHashVal = document.getElementById('bapeHash');
  const bapeEthPrice = document.getElementById('bapeEth');
  const bapePrice = document.getElementById('bapePrice');

  bapeHashVal.innerHTML = "#" + bapeHash[randomNum - 1];
  bapeEthPrice.innerHTML = bapePriceEth[randomNum - 1];
  bapePrice.innerHTML = "($" + bapePriceDol[randomNum - 1] + ")";

    console.log("How often does this run?");

    const scoreText = document.getElementById('scoreText');
    const correctAnsw = document.getElementById('correctFrame');
    const incorrectAnsw = document.getElementById('incorrectFrame');





    var score = 0;

    document.getElementById('buttonHigher').onclick = function(){
      if(bapePriceEth[randomNum - 1] <= bapePriceEth[randomNum1 - 1] ){
        score++;
        boredApe2Div.classList.add("anim3");
        sleep(500).then(() => {
          boredApe2Div.classList.remove("anim3");
        });
        correctAnsw.classList.add("anim1");
        correctAnsw.classList.remove("opac0");
        sleep(1600).then(() => {
          correctAnsw.classList.remove("anim1");
          correctAnsw.classList.add("opac0");
        })



        console.log(score);
        scoreText.innerHTML = score;
        boredApe1.src = "./Bored Ape Images/" + ("0".repeat(4 - randomNum1.toString().length)) + randomNum1 + ".png";
        bape1Dup.src = boredApe1.src;
        randomNum = randomNum1;
        bapeHashVal.innerHTML = "#" + bapeHash[randomNum - 1];
        bapeEthPrice.innerHTML = bapePriceEth[randomNum - 1];
        bapePrice.innerHTML = "($" + bapePriceDol[randomNum - 1] + ")";
        while (randomNum == randomNum1){
          randomNum1 = Math.floor(Math.random() * 51) + 1;
        }
        sleep(500).then(() => {
          boredApe2.src = "./Bored Ape Images/" + ("0".repeat(4 - randomNum1.toString().length)) + randomNum1 + ".png";
          bape2Dup.src = boredApe2.src;

        })
      }
      else{
        score = 0;
        console.log(score);
        incorrectAnsw.classList.add("anim2");
        incorrectAnsw.classList.remove("opac0");
        sleep1(1600).then(() => {
          incorrectAnsw.classList.remove("anim2");
          incorrectAnsw.classList.add("opac0");
        })
        scoreText.innerHTML = score;
        randomNum = Math.floor(Math.random() * 51) + 1;
        boredApe1.src = "./Bored Ape Images/" + ("0".repeat(4 - randomNum.toString().length)) + randomNum + ".png";
        bape1Dup.src = boredApe1.src;
        bapeHashVal.innerHTML = "#" + bapeHash[randomNum - 1];
        bapeEthPrice.innerHTML = bapePriceEth[randomNum - 1];
        bapePrice.innerHTML = "($" + bapePriceDol[randomNum - 1] + ")";
        randomNum1 = Math.floor(Math.random() * 51) + 1;
        while (randomNum == randomNum1){
          randomNum1 = Math.floor(Math.random() * 51) + 1;
        }
        boredApe2.src = "./Bored Ape Images/" + ("0".repeat(4 - randomNum1.toString().length)) + randomNum1 + ".png";
        bape2Dup.src = boredApe2.src;
      }
    };

    document.getElementById('buttonLower').onclick = function(){
      if(bapePriceEth[randomNum - 1] >= bapePriceEth[randomNum1 - 1] ){
        score++;
        boredApe2Div.classList.add("anim3");
        sleep(500).then(() => {
          boredApe2Div.classList.remove("anim3");
        });
        correctAnsw.classList.add("anim1");
        correctAnsw.classList.remove("opac0");
        sleep(1600).then(() => {
          correctAnsw.classList.remove("anim1");
          correctAnsw.classList.add("opac0");
        })
        console.log(score);
        scoreText.innerHTML = score;

        boredApe1.src = "./Bored Ape Images/" + ("0".repeat(4 - randomNum1.toString().length)) + randomNum1 + ".png";
        bape1Dup.src = boredApe1.src;
        randomNum = randomNum1;
        bapeHashVal.innerHTML = "#" + bapeHash[randomNum - 1];
        bapeEthPrice.innerHTML = bapePriceEth[randomNum - 1];
        bapePrice.innerHTML = "($" + bapePriceDol[randomNum - 1] + ")";
        while (randomNum == randomNum1){
          randomNum1 = Math.floor(Math.random() * 51) + 1;
        }
        sleep(500).then(() => {
          boredApe2.src = "./Bored Ape Images/" + ("0".repeat(4 - randomNum1.toString().length)) + randomNum1 + ".png";
          bape2Dup.src = boredApe2.src;
        })
      }
      else{
        score = 0;
        console.log(score);
        incorrectAnsw.classList.add("anim2");
        incorrectAnsw.classList.remove("opac0");
        sleep1(1600).then(() => {
          incorrectAnsw.classList.remove("anim2");
          incorrectAnsw.classList.add("opac0");
        })
        scoreText.innerHTML = score;
        randomNum = Math.floor(Math.random() * 51) + 1;
        boredApe1.src = "./Bored Ape Images/" + ("0".repeat(4 - randomNum.toString().length)) + randomNum + ".png";
        bape1Dup.src = boredApe1.src;
        bapeHashVal.innerHTML = "#" + bapeHash[randomNum - 1];
        bapeEthPrice.innerHTML = bapePriceEth[randomNum - 1];
        bapePrice.innerHTML = "($" + bapePriceDol[randomNum - 1] + ")";
        randomNum1 = Math.floor(Math.random() * 51) + 1;
        while (randomNum == randomNum1){
          randomNum1 = Math.floor(Math.random() * 51) + 1;
        }
        boredApe2.src = "./Bored Ape Images/" + ("0".repeat(4 - randomNum1.toString().length)) + randomNum1 + ".png";
        bape2Dup.src = boredApe2.src;
      }
    };

  // }




})
