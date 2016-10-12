# Sistema de Gerenciamento de Palestras

## Atores

* **Preponente**: Propõe a palestra
* **Administrador**: Aprova a palestra
* **Funcionário**: Arranja as salas (mas não faz parte do sistema)
* **Palestrante**: Faz a palestra (mas não faz parte do sistema)
* **Attendee**: Regista-se nas palestras disponíveis (e Coffee Break/Lanche)
* **Moderador**: Modera as palestras

## Requerimentos

* Registo de palestra através de um formulário
* Criação de uma "wiki" própria para uma palestra
* Envio de aviso para mailing list
* Número máximo de inscrições para Coffee Break (não quebrar orçamento?)
* User Roles
* Validar inscrições com o email de fe.up.pt (e talvez captcha)
* Inscrição: Nome, Mail, AFiliação, checkbox: vai ao almoço - desabilita ao chegar ao limite de pessoas para almoço (e pode mostrar quantas vagas tem)
* Confirmar com o e-mail cada vez que quiser fazer uma alteração da conta (Queue de alterações - confirmadas por email: LINK)
 * Usuários acedem a um link que ativa um pedido da API e confirma um pedido em cache. O link vai ter de expirar passado algum tempo

## Máquina de estados
```
Pedido - (Aceitar: **AD**) -> Aguarda Recursos - (Sala: **FC**) -> A Divulgar: **AD** - (Divulgar - Criar página, notificar) -> Palestra -> Arquivo
       - (Rejeitar) -> Notificação com razão

Na etapa de aguarda recursos, o Preponente, Administrador e Funcionário deveriam poder alterar o pedido.
```


Links Úteis:

[Product Vision - Roman Pichler](https://www.scrumalliance.org/community/articles/2009/january/the-product-vision)
