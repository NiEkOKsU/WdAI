export interface Trip {
    ID: number;
    Name: string;
    Destination: string;
    StartDate: string;
    EndDate: string;
    Price: number;
    MaxPeople: number;
    Reserved: number;
    Likes: number,
    Dislikes: number,
    Description: string;
    Photo: string[];
    Liked: boolean;
    Disliked: boolean;
  }