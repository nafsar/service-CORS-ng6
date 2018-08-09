import { Component, OnInit } from '@angular/core';
import { MemberService } from '../member.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
    selector: 'app-mem',
    templateUrl: './mem.component.html',
    styleUrls: ['./mem.component.css']

})
export class MemComponent implements OnInit {
    values: any;
    title: string;
    records: string;
    month: string;
    day: number;
    year: number;
    fullDate: string;

    constructor(private service: MemberService) {
        const mth = ['Jan', 'Feb', 'Mar', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
        let mthval = mth[0];
        this.title = 'Angular 5 App';
        this.records = 'Participants';
        const d = new Date();
        mthval = mth[d.getMonth()];
        this.month = mthval;
        this.day = d.getDate();
        this.year = d.getFullYear();
        this.fullDate = this.month + ' ' + this.day + ', ' + this.year;
    }

    ngOnInit() {
        this.service.getValues().subscribe(res => {
            this.values = res;
        },
            (err: HttpErrorResponse) => { console.log(err.message); }
        );
    }
}
