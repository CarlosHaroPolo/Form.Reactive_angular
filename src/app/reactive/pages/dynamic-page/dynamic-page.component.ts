import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-dynamic-page',
  templateUrl: './dynamic-page.component.html',
})
export class DynamicPageComponent {

  public myForm: FormGroup;


  constructor(private fb: FormBuilder) {
    this.myForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      // es una forma de arreglo form control
      favoriteGames: this.fb.array([
        ['Metal Gear', Validators.required],
        ['Death Stranding', Validators.required],
      ])
    })
  }
//ha qye crear un get para mostra el arreglo :favoriteGames
get favoriteGame(){                       // lo tines que indcar que es
return this.myForm.get('favoriteGames') as FormArray;
}

  onSubmit(): void {

    if (this.myForm.valid) {
      this.myForm.markAllAsTouched();
      return;
    }
    console.log(this.myForm.value)
    this.myForm.reset();
  }


  isValidField(field:string):boolean |null{
    return this.myForm.controls[field].errors
    &&  this.myForm.controls[field].touched
   }

   getFieldError(field:string):string | null{
    if(!this.myForm.controls[field]) return null;
   //ahora queremos evaluar todo los errores
   const errors= this.myForm.controls[field].errors || {};
  // tines que hacer un control con los arreglos
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

   isValidFieldInArray(FormArray:FormArray,i:number){
  return FormArray.controls[i].errors  &&  FormArray.controls[i].touched
   }













}
