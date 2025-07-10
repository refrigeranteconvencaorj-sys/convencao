# Criar endpoint

1- Crie uma planílha chamada 'convencao-denuncias'

2- Adicione o app script
```js
function doPost(e) {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  const data = JSON.parse(e.postData.contents);
  sheet.appendRow([new Date(), data.mensagem]);
  return ContentService.createTextOutput("OK");
}
```

3- Implante como App Web

```yml
Descrição:
- Canal de denúncias

Executar como:
- eu mesmo

Quem pode acessar:
- Qualquer pessoa
```

4- Salve o link da planílha

https://script.google.com/macros/s/AKfycbxcnTMb_UVRNax6JLMmJ-J47b9OMXvstoVLPKOm7bklZGFfxEtYAN2PyueBNvMGNHyZ/exec
