let crew=[
    {
      name: "Douglas Hurley",
      images:"./assets/crew/image-douglas-hurley.png",
      role: "Commander",
      bio: "Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2."
    },
    {
      name: "Mark Shuttleworth",
      images:"./assets/crew/image-mark-shuttleworth.png",
      role: "Mission Specialist",
      bio: "Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist."
    },
    {
      name: "Victor Glover",
      images:"./assets/crew/image-victor-glover.png",
      role: "Pilot",
      bio: "Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer."
    },
    {
      name: "Anousheh Ansari",
      images:"./assets/crew/image-anousheh-ansari.png",
      role: "Flight Engineer",
      bio: "Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space."
    }
  ];

  console.log(crew);
  const mid=document.querySelector(".mid");
  const big=document.querySelector(".big");
  const small=document.querySelector("small");
  const img=document.querySelector(".im");


  const btns=document.querySelectorAll(".lis")
  
  btns.forEach((btn)=>{
      btn.addEventListener("click",(e)=>{
          let category=e.currentTarget.dataset.id;
          console.log(e);
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


   btns.forEach((btnss)=>{
       btnss.addEventListener('click',(e)=>{
        let cat=e.currentTarget.dataset.id;
        let elem=document.getElementById(cat);
        btns.forEach((items)=>{
            if(items!==elem){
                items.classList.remove('act')
            }
        })
        btnss.classList.toggle('act')
       })
   })


  function displayItem(item){
      const view= crew[item];
      mid.textContent=view.role;
      big.textContent=view.name;
      small.textContent=view.bio;
      img.src=view.images;
  }