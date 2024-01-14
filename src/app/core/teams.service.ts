import {inject, Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {map, Observable, tap} from "rxjs";
import {Player, Team} from "./teams.model";

const BE_URL = 'http://localhost:3000';

@Injectable({
  providedIn: 'root'
})
export class TeamsService {
  private http = inject(HttpClient);

  public getTeams(): Observable<Team[]>{
    return this.http.get<Team[]>(`${BE_URL}/teams`).pipe(
      map(team =>
        team.map(team => ({
          id: team.id,
          name: team.name,
          logo: team.logo
        }) as Team)
      )
    );
  }

  public getPlayers(teamId: number): Observable<Player[]>{
    return this.http.get<Team[]>(`${BE_URL}/teams?id=${teamId}`).pipe(
      map(team => team[0].players)
    );
  }
}
