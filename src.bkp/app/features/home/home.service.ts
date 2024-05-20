import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(private http: HttpClient) { }


  private apiKey = '980ba687df6df25562626a9e1bec8d03-ed54d65c-7d351161';
  private domain =  'sandbox5d1c9798d78e4a6c9e0e2daf80a2bdf0.mailgun.org';
  private mailgunUrl = `https://api.mailgun.net/v3/${this.domain}/messages`;
  private to = 'turkarakshay186@gmail.com'

  sendEmail(from: string,subject: string, text: string) {
    const headers = new HttpHeaders({
      'Authorization': 'Basic ' + btoa('api:' + this.apiKey),
      'Content-Type': 'application/x-www-form-urlencoded'
    });

    const body = `from=${from}&to=${this.to}&subject=${subject}&text=${text}`;

    return this.http.post(this.mailgunUrl, body, { headers: headers });
  }
}
