AFRAME.registerComponent("wire-fence", {
    init:function(){
        posX=-20;
        posZ=85
        for (i=0;i<10;i++){
            var wirefence1=document.createElement("a-entity")
            var wirefence2=document.createElement("a-entity")
            var wirefence3=document.createElement("a-entity")
            var wirefence4=document.createElement("a-entity")
            posX=posX+5;
            posY=2.5;
            posZ=posZ-10
            var scale={x:2,y:2,z:2};
            wirefence1.setAttribute("id","wirefence1"+i);
            wirefence2.setAttribute("id","wirefence2"+i);
            wirefence3.setAttribute("id","wirefence3"+i);
            wirefence4.setAttribute("id","wirefence4"+i);

            wirefence1.setAttribute("position",{x:posX,y:2.5,z:-35});
            wirefence2.setAttribute("position",{x:posX,y:2.5,z:85});
            wirefence3.setAttribute("position",{x:-30,y:2.5,z:posZ});
            wirefence4.setAttribute("position",{x:50,y:2.5,z:posZ});

            wirefence1.setAttribute("scale",scale);
            wirefence2.setAttribute("scale",scale);
            wirefence3.setAttribute("scale",scale);
            wirefence4.setAttribute("scale",scale);

            wirefence1.setAttribute("static-body",{});
            wirefence2.setAttribute("static-body",{});
            wirefence3.setAttribute("static-body",{});
            wirefence4.setAttribute("static-body",{});

            wirefence1.setAttribute("gltf-model","./models/barbed_wire_fence/scene.gltf");
            wirefence2.setAttribute("gltf-model","./models/barbed_wire_fence/scene.gltf");
            wirefence3.setAttribute("gltf-model","./models/barbed_wire_fence/scene.gltf");
            wirefence4.setAttribute("gltf-model","./models/barbed_wire_fence/scene.gltf");

            var scenee1=document.querySelector("scene");
            scenee2.appendChild(wirefence2)
            scenee3.appendChild(wirefence3)
            scenee4.appendChild(wirefence4)
            
        }
    }
}
)