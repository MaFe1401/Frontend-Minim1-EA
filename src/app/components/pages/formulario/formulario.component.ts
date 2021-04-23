import { Component, OnInit } from '@angular/core';
import {  ElementRef, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Seguimiento } from './../../../shared/interfaces/seguimiento.interface';
import { seguimientoServicio } from './../../../shared/services/seguimiento.servicio';
import { AbstractControl, ValidationErrors } from '@angular/forms';
@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  constructor(private seguimientoServicio:seguimientoServicio) { }

  ngOnInit(): void {
  }
  onSubmit(nombre:string, fecha:string, dni:string, telefono:string, fiebre:string, tos:string, dificultadRespiratoria:string, malestarGeneral:string){
    const seguimiento = {
      "nombre":nombre,
      "fecha": fecha,
      "dni": dni,
      "telefono":telefono, 
      "fiebre":fiebre,
      "tos": tos,
      "dificultadRespiratoria":dificultadRespiratoria,
      "malestarGeneral":malestarGeneral
    }as Seguimiento;
    this.seguimientoServicio.addSeguimiento(seguimiento).subscribe(
      (response)=>{
        alert(`Seguimiento añadido: ${response.nombre}`)
      },
      (error)=>{
        alert(`No se ha podido añadir`);
      }
    );
  }

}
