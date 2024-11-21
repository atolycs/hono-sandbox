import { createMiddleware } from "hono/factory"
import { logger } from "hono/logger"

export const UnderConstruction = () => {
    return createMiddleware(async (c, next) => {
        const regexp_detect = new RegExp(/[\.]+.*\.pages\.dev/)
        // @ts-ignore
        if (!import.meta.env.PROD) {
            console.log(`[${c.req.method}] Middleware Start URL: ${c.req.url}`)
        }
        console.log(c?.req.url.includes("localhost"))
        console.log(c?.req.url.match(regexp_detect))
        // @ts-ignore
        if ( 
            // @ts-ignore
            import.meta.env.PROD && 
            (c?.req.url.includes("localhost") || c?.req.url.match(regexp_detect))
        ) {
            c.set("underconstruct", true)
            c.header("X-UnderConstruction", "true")
        }
        
        // @ts-ignore
        if (import.meta.env.DEV) {
            c.set("underconstruct", true)
        }
        await next()

        // @ts-ignore
        if (!import.meta.env.PROD) {
            console.log(`[${c.req.method}] Middleware End URL: ${c.req.url}`)
        }
    })
}