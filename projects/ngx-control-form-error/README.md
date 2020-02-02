# NgxControlFormError

Está biblioteca foi gerada com angular cli versão 8.2.14 e tem como objetivo controlar as mensagens de erro do formulário reativo do angular.

## Instalação

Abra o terminal e execute o seguinte comando dentro do seu projeto:

    npm i @edersondev/ngx-control-form-error --save

## Como usar
Dentro do seu arquivo de módulo faça a importação do módulo:

    import { NgxControlFormErrorModule } from '@edersondev/ngx-control-form-error';
E adicione NgxControlFormErrorModule na propriedade *imports*.

## Exemplo de uso
Dentro do componente instancie um formulário e adicione um campo com validação:

    form:FormGroup;
    constructor(private  _fb:FormBuilder) { }
    ngOnInit() {
	    this.form = this._fb.group({
		    nome:[null,[Validators.required, Validators.minLength(3), Validators.maxLength(10)]],
	    });
    }
E no html ficaria da seguinte forma:

    <form  [formGroup]="form">
    <mat-form-field>
	    <input  formControlName="nome"  matInput  placeholder="Nome completo">
	    <mat-error  [controlErrors]="form"  [fieldName]="'nome'"></mat-error>
	</mat-form-field>
    </form>
A tag mat-error recebe dois parâmetros o controlErrors e o fieldName, a diretiva controErrors deve receber um formGroup e o fieldName uma string com o nome do campo.
