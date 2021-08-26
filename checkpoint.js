


function esquentar(tempo, prato) {

    /**
     * Menu
     */
    tempo_do_prato = ''
    mensagem = ''
    menu = false

    if (prato == 'pipoca') {
        tempo_do_prato = 10
        menu = true
    }

    if (prato == 'macarrao') {
        tempo_do_prato = 8
        menu = true
    }

    if (prato == 'carne') {
        tempo_do_prato = 15
        menu = true
    }

    if (prato == 'feijao') {
        tempo_do_prato = 12
        menu = true
    }

    if (prato == 'brigadeiro') {
        tempo_do_prato = 8
        menu = true
    }

    if (menu == false) {
        mensagem = 'prato inexistente'
    }


    /**
     * Condições
     */
    if (menu == true) {
        mensagem = "Prato pronto 🍽, bom apetite 🤤"

        if (tempo > tempo_do_prato * 2) {
            mensagem = "queimou 🔥"
        }

        if (tempo > tempo_do_prato * 3) {
            mensagem = "kabummm 💣"
        }

        if (tempo < tempo_do_prato) {
            mensagem = "tempo insuficiente ⏰"
        }
    }

    console.log(`${prato} - ${mensagem}`)

}

esquentar(5, 'leite');