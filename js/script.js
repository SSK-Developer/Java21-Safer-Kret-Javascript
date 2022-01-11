document.body.style.display = "flex";
document.body.style.flexDirection = "column";


const firstContainer = document.createElement("div");
firstContainer.classList.add("topSide");
document.body.append(firstContainer);


const secondContainer = document.createElement("div");
secondContainer.classList.add("downSide");
document.body.append(secondContainer);
secondContainer.style.display = "flex";
secondContainer.style.flexDirection = "row";
secondContainer.style.justifyContent = "space-around";
secondContainer.style.border = "solid 5px black";
secondContainer.style.padding = "200px"


const pic1 = document.createElement("div");
secondContainer.append(pic1);
pic1.style.border = "solid 10px hotpink";
const pic2 = document.createElement("div");
pic2.style.border = "solid 10px hotpink";
secondContainer.append(pic2);
const pic3 = document.createElement("div");
pic3.style.border = "solid 10px hotpink";
secondContainer.append(pic3);



//bild med orden rad 1, rad 2, rad 3 osv. med olika storlek och färg.
const numberOfLoops = 5;
for(let i = 1; i<=numberOfLoops; i++){
    const h1 = document.createElement("h1");
    
    const hue = 180 + (i * (120/numberOfLoops));
    h1.style.backgroundColor =`hsl(${hue},74%, 77%)`;
    h1.style.margin = "2rem";
    h1.innerText = `rad ${i}`;
    let height = i + 3;
    h1.style.height = height +"rem";

    firstContainer.appendChild(h1);
}

//bild med 1 till 10, svart färg på udda siffror och rosa färg på nr 4
for(let i = 1; i<=10; i++){
    const h1 = document.createElement("h1");
    pic1.appendChild(h1);
    h1.innerText = i;
    //h1.style.width = "10%";
    if(i===4){
        h1.style.backgroundColor = "hotpink";
    }
    else if(i%2 ===1){
        h1.style.backgroundColor = "black";
        h1.style.color = "white";
    } 
}

//bild med 10 till 1, svart färg på udda siffror och rosa färg på nr 8
for(let i=10; i>=0; i--){
    const h1 = document.createElement("h1");
    pic2.appendChild(h1);
    h1.innerText = i;
    //h1.style.width = "10%";
    if(i===8){
        h1.style.backgroundColor = "hotpink";
    }
    else if(i%2 ===1){
        h1.style.backgroundColor = "black";
        h1.style.color = "white";
    } 
}

//bild med orden ett, två,tre osv till tio. svart färg på udda siffror och rosa färg på nummer sex.
const nums = ["ett", "två", "tre", "fyra", "fem", "sex", "sju", "åtta", "nio", "tio"]
for(let i = 0; i<nums.length; i++){
    const h1 = document.createElement("h1");
    pic3.appendChild(h1);
    h1.innerText = nums[i];
    //h1.style.width = "10%";
 
    if(i===5){
        h1.style.backgroundColor = "hotpink";
    }
    else if(i%2 ===0){
        h1.style.backgroundColor = "black";
        h1.style.color = "white";
    } 
}
