export interface PlayerModel {
  id: number;
  name: string;
  club: string;
  nationality: string;
  position: string;
  statistics: {
    Overall: number;
    Pace: number;
    Shooting: number;
    Passing: number;
    Dribbling: number;
    Defending: number;
    Physical: number;

    Diving?: number | undefined;
    Handling?: number | undefined;
    Kicking?: number | undefined;
    Reflexes?: number | undefined;
    Speed?: number | undefined;
    Positioning?: number | undefined;
  };
}
