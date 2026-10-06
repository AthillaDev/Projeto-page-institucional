const http = require('http');

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
  res.end(`
    <!DOCTYPE html>
    <html lang="pt-br">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Teste de Conexão</title>
      <style>
        body { font-family: Arial, sans-serif; text-align: center; padding: 50px; }
        .success { color: green; }
      </style>
    </head>
    <body>
      <h1 class="success">✅ Servidor Funcionando!</h1>
      <p>Esta é uma página de teste para verificar se o servidor está respondendo.</p>
      <p>Se você está vendo esta página, a conexão está funcionando.</p>
    </body>
    </html>
  `);
});

const PORT = 3004;
server.listen(PORT, '127.0.0.1', () => {
  console.log(`🚀 Servidor de teste rodando em http://127.0.0.1:${PORT}`);
  console.log(`🚀 Servidor de teste rodando em http://localhost:${PORT}`);
});