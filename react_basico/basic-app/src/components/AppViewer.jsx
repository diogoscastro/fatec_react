import styles from "./AppViewer_module.css";
//camada de compilação de serviços

const AppViewer = () => {
  const professores = [
    // Primeiro objeto
    {
      id: 1,
      nome: "José Armando Vargas",
      idade: 42,
      formacao: "Engenharia da Computação",
      titulacao: "Latu-Senso",
    },

    // Segundo objeto com valores diferentes
    {
      id: 2,
      nome: "Maria Silva",
      idade: 35,
      formacao: "Ciência da Informação",
      titulacao: "Mestrado",
    },

    // Terceiro objeto com valores diferentes
    {
      id: 3,
      nome: "João Pereira",
      idade: 28,
      formacao: "Engenharia Elétrica",
      titulacao: "Doutorado",
    },

    // Repita o processo para criar outros objetos com valores diferentes

    // Quarto objeto
    {
      id: 4,
      nome: "Ana Souza",
      idade: 38,
      formacao: "Administração de Empresas",
      titulacao: "Bacharelado",
    },

    // Quinto objeto
    {
      id: 5,
      nome: "Pedro Santos",
      idade: 45,
      formacao: "Medicina",
      titulacao: "Doutorado",
    },

    // Sexto objeto
    {
      id: 6,
      nome: "Carla Lima",
      idade: 32,
      formacao: "Psicologia",
      titulacao: "Mestrado",
    },

    // Sétimo objeto
    {
      id: 7,
      nome: "Rafaela Ferreira",
      idade: 27,
      formacao: "Arquitetura",
      titulacao: "Bacharelado",
    },

    // Oitavo objeto
    {
      id: 8,
      nome: "Fernando Oliveira",
      idade: 50,
      formacao: "Economia",
      titulacao: "Doutorado",
    },

    // Nono objeto
    {
      id: 9,
      nome: "Mariana Costa",
      idade: 29,
      formacao: "Direito",
      titulacao: "Bacharelado",
    },

    // Agora você tem nove objetos com valores diferentes
  ];

  return (
    <div>
      <h2>Lista de Professores</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nome</th>
            <th>Idade</th>
            <th>Formação</th>
            <th>Titulação</th>
          </tr>
        </thead>
        <tbody>
          {professores.map((professor) => (
            <tr
              className={professor.id % 2 == 1 ? styles.linhacinza : null}
              key={professor.id}
            >
              <td>{professor.id}</td>
              <td>{professor.nome}</td>
              <td>{professor.idade}</td>
              <td>{professor.formacao}</td>
              <td
                className={
                  professor.titulacao == "Mestrado" ||
                  professor.titulacao == "Doutorado"
                    ? styles.superTitulo
                    : styles.normalTitulo
                }
              >
                {professor.titulacao}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AppViewer;
