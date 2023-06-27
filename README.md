## useContext

### Guia de criação

#### 1- Criação do Contexto

Começamos pela criação do contexto.
Para isso criamos o arquivo **`FormContext.jsx`** dentro da pasta **`context`**.
Dentro do arquivo fazemos a importação do **`createContext`** da biblioteca **`react`**. também faremos uso do **`useState`** para controlar o valor da variável.

```javascript
import { createContext, useState } from "react";
```

Agora devemos criar o contexto passando para dentro de uma variável.

```javascript
export const FormContext = createContext();
```

> OBS: estamos exportando para podermos utiliza-lo em outros arquivos.

Agora criamos o "**Provider**" que irá fornecer as informações para os demais componentes filhos.

O **Provider** será um componente e receberá como props o **_children_** , que representa os componentes filhos (_no exemplo abaixo ele esta sendo desestruturado_).

Estaremos utilizando o `useState` para controlar as variáveis dentro deste contexto.

O componente Provider retornará o contexto em formato de componente (**`FormContext`**) e acessaremos o "método" Provider.
estaremos passando no **`value`**, os valores que queremos transportar (\*Neste exemplo estamos passando a variável **data** e o método para atualizar **setData\***)
Por fim passamos o children dentro deste componente **FromContext** e exportamos.

```javascript
function FormProvider({ children }) {
  const [data, setData] = useState({ user: "" });

  return (
    <FormContext.Provider value={{ data, setData }}>
      {children}
    </FormContext.Provider>
  );
}

export default FormProvider;
```

#### 2- Utilizando o Context

##### 2.1- Passando o Context para a aplicação

Para utilizarmos o contexto devemos informar para o react quais são os componentes que terão acesso a informação.
Então neste exemplo faremos uso na pagina principal, assim toda a aplicação terá acesso as informações do **context**.
No arquivo **`main.js`**, importamos o componente **`provider`** envolveremos o componente mais alto (\*no nosso caso é o componente **App\***).

```javascript
import FormProvider from "./context/FormContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <FormProvider>
      <App />
    </FormProvider>
  </React.StrictMode>
);
```

##### 2.2- Acessando o Context

Para acessarmos os valores do _context_, basta importar o **`useContext`** da biblioteca **`react`** e o **contexto criado** (\*no nosso exemplo foi o **`FormContext`\***).

```javascript
import { useContext } from "react";
import { FormContext } from "./context/FormContext";
```

Para acessar o valor desejado, basta fazermos uso da desestruturação utilizando do useContext, passando o nosso contexto e desestruturando o atributo que desejamos (\*no exemplo desejamos apenas o valor de **`data`\***)

```javascript
const { data } = useContext(FormContext);
```

como no nosso caso o data é um objeto, para utilizarmos temos que fazer udo da notação de ponto ou desestruturação.

```javascript
function App() {
  const {
    data: { user },
  } = useContext(FormContext);
  return (
    <>
      <div>{user}</div>
      <FormComponent />
    </>
  );
}
// VARIAÇÃO
function App() {
  const { data } = useContext(FormContext);
  return (
    <>
      <div>{data.user}</div>
      <FormComponent />
    </>
  );
}
```

##### 2.3- Alterando valores
