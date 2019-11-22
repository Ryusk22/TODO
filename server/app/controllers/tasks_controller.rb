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

  def create
    task = Task.create(create_params)
  end

  private

  def update_params
    params.require(:task).permit(:title, :content, :is_completed)
  end

  def create_params
    # TODO: ログイン機能作成後、タスク作成時にログインしているユーザーのIDをマージ出来るようにする  
    params.require(:task).permit(:title, :content)# .merge(user_id: current_user.id)
  end

end
