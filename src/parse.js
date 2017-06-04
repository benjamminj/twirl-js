export default (strings, ...args) => {
  // merge all of the evaluated values from the template literal
  const evaluated = strings.reduce((acc, string, i) => {
    if (args[i]) {
      if (typeof args[i] === 'number') args[i] = args[i].toString()

      return acc.concat([ string, args[i] ])
    }

    return acc.concat([ string ])
  }, [])

  // transform the array into an array of css rules, one per string
  const rules = evaluated.join('').replace(/ /g, '').split(/;\n|;|\n/)

  // transform the rules array into an object literal
  return rules.reduce((acc, rule) => {
    // early return for empty rules
    if (!rule) return acc

    const pair = rule.split(':')

    acc[pair[0]] = pair[1]
    return acc
  }, {})
}
