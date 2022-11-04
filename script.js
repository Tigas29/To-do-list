const addTaskButton = document.getElementById("addNewTaskButton");
const textAreaTask = document.getElementById("inputTextArea");
const taskContainer = document.getElementById("taskContainer");
const validationInput = () => textAreaTask.value.trim().length > 0;

const addTask = () => {
  const inputIsValid = validationInput();
  if (!inputIsValid) {
    return textAreaTask.classList.add("error");
  }
  // div container
  const creatingTask = document.createElement("div");
  creatingTask.classList = "taskitem";

  const paragraph = document.createElement("p");
  paragraph.innerText = textAreaTask.value;
  paragraph.classList = "paragraph";

  const deleteButton = document.createElement("button");
  deleteButton.textContent = "deletar";
  deleteButton.classList = "deleteTaskButton";

  const editButton = document.createElement("button");
  editButton.textContent = "editar";
  editButton.classList = "editButton";

  const buttonContainer = document.createElement("div");
  buttonContainer.classList = "buttocontainer";

  buttonContainer.appendChild(editButton);
  buttonContainer.appendChild(deleteButton);

  creatingTask.appendChild(paragraph);
  creatingTask.appendChild(buttonContainer);
  // creatingTask.appendChild();

  taskContainer.appendChild(creatingTask);

  textAreaTask.value = "";

  creatingTask.addEventListener("dblclick", () => taskIsFinished(paragraph));
  deleteButton.addEventListener("click", () => remove(creatingTask, paragraph));
  editButton.addEventListener("click", () => editTask(paragraph));
};

function taskIsFinished(paragraph) {
  const tasks = taskContainer.childNodes;

  for (const task of tasks) {
    const currentTaskIsBeingClicked = task.firstChild.isSameNode(paragraph);

    if (currentTaskIsBeingClicked) {
      task.classList.add("finished");
    }
  }
}

function editTask(paragraph) {
  const tasks = taskContainer.childNodes;

  for (const task of tasks) {
    const currentTaskIsBeingClicked = task.firstChild.isSameNode(paragraph);

    if (currentTaskIsBeingClicked) {
      const input = prompt("Digite sua nova tarefa");
      const newText = input;

      newText.trim() <= 0
        ? (paragraph.innerText = paragraph.innerText)
        : (paragraph.innerText = newText);
    }
  }
}

function remove(creatingTask, paragraph) {
  const tasks = taskContainer.childNodes;

  for (const task of tasks) {
    const currentTaskIsBeingClicked = task.firstChild.isSameNode(paragraph);

    if (currentTaskIsBeingClicked) {
      creatingTask.remove();
    }
  }
}

addTaskButton.addEventListener("click", addTask);
