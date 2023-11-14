function MudaDesenho() {
    const texto = document.querySelector("h1");
    const imagem = document.querySelector("img");
    const valor = document.querySelector('#valor').value;
    const desc = document.querySelector("h4");

    if (valor == "classe" || valor == "Classe") {
        texto.innerHTML = "Classe";
        desc.innerHTML = "Uma classe é uma forma de definir um tipo de dado em uma linguagem orientada a objeto. Ela é formada por dados e comportamentos. Para definir os dados são utilizados os atributos, e para definir o comportamento são utilizados métodos. Depois que uma classe é definida podem ser criados diferentes objetos que utilizam a classe. A Listagem 1 mostra a definição da classe Empresa, que tem os atributos nome, endereço, CNPJ, data de fundação, faturamento, e também o método imprimir, que apenas mostra os dados da empresa."
        imagem.setAttribute("src", "exemploclasse.png");
        imagem.setAttribute("width", "300px");
    }

    else if (valor == "classe abstrata" || valor == "Classe Abstrata") {
        texto.innerHTML = "Classe Abstrata";
        imagem.setAttribute("width", "300px");
        desc.innerHTML = "É um tipo de classe especial que não pode ser instanciada, apenas herdada. Sendo assim, uma classe abstrata não pode ter um objeto criado a partir de sua instanciação. Essas classes são muito importantes quando não queremos criar um objeto a partir de uma classe “geral”, apenas de suas “subclasses”."
        imagem.setAttribute("src", "exabstrapng.png");
    }

    else if (valor == "classe interna" || valor == "Classe Interna") {
        texto.innerHTML = "Classe Interna";
        imagem.setAttribute("width", "300px");
        desc.innerHTML = "Uma classe interna é uma classe que é subordinada a uma outra classe, sendo definida no corpo dessa outra classe. Dependendo de onde e como se dá essa definição, a classe interna pode ser de diferentes tipos. Uma classe membro tem seus objetos sempre associados a objetos da classe topo."
        imagem.setAttribute("src", "exint.png");
    }

    else if (valor == "classe anônima" || valor == "classe anonima") {
        texto.innerHTML = "Classe Anônima";
        imagem.setAttribute("width", "300px");
        desc.innerHTML = "Casse anônima é uma classe que não é declarada explicitamente no código. Uma classe anônima é um tipo especial de classe interna, que não precisa trazer a declaração. Podemos escreve-la como a extensão de uma classe ou interface ja na instanciação do objeto. Quando declaramos classes anônimas estamos na verdade criando uma subclasse do tipo do objeto, não da referência. Dentro da classe anônima, pode ser feito qualquer coisa, que for feito em outra classe interna , até mesmo acesso aos seus membros. A utilização de classes anônimas, apesar de interessante em muitos casos, dificulta a leitura do código; por isso é necessário controlar o uso deste recurso."
        imagem.setAttribute("src", "exano.png");
    }

    else if (valor == "classe interna" || valor == "Classe Interna") {
        texto.innerHTML = "Classe Interna";
        imagem.setAttribute("width", "300px");
        desc.innerHTML = "Uma classe interna é uma classe que é subordinada a uma outra classe, sendo definida no corpo dessa outra classe. Dependendo de onde e como se dá essa definição, a classe interna pode ser de diferentes tipos. Uma classe membro tem seus objetos sempre associados a objetos da classe topo."
        imagem.setAttribute("src", "exint.png");
    }

    else if (valor == "Objeto" || valor == "objeto") {
        texto.innerHTML = "Objeto";
        desc.innerHTML = "Com a classe definida, podem ser criados diversos objetos do tipo Empresa, por isso a Listagem 2 mostra como criar esses objetos, bastando declarar uma variável com o tipo Empresa e com a palavra reservada new criar um novo objeto. Depois podemos definir os dados para os atributos da classe Empresa e, por fim, chamar o método definido.<br> O que é instanciar um objeto ?<br>  A instanciação é um processo por meio do qual se realiza a cópia de um objeto (classe) existente. Uma classe, a qual tem a função de determinar um tipo de dado, deve ser instanciada para que possamos utilizá-la. Sendo assim, devemos criar sua instância, a qual definimos como sendo um objeto referente ao tipo de dado que foi definido pela classe."
        imagem.setAttribute("src", "obje.png");
        imagem.setAttribute("width", "300px");
    }

    else if (valor == "instanciação" || valor == "instanciar objeto") {
        texto.innerHTML = "Instanciar objeto";
        desc.innerHTML = "A instanciação é um processo por meio do qual se realiza a cópia de um objeto (classe) existente. Uma classe, a qual tem a função de determinar um tipo de dado, deve ser instanciada para que possamos utilizá-la. Sendo assim, devemos criar sua instância, a qual definimos como sendo um objeto referente ao tipo de dado que foi definido pela classe."
        imagem.setAttribute("src", "ins.png");
        imagem.setAttribute("width", "300px");
    }

    else {
        texto.innerHTML = "Informação não encontrada... =(";
        desc.innerHTML = "Informação não encontrada, pesquise novamente."
        imagem.setAttribute("src", "x.png");
        imagem.setAttribute("width", "250px");
    }
}
