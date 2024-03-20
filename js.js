document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("select").addEventListener("change", function () {
        fetch('estudantes.json')
            .then(response => response.json())
            .then(estudantes => {
                const opcao = document.getElementById('select').value;
                let resultado = '';

                switch (opcao) {
                    case 'opcao1':
                        estudantes.forEach(estudante => {
                            const somaNotas = estudante.notaBim1 + estudante.notaBim2;
                            resultado += `<p>${estudante.nome}: ${estudante.notaBim1.toFixed(1)} (bimestre 1) e ${estudante.notaBim2.toFixed(1)} (bimestre 2) = ${somaNotas.toFixed(1)}</p>`;
                        });
                        break;
                    case 'opcao2':
                        estudantes.filter(estudante => estudante.sexo === 'M').forEach(estudante => {
                            let somaNotas = estudante.notaBim1 + estudante.notaBim2;
                            resultado += `<p>${estudante.nome}: ${estudante.notaBim1.toFixed(1)} (bimestre 1) e ${estudante.notaBim2.toFixed(1)} (bimestre 2) = ${somaNotas.toFixed(1)}</p>`;
                        });
                        break;
                    case 'opcao3':
                        estudantes.filter(estudante => estudante.sexo === 'F').forEach(estudante => {
                            let somaNotas = estudante.notaBim1 + estudante.notaBim2;
                            resultado += `<p>${estudante.nome}: ${estudante.notaBim1.toFixed(1)} (bimestre 1) e ${estudante.notaBim2.toFixed(1)} (bimestre 2) = ${somaNotas.toFixed(1)}</p>`;
                        });
                        break;
                    case 'opcao4':
                        estudantes.filter(estudante => (estudante.notaBim1 + estudante.notaBim2) >= 60).forEach(estudante => {
                            const somaNotas = estudante.notaBim1 + estudante.notaBim2;
                            resultado += `<p>${estudante.nome}: ${estudante.notaBim1.toFixed(1)} (bimestre 1) e ${estudante.notaBim2.toFixed(1)} (bimestre 2) = ${somaNotas.toFixed(1)}</p>`;
                        });
                        break;
                    case 'opcao5':
                        estudantes.filter(estudante => (estudante.notaBim1 + estudante.notaBim2) < 60).forEach(estudante => {
                            const somaNotas = estudante.notaBim1 + estudante.notaBim2;
                            resultado += `<p>${estudante.nome}: ${estudante.notaBim1.toFixed(1)} (bimestre 1) e ${estudante.notaBim2.toFixed(1)} (bimestre 2) = ${somaNotas.toFixed(1)}</p>`;
                        });
                        break;
                    case 'opcao6':
                        const todosAprovados = estudantes.every(estudante => (estudante.notaBim1 + estudante.notaBim2) / 2 >= 60);
                        resultado = todosAprovados ? 'Todos os alunos foram aprovados.' : 'Nem todos os alunos foram aprovados.';
                        break;
                    case 'opcao7':
                        const somaTotalNotas = estudantes.reduce((acumulador, estudante) => acumulador + estudante.notaBim1 + estudante.notaBim2, 0);
                        const mediaTurma = somaTotalNotas / (estudantes.length ); 
                        resultado = `A nota média: ${mediaTurma.toFixed(2)}.`;
                        break;
                }
                document.getElementById('resultado').innerHTML = resultado;
            });
    });
});
