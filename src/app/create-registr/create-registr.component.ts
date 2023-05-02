import { Component } from '@angular/core';

@Component({
  selector: 'app-create-registr',
  templateUrl: './create-registr.component.html',
  styleUrls: ['./create-registr.component.scss']
})
export class CreateRegistrComponent {
  public genders: string[] = ['Male', 'Female'];
  public packages: string[] = ['Weakly', 'Monthly', 'Yearly'];
}
