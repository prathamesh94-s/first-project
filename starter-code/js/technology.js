const tec=[
    {
      name: "Launch vehicle",
      images: "./assets/technology/image-launch-vehicle-portrait.jpg",
      description: "A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!"
    },
    {
      name: "Spaceport",
      images: "./assets/technology/image-spaceport-portrait.jpg",
      description: "A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch."
    },
    {
      name: "Space capsule",
      images:"./assets/technology/image-space-capsule-portrait.jpg",
      description: "A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained."
    }
  ];

  const img=document.querySelector("#vehImg");
  const big=document.querySelector(".big");
  const small=document.querySelector(".small");

  const btns=document.querySelectorAll(".btn");


btns.forEach((btn)=>{
        btn.addEventListener('click',(e)=>{
          let category=e.currentTarget.dataset.id;
          console.log(category);
           if(category==0){
               displayItem(0)
           }
           else if(category==1){
               displayItem(1)
                       }
           else{
               displayItem(2)
           }
        })
    })

    btns.forEach((btnns)=>{
        btnns.addEventListener('click',(e)=>{
            let cat=e.currentTarget.dataset.id;
            let elem=document.getElementById(cat);
            console.log(elem);
            btns.forEach((items)=>{
                if(items!==elem){
                    items.classList.remove('act');
                }
            })
            btnns.classList.toggle('act')
        })
    })
    
function displayItem(item){
    const view=tec[item];
    console.log(view);
        img.src =view.images;
        small.textContent=view.description;
        big.textContent=view.name;
      }