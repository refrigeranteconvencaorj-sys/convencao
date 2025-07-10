# Criar endpoint

## Google Drive
1- Crie uma pasta no Google Drive

2- Vá em "Compartilhar -> Copiar link"

3- Pegue o ID da pasta

```sh
# Link completo
https://drive.google.com/drive/folders/1M-vzqdkxCOJHET8svg42p0rWGbJJE2Z6?usp=sharing

# ID da pasta
1M-vzqdkxCOJHET8svg42p0rWGbJJE2Z6
```

# Google Sheets
1- Crie uma planílha chamada 'convencao-trabalhe-conosco'

2- Adicione o app script com o seguinte código
```js
function doGet(e) {
  return ContentService.createTextOutput("OK");
}

function doPost(e) {
  if (!e.parameter?.filedata) {
    const result = JSON.stringify({ status: 404, message: "Nenhum arquivo" })
    return ContentService.createTextOutput(result).setMimeType(ContentService.MimeType.JSON);
  }

  const contentType = e.parameter.filetype;
  const filename = e.parameter.filename;
  const base64 = e.parameter.filedata;

  const blob = Utilities.newBlob(Utilities.base64Decode(base64), contentType, filename);
  if (!blob) {
    const result = JSON.stringify({ status: 500, message: "Erro ao decodificar arquivo" })
    return ContentService.createTextOutput(result).setMimeType(ContentService.MimeType.JSON);
  }

  // Crie uma pasta no Drive e cole o ID aqui
  const folder = DriveApp.getFolderById('<ID da Pasta>');
  const file = folder.createFile(blob);
  const fileUrl = file.getUrl();

  const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();

  sheet.appendRow([
    new Date()
    , e.parameter.nome
    , e.parameter.tel_fixo
    , e.parameter.tel_cel
    , e.parameter.email
    , e.parameter.estado
    , e.parameter.cidade
    , e.parameter.mensagem
    , fileUrl
  ]);

  const result = JSON.stringify({ status: 200, message: "Feito" })
  return ContentService.createTextOutput(result).setMimeType(ContentService.MimeType.JSON);
}
```

3- Implante como App Web

```bash
# Descrição
- Trabalhe Conosco

# Executar como:
- eu mesmo

# Quem pode acessar:
- Qualquer pessoa
```

4- Salve o link da planílha, parecido com o abaixo 

https://script.google.com/macros/s/AKfycbxcnTMb_UVRNax6JLMmJ-J47b9OMXvstoVLPKOm7bklZGFfxEtYAN2PyueBNvMGNHyZ/exec

5- Altere o arquivo [AQUI](../../src/constants/sheets.ts)
