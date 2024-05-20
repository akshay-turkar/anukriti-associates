import { Component } from '@angular/core';
import { HomeService } from './home.service';
import {
  AbstractControl,
  AsyncValidatorFn,
  FormControl,
  FormGroup,
  NonNullableFormBuilder,
  ValidationErrors,
  ValidatorFn,
  Validators
} from '@angular/forms';
import { NzCarouselModule } from 'ng-zorro-antd/carousel';
import { ReactiveFormsModule} from '@angular/forms';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzGridModule } from 'ng-zorro-antd/grid';

@Component({
  selector: 'app-home',
  standalone : true,
  imports : [NzCarouselModule, ReactiveFormsModule, NzGridModule, NzFormModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less']
})
export class HomeComponent {
  cardImgs1 = ['../../../assets/images/carousel-img-2.jpg', '../../../assets/images/carousel-img-3.jpg', '../../../assets/images/carousel-img-4.jpg'];
  cardImgs2 = ['../../../assets/images/carousel-img-5.jpg', '../../../assets/images/carousel-img-6.jpg', '../../../assets/images/carousel-img-7.jpg'];
  testimonials = [
    {img: "../../../assets/images/profile.jpg", name: "Akshay Turkar",comment: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, dicta "},
    {img: "../../../assets/images/profile.jpg", name: "Ravi Rahangdlae",comment: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, dicta Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, dicta "}
  ]

  validateForm!: FormGroup<{
    name: FormControl<string>;
    email: FormControl<string>;
    phoneNumber: FormControl<string>;
    comment: FormControl<string>;
  }>;


  
  constructor(private homeService: HomeService, private fb: NonNullableFormBuilder  ) {
    this.validateForm = this.fb.group({
      email: ['', [Validators.email, Validators.required]],
      name: ['', [Validators.required]],
      phoneNumber: ['', [Validators.required]],
      comment: ['', [Validators.required]],
    });
  }

  submitForm(){
    if (this.validateForm.valid) {
      this.homeService.sendEmail(`${this.validateForm.value.email}`, `${this.validateForm.value.name} has requested for Enquiry!!`, `${this.validateForm.value.comment}`)
        .subscribe(response => {
          console.log(response);
        });
    } else {
      Object.values(this.validateForm.controls).forEach(control => {
        if (control.invalid) {
          control.markAsDirty();
          control.updateValueAndValidity({ onlySelf: true });
        }
      });
    }
    return
  }
}
