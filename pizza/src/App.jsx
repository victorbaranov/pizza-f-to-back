import React, { Fragment } from "react";
import { Provider } from "react-redux";
import "./App.css";

import store from "./reducers/store";

import FormOfChoice from "./components/formOfChoice/FormOfChoice";

import TableOutputList from "./components/tableOutput/TableOutputList";
const App = () => {
  return (
    <Provider store={store}>
      <Fragment>
        <div className='wrap-section'>
          <FormOfChoice />
          <section className='wrap-table'>
            <TableOutputList />
          </section>
        </div>
      </Fragment>
    </Provider>
  );
};

export default App;
