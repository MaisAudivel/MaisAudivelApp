<script lang="ts">
    import CarouselContent from "@/components/ui/carousel/carousel-content.svelte";
    import CarouselItem from "@/components/ui/carousel/carousel-item.svelte";
    import Carousel from "@/components/ui/carousel/carousel.svelte";
    import { type CarouselAPI } from "@/components/ui/carousel/context";
    import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
    import type { QuizQuestionData } from "./quiz";
    import Checkbox from "@/components/ui/checkbox/checkbox.svelte";
    import CarouselNext from "@/components/ui/carousel/carousel-next.svelte";
    import { Dialog, DialogClose, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";

    let questions: QuizQuestionData[] = [
        {
            question: "Quais são as principais causas de surdez no mundo?",
            answerType: "multiple",
            answers: [
                { id: 1, text: "Barulho excessivo em ambientes urbanos" },
                { id: 2, text: "Acidentes de trânsito" },
                { id: 3, text: "Ausência de proteção auricular em ambientes de trabalho com risco auditivo" }
            ],
            correctAnswerId: new Set<number>([1, 3]),
            storedAnswerId: undefined
        },
        {
            question: "Existe um tipo de surdez causada por um problema no ouvido médio, impossibilitando a chegada do som de maneira clara ao \
            ouvido interno, tornando difícil a compreensão dos sons. Qual o nome para esse tipo de deficiência auditiva?",
            answerType: "single",
            answers: [
                { id: 1, text: "condutiva" },
                { id: 2, text: "central" },
                { id: 3, text: "sensorioneural" },
                { id: 4, text: "funcional" }
            ],
            correctAnswerId: 1,
            storedAnswerId: undefined
        }
    ];

    let api: CarouselAPI;

    function storeAnswer(questionIndex: number, answer: number, checkState: boolean | "indeterminate" | null) {
        let currentQuestion = questions[questionIndex];

        if (currentQuestion.answerType === "multiple") {

            if (currentQuestion.storedAnswerId === undefined)
                currentQuestion.storedAnswerId = new Set<number>([]);

            (checkState !== "indeterminate" && checkState === true) 
            ? (currentQuestion.storedAnswerId as Set<number>).add(answer) 
            : (currentQuestion.storedAnswerId as Set<number>).delete(answer); 
        }
        else {
            (currentQuestion.storedAnswerId as number) = answer;
        }
    }

</script>

<div class="flex w-full justify-between items-center px-10 py-4 border-b border-b-white">
    <Dialog>
        <DialogTrigger>
            <p class="font-semibold text-sm underline">Sair do quiz</p>
        </DialogTrigger>
        <DialogContent class="w-[400px] shadow-md rounded-xl bg-white text-black">
            <DialogHeader>
                <DialogTitle>Sair do quiz?</DialogTitle>
                <DialogDescription>Você irá voltar para a página inicial</DialogDescription>
            </DialogHeader>
            <div class="flex w-full items-center space-x-4">
                <DialogClose>
                    <button class="bg-black text-white text-sm rounded-xl px-6 py-2">
                        Ficar
                    </button>
                </DialogClose>
                <DialogClose>
                    <a href="/" class="bg-transparent text-black border-2 border-black text-sm rounded-xl px-6 py-2">
                        Sair
                    </a>
                </DialogClose>
            </div>
        </DialogContent>
    </Dialog>
</div>

<div id="questions-div" class="m-auto">
    <Carousel bind:api>
        <CarouselContent class="mx-auto w-[700px] h-[500px]">
            <CarouselItem class="quiz-item space-y-24">
                <div class="w-[500px] space-y-2 text-center mx-auto">
                    <h1 class="font-extrabold text-5xl">Vamos testar seu conhecimento!</h1>
                    <h2 class="text-xl">Vamos ver quantas perguntas você pode responder corretamente no nosso quiz sobre deficiência auditiva </h2>
                </div>
                <button type="button" class="quiz-button-inverted mx-auto" on:click={() => api.scrollNext()}>Começar</button>
            </CarouselItem>
            { #each questions as question, index }
                <CarouselItem class="quiz-item space-y-6">
                    <p class="quiz-question">{question.question}</p>

                    { #if question.answerType === "single" }
                        <RadioGroup class="space-y-3">
                            { #each question.answers as answer }
                                <div class="flex items-center space-x-2">
                                    <RadioGroupItem value={`${index}-${answer.id}`} on:click={() => storeAnswer(index, answer.id, null)} />
                                    <label for={`${index}-${answer.id}`} class="quiz-answer-label">{answer.text}</label>
                                </div>
                            { /each }
                        </RadioGroup>
                    { :else }
                        <div class="space-y-3">
                            { #each question.answers as answer }
                                <div class="flex items-center space-x-2">
                                    <Checkbox 
                                    value={`${index}-${answer.id}`} 
                                    onCheckedChange={(arg) => storeAnswer(index, answer.id, arg)} 
                                    />
                                    <label for={`${index}-${answer.id}`} class="quiz-answer-label">{answer.text}</label>
                                </div>
                            { /each }
                        </div>
                    { /if }

                    <button class="quiz-button-default disabled:brightness-50" disabled={question.storedAnswerId === undefined} on:click={() => api.scrollNext()}>
                        Avançar
                    </button>
                </CarouselItem>
            { /each }
        </CarouselContent>
    </Carousel>
</div>

<style scoped>
    @tailwind components;

    @layer components {
        .quiz-item {
            @apply flex flex-col items-center w-[700px] h-[500px] overflow-y-scroll;
        }

        .quiz-question {
            @apply text-lg font-semibold text-justify;
        }

        .quiz-answer-label {
            @apply text-sm;
        }

        .quiz-button-default {
            @apply bg-white text-black font-semibold text-lg rounded-xl px-4 py-2;
        }

        .quiz-button-inverted {
            @apply bg-transparent text-white font-semibold text-lg border-2 border-white rounded-xl px-4 py-2;
        }
    }
</style>