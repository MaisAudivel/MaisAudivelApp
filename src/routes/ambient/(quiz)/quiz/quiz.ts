export interface QuizAnswerData {
    id: number;
    text: string;
}

export interface QuizQuestionData {
    question: string;
    answerType: "multiple" | "single";
    answers: QuizAnswerData[];
    correctAnswerId: number | Set<number>;
    storedAnswerId: number | Set<number> | undefined;
}