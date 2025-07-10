# Criar endpoint

1- Crie uma planílha chamada 'convencao-denuncias'

2- Adicione o app script com o seguinte código
```js
function doGet(e) {
  return ContentService.createTextOutput("OK!");
}

function doPost(e) {
  if (!e.postData?.contents) {
    const result = JSON.stringify({ status: 404, message: "Conteúdo não encontrado" })
    return ContentService.createTextOutput(result).setMimeType(ContentService.MimeType.JSON);
  }

  const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();

  const data = JSON.parse(e.postData.contents);
  sheet.appendRow([new Date(), data.mensagem]);

  const result = JSON.stringify({ status: 200, message: "Feito" })
  return ContentService.createTextOutput(result).setMimeType(ContentService.MimeType.JSON);
}
```

3- Implante como App Web

```bash
# Descrição
- Canal de denúncias

# Executar como:
- eu mesmo

# Quem pode acessar:
- Qualquer pessoa
```

4- Salve o link da planílha, parecido com o abaixo 

https://script.google.com/macros/s/AKfycbxcnTMb_UVRNax6JLMmJ-J47b9OMXvstoVLPKOm7bklZGFfxEtYAN2PyueBNvMGNHyZ/exec

5- Altere o arquivo [AQUI](../../src/constants/sheets.ts)
