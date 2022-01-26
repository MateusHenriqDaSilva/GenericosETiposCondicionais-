interface FetchResponse {
    status: number
    headers: Headers
    data: any
}

async function fetchJson(url: string): Promise<FetchResponse> {
    const response = await fetch(url)

    return {
        headers: response.headers,
        status: response.status,
        data: await response.json()
    }
    const { data } = await fetchJson('https://jsonplaceholder.typicode.com/todos/1')
    console.log(data.titulo.toUpperCase())
}

(async () => {
    interface Todo {
        userId: number;
        id: number;
        title: string;
        completed: boolean;
    }
    const response = await fetchJson('https://jsonplaceholder.typicode.com/todos/1');
    const todo = response.data as Todo;
})();

function map<T, U>(fn: (item: T) => U) {
    return (items: T[]) => {
        return items.map(fn)
    }
}

const multiplicar = map((x: number) => x * 2)
const multiplicado = multiplicar([1, 2, 3])

interface Array<T> {
    map<U>(callbackfn: (value: T, index: number, array: T[]) => U,
        thisArg?: any): U[];
}

function getLength<T extends any[] | string>(x: T): number {
    return x.length;
}

function data<T extends Date | number>(valor: T) {
    if (valor instanceof Date) {
        return valor
    }

    return new Date(valor)
}