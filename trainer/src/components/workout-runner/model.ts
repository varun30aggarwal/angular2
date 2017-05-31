export class Exercise  {
	
	constructor(

         public name:String,
         public description:String,
         public title:String,
         public image:String,
         public nameSound?:String,
         public procedure?:String,
         public videos?:Array<String>  ) 
	{
		// code...
	}
}

export class ExercisePlan
{

	constructor(
      public excercise:Exercise,
      public duration:number

		){}
}


export class WorkOutPlan { 
  constructor( 
    public name: string, 
    public title: string, 
    public restBetweenExercise: number, 
    public exercises: ExercisePlan[], 
    public description?: string) { } 
 
  totalWorkoutDuration(): number {    if (!this.exercises) return 0;

    let total = this.exercises.map((e) => e.duration).reduce((previous, current) => previous + current);

    return (this.restBetweenExercise ? this.restBetweenExercise : 0) * (this.exercises.length - 1) + total; } 
} 