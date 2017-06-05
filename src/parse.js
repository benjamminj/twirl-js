export default (strings, ...args) => {
  // merge all of the evaluated values from the template literal
  const evaluated = strings.reduce((acc, string, i) => {
    acc.push(string)

    if (args[i]) acc.push(args[i].toString())

    return acc
  }, [])

  // transform the array into an array of css rules, one per string
  const rules = evaluated.join('').replace(/ /g, '').split(/;|\n/)
  console.log(rules)

  // transform the rules array into an object literal
  return rules.reduce((acc, rule) => {
    // early return for empty rules
    if (!rule) return acc

    const pair = rule.split(':')

    acc[pair[0]] = pair[1]
    return acc
  }, {})
}
