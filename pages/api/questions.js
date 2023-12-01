export const config = {
  'runtime': 'edge'
}

export default function handler(req) {
  return Response.json({
    questions: [
      {
        question: 'Qual é a duração do curso?',
        answer: 'O processo de admissão envolve a realização de um vestibular anual, que abrange áreas como Biologia, Química e Física. Também é possível ingressar por meio do ENEM.',
      },
      {
        question: 'Como é o processo de admissão no curso?',
        answer: 'resposta de teste',
      },
      {
        question: 'Existe algum programa de bolsas de estudo disponível?',
        answer: 'Sim, oferecemos programas de bolsas de estudo com base no desempenho acadêmico dos candidatos. Há também opções de bolsas para estudantes de baixa renda.',
      },
      {
        question: 'Qual é a carga horária semanal média do curso?',
        answer: 'A carga horária semanal média é de 30 horas, incluindo aulas teóricas, práticas e estágios supervisionados.',
      },
      {
        question: 'Existe algum programa de bolsas de estudo disponível?',
        answer: 'Sim, oferecemos programas de bolsas de estudo com base no desempenho acadêmico dos candidatos. Há também opções de bolsas para estudantes de baixa renda.',
      },
      {
        question: 'Existe algum programa de bolsas de estudo disponível?',
        answer: 'Sim, oferecemos programas de bolsas de estudo com base no desempenho acadêmico dos candidatos. Há também opções de bolsas para estudantes de baixa renda.',
      },
      {
        question: 'Existe algum programa de bolsas de estudo disponível?',
        answer: 'Sim, oferecemos programas de bolsas de estudo com base no desempenho acadêmico dos candidatos. Há também opções de bolsas para estudantes de baixa renda.',
      },
      {
        question: 'Como funciona o material didático?',
        answer: 'O material didático é composto por livros, apostilas e acesso a plataformas online. Além disso, os estudantes têm acesso a bibliotecas físicas e virtuais.',
      },
      {
        question: 'Quais são as principais disciplinas oferecidas no curso?',
        answer: 'Algumas das disciplinas principais incluem Anatomia, Fisiologia, Patologia, Microbiologia, e Bioética.',
      },
      {
        question: 'Há oportunidades de estágio durante o curso?',
        answer: 'Sim, o curso inclui estágios obrigatórios em hospitais e clínicas a partir do terceiro ano, proporcionando experiência prática aos estudantes.',
      },
      {
        question: 'Qual é o período de inscrição para o próximo vestibular?',
        answer: 'As inscrições para o vestibular do próximo ano estarão abertas de 1º de julho a 15 de agosto.',
      },
    ]
  })
}
