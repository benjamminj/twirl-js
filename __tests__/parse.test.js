import test from 'ava'

import parse from '../src/parse'
import { parsingTest } from './_test-helpers'

test('should export a function', t => {
  t.is(typeof parse, 'function')
})

test('should return an object', t => {
  t.is(typeof parse`background: black`, 'object')
})

test(
  'should parse multiple lines of css',
  parsingTest({
    css: parse`
      background: white;
      color: black;
    `,
    obj: { background: 'white', color: 'black' }
  })
)

test(
  'should parse lines without semicolons',
  parsingTest({
    css: parse`
      background: white
      color: black
    `,
    obj: { background: 'white', color: 'black' }
  })
)

test(
  'should interpolate numeric values',
  parsingTest({
    css: parse`
      background: white
      color: #${100 + 11}
    `,
    obj: { background: 'white', color: '#111' }
  })
)

test(
  'should evaluate functions',
  parsingTest({
    css: parse`
      background: ${(color => color)('blue')}
      color: black
    `,
    obj: { background: 'blue', color: 'black' }
  })
)
