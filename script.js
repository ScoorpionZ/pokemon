$(function () {
    const myAszinkron = new MyAszinkron();

    let pokemon = {};
    let pokiList = [];
    const szuloelem = $("#poko");
    const sablonElem = $("section>.poki");
    pokemonList();

    function pokemonList() {
        for (let i = 1; i < 51; i++) {
        let vegpont = "https://pokeapi.co/api/v2/pokemon/" + i;
        myAszinkron.getAdat(vegpont, pokemon, tombbetesdz, hibakezeles);
        }
    }

    function tombbetesdz(pokemon) {
        console.log(pokemon);
        pokiList.push(pokemon);
        /*   console.log(pokiList[i+1]); 
            $("h2").html(pokemon.name);
            $("img").attr("src",pokemon.sprites.front_default); */
            console.log(pokiList.length);
            if(pokiList.length==50){
                megjelenit();
            }
    }


    function megjelenit(){
        szuloelem.empty();
        sablonElem.show();
        pokiList.forEach(function(elem) {
            let ujElem = sablonElem.clone().appendTo(szuloelem);
            const ujPokemon = new PokemonJ(ujElem, elem);
        });
        sablonElem.hide();
    }

    function hibakezeles(hiba) {
        console.log(hiba);
        $("h2").html("Nincs ilyen pokemon");
        $("img").attr(
        "src",
        "https://pixabay.com/hu/vectors/hamis-hiba-hi%c3%a1nyzik-x-piros-2061132/"
        );
    }

    //   $("#ok").on("click", function () {
    //     let id = Math.floor(Math.random() * 1000) + 1;
    //     let vegpont = "https://pokeapi.co/api/v2/pokemon/" + id;
    //     myAszinkron.getAdat(vegpont, pokemon, megjeleit, hibakezeles);
    //   });

    $("#rendezes").on("change",function(){
        console.log("rendez");
        let szempont=$(this).val();
        console.log(szempont);
        switch(szempont) {
            case "rend1":
                apivegpont+="?_sort=pokemon.name&_order=desc";
                console.log(apivegpont);
                myAszinkron.getAdat(vegpont, pokemon, tombbetesdz, hibakezeles);
              break;
            case "rend2":
                apivegpont+="?_sort=name&_order=ASC";
                myAjax.getAdat(apivegpont,termekek,termekmegjeleit);
              break;
            case "rend3":
                apivegpont+="?_sort=ar&_order=desc";
                myAjax.getAdat(apivegpont,termekek,termekmegjeleit);
              break;
            case "rend4":
                apivegpont+="?_sort=ar&_order=ASC";
                myAjax.getAdat(apivegpont,termekek,termekmegjeleit);
              break;
              
            default:
              // code block
          }
        
        
    })

    
});
