import React, { useState, useEffect  } from 'react';

import './App.css';
import backgroundImage from './assets/background.jpg';

import api from './services/api';
import Header from './components/Header';


/**
 * 
 * Component
 * Propriedade
 * Estado & Imutabilidade
 */

function App() {
    const [projects, setProjects] = useState([]);
    /*
    * Estado**
    * useState retorna um array com 2 posições
    * 1. Variável com o seu valor inicial
    *  2. Função para atualizar o valor inicial
    */

    useEffect(() => {
        api.get('projects').then(response => {
            setProjects(response.data);
        })
    }, []);

    async function handleAddProject() {
        // projects.push(`Novo Projeto ${Date.now()}`);

        //setProjects([...projects, `Novo Projeto ${Date.now()}`]); //imutabilidade // "...projects" essa função copia o que já existe no array

        const response = await api.post('projects', {
            title: `Novo Projeto ${Date.now()}`,
            owner: 'Danilo Vieira'
        });

        const project = response.data;

        setProjects([...projects, project]);

    }

    return (
        <>
            <Header title="Hello Word" />
            {/* Isso é Propriedade */}

            <img width={300} src={backgroundImage} alt="" />

            <ul>
                {projects.map(project => <li key={project.id}>{project.title} / {project.owner}</li>)}
            </ul>

            <button type="button" onClick={handleAddProject}>Adicionar projeto</button>
        </>
    );
}

export default App;