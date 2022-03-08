import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { IGuestDetails } from 'src/app/models/guset-detail.model';
import { GuestDetailsService } from 'src/app/services/guest-details.service';

@Component({
  selector: 'app-guest-details',
  templateUrl: './guest-details.component.html',
  styleUrls: ['./guest-details.component.scss'],
  providers: [DatePipe]
})
export class GuestDetailsComponent implements OnInit {
  details!: any;

  constructor(public guestDetailsService: GuestDetailsService,private datePipe: DatePipe) {
    this.guestDetailsService.getDetails().subscribe(res => {
      this.details = res;
      console.log(this.getKeys(this.details));
    });
  }

  ngOnInit(): void {

  }

  fields = [
    "id",
    "hotel_id",
    "first_name",
    "last_name",
    "locale",
    "room_no",
    "entry_date",
    "release_date",
    "phone_no",
    "booking_date",
    "date_of_birth",
    "e_mail",
    "wedding_anniversary",
    "loyalty_info",
    "pillow_type",
    "bed_type"
  ];
  getKeys(value: any): any[] {
    let showFields = Object.keys(value).filter(key => this.fields.includes(key));
    return showFields
      .map(key => {
        if (typeof value[key] != 'object') {
          return ({ key, value: this.details[key] })
        } else {
          return {
            key,
            items: Object.keys(this.details[key]).map(lKey => ({ key: lKey, value: this.details[key][lKey] }))
          }
        }
      });
  }

  getTitle(value: string): string {
    if (!value) return '';
    value = value.replace('_', ' ');
    if (value.includes('_')) {
      // Tüm ( _ ) leri silmek için tekrar fonksiyona sokuyoruz.
      return this.getTitle(value);
    }

    return value;
  }


  formatValue(value: any) {
    if (this.isValidDate(value)) {
      return this.datePipe.transform(value, 'dd/MM/YYYY')
    } 

    return value;
  }

  isValidDate(value: string | number) {
    const dateWrapper = new Date(value);
    return !isNaN(dateWrapper.getDate()) && String(value).includes('-');
  }

}
