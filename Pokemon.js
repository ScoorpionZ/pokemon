class PokemonJ{
    constructor(elem, adat){
        this.elem=elem;
        this.nev=this.elem.children(".pokn");
        this.leiras=this.elem.children(".pokl");
        this.kep=this.elem.children(".pokk");
        this.adat=adat;
        this.setAdatok(adat);
    }

    setAdatok(ertekek){
        console.log(ertekek);
        this.nev.html(ertekek.name);
        console.log(ertekek.sprites.front_default);
        this.kep.attr("src",ertekek.sprites.front_default);
        
        this.leiras.html(ertekek.sprites.front_default);
    }
}