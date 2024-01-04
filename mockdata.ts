export interface Team {
    id: number;
    name: string;
    sport: string;
    city: string;
    country: string;
    championshipsWon: number;
  }
  
  const mockData: Array<Team> = [ 
    {
      id: 1,
      name: 'Team Alpha',
      sport: 'Football',
      city: 'New York',
      country: 'USA',
      championshipsWon: 5,
    },
    {
      id: 2,
      name: 'Team Bravo',
      sport: 'Basketball',
      city: 'Los Angeles',
      country: 'USA',
      championshipsWon: 3,
    },
    {
      id: 3,
      name: 'Team Charlie',
      sport: 'Baseball',
      city: 'Tokyo',
      country: 'Japan',
      championshipsWon: 7,
    },
  ];
  
  export default mockData;
  