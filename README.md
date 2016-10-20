# FEUP Talks Management
![Build](https://camo.githubusercontent.com/c80b945464b8a2f461df63caf4125154896b93b0/68747470733a2f2f7472617669732d63692e6f72672f616e67756c61722f717569636b73746172742e7376673f6272616e63683d6d6173746572)

Using Angular 2.

## Installation

#### 1. Clone the project
```
$ git clone https://github.com/RAyres23/LESTeamB.git
```

#### 2. Go to the project folder
```
$ cd LESTeamB
```

#### 3. Install npm packages

```
$ npm install
$ npm start
```
> If the typings folder doesn't show up after npm install please install them manually with:
>
> `npm run typings -- install`

Code changes are automatically updated.  Process can be stoped using CTRL+C.

## Start Coding

If you want to start developing, first create a new branch:
```
May branch off from:
develop
Must merge back into:
develop
```

#### 1. Always use develop branch to start branching off. Branching names convention must follow: `develop/name`

```
$ git checkout -b myfeature develop
Switched to a new branch "myfeature"
```

#### 2. When finished developing the feature, ***merge back*** to develop. Then to master.

> The --no-ff flag causes the merge to always create a new commit object, even if the merge could be performed with a fast-forward. This avoids losing information about the historical existence of a feature branch and groups together all commits that together added the feature.

```
$ git checkout develop
Switched to branch 'develop'

$ git merge --no-ff myfeature
Updating ea1b82a..05e9557
(Summary of changes)

$ git branch -d myfeature
Deleted branch myfeature (was 05e9557).

$ git push origin develop
```

As for release branch, we will later use that for Jenkins purpose.

## Folder Structure

```
app/
----- components/
---------- home/
--------------- home.component.ts
--------------- home.component.html
---------- other/
--------------- other.component.ts
--------------- other.component.html (optional)
----- assets/
---------- js/
--------------- bootstrap.js
--------------- jquery.js
---------- styles/
--------------- bootstrap.css
--------------- jquery.css
----- shared/
---------- sidebar
--------------- sidebar.component.ts
--------------- sidebar.component.html
----- main.ts
----- app.component.ts
test/
----- something
```

## Atores

* **Proponente**: Propõe a palestra
* **Administrador**: Aprova a palestra
* **Funcionário**: Arranja as salas (mas não faz parte do sistema)
* **Palestrante**: Faz a palestra (mas não faz parte do sistema)
* **Attendee**: Regista-se nas palestras disponíveis (e Coffee Break/Lanche)
* **Moderador**: Modera as palestras

## Requisitos

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

Links:

[Product Vision - Roman Pichler](https://www.scrumalliance.org/community/articles/2009/january/the-product-vision)

## User Stories

#### [1. I, as a proponent, want to be able to submit a talk proposition.](https://github.com/RAyres23/LESTeamB/blob/master/acceptanceTests/AT1.md)
#### 2. I, as a system administrator, want to be able to reject a talk proposition.
#### 3. I, as a system administrator, want to able to accept a talk proposition.
#### 4. I, as a system administrator, want to be able to reject a talk, so that the proponent edits it.
#### 5. I, as a proponent, want to be able to edit a talk, in order to complete the talk.
#### 6. I, as system administrator, want to be able to edit a talk, in order to complete it.
#### 7. I, as an employee, want to be able to choose the room for the talk, in order to complete the talk.
#### 8. I, as system administrator, want to be able to accept a talk, in order to publish it.
#### 9. I, as a user, want to be able to register in a talk, in order to attend it.
#### 10. I, as attendee, want to be able to re-register in a talk, in order to replace information.
#### 11. I, as a user, want to be able to search for available talks.
#### 12. I, as a user, want to be able to search for previous talks.
#### 13. I, as an attendee, want to be able to delete my registration in the talk.
#### 14. I, as an attendee, want to be able to choose to receive (or not) notifications.
#### 15. I, as an attendee, want to be able to leave feedback (reviews).
#### 16. I, as a user, want to be able to see the other feedback (reviews).
