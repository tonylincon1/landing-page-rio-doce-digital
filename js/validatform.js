var form = document.getElementById('Página1');
                
    form.addEventListener("submit", function validaCadastro(evt) {
        var nome = document.getElementById('Nome-Completo');
        var cpf = document.getElementById('CPF');
        var idade = document.getElementById('Idade');
        var email = document.getElementById('E-mail');
        var estado = document.getElementById('Estado');
        var cidade = document.getElementById('Cidade');
        var escolaridade = document.getElementById('Escolaridade');
        var estuda = document.getElementById('Estuda');
        var turno = document.getElementById('Turno');
        var trabalha = document.getElementById('Trabalha?');
        var necessidades = document.getElementById('Necessidades-especiais?');
        var publico = document.getElementById('Publico-de-Reassentamento?');
        var interesse = document.getElementById('Interesse');
        var LinkQuetionario = document.getElementById('LinkQuetionario');
        var contErro = 0;
     
     
        /* Required */
        function required (tagErro,tagCampo,tagMensagem){
        caixa = document.querySelector(tagErro);
        if(tagCampo.value == ""){
            caixa.innerHTML = "*Favor preencher: ".concat(tagMensagem);
            caixa.style.display = 'block';
            contErro += 1;
        }else{
            caixa.style.display = 'none';
        }
        }

        /* Email */
        function validemail (tagErro,tagCampo){
            filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
            caixa = document.querySelector(tagErro);
            if (filter.test(tagCampo.value)) {
                caixa.style.display = 'none';
            }
            else{
                caixa.innerHTML = "*Email não aceito. Por favor digite um e-mail valido.";
                caixa.style.display = 'block';
                contErro += 1;
            }
            }

        /* idade */
        function verificaIdade (tagErro,tagCampo){
            caixa = document.querySelector(tagErro);
            if(tagCampo.value >= 18 & tagCampo.value <= 29){
                caixa.style.display = 'none';
            }else{
                caixa.innerHTML = "*É preciso ter entre 18 e 29 anos para se inscrever";
                caixa.style.display = 'block';
                contErro += 1;
            }
            }

        /* Validalink */
        function validlink (tagErro,tagCampo){
            filter = /https:\/\/drive\.google\.com\/file\/d\/(.*?)\/.*?\?usp=sharing/;
            caixa = document.querySelector(tagErro);
            if (filter.test(tagCampo.value)) {
                caixa.style.display = 'none';
            }
            else{
                caixa.innerHTML = "*Por favor, gere um link de compartilhamento no google drive do seu questionário de deligência (Basta apenas importar o arquivo no google drive e gerar um link compartilhado)";
                caixa.style.display = 'block';
                contErro += 1;
            }
            }
    
        required('.msg-nome',nome,"Nome")
        required('.msg-documento',cpf,"CPF")
        required('.msg-email',email,"E-mail")
        validemail('.msg-email',email)
        required('.msg-idade',idade,"Idade")
        verificaIdade('.msg-idade',idade)
        required('.msg-telefone',idade,"Telefone")
        required('.msg-estado',estado,"Estado")
        required('.msg-cidade',cidade,"Cidade")
        required('.msg-escolaridade',escolaridade,"Escolaridade")
        required('.msg-estuda',estuda,"Estuda")
        required('.msg-turno',turno,"Turno")
        required('.msg-trabalha',trabalha,"Trabalha Atualmente?")
        required('.msg-necessidades',necessidades,"Necessidades Especiais")
        required('.msg-publico',publico,"Público de Reassentamento?")
        required('.msg-interesse',interesse,"Interesse no programa")
        required('.msg-questionario',interesse,"Link do Questionário")
        
    
    
        if(contErro > 0){
            evt.preventDefault();
        }
    
        else {
            form.addEventListener("submit", e => {
                e.preventDefault();
                fetch("https://hook.us1.make.com/emo6d98bfrbhh4saeuxgxpmlvipjijv9", {
                    method : "POST",
                    body: new FormData(document.getElementById("Página1")),
                }).then(
                    response => response.toString()
                ).then((html) => {
                    envio = document.querySelector(".msg-envio");
                    envio.innerHTML = "Suas respostas foram enviadas com sucesso!";
                    envio.style.display = 'block';
                    setTimeout(function() {
                        window.location.href = "index.html";
                    }, 4000);
                })
            });
        }

        },true)