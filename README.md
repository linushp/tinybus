# tinybus

极小的js事件总线, 没有任何其他依赖


```typescript

declare class TinyBus {
    public constructor(name?: string, listenerWrapper?: Function);

    public on: (eventName: string, listener: Function) => void;
    public off: (eventName: string, listener: Function) => void;
    public setOn: (eventName: string, listener: Function) => void;
    public clearAllListeners: () => void;
    public emit: (eventName: string, m1?: any, m2?: any, m3?: any, m4?: any, m5?: any) => void;
}


```