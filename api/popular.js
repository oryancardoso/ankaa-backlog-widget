// Este código roda no servidor (no Vercel), não no navegador do usuário.

// A função principal que o Vercel vai executar
export default function handler(request, response) {
  
  // Por enquanto, nosso robô só sabe dar "oi".
  // Isso é para testarmos se a comunicação está funcionando.
  response.status(200).json({
    message: 'Olá, eu sou o robô VSF do Ankaa Games!'
  });
}
