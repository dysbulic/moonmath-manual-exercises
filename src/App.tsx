import { Remark } from 'react-remark'
import remarkParse from 'remark-parse'
import remarkGFM from 'remark-gfm'
import remarkMath from 'remark-math'
import rehypeMathjax from 'rehype-mathjax'
import './App.css'

const exNum = (path: string) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [_, num] = path.match(/^[^\d]*([\d.]+)[^\d]*$/) ?? []
  return num.split('.').map(Number)
}

export default function App() {
  const answers = import.meta.glob(
    '/answers/*.md',
    { as: 'raw', eager: true },
  )

  const keys = Object.keys(answers).sort(
    (a, b) => {
      const [n, m] = [exNum(a), exNum(b)]
      if(n[0] !== m[0]) return n[0] - m[0]
      if(n[1] !== m[1]) return n[1] - m[1]
      if(n[2] !== m[2]) return n[2] - m[2]
      return n[3] - m[3]
    }
  )

  return (
    keys.map((key) => (
      <section>
        <Remark
          {...{ key }}
          rehypePlugins={[
            rehypeMathjax,
          ]}
          remarkPlugins={[
            remarkParse,
            remarkGFM,
            remarkMath,
          ]}
        >{answers[key]}</Remark>
        <hr />
      </section>
    ))
  )
}
