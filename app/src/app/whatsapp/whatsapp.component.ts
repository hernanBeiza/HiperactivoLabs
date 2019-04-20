import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { FormGroup, FormArray, FormControl, AbstractControl, FormBuilder, Validators, ValidatorFn } from '@angular/forms';

import { Router } from "@angular/router";

import { faCopy,faPlay } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-whatsapp',
  templateUrl: './whatsapp.component.html',
  styleUrls: ['./whatsapp.component.css']
})
export class WhatsAppComponent implements OnInit {

	public faCopy = faCopy;
	public faPlay = faPlay;

	public resultado:string;

	public enviandoFlag = false;

	public generadorForm: FormGroup;
	public telefono: AbstractControl;
	public mensaje: AbstractControl;

	public telefonoString:string;
	public mensajeString:string;

	constructor(private fb: FormBuilder, private router:Router) { 
		this.generadorForm = this.fb.group({
			'telefono': [this.telefonoString, Validators.compose([Validators.required])],
			'mensaje': [this.mensajeString, Validators.compose([Validators.required])]
	    });

	    this.telefono = this.generadorForm.controls['telefono'];
	    this.mensaje = this.generadorForm.controls['mensaje'];
	}

  ngOnInit() { }

	public onSubmit(values) {
		console.log('onSubmit();');
  		//https://wa.me/15551234567?text=I'm%20interested%20in%20your%20car%20for%20sale
  		this.resultado = encodeURI("https://wa.me/"+this.telefonoString+"?text="+this.mensajeString);
	}

	public copiar():void {
		console.log("copiar();");
    document.addEventListener('copy', (e: ClipboardEvent) => {
      e.clipboardData.setData('text/plain', (this.resultado));
      e.preventDefault();
      document.removeEventListener('copy', null);
    });
    document.execCommand('copy');
	}

}
