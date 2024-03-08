# Proyecto GitHub Classroom API

En el GYM, estamos trabajando para mejorar la experiencia, y estamos explorando [GitHub Classroom](https://classroom.github.com/) con el objetivo de cumplir con los requisitos de [este proyecto específico](https://github.com/orgs/Laboratoria/projects/30).

Este proyecto utiliza la [API de GitHub Classroom](https://docs.github.com/es/rest/classroom/classroom?apiVersion=2022-11-28) para obtener información sobre clases y asignaciones. Estamos investigando si a través de este servicio y su API podemos satisfacer los requisitos planteados en el GYM.

## Configuración

### 1. Instalación de dependencias

Teniendo Node instalado, ejecuta el siguiente comando para instalar las dependencias del proyecto.

```bash
npm install
```

### 2. Configuración de variables de entorno

Crea un archivo `.env` en la raíz del proyecto y agrega tu token de API de GitHub Classroom de la siguiente manera:

```env
API_TOKEN=TU_TOKEN_DE_API_AQUI
```

Reemplaza `TU_TOKEN_DE_API_AQUI` con tu token de acceso a la API de GitHub Classroom.

> [!TIP]
> Puedes obtener tu API [aquí](https://github.com/settings/tokens)
> Al crear el token deberia ser necesario darle permisos  relacionados con la lectura y escritura de repositorios

## Uso

El proyecto consta de tres funciones principales para obtener información:

1. `getClassrooms`: Obtiene la lista de aulas.
2. `getAssignments`: Obtiene las asignaciones de un aula específica.
3. `getAssignmentGrades`: Obtiene las calificaciones de una asignación específica.

Estas funciones se combinan en la función `execute`, que ejecuta las llamadas a la API y muestra la información obtenida.

Para utilizar el proyecto, simplemente ejecuta el siguiente comando:

```bash
npm start
```

Esto ejecutará el script, obteniendo información sobre la primera aula, sus asignaciones y las calificaciones de la primera asignación.

## Resultado

El resultado al ejecutar el script debe ser similar a este:

```json
{
  "classrooms": [
    {
      "id": 209505,
      "name": "TestLaboGym-classroom-33a015",
      "archived": false,
      "url": "https://classroom.github.com/classrooms/159178236-testlabogym-classroom-33a015"
    }
  ],
  "assignments": [
    {
      "id": 572955,
      "public_repo": true,
      "title": "gym1",
      "type": "individual",
      "invite_link": "https://classroom.github.com/a/K5YKklDz",
      "invitations_enabled": true,
      "slug": "gym1",
      "students_are_repo_admins": false,
      "feedback_pull_requests_enabled": false,
      "max_teams": null,
      "max_members": null,
      "editor": null,
      "accepted": 1,
      "submissions": 0,
      "passing": 0,
      "language": null,
      "deadline": "2024-03-07T02:45:00Z",
      "classroom": {
        "id": 209505,
        "name": "TestLaboGym-classroom-33a015",
        "archived": false,
        "url": "https://classroom.github.com/classrooms/159178236-testlabogym-classroom-33a015"
      }
    }
  ],
  "grades": [
    {
      "assignment_name": "gym1",
      "assignment_url": "https://classroom.github.com/classrooms/159178236-testlabogym-classroom-33a015/assignments/gym1",
      "starter_code_url": "https://api.github.com/repos/TestLaboGym/exercise1",
      "github_username": "jmontes50",
      "roster_identifier": "Osmar Montesinos",
      "student_repository_name": "gym1-jmontes50",
      "student_repository_url": "https://github.com/TestLaboGym/gym1-jmontes50",
      "submission_timestamp": "",
      "points_awarded": "0",
      "points_available": "0"
    }
  ]
}
```

## Notas adicionales

Es una prueba,  creo que la API de Github Classroom sería genial para seguir nuestro progreso en el GYM. Aquí hay una [lista de videos](https://www.youtube.com/watch?v=xVVeqIDgCvM&list=PLIRjfNq867bewk3ZGV6Z7a16YDNRCpK3u) para obtener más detalles. Gracias por echarle un vistazo.