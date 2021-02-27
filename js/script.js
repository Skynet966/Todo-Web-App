//Input and button initilization
const newTaskInput = $('#newTaskInput');
const addNewTaskBtn = $('#addBtn');
const clearInputBtn = $('#clearBtn');
const sortTasksBtn = $('#sortBtn');
const cleanTasksBtn = $('#cleanBtn');
const tasksList = $('.tasksList');

//add item to the list
const addItem = () => {
	const listItem = $('<li>', {
		class: 'listItem',
		html: `<span>${newTaskInput.val()}</span>`
	});
	listItem.click(() => {
		listItem.toggleClass('task-completed');
		toggleButtons();
	});
	tasksList.append(listItem);
	newTaskInput.val('');
	toggleButtons();
};

//clear the complited tasks
const clearCompletedTasks = () => {
	$('.tasksList .task-completed').remove();
	toggleButtons();
};

//sort the task list in uncomplited taks to complited order
const sortTasks = () => {
	$('.tasksList .task-completed').appendTo(tasksList);
};

//toggle button state from enable to disable on the basic of diffrent situations
const toggleButtons = () => {
	addNewTaskBtn.prop('disabled', newTaskInput.val() === '');
	clearInputBtn.prop('disabled', newTaskInput.val() === '');
	sortTasksBtn.prop('disabled', $('.listItem.task-completed').length < 1);
	cleanTasksBtn.prop('disabled', $('.listItem.task-completed').length < 1);
};

//add task to the list while pressing enter
newTaskInput.keypress(e =>
	e.which === 13 && newTaskInput.val() !== '' ? addItem() : ''
);

//on input toggle the buttons
newTaskInput.on('input', toggleButtons);

//bind the add item functionlity to the add button
addNewTaskBtn.click(addItem);
clearInputBtn.click(() => {
	newTaskInput.val('');
	toggleButtons();
});

//bind clearcomplitedtasks functon to clear task button over onclick event
cleanTasksBtn.click(clearCompletedTasks);

//bind the sorttasks function to the sort button over on click event
sortTasksBtn.click(sortTasks);
