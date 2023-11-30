export const config = {
  'runtime': 'edge'
}

export default function handler(req) {
  return Response.json({
    questions: [
      {
        question: 'teste 1?',
        answer: 'resposta de teste',
      },
      {
        question: 'teste 2?',
        answer: 'resposta de teste',
      },
      {
        question: 'teste 3?',
        answer: 'resposta de teste',
      }
    ]
  })
}
