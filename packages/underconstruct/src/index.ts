import { createMiddleware } from "hono/factory"

export const underconstruction = () => {
    return createMiddleware(async (c, next) => {
        // @ts-ignore
        if (!import.meta.env.PROD) {
            console.log(`[${c.req.method}] Middleware Start URL: ${c.req.url}`)
        }
        console.log(c?.req.url.includes("localhost"))
        console.log(c?.req.url.match(/[^?]+.[^?]+.pages.dev/))
        c.set("underconstruct", c?.req.url.includes("localhost"))

        await next()

        // @ts-ignore
        if (!import.meta.env.PROD) {
            console.log(`[${c.req.method}] Middleware End URL: ${c.req.url}`)
        }
    })
}