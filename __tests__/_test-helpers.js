import parse from '../src/parse'

export const parsingTest = ({ css, obj }) => (t) => {
  t.deepEqual(css, obj)
}
