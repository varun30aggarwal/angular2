import {Component,Input} from '@angular/core';

@Component(

{
  selector:'exercise-description',
  templateUrl:'/src/components/workout-runner/exercise-description/exercise-description.html',

	})

export class ExerciseDescriptionComponent  {
	
	@Input() description:String;
	@Input() steps:String;

}