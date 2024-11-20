import { createMiddleware } from "hono/factory"

export const underconstruction = (message: string = 'Hello!') => {
    return createMiddleware(async (c, next) => {
        // @ts-ignore
        if (!import.meta.env.PROD) {
            console.log(`[${c.req.method}] Middleware Start URL: ${c.req.url}`)
        }
        await next()

        // @ts-ignore
        if (!import.meta.env.PROD) {
            console.log(`[${c.req.method}] Middleware End URL: ${c.req.url}`)
        }
    })
}