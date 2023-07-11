let students = [
  {
    name: 'José David',
    firstTest: '8.3',
    secondTest: '9.5'
  },
  {
    name: 'Raimundo Teixeira',
    firstTest: '7.1',
    secondTest: '5.2'
  },
  {
    name: 'Antônio da Silva',
    firstTest: '7.8',
    secondTest: '9.9'
  },
  {
    name: 'Francisco José',
    firstTest: '6.7',
    secondTest: '8.2'
  },
  {
    name: 'Maria Antonieta',
    firstTest: '9.3',
    secondTest: '9.8'
  }
]

function average(firstTest, secondTest) {
  return ((Number(firstTest) + Number(secondTest)) / 2).toFixed(1)
}

for (let student of students) {
  let studentName = student.name
  let studentAverage = average(student.firstTest, student.secondTest)

  if (studentAverage >= 7) {
    alert(`A média do(a) aluno(a) ${studentName} é: ${studentAverage} \n
    Parabéns, ${studentName}! Você foi aprovado(a) no concurso!`)
  } else {
    alert(`A média do(a) aluno(a) ${studentName} é: ${studentAverage} \n
    Não foi dessa vez, ${studentName}! Tente novamente!`)
  }
}
