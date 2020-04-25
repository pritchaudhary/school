import React, { useState, useEffect } from "react";
import { useApiClient } from "../../hooks";

const Test = () => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(null);
  const { apiClient } = useApiClient();

  useEffect(() => {
    setLoading(true);
    const loadData = async () => {
      try {
        const response = await apiClient.get(
          "https://jsonplaceholder.typicode.com/todos"
        );
        setData(response);
        setLoading(false);
      } catch (err) {
        setLoading(false);
      }
    };
    loadData();
  }, [apiClient]);

  return (
    <div className="animated fadeIn">
      <button class="btn btn-primary" type="button" disabled>
        <span
          class="spinner-border spinner-border-sm"
          role="status"
          aria-hidden="true"
        ></span>
        Loading...
      </button>
      <ul>
        {!loading &&
          data !== null &&
          data.map((item, index) => <li key={index}>{item.title}</li>)}
      </ul>
    </div>
  );
};

export default Test;
