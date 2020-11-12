export type Voter = {
    id: number,
    firstName: string,
    lastName: string,
    address: string,
    city: string,
    state: string,
    zip: string,
    birthdate: string,
    email: string,
    phone: string,
}

export type NewVoter = Omit<Voter, "id">;

export type VoterKeys = keyof Voter;