import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/interfaces/user.interface';
import { BackendService } from '../backend.service';
import { Ticket } from 'src/interfaces/ticket.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-screen',
  templateUrl: './list-screen.component.html',
  styleUrls: ['./list-screen.component.css']
})
export class ListScreenComponent implements OnInit {
  public readonly users$: Observable<User[]> = this.backendService.users();
  public readonly tickets$: Observable<Ticket[]> = this.backendService.tickets();

  constructor(private readonly backendService: BackendService, private router: Router  ) { }

  ngOnInit(): void {
  }

  clicDetail(Ticket: Ticket){
    console.log(Ticket.id);
      const ticketId = Ticket ? Ticket.id : null;
      this.router.navigate(['detail-screen', { id: ticketId }]);
  }

}
