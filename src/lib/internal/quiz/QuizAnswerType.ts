abstract class QuizAnswerType {
    
}

abstract class RadioButtonAnswer extends QuizAnswerType {

    protected ordered_options: string[] | undefined;
    
    protected RadioButtonAnswer(ordered_options: string[]) {
        this.ordered_options = ordered_options;
    }

    GetOptions() {
        return this.ordered_options;
    }

}

class MultipleOptionGroup extends RadioButtonAnswer {

    public MultipleOptionGroup(ordered_options: string[]) {
        super.RadioButtonAnswer(ordered_options);
    }
}

class SingleOptionGroup extends RadioButtonAnswer {

}

class TextAnswer extends QuizAnswerType {

}

class MultilineTextAnswer extends TextAnswer {

}