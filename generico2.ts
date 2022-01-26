class Box<T> {
    private _valor: T

    constructor(valor: T) {
        this._valor = valor
    }

    get valor(): T {
        return this.valor
    }

    map<U>(mapear: (valor: T) => U): U {
        return mapear(this.valor)
    }
}