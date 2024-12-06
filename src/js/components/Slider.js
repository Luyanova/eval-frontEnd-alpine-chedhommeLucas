export default function Slider() {
    return {
        steps: [],
        currentStepIndex: 0,

        init(steps) {
            this.steps = steps || [];
            this.currentStepIndex = 0;
        },

        nextStep() {
            if (this.currentStepIndex < this.steps.length - 1) {
                this.currentStepIndex++;
            }
        },

        prevStep() {
            if (this.currentStepIndex > 0) {
                this.currentStepIndex--;
            }
        },

        currentStep() {
            return this.steps[this.currentStepIndex];
        },

        hasNextStep() {
            return this.currentStepIndex < this.steps.length - 1;
        },

        hasPrevStep() {
            return this.currentStepIndex > 0;
        },
    };
}
