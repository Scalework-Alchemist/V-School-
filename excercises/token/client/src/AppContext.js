import React, { Component } from "react";
import axios from "axios";
const todoAxios = axios.create();
todoAxios.interceptors.request.use((config)=>{
    const token = localStorage.getItem("token");
    config.headers.Authorization = `Bearer ${token}`;
    return config;
})
const AppContext = React.createContext();

export class AppContextProvider extends Component {
  constructor() {
    super();
    this.state = {
      todos: [],
      user: JSON.parse(localStorage.getItem("user")) || {},
      token: localStorage.getItem("token") || ""
    };
  }

  componentDidMount() {
    this.getTodos();
  }
  signup = userInfo => {
    return axios.post("/auth/signup", userInfo).then(response => {
      const { user, token } = response.data;
      localStorage.setItem("token", token);
      localStorage.setItem("user", JSON.stringify(user));
      this.setState({
        user,
        token
      });
      // forward the response, just in case
      // it's needed down the promise chain
      return response;
    });
  };
  login = credentials => {
    return axios.post("/auth/login", credentials).then(response => {
      console.log(response);
      const { token, user } = response.data;
      localStorage.setItem("token", token);
      localStorage.setItem("user", JSON.stringify(user));
      this.setState({
        user,
        token
      });

      // Don't forget to get this newly-logged-in user's todos!
      this.getTodos();
      return response;
    });
  };
  logout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    this.setState({
      todos: [],
      user: {},
      token: ""
    });
  };

  getTodos = () => {
    return todoAxios.get("/api/todo").then(response => {
      this.setState({ todos: response.data });
      return response;
    });
  };

  addTodo = newTodo => {
    return todoAxios.post("/api/todo/", newTodo).then(response => {
      this.setState(prevState => {
        return { todos: [...prevState.todos, response.data] };
      });
      return response;
    });
  };

  editTodo = (todoId, todo) => {
    return todoAxios.put(`/api/todo/${todoId}`, todo).then(response => {
      this.setState(prevState => {
        const updatedTodos = prevState.todos.map(todo => {
          return todo._id === response.data._id ? response.data : todo;
        });
        return { todos: updatedTodos };
      });
      return response;
    });
  };

  deleteTodo = todoId => {
    return todoAxios.delete(`/api/todo/${todoId}`).then(response => {
      this.setState(prevState => {
        const updatedTodos = prevState.todos.filter(todo => {
          return todo._id !== todoId;
        });
        return { todos: updatedTodos };
      });
      return response;
    });
  };

  render() {
    return (
      <AppContext.Provider
        value={{
          logout: this.logout,
          login: this.login,
          signup: this.signup,
          getTodos: this.getTodos,
          addTodo: this.addTodo,
          editTodo: this.editTodo,
          deleteTodo: this.deleteTodo,
          ...this.state
        }}
      >
        {this.props.children}
      </AppContext.Provider>
    );
  }
}

export const withContext = Component => {
  return props => {
    return (
      <AppContext.Consumer>
        {globalState => {
          return <Component {...globalState} {...props} />;
        }}
      </AppContext.Consumer>
    );
  };
};
