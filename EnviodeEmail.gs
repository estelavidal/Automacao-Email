function enviarConfirmacao() {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Respostas ao formulário 1");
  var data = sheet.getDataRange().getValues();

  for (var i = 1; i < data.length; i++) {
    var email = data[i][2]; // Coluna C: E-mail
    var nome = data[i][1];  // Coluna B: Nome
    var protocolo = data[i][5]; // Coluna F: Protocolo
    var statusPlano = data[i][6]; // Coluna G: Status do Plano
    var enviado = data[i][7]; // Coluna H (nova): status do envio

    if (enviado !== "OK" && email !== "") {
      var assunto = "Confirmação do Atendimento - Protocolo " + protocolo;
      var mensagem = "Olá, " + nome + "!\n\nRecebemos sua solicitação. Seu protocolo de atendimento é: " + protocolo + ".\n" +
                     (statusPlano.indexOf("sugerir") !== -1 ? "Recomendamos atualizar seu plano para uma experiência melhor." : "") +
                     "\n\nAtenciosamente,\nEquipe de Atendimento";

      MailApp.sendEmail(email, assunto, mensagem);
      sheet.getRange(i + 1, 8).setValue("OK"); // Coluna H
    }
  }
}
