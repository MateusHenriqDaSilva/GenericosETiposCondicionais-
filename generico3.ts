class set<T> {
    private items: T[]

    constructor(iniciarItems: T[] = []) {
        this.items = iniciarItems
    }

    get size(): number {
        return this.items.length
    }

    tem(item: T): boolean {
        return this.items.includes(item)
    }

    add(item: T): void {
        if (!this.tem(item)) {
            this.items.push(item)
        }
    }

    remove(item: T): void {
        const itemIndex = this.items.indexOf(item)
        if (itemIndex >= 0) {
            this.items.splice(itemIndex, 1)
        }
    }
}

const setagem = new Set<number>([1, 2, 3])
setagem.add(1)
console.log(setagem)
setagem.add(4)
console.log(setagem)