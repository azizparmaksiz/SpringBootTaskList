package bootsample.controller;

import java.util.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import bootsample.model.Task;
import bootsample.service.TaskService;
@CrossOrigin
@RestController
public class SampleRestController {
	
	@Autowired
	private TaskService taskService;

	@GetMapping("/hello")
	public String hello(){
		return "Hello World!!!";
	}
	
	@RequestMapping("/tasks")
	public List<Task> allTasks(){
		return taskService.findAll();
	}

	@RequestMapping(value = "/tasks",method = RequestMethod.POST)
	public void saveTask(@RequestBody Task task){
		task.setDateCreated(new Date());
		taskService.save(task);
		}

	@RequestMapping(value = "/tasks/{id}",method = RequestMethod.PUT)
	public void updateTask(@PathVariable("id") int id,@RequestBody Task task){
		taskService.updateTask(id,task);
	}

	@RequestMapping("/tasks/{id}")
	public void deleteTask(@PathVariable("id") int id){
		taskService.delete(id);
	}
}
