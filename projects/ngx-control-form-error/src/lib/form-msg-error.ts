import { InjectionToken } from '@angular/core';

export const defaultErrors = {
  min: (objMin) => `O valor mínimo é ${objMin.min} e o valor informado é ${objMin.actual}`,
  max: (objMax) => `O valor máximo é ${objMax.max} e o valor informado é ${objMax.actual}`,
  required: (error) => `Este campo é obrigatório`,
  email: (email) => `Informe um e-mail válido`,
  matDatepickerParse: (matDatepickerParse) => (matDatepickerParse.text == 0 ? 'Informe uma data válida' : `O valor ${matDatepickerParse.text} é inválido`),
  maxlength: ({ requiredLength, actualLength }) => `A quantidade máxima de caracteres é ${requiredLength} mas o campo possui ${actualLength}`,
  minlength: ({ requiredLength, actualLength }) => `A quantidade mínima de caracteres é ${requiredLength} mas o campo possui ${actualLength}`,
  pattern: (objPattern) => `O valor '${objPattern.actualValue}' não é compatível com o formato ${objPattern.requiredPattern}`,
  mustMatch: (error) => `Os valores não conferem`,
  fileSize: (objFilesize) => `O tamanho máximo permitido por arquivo é de ${objFilesize.limitSize}, o arquivo atual possui ${objFilesize.sizeFile}`,
  requiredFileType: (obj) => `Tipo de arquivo inválido, este campo aceita arquivos do tipo: ${obj.types}`,
  notMatch: (obj) => `Os valores não devem ser iguais`
}

export const FORM_MSG_ERRORS = new InjectionToken('FORM_MSG_ERRORS', {
  providedIn: 'root',
  factory: () => defaultErrors
});
