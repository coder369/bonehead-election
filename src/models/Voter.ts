export type RegisteredVoter = {
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

export type Citizen = Omit<RegisteredVoter, "id">;

export type RegisteredVoterKeys = keyof RegisteredVoter;