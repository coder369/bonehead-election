import { ChangeEvent, useState } from 'react'

export type UseBallotForm = (initialForm: boolean[]) => [boolean[], (e: ChangeEvent<HTMLInputElement>) => void];

export const useBallotForm: UseBallotForm = (initialForm) => {
    const [bits, setBits] = useState(initialForm);

    const change = (e: ChangeEvent<HTMLInputElement>) => {
        const newBits = [...bits]
        newBits[+e.target.id] = e.target.checked

        setBits(newBits);
    };

    return [bits, change];
};