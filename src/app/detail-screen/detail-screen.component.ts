import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/interfaces/user.interface';
import { Ticket } from 'src/interfaces/ticket.interface';
import { BackendService } from '../backend.service';

@Component({
  selector: 'app-detail-screen',
  templateUrl: './detail-screen.component.html',
  styleUrls: ['./detail-screen.component.css']
})
export class DetailScreenComponent implements OnInit {
  public readonly users$: Observable<User[]> = this.backendService.users();
  public ticketId: number;
  public ticket: Observable<Ticket>;
  public userName: string;

  constructor(private readonly backendService: BackendService) { }

  ngOnInit(): void {
  this.ticket = this.backendService.ticket(this.ticketId);
  this.users$.subscribe( 
    (value) =>
    {
      // récupérer l'assignedId du ticket et comparer avec Users$
      this.userName = value[111].name
    }
  )
  }

}
