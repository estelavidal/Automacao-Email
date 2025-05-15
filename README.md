# Projeto: Fluxo de Automação de Atendimento

## Descrição
Este projeto demonstra um fluxo automatizado de atendimento ao cliente utilizando Google Forms, Google Sheets e Google Apps Script. O objetivo é facilitar o processo de registro de solicitações, geração automática de protocolo, verificação do plano contratado, atualização da planilha e envio automático de e-mail de confirmação.

## Arquivos do projeto
- `EnvioDeEmail.gs` — Código do Apps Script que automatiza o fluxo de atendimento.
- `fluxo_automacao.drawio` — Fluxograma detalhado do processo.
- `formulario.md` — Documentação com perguntas e opções do formulário.
- `planilha.xlsx` (opcional) — Exportação da planilha com dados de exemplo.

## Como funciona o fluxo
1. O cliente preenche o formulário online com seus dados e tipo de solicitação.
2. As respostas são registradas automaticamente na planilha do Google Sheets.
3. O sistema gera um protocolo automático único para cada solicitação.
4. Verifica o plano contratado pelo cliente para possíveis ações específicas.
5. Atualiza a planilha com todas as informações.
6. Envia automaticamente um e-mail de confirmação para o cliente com o protocolo.
7. Registra o envio do e-mail na planilha para controle.

## Link para o formulário
[Acesse o formulário aqui](https://forms.gle/jR76ok36HGqmETdN6)

## Como usar
- Importe a planilha para seu Google Sheets.
- Importe o script `EnvioDeEmail.gs` no Google Apps Script vinculado à planilha.
- Configure o acionador para disparar a função `enviarConfirmacao` ao enviar o formulário.
- Faça testes enviando respostas pelo formulário.
