const getColor = () =>{
    const randomNumber = Math.floor(Math.random()*16777215);
    const random = "#" + randomNumber.toString(16);
    document.body.style.backgroundColor = random;
    document.getElementById("hash").innerText=random;

    navigator.clipboard.writeText(random);

}
document.getElementById("btn").addEventListener("click",getColor);