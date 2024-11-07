// fetch("https://jsonplaceholder.typicode.com/todos/1")
//   .then((response) => response.json())
//   .then((data) => console.log(data))
//   .catch((error) => console.error("error", error));

// async function getData() {
//   const url = "";
//   const options = {};
//   try {
//   } catch (error) {}
// }

async function getData() {
  const url = "https://jsonplaceholder.typicode.com/todos/1";
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(
        `Error en la solicitud: ${response.status} ${response.statusText}`
      );
    }
    const data = await response.json();
    console.log("Datos obtenidos:", data);
  } catch (error) {
    console.error("Error al obtener datos:", error.message);
  }
}

async function postData() {
  const url = "https://jsonplaceholder.typicode.com/todos";
  const data = {
    username: "usuario123",
    password: "contraseña123",
  };
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  };
  try {
    const response = await fetch(url, options);
    if (!response.ok) {
      throw new Error(
        `Error en la solicitud: ${response.status} ${response.statusText}`
      );
    }

    const result = await response.json();
    console.log("Respuesta del servidor:", result);
  } catch (error) {
    console.error("error en la llamada", error.message);
  }
}

export let apiResponseData = [];

export async function getLotsofData() {
  //   const url1 = "https://jsonplaceholder.typicode.com/todos/1";
  //   const url2 = "https://jsonplaceholder.typicode.com/todos/2";
  const urls = [
    "https://jsonplaceholder.typicode.com/todos/1",
    "https://jsonplaceholder.typicode.com/todos/2",
    "https://jsonplaceholder.typicode.com/todos/3",
  ];

  try {
    // const [response1, response2] = await Promise.all([
    //   fetch(url1),
    //   fetch(url2),
    // ]);

    const respuestas = await Promise.all(
      urls.map((url) =>
        fetch(url).then((response) => {
          if (!response.ok) {
            throw new Error(
              `Error en la solicitud: ${response.status} ${response.statusText}`
            );
          }
          return response.json(); // Convertimos la respuesta a JSON
        })
      )
    );

    // if (!response1.ok || !response2.ok) {
    //   throw new Error("Error en una de las solicitudes");
    // }
    // const data1 = await response1.json();
    // const data2 = await response2.json();
    apiResponseData = respuestas;
    // console.log("apiResponseData", apiResponseData);
    console.log("Datos obtenidos:", apiResponseData);
  } catch (error) {
    console.error("error", error);
  }
}

// getData();
// postData();
getLotsofData();
