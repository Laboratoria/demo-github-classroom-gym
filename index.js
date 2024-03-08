const axios = require("axios");
require("dotenv").config();

const apiUrlClassrooms = "https://api.github.com/classrooms";
const token = process.env.API_TOKEN;

const headers = {
  Authorization: `token ${token}`,
};

const getClassrooms = async () => {
  try {
    const response = await axios.get(apiUrlClassrooms, { headers });
    if (response.status === 200) {
      const classrooms = response.data;
      return classrooms;
    } else {
      throw `Error al obtener classrooms. Código de estado: ${response.status}`;
    }
  } catch (error) {
    throw ("Error de conexión:", error.message);
  }
};

const getAssignments = async (id) => {
  try {
    const response = await axios.get(
      ` https://api.github.com/classrooms/${id}/assignments`,
      {
        headers,
      }
    );
    if (response.status === 200) {
      const assignments = response.data;
      return assignments;
    } else {
      throw `Error al obtener assignments. Código de estado: ${response.status}`;
    }
  } catch (error) {
    throw ("Error de conexión:", error.message);
  }
};

const getAssignmentGrades = async (id) => {
  try {
    const response = await axios.get(
      ` https://api.github.com/assignments/${id}/grades`,
      {
        headers,
      }
    );
    if (response.status === 200) {
      const grades = response.data;
      return grades;
    } else {
      throw `Error al obtener AssignemntGrades. Código de estado: ${response.status}`;
    }
  } catch (error) {
    throw ("Error de conexión:", error.message);
  }
};

const execute = async () => {
  try {
    const classrooms = await getClassrooms();
    const assignments = await getAssignments(classrooms[0].id);
    const grades = await getAssignmentGrades(assignments[0].id);
    const finalResponse = { classrooms, assignments, grades };
    //console.log({ finalResponse });
    const finalResponseJson = JSON.stringify(finalResponse);
    console.log({ finalResponseJson });
  } catch (error) {
    console.error(error);
  }
};
execute();
