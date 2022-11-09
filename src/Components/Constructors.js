export function fact(title, content) {
  return {
    'title': title,
    'content': content
  }
}

export function circle(number, content) {
  return {
    'number': number,
    'content': content
  }
}

export function section(name, subjects, chief) {
  return {
    'name': name,
    'subjects': subjects,
    'chief': chief
  }
}

export function subject(name, chief) {
  return {
    'name': name,
    'chief': chief
  }
}

export function event(name, responsables, date) {
  return {
    'name': name,
    'responsables': responsables,
    'date': date,
    'getDate': () => {
      return `${date.getDate()}.${date.getMonth()}.${date.getFullYear()}`
    }
  }
}