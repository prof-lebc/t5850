const ask = require('readline-sync')

let sustentaMenu = true

while (sustentaMenu){
    console.clear()
    console.log(`
[1] - Mensagem de bom dia
[2] - Mensagem de boa tarde
[3] - Mensagem de boa noite
[0] - Sair
    `)

    let opcaoUsuario = Number(ask.question("Digite uma opcao: "))
    console.clear()
    switch (opcaoUsuario){
        case 1:
            console.log(`Bom dia, flor do dia`)
            break
        case 2:
            console.log(`Boa tarde, flor da tarde`)
            break
        case 3:
            console.log(`Sei la sor`)
            break
        case 0:
            sustentaMenu = false
            break
        default:
            console.log('Opcao invalida, tente novamente')
            break
    }
    ask.question("Tecle ENTER para continuar...")
    
}