import { Injectable } from '@angular/core';

import { IRepas } from '../models/repas';
import { SrvGeneral } from '../providers/srvGeneral';


@Injectable()
export class SrvQuantite {
  lstData: any;
  langue: string;
  repas: IRepas = {} as any;
  lstRepas: IRepas[] = [];


  constructor( 
    private srvGeneral: SrvGeneral ) { 
        this.langue = localStorage.getItem("langue");
        this.lstData = JSON.parse(localStorage.getItem("Aliments")); 
    }


  public getNbHdcRepas = ( ): number => {
    var nbHdc: number =0;
    this.lstRepas = JSON.parse(localStorage.getItem("repas"));   
    if(this.lstRepas!=null){
      for (var i = 0; i < this.lstRepas.length; i++) {      
        nbHdc += this.lstRepas[i].nbHdc;      
      }   
      nbHdc = this.srvGeneral.roundNumber(nbHdc);
    }
    return nbHdc;
  }

  public getNomAliment = ( idAliment ): string => {
    var nomAliment: string;

    for (var i = 0; i < this.lstData.length; i++) {
      if(this.lstData[i].id==idAliment){
        if(this.langue=='en'){nomAliment = this.lstData[i].nom_en;}
        else if(this.langue=='de'){nomAliment = this.lstData[i].nom_de;}
        else {nomAliment = this.lstData[i].nom;}
        break;
      }
    }
    return nomAliment;
  }

  public getImageAliment = ( idAliment ): string => {
    for (var i = 0; i < this.lstData.length; i++) {
      if(this.lstData[i].id==idAliment){
        return decodeURIComponent(this.lstData[i].image); 
      }
    }
    return null;
  }

  public getAlimentSelect = ( idAliment ): any => {
    this.lstRepas = JSON.parse(localStorage.getItem("repas"));
    for (var i = 0; i < this.lstRepas.length; i++) {
      if(this.lstRepas[i].idAliment==idAliment){
        this.repas = this.lstRepas[i];      
        break;
      }
    }
    return this.repas;
  }

  public calculHdc = ( idAliment, quantite ): void => {
    var bFind: boolean = false;

    this.repas.id = 0;
    this.repas.idRepas = 0;
    this.repas.quantite = quantite;
    this.repas.idAliment = idAliment;

    this.lstRepas = JSON.parse(localStorage.getItem("repas"));
    if(this.lstRepas === null){ this.lstRepas = [];}

    for (var i = 0; i < this.lstData.length; i++) {
      if(this.lstData[i].id==idAliment){
        if(this.langue=='en'){this.repas.nom = this.lstData[i].nom_en;}
        else if(this.langue=='de'){this.repas.nom = this.lstData[i].nom_de;}
        else {this.repas.nom = this.lstData[i].nom;}
        this.repas.unite = this.lstData[i].quantite;
        // valeur de HDC pour 100gr ou 100ml
        if(this.lstData[i].quantite == 100){          
          this.repas.nbHdc = this.srvGeneral.roundNumber((this.lstData[i].glucide * quantite)/100);      
        }
        // valeur de HDC par unité
        else {
          this.repas.nbHdc = this.srvGeneral.roundNumber(this.lstData[i].glucide * quantite);
        }       

        // Replace aliment du repas
        for (var j = 0; j < this.lstRepas.length; j++) {
          if(this.lstRepas[j].idAliment==idAliment){
            bFind = true;
            this.lstRepas.splice(j, 1, this.repas);
          }
        }

        if(!bFind){
          this.lstRepas.push(this.repas);
        }
      }
    }
    localStorage.setItem("repas", JSON.stringify(this.lstRepas));   
  }

  public clearRepas() {
    localStorage.setItem("repas", JSON.stringify(this.lstRepas));
  }
  
}
