# Introduction 
The Official Pdfless javascript to consume [Pdfless](https://www.pdfless.com/) API

This library allows you to quickly and easily generate PDF document.

# Prerequisites 
Pdfless account is required, [sign up for free](https://www.pdfless.com).

# Installation

Using the [Node Package Manager (CLI)](https://www.npmjs.com/package/@pdfless/pdfless-js):

```sh
npm i @pdfless/pdfless-js
```

## Supported Operations
The library supports the following operation:
* `Create a PDF document`: Create a PDF document based on selected template identifier and defined payload.
* `Get workspace information`: Retrieve workspace information based on API key.
* `List document templates`: Paginated list of document templates.

### `Create a PDF document`

Import PdfService as a default import and instantiate it as `new PdfService(apiKey)` with your workspace API key.
Use `generate(command)` function to generate PDF with a `GeneratePDFCommand` command.

|Property|Required|Type|Description|
|---|---|---|---|
|`template_id`|Yes|string|Select a document template of workspace.|
|`payload`|Yes|string|If your document contains variables, enter data in JSON format corresponding to defined variables. You can read more about this [here](https://docs.pdfless.com/expressions).|

```javascript
import { PdfService } from '@pdfless/pdfless-js';

async function main(): Promise<void> {
  try {
    // Create the Pdf service
    const pdfService = = new PdfService("ak_xxxxxxxxxxxxx");
    
    // Generate PDF with sample payload in JSON
    const payload: GeneratePDFCommand = {
        firstName: "Nicolas",
        lastName: "Law",
        companyName: "Synapsium",
        articles: [
            { name: "tshirt", price: 10, quantity: 4 },
            { name: "short", price: 20, quantity: 1 }
        ]
    };
    const generatePDFCommand = { 
        template_id: "XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX",
        payload: JSON.stringify(payload)
    }
    pdfService.generate(generatePDFCommand);
  } catch (err) {
    console.log(err);
  }
}

main();
```

### `Get workspace information`
You can use this function to check if your workspace exists or already available.

Import WorkspaceService as a default import and instantiate it as `new WorkspaceService(apiKey)` with your workspace API key.

```javascript
import { WorkspaceService } from '@pdfless/pdfless-js';

async function main(): Promise<void> {
  try {
    // Create the Workspace service
    const workspaceService = = new WorkspaceService("ak_xxxxxxxxxxxxx");
    
    // Get workspace information 
    workspaceService.get();
  } catch (err) {
    console.log(err);
  }
}

main();
```

### `List document templates`

Import TemplateService as a default import and instantiate it as `new TemplateService(apiKey)` with your workspace API key.

```javascript
import { TemplateService } from '@pdfless/pdfless-js';

|Property|Required|Type|Description|Default
|---|---|---|---|---|
|`page`|Yes|number|Page number.|`1`|
|`pageSize`|Yes|number|Number of item by page.|`25`|

async function main(): Promise<void> {
  try {
    // Create the Template service
    const templateService = = new TemplateService("ak_xxxxxxxxxxxxx");
    
    // List template of current workspace
    templateService.list(1, 50);
  } catch (err) {
    console.log(err);
  }
}

main();
```