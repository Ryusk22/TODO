class TasksController < ApplicationController
  
  def index
    tasks = Task.all
    render json: tasks
  end

  def update
    task = Task.find(params[:id])
    task.update(update_params)
  end

  def destroy
    task = Task.find(params[:id])
    task.destroy
  end

  private

  def update_params
    params.require(:task).permit(:title, :content, :is_completed)
  end

end
