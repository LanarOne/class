const form = document.getElementById('formulaire');
import { warMecas } from "./warMecas.js";

form.addEventListener('submit',(e)=>{
    
    const mecaName = document.getElementById('mecaName').value;
    const mecaType =document.getElementById('mecaType').value;
    const mecaPv = document.getElementById('mecaPv').value
    const mecAttack = document.getElementById('mecAttack').value;
    const mecaDef = document.getElementById('mecaDef').value;
    const mecaId = warMecas.length+1;

    const meca = new warMeca(mecaId,mecaName,mecaType,mecaPv,mecAttack,mecaDef)
    warMecas.push(meca)
        
    e.preventDefault();  
    console.log(warMecas);           
})

class warMeca {
    constructor(id,name, type, pv, attack, defense){
        this.id = id;
        this.name = name;
        this.type = type;
        this.pv = pv;
        this.attack = attack;
        this.defense = defense;
        this.nature = warMeca.nature;
    }
    static nature = 'meca'

}


