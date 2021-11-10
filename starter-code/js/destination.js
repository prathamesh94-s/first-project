const des=[
    {
      name: "Moon",
      images:"./assets/destination/image-moon.png",
      description: "See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.",
      distance: "384,400 km",
      travel: "3 days"
    },
    {
      name: "Mars",
      images:"./assets/destination/image-mars.png",
      description: "Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!",
      distance: "225 mil. km",
      travel: "9 months"
    },
    {
      name: "Europa",
      images:"./assets/destination/image-europa.png",
      description:"The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.",
      distance: "628 mil. km",
      travel: "3 years"
    },
    {
      name: "Titan",
      images:"./assets/destination/image-titan.png",
      description: "The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.",
      distance: "1.6 bil. km",
      travel: "7 years"
    },
];

const img=document.getElementById("planetImg");
const platname=document.querySelector(".planetName");;
const info=document.querySelector(".planetInfo");
const dis=document.querySelector(".no");
const time=document.querySelector(".time");

const planetNav=document.querySelectorAll(".names");

    planetNav.forEach((btn)=>{
        btn.addEventListener('click',(e)=>{
          let category=e.currentTarget.dataset.id;
           if(category==0){
               displayItem(0)
           }
           else if(category==1){
               displayItem(1)
                       }
           else if(category==2){
               displayItem(2)
           }
           else{
               displayItem(3)
           }
        })
    })
    planetNav.forEach((btnns)=>{
        btnns.addEventListener('click',(e)=>{
            let cat=e.currentTarget.dataset.id;
            let elem=document.getElementById(cat);
            console.log(elem);
            planetNav.forEach((items)=>{
                if(items!==elem){
                    items.classList.remove('active');
                }
            })
            btnns.classList.toggle('active')
        })
    })
    

function displayItem(item){
  const view=des[item];
  console.log(view);
      img.src =view.images;
      platname.textContent=view.name;
      info.textContent=view.description;
      dis.textContent=view.distance;
      time.textContent=view.travel
}
