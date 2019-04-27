import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.css']
})
export class StatsComponent implements OnInit {

  criteriaForm: FormGroup;

  constructor(fb: FormBuilder) {
    this.criteriaForm = fb.group({
      from: null,
      to: null
    });
  }

  ngOnInit() {
    this.criteriaForm.setValue({
      from: { year: 2019, month: 1, day: 1},
      to: { year: 2019, month: 1, day: 31}
    });

    this.criteriaForm.valueChanges.pipe(
      // This should not be displayed at all when loading the page, but with Ivy, it's displayed three times.
      // it doesn't happen without Ivy, and it doesn't happen without the minDate input
      tap(() => console.log('should not be displayed when just loading the page')),
    ).subscribe(() => {});
  }
}
