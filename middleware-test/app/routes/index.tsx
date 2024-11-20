import { css } from 'hono/css'
import { createRoute } from 'honox/factory'
import Counter from '../islands/counter'
import { UnderConstruction } from "underconstruction"

const className = css`
  font-family: sans-serif;
`

export default createRoute(
  UnderConstruction(),
  (c) => {
  const name = c.req.query('name') ?? 'Hono'
  // @ts-ignore
  console.log(c.var?.underconstruct)
  return c.render(
    <div class={className}>
      <h1>Hello, {name}!</h1>
      {
      // @ts-ignore
      c.var?.underconstruct ? (
        <h1> Under construction! </h1>
      ): ( '' )
      }

      <Counter />
    </div>,
    { title: name }
  )
})
