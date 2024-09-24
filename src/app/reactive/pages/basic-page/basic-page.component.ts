import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
//supongamos que esto biene del backend
const rtx5090={
  name:'RTX 5090',
  price:2500,
  inStorage:6
}
@Component({
  selector: 'app-basic-page',
  templateUrl: './basic-page.component.html',
})
export class BasicPageComponent implements OnInit {

  //EL de arriba es la forma clasica
/*
 public myForm :FormGroup= new FormGroup(
{                         //colocas un arreglo de validaciones
  name:new FormControl('',[]),
  price:new FormControl(0),
  inStorage:  new FormControl(0)
}
 )

*/
//pero aca tienes otra forma trabajando con el FormBuilder
//pero el anterior esta bien!! no significa que este ma

public myForm: FormGroup;

constructor(private fb:FormBuilder){
  this.myForm = this.fb.group({
    name: ['',[Validators.required,Validators.minLength(3)]],
    price: [0,[Validators.required,Validators.min(0)]],
    inStorage: [0,[Validators.required,Validators.min(0)]]
  });
}
  ngOnInit(): void {
  //this.myForm.reset(rtx5090)

  }
//------------------------------------
isValidField(field:string):boolean |null{
 return this.myForm.controls[field].errors
 &&  this.myForm.controls[field].touched
}

getFieldError(field:string):string | null{
 if(!this.myForm.controls[field]) return null;
//ahora queremos evaluar todo los errores
const errors= this.myForm.controls[field].errors || {};
                // quiero sacar toda las llaves de errores
for(const key of Object.keys(errors)){

  switch(key){
    case'required':
     return 'Este campo es requerido';
    case 'minlength':
    return `Minimo ${errors['minlength'].requiredLength} caracters.`

  }
  return null;
}
return 'hola mundo'
}

onSave():void{
  //ahora verificamos nuestrsa validaciones
  if (this.myForm.invalid) {
    // lo que va hacer es tocar todo los componenes de los formulario
    this.myForm.markAllAsTouched();
    return
  }
  console.log(this.myForm.value);
  //resetea todo, perobotta los predetermnado que establecimos arriba
  this.myForm.reset({price:10, inStorage:0});
}


}
