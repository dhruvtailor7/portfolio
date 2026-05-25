class EventEmitter {
    private static instance: EventEmitter
    private target

    private constructor() {
        this.target = new EventTarget()
    }

    public static getInstance(): EventEmitter {
        if (!EventEmitter.instance) {
            EventEmitter.instance = new EventEmitter()
        }
        return EventEmitter.instance
    }


    emit<T>(event: string, data?: T) {
        this.target.dispatchEvent(
            new CustomEvent<T>(event, {
                detail: data,
            })
        )
    }

    on<T>(
        event: string,
        callback: (data?: T) => void
    ) {
        const handler = (e: Event) => {
            callback((e as CustomEvent<T>).detail)
        }

        this.target.addEventListener(event, handler)

        return () => {
            this.target.removeEventListener(event, handler)
        }
    }
}

export default EventEmitter.getInstance()