export const config = {
  'runtime': 'edge'
}

export default function handler(req) {
  return Response.json({
    location: [
      {
        pergunta: 'teste 1?',
        resposta: 'resposta de teste',
      },
      {
        pergunta: 'teste 2?',
        resposta: 'resposta de teste',
      },
      {
        pergunta: 'teste 3?',
        resposta: 'resposta de teste',
      }
    ]
  })
}
