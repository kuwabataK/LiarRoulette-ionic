export class CircleProperty {

    name: string = ""
    view_prob: number = 25
    real_prob: number[] = [25]

    constructor(name?: string) {
        this.name = name
    }
}