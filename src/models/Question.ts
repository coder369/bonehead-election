export type Question = {
    id: number,
    question: string,
    yesCount: number,
    noCount: number,
}

export type NewQuestion = Omit<Question, 'id'>;

export type QuestionKeys = keyof Question;