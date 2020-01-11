import React, { useEffect, useState } from "react";
import "./Dropdown.scss";
import axios from "axios";

export default function Dropdown(props) {
  const [state, setState] = useState({
    categories: []
  });
  // useEffect(() => {
  //   axios.get(`http://localhost:8001/api/categories`).then((response)=>  setState({...state, categories:response.data}))
  //   }, []);

  useEffect(() => {
    Promise.all([
      Promise.resolve(axios.get(`http://localhost:8001/api/categories`))
      // Promise.resolve(axios.get(`http://localhost:8001/api/services/`, {params : {categoryID: props.categoryID}}))
    ]).then(all => {
      // console.log("this props category id",props.categoryID)
      setState({ ...state, categories: all[0].data });
    });
  }, [props.categoryID]);

  const categoriesList = state.categories.map(category => {
    return <option data-id={category.id.toString()}>{category.name}</option>;
  });

  const servicesList = props.services.map(service => {
    return <option>{service.name}</option>;
  });

  return (
    <select
      className="dropdown -confirmed-time"
      onChange={
        props.list === "categoryList"
          ? e => {
              e.persist();
              Promise.all([
                Promise.resolve(e),
                Promise.resolve(
                  axios.get(`http://localhost:8001/api/services/`, {
                    params: {
                      categoryID:
                        e.target.options[e.target.selectedIndex].dataset.id,
                      view: props.serviceView
                    }
                  })
                )
              ]).then(all =>
                props.setDropdown(
                  all[0].target.value,
                  all[0].target.options[all[0].target.selectedIndex].dataset.id,
                  all[1].data
                )
              );
            }
          : e => {
              props.setService(e.target.value);
            }
      }
    >
      {props.list === "categoryList" && (
        <option disabled selected>
          Choose category
        </option>
      )}
      {props.list === "categoryList" && categoriesList}

      {props.list === "serviceList" && (
        <option disabled selected>
          Choose service
        </option>
      )}
      {props.list === "serviceList" && servicesList}
    </select>
  );
}
