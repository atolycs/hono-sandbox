import { createMiddleware } from "hono/factory"

export const UnderConstruction = () => {
    return createMiddleware(async (c, next) => {
        // @ts-ignore
        if (!import.meta.env.PROD) {
            console.log(`[${c.req.method}] Middleware Start URL: ${c.req.url}`)
        }
        console.log(c?.req.url.includes("localhost"))
        console.log(c?.req.url.match(/[^?]+.[^?]+.pages.dev/))
        if ( 
            // @ts-ignore
            import.meta.env.PROD && 
            (c?.req.url.includes("localhost")) || c?.req.url.match(/[^?]+.[^?]+.pages.dev/)
        ) {
            c.set("underconstruct", true)
            c.header("X-UnderConstruction", "true")
        }
        await next()

        // @ts-ignore
        if (!import.meta.env.PROD) {
            console.log(`[${c.req.method}] Middleware End URL: ${c.req.url}`)
        }
    })
}