declare class TinyBus {
    public constructor(name?: string, listenerWrapper?: Function);

    public on: (eventName: string, listener: Function) => void;
    public once: (eventName: string, listener: Function) => void;


    /**
     * @param listener 若为空，则移除监听eventName所有listener
     */
    public off: (eventName: string, listener?: Function) => void;
    public setOn: (eventName: string, listener: Function) => void;
    public clearAllListeners: () => void;
    public emit: (eventName: string, m1?: any, m2?: any, m3?: any, m4?: any, m5?: any) => any[];
}

export default TinyBus;