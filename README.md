# Instruções

- Instala redux: **yarn add redux react-redux**
- Cria pasta src/redux/store
- A estrutura de pastas é a seguinte:

  - **src/redux**: raiz de todo o conteúdo do redux. Cara reducer é gerado em uma pasta diferente, ex: user.
    - **user**: pasta onde ficarão os  dados relacionados ao reducer de user (usuário)
      - **reducer.js**: arquivo onde fica o estado do reducer user, nele são definidos os comportamentos e estado do reducer
      - **actions.js**: onde ficam as actions disparadas na aplicação
      - **action-types**: mapeamento dos tipos das actions para maior clareza
    - **root-reducer.js**: é onde serão combinados os reducers a serem exportados para o store
    - **store.js**: onde é criado o store que será utilizado no Provider como container de estados global da aplicação.

- Para usar os reducers, vá no arquivo onde deseja englobar o store do redux.
- Importe o **Provider** do react-redux e engloe os demais componentes com ele
- O Provider deve receber um sotre como parâmetro, vide arquivo **src/index.js**.
- Use o s hooks **useSelector** e **useDispatch** do react-redux para acessar o store e seus componentes, vide arquivo **src/components/header/index.jsx**
