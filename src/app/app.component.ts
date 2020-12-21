import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Service } from '../app/services/service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.styl']
})
export class AppComponent {
  form: FormGroup;
  title = 'mushroom';
  public shape;
  public poisonous: boolean;
  public submitted = false;;
  constructor(
    private formBuilder: FormBuilder,
    private service: Service
  ) {
    this.form = this.formBuilder.group({
      cap_shape: ['', Validators.required],
      cap_surface: ['', Validators.required],
      cap_color: ['', Validators.required],
      bruises: ['', Validators.required],
      odor: ['', Validators.required],
      gill_attachment: ['', Validators.required],
      gill_spacing: ['', Validators.required],
      gill_size: ['', Validators.required],
      gill_color: ['', Validators.required],
      stalk_shape: ['', Validators.required],
      stalk_root: ['', Validators.required],
      stalk_surface_above_ring: ['', Validators.required],
      stalk_surface_below_ring: ['', Validators.required],
      stalk_color_above_ring: ['', Validators.required],
      stalk_color_below_ring: ['', Validators.required],
      veil_type: ['p', Validators.required],
      veil_color: ['', Validators.required],
      ring_number: ['', Validators.required],
      ring_type: ['', Validators.required],
      spore_print_color: ['', Validators.required],
      population: ['', Validators.required],
      habitat: ['', Validators.required],
    });
  }


  public sendData() {
    this.submitted = false;
    const body = this.form.getRawValue();
    this.service.checkMushroom(body)
      .subscribe(result => {
        if (result.result === 'p') {
          this.poisonous = true;
        }
        else {
          this.poisonous = false;
        }
        this.submitted = true;
      })
  }
}
